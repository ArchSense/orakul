import { useCallback, useEffect } from 'react';
import ReactFlow, { Background, Controls, MiniMap, ReactFlowProvider, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import ActualNode from './ActualNode/ActualNode';
import { buildEdge } from './Edge/Edge';
import { initAbstractEdges, initAbstractNodes, initCodeEdges, initCodeNodes } from './initialElements';
import { buildPlannedNode } from './Node/Node';
import OmniBar from './OmniBar/OmniBar';
import PlannedNode from './PlannedNode/PlannedNode';
import './Scene.css';
import useAnimatedEdges from './useAnimatedEdges';
import useAutoLayout from './useAutoLayout';
import Views, { Levels } from './Views/Views';

const proOptions = {
  hideAttribution: true,
};

const nodeTypes = {
  actual: ActualNode,
  planned: PlannedNode,
};

const DEFAULT_DIRECTION = 'TB';

interface SceneProps {
  activeScenario?: string;
  data: any;
  onNodeEnter: Function;
  onNodeSelect: Function;
  onViewChange: Function;
  view: Levels;
}

const Scene = ({
  activeScenario,
  data,
  onNodeEnter,
  onNodeSelect,
  onViewChange,
  view,
}: SceneProps) => {
  useAutoLayout({ direction: DEFAULT_DIRECTION });

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const initNodes = view === Levels.Components ? initCodeNodes(data) : initAbstractNodes(data);
    const initEdges = view === Levels.Components ? initCodeEdges(data) : initAbstractEdges();
    setNodes(initNodes);
    setEdges(initEdges);
  }, [view, setNodes, setEdges, data]);


  useAnimatedEdges(activeScenario);

  const onNodeAddHandler = useCallback(() => {
    const name = window.prompt('Enter name');
    if (!name) {
      return;
    }
    const data = { name };
    const newPlannedNode = buildPlannedNode({ data });
    setNodes([...nodes, newPlannedNode]);
  }, [nodes, setNodes]);

  const onEdgeAddHandler = useCallback(({ source, target }) => {
    setEdges([...edges, buildEdge(source, target)]);
  }, [edges, setEdges]);

  const onDoubleClickHandler = useCallback((_, node) => {
    onNodeEnter && onNodeEnter(node.id);
  }, [onNodeEnter]);

  const highlightEdges = useCallback(selectedNode => {
    setEdges(edges => edges.map(
      edge => ({ ...edge, selected: edge.source === selectedNode.id || edge.target === selectedNode.id })
    ))
  }, [setEdges]);

  const removeHighlightEdges = useCallback(() => {
    setEdges((edges) => edges.map(edge => ({ ...edge, selected: false })));
  }, [setEdges]);

  const onSelectionChangeHandler = useCallback(({ nodes }) => {
    const selectedNode = nodes[0];
    selectedNode ? highlightEdges(selectedNode) : removeHighlightEdges();
    onNodeSelect && onNodeSelect(selectedNode);
  }, [highlightEdges, removeHighlightEdges, onNodeSelect]);

  return (
    <>
      <OmniBar onAdd={onNodeAddHandler} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        minZoom={0.2}
        maxZoom={1.5}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        onConnect={onEdgeAddHandler}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onSelectionChange={onSelectionChangeHandler}
        onNodeDoubleClick={onDoubleClickHandler}
        fitView
      >
        <MiniMap pannable />
        <Controls showZoom />
        <Background />
      </ReactFlow >
      <Views current={view} onChange={onViewChange} />
    </>
  )
};

const SceneWrapper = (props) => {
  return (
    <ReactFlowProvider>
      <Scene {...props} />
    </ReactFlowProvider>
  );
};

export default SceneWrapper;