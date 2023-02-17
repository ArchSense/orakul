"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStaticInsights = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typescript_1 = __importStar(require("typescript"));
const readFile = (path) => fs_1.default.readFileSync(path, { encoding: 'utf-8' });
const isLocalImport = (name) => name.startsWith('.') || name.startsWith('src/');
const buildAst = (fileName, fileContent) => typescript_1.default.createSourceFile(fileName, fileContent, typescript_1.default.ScriptTarget.ES2015);
const removeQuotes = (name) => {
    const isNotQuote = (char) => char !== '"' && char !== "'";
    const isNotBreakLine = (char) => char !== '\n';
    return name
        .trim()
        .split('')
        .filter(isNotQuote)
        .filter(isNotBreakLine)
        .join('');
};
const hasDuplicate = (collection, target) => {
    if (!collection || collection.length === 0) {
        return false;
    }
    if (typeof collection[0] === 'object') {
        return collection.some(({ id }) => target === id);
    }
    return collection.includes(target);
};
const buildEmptyRecord = (id) => ({
    id,
    name: path_1.default.basename(id, '.ts'),
    imports: [],
    exports: []
});
const isExported = (node) => {
    const modifiers = typescript_1.default.canHaveModifiers(node) ? typescript_1.default.getModifiers(node) : undefined;
    if (!modifiers || modifiers.length === 0) {
        return false;
    }
    return modifiers.some(({ kind }) => typescript_1.SyntaxKind.ExportKeyword === kind);
};
const tokenizeDecorator = (decorator) => {
    const decoratorRegEx = /@(.*)\((.*)\)/g;
    const groups = decoratorRegEx.exec(decorator);
    if (groups) {
        return [groups[1], removeQuotes(groups[2])];
    }
    return null;
};
const getControllerPath = (node, sourceFile) => {
    var _a;
    const isControllerOrResolver = (dec) => {
        const cleanText = removeQuotes(dec.getText(sourceFile));
        return cleanText.startsWith('@Controller') || cleanText.startsWith('@Resolver');
    };
    const ctrlDecorator = (_a = typescript_1.default.getDecorators(node)) === null || _a === void 0 ? void 0 : _a.find(isControllerOrResolver);
    if (!ctrlDecorator) {
        return null;
    }
    const text = ctrlDecorator.getText(sourceFile);
    const tokens = tokenizeDecorator(text);
    if (!tokens) {
        return null;
    }
    const [, path] = tokens;
    return path ? `/${path}` : '/';
};
const getControllerHandler = (node, sourceFile) => {
    var _a;
    const knownVerbs = ['Put', 'Get', 'Post', 'Delete', 'Patch', 'Query', 'Mutation'].map(v => `@${v}`);
    const isAPIHandlerDecorator = (dec) => {
        const text = removeQuotes(dec.getText(sourceFile));
        return knownVerbs.some(v => text.startsWith(v));
    };
    const apiDecorator = (_a = typescript_1.default.getDecorators(node)) === null || _a === void 0 ? void 0 : _a.find(isAPIHandlerDecorator);
    if (!apiDecorator) {
        return null;
    }
    const text = apiDecorator.getText(sourceFile);
    const tokens = tokenizeDecorator(text);
    if (!tokens) {
        return null;
    }
    const [verb, path] = tokens;
    return [verb, path.startsWith('/') ? path : `/${path}`];
};
const hasAllowedFileExtension = (path) => {
    const exts = ['.js', '.ts'];
    return exts.some(ext => path.endsWith(ext));
};
const buildStaticInsights = (root) => {
    const paths = [root];
    const graph = new Map();
    const handleImportDeclaration = (currentPath, node, sourceFile) => {
        var _a, _b, _c;
        const newRawPath = removeQuotes(node.moduleSpecifier.getFullText(sourceFile));
        if (isLocalImport(newRawPath)) {
            const ext = hasAllowedFileExtension(newRawPath) ? '' : '.ts';
            const newPath = path_1.default.join(path_1.default.parse(currentPath).dir, newRawPath) + ext;
            paths.push(newPath);
            if (!hasDuplicate((_b = (_a = graph.get(currentPath)) === null || _a === void 0 ? void 0 : _a.imports) !== null && _b !== void 0 ? _b : [], newPath)) {
                (_c = graph.get(currentPath)) === null || _c === void 0 ? void 0 : _c.imports.push(newPath);
            }
        }
    };
    const handleClassDeclaration = (currentPath, node, sourceFile) => {
        var _a, _b, _c, _d, _e, _f;
        if (!isExported(node)) {
            return;
        }
        const classId = (_a = node.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile);
        const className = (_b = node.name) === null || _b === void 0 ? void 0 : _b.getText(sourceFile);
        if (classId && !hasDuplicate((_d = (_c = graph.get(currentPath)) === null || _c === void 0 ? void 0 : _c.exports) !== null && _d !== void 0 ? _d : [], classId)) {
            (_e = graph.get(currentPath)) === null || _e === void 0 ? void 0 : _e.exports.push({
                id: classId,
                name: className,
                apiPath: (_f = getControllerPath(node, sourceFile)) !== null && _f !== void 0 ? _f : '',
                members: node.members
                    .filter(({ kind }) => typescript_1.SyntaxKind.MethodDeclaration === kind)
                    .map((member) => {
                    var _a, _b;
                    const api = getControllerHandler(member, sourceFile);
                    return {
                        id: `${className}.${(_a = member.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile)}`,
                        name: (_b = member.name) === null || _b === void 0 ? void 0 : _b.getText(sourceFile),
                        method: api ? api[0].toUpperCase() : '',
                        apiPath: api ? getControllerPath(node, sourceFile) + api[1] : getControllerPath(node, sourceFile)
                    };
                })
            });
        }
    };
    while (paths.length) {
        const currentPath = paths.pop();
        if (currentPath === undefined) {
            continue;
        }
        if (graph.has(currentPath)) {
            continue;
        }
        if (!graph.has(currentPath)) {
            graph.set(currentPath, buildEmptyRecord(currentPath));
        }
        try {
            const fileContent = readFile(currentPath);
            const sourceFile = buildAst(currentPath, fileContent);
            typescript_1.default.forEachChild(sourceFile, node => {
                switch (node.kind) {
                    case typescript_1.SyntaxKind.ImportDeclaration:
                        handleImportDeclaration(currentPath, node, sourceFile);
                        break;
                    case typescript_1.SyntaxKind.ClassDeclaration:
                        handleClassDeclaration(currentPath, node, sourceFile);
                        break;
                }
            });
        }
        catch (error) {
            console.error(error);
            console.log(`Current graph: `, graph);
            throw new Error(`Error in file: ${currentPath}`);
        }
    }
    return graph;
};
exports.buildStaticInsights = buildStaticInsights;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4Qix5REFBNEM7QUFHNUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLFlBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFFaEYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV4RixNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxFQUFFLENBQUMsb0JBQUUsQ0FBQyxnQkFBZ0IsQ0FDN0UsUUFBUSxFQUNSLFdBQVcsRUFDWCxvQkFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3ZCLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ3BDLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLENBQUM7SUFDbEUsTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDdkQsT0FBTyxJQUFJO1NBQ1IsSUFBSSxFQUFFO1NBQ04sS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUNULE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDbEIsTUFBTSxDQUFDLGNBQWMsQ0FBQztTQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLFVBQWlCLEVB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