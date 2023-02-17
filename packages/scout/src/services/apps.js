"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApps = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const getDirectories = (source) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (0, promises_1.readdir)(source, { withFileTypes: true }))
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
});
const getAppsList = (configPath, config) => __awaiter(void 0, void 0, void 0, function* () {
    if (config.include && config.include.length > 0) {
        return config.include;
    }
    const folders = yield getDirectories(`${configPath}/${config.src}`);
    return folders.filter(name => !config.exclude.includes(name));
});
const getApps = (configPath, config) => __awaiter(void 0, void 0, void 0, function* () {
    const appsNames = yield getAppsList(configPath, config);
    return appsNames.reduce((acc, curr) => {
        acc[curr] = path_1.default.resolve(configPath, config.src, curr, './src/main.ts');
        return acc;
    }, {});
});
exports.getApps = getApps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXNDO0FBQ3RDLGdEQUF3QjtBQU14QixNQUFNLGNBQWMsR0FBRyxDQUFPLE1BQWMsRUFBRSxFQUFFO0lBQzlDLE9BQU8sQ0FBQyxNQUFNLElBQUEsa0JBQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQy9CLENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQUcsQ0FBTyxVQUFrQixFQUFFLE1BQWMsRUFBcUIsRUFBRTtJQUNsRixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9DLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUN2QjtJQUNELE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLEdBQUcsVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQVksTUFBTSxDQUFDLE9BQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUEsQ0FBQztBQUVLLE1BQU0sT0FBTyxHQUFHLENBQU8sVUFBa0IsRUFBRSxNQUFjLEVBQXlDLEVBQUU7SUFDekcsTUFBTSxTQUFTLEdBQUcsTUFBTSxXQUFXLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDeEUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBUyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFBLENBQUM7QUFOVyxRQUFBLE9BQU8sV0FNbEIifQ==