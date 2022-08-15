

const HandBookSection = (props) => {
    const subsections = props.body.subsections;
  return (
    <>
      <div>
        <h3>{props.body.title}</h3>
        <p>{props.body.text}</p>
        <div>
              {subsections.map(section => {
              return (
                <div>
                  <h4>{section.title}</h4>
                  {section.text}
                </div>
              );
            })}
            </div>
      </div>
    </>
  );
};

export default HandBookSection;
