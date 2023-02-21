import './Views.css';

export enum Levels {
  Domains = 'Domains',
  Services = 'Services',
  Components = 'Components',
};

export const getNextLevel = (curr) => {
  const stateMachine = {
    [Levels.Domains]: Levels.Services,
    [Levels.Services]: Levels.Components,
    [Levels.Components]: null
  };
  return stateMachine[curr];
};

const isEnabled = (currentIdx, renderIdx) => {
  return currentIdx >= renderIdx;
};

const Views = ({ current, onChange }) => {
  const onCLickHandler = (ev) => {
    onChange(ev.target.value);
  };
  return (
    <div className="react-flow__panel bottom views">
      {Object.entries(Levels)
        .map(([key, val], idx) => {
          const classNames = ['react-flow__controls-button'];
          if (current === key) {
            classNames.push('selected');
          }
          const disabled = !isEnabled(Object.values(Levels).indexOf(current), idx);
          return (
            <button key={key} value={val} disabled={disabled} onClick={onCLickHandler} type="button" className={classNames.join(' ')}>{val}</button>
          );
        })}
    </div>
  );
};

export default Views;