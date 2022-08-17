

const HandBookSection = (props) => {
  return (
    <>
        <h3>{props.body.title}</h3>
        {props.body.text}
        {props.body.subsections.map(section => {
            return (
                <>
                  <h4>{section.title}</h4>
                  {section.text}
                </>
               );
        })}
    </>
  );
};

export default HandBookSection;
