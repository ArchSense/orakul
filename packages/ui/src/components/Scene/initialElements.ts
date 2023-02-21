import { Edge, Node } from 'reactflow';
import { buildEdge } from './Edge/Edge';
import { buildAbstractNode, buildActualNode } from './Node/Node';

const isModule = (fileName) => fileName.endsWith('.module');
const hasPublicMethods = (exports) => exports.length > 0;

const sanitizeComponents = (components): Array<any> => {
  return Object.values(components)
    .filter((component: any) => hasPublicMethods(component.exports))
    .filter((component: any) => !isModule(component.name));
}

export const initAbstractNodes = (data): Node[] => {
  return Object.values(data).map((node: any) => buildAbstractNode(node.id, node.id));
};
export const initAbstractEdges = (): Edge[] => ([]);

export const initCodeNodes = (data): Node[] => {
  return sanitizeComponents(data)
    .map(({ exports, id }) => buildActualNode({ id, data: exports[0] ?? { label: id } }));
}

export const initCodeEdges = (data): Edge[] => {
  return sanitizeComponents(data)
    .reduce((acc, { imports, id }) => {
      const edges = imports.map(dep => buildEdge(id, dep));
      acc.push(...edges);
      return acc;
    }, [] as Edge[]);
}