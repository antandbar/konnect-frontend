document.addEventListener("DOMContentLoaded", function () {

//Formulario en pasos
const stepBtns = document.querySelectorAll('.step-btn');

for(const btn of stepBtns) {
    btn.addEventListener('click', function () {
    const type = this.name;
    const currentArticleId = this.parentElement.parentElement.id;
    const currentNumber = getCurrentArticle(currentArticleId);
    let newArticleId;
        // eslint-disable-next-line default-case
        switch(type){
            case 'next':
                newArticleId = `group-${currentNumber + 1}`;
            break;
            case 'prev':
                newArticleId = `group-${currentNumber - 1}`;
            break;                
        }
        changeStep(currentArticleId, newArticleId);
    }, false);
}

const changeStep = (hideArticleId, showArticleId) =>{
    document.getElementById(hideArticleId).style.display = "none"
    document.getElementById(showArticleId).style.display = "block"
}

const getCurrentArticle = (currentArticleId) => {
    const currentNumber = currentArticleId.split("-");
    return parseInt(currentNumber[1]);
}


const planBtns = document.querySelectorAll('.plan-sel');

for(const btn of planBtns) {
    btn.addEventListener('click', function () {
            deleteActives();
            btn.classList.add('activo');
    }, false);
}
    const deleteActives = () =>{
        for(const btn of planBtns) {
        if(btn.classList.contains('activo')){
            btn.classList.remove('activo');
        }
        }
    }

});
