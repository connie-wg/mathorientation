

const HandBookSection = (props) => {
  return (
    <>
        <h3>{props.body.header}</h3>
        <h5>{props.body.title}</h5>
        {props.body.text}
        {props.body.subsections.map(section => {
            return (
                <>
                  <h5>{section.title}</h5>
                  {section.text}
                </>
               );
        })}
    </>
  );
};

export default HandBookSection;
