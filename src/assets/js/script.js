document.addEventListener("DOMContentLoaded", function () {

//Formulario en pasos
   


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
