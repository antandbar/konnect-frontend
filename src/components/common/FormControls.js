import prev from "../../assets/img/prev.svg"
import next from "../../assets/img/next.svg"

const FormControls = ({prevBtn, nextBtn}) => {
    
    return (
    
<div className="form-controls">

{(() => {
  if (prevBtn === true) {
     return <img className="step-btn" name="prev" src={prev} alt="prev" />;
  } 
})()}

{(() => {
  if (nextBtn === true) {
    return <img className="step-btn" name="next" src={next} alt="next" />;
  } 
})()}
    
</div>

    );
  };
  
  export default FormControls;
  