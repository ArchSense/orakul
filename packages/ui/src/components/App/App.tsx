import { useCallback, useRef, useState } from 'react';
import { Node } from 'reactflow';
import db from '../../fixtures/db.json';
import { getSourceCode } from '../../services/api';
import { defaultComment, generateNewClass } from '../Editor/codeTemplates';
import Editor from '../Editor/Editor';
import Scenarios from '../Scenarios/Scenarios';
import { SceneNodeType } from '../Scene/Node/Node';
import Scene from '../Scene/Scene';
import { getNextLevel, Levels } from '../Scene/Views/Views';
import './App.css';
import useSplitPanel from './useSplitPanel';

function App() {
  const paneContainer = useRef(null);
  const paneLeft = useRef(null);
  const paneRight = useRef(null);

  const {
    onResizeEnd,
    onResizeStart,
    onResizing
  } = useSplitPanel(paneContainer, paneLeft, paneRight);

  const [activeScenario, setActiveScenario] = useState(undefined);
  const [activeView, setActiveView] = useState(Levels.Domains);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const [sourceCode, setSourceCode] = useState('');
  const scenarioClickHandler = ({ target }) => setActiveScenario(target.value);

  const getSourceCodeForNode = async (node) => {
    try {
      const res = await getSourceCode(node.id);
      if (res) {
        setSourceCode(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onNodeEnterHandler = (nodeId: string) => {
    const nextView = getNextLevel(activeView);
    if (!nextView) {
      return;
    }
    const nextBreadcrumbs: string[] = [];
    if (activeView === Levels.Domains) {
      nextBreadcrumbs[0] = nodeId;
    }
    if (activeView === Levels.Services) {
      nextBreadcrumbs[0] = breadcrumbs[0];
      nextBreadcrumbs[1] = nodeId;
    }
    setActiveView(nextView);
    setBreadcrumbs(nextBreadcrumbs);
  };

  const onNodeSelect = useCallback((node: Node) => {
    switch (node.type) {
      case SceneNodeType.ACTUAL:
        return getSourceCodeForNode(node);
      case SceneNodeType.PLANNED:
        return setSourceCode(generateNewClass(node.data.name));
    }
  }, []);

  const onNodeDeselect = () => {
    return setSourceCode(defaultComment);
  };

  const onNodeSelectHandler = useCallback((node: Node | undefined) => {
    if (node) {
      onNodeSelect(node);
    } else {
      onNodeDeselect();
    }
  }, [onNodeSelect]);

  const getCurrentCompany = () => {
    return 'tipalti';
  };

  const getSceneData = () => {
    switch (activeView) {
      case Levels.Components:
        return db['services'][breadcrumbs[1]].components;
      case Levels.Services:
        return db['domains'][breadcrumbs[0]]['services'].reduce((acc, serviceId) => {
          acc[serviceId] = db.services[serviceId];
          return acc;
        }, {});
      case Levels.Domains:
        return db['companies'][getCurrentCompany()]['domains'].reduce((acc, domainId) => {
          acc[domainId] = db.domains[domainId];
          return acc;
        }, {});
      default:
        break;
    }
  };

  const renderRelevantScene = () => {
    return (
      <Scene
        activeScenario={activeScenario}
        data={getSceneData()}
        onNodeEnter={onNodeEnterHandler}
        onNodeSelect={onNodeSelectHandler}
        onViewChange={setActiveView}
        view={activeView}
      />
    );
  }

  return (
    <div className="App" ref={paneContainer} onMouseMove={onResizing} onMouseUp={onResizeEnd}>
      <aside className="Menu" ref={paneLeft}>
        <Scenarios serviceId={activeView === Levels.Components && breadcrumbs[1]} onChange={scenarioClickHandler} />
      </aside>
      <div className="Splitter" data-index={0} onMouseDown={onResizeStart}></div>
      <main className="Main">
        {renderRelevantScene()}
      </main>
      <div className="Splitter" data-index={1} onMouseDown={onResizeStart}></div>
      <aside className="Code" ref={paneRight}>
        <Editor sourceCode={sourceCode} />
      </aside>
    </div>
  );
}

export default App;
