import db from '../../fixtures/db.json';

const isController = (file) => file.name.endsWith('.controller');
const isResolver = (file) => file.name.endsWith('.resolver');

const Scenarios = ({ serviceId, onChange }) => {
  let controllers: any = [];
  if (serviceId) {
    const data = db.services[serviceId]?.components;
    if (data) {
      controllers = [
        ...Object.values(data).filter(isController),
        ...Object.values(data).filter(isResolver)
      ]
      controllers.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  return (
    <>
      <h4>APIs</h4>
      {controllers.map(({ name, exports }, idx) => {
        let members: any[] = exports[0].members;
        members = members.filter((member) => Boolean(member.method));
        members = members.sort((a, b) => a.method.localeCompare(b.method));

        return (
          <div key={idx}>
            <h5>{name}</h5>
            {members
              .map(member => {
                const scenario = `${member.method} ${isResolver({ name }) ? member.name : member.apiPath}`;
                return (
                  <div key={scenario} className="ScenarioSelector">
                    <input
                      name="scenario-selector"
                      id={scenario}
                      type="radio"
                      value={scenario}
                      onClick={onChange}
                    />
                    <label htmlFor={scenario}>{scenario}</label>
                  </div>
                )
              })}
          </div>
        )
      })}
    </>
  );
};
export default Scenarios;