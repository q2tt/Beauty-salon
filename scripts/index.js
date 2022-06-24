const sell = (selector) => document.querySelector(selector);
const callForm = document.forms.call;

sell('.header__btn').addEventListener("click", () => {
    sell('.call').classList.remove('hide');
    document.body.style.overflowY = "hidden";
})

sell('.call__btn-exit').addEventListener("click", () => {
    exit();
})
sell('.call__btn_ok').addEventListener("click", () => {
    exit();
})

sell('.call__submit').addEventListener("click", () => {
    event.preventDefault();
    const namePerson = callForm.name.value;
    const telNumber = callForm.tel.value;
    if(namePerson==''){
        sell('.call__name-inp').classList.add('border');
    }
    else if (telNumber==''){
        sell('.call__tel-inp').classList.add('border');
    } else{
         callForm.reset();
         doneSubmit();
         sell('.call__tel-inp').classList.remove('border');
         sell('.call__name-inp').classList.remove('border');
    }
   
})

function exit(){
    sell('.call').classList.add('hide');
    sell('body').style.backgroundColor = "#ffffff";
    document.body.style.overflowY = "visible";
    sell('.call__box_1').classList.remove('hide');
    sell('.call__box_2').classList.add('hide');
}

function doneSubmit(){
    sell('.call__box_1').classList.add('hide');
    sell('.call__box_2').classList.remove('hide');
}