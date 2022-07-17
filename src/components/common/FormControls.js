import prev from "../../assets/img/prev.svg"
import next from "../../assets/img/next.svg"


const stepForm = (e, type) =>{
  // const currentArticleId = e.parentElement.parentElement.id;
  const btn = e.currentTarget;
  const currentArticleId = btn.parentElement.parentElement.id;

  const currentNumber = getCurrentArticle(currentArticleId);
  let newArticleId;

      switch(type){
          case 'next':
              newArticleId = `group-${currentNumber + 1}`;
          break;
          case 'prev':
              newArticleId = `group-${currentNumber - 1}`;
          break;        
      }
      changeStep(currentArticleId, newArticleId);

}


const changeStep = (hideArticleId, showArticleId) =>{
document.getElementById(hideArticleId).style.display = "none"
document.getElementById(showArticleId).style.display = "block"
}

const getCurrentArticle = (currentArticleId) => {
const currentNumber = currentArticleId.split("-");
return parseInt(currentNumber[1]);
}

const FormControls = ({prevBtn, nextBtn}) => {
    
    return (
    
<div className="form-controls">

{(() => {
  if (prevBtn === true) {
     return <img className="step-btn"
     onClick={(e) => {stepForm(e, 'prev');}}
     src={prev} alt="prev" />;
  } 
})()}

{(() => {
  if (nextBtn === true) {
    return <img className="step-btn"
    onClick={(e) => {stepForm(e, 'next');}}
    src={next} alt="next" />;
  } 
})()}
    
</div>

    );
  };
  
  export default FormControls;
  