const sel = (selector) => document.querySelector(selector);
const emailForm = document.forms.email;


sel('.footer__form_btn').addEventListener("click", () => {
   
    let email = emailForm.email.value;
    sel(".footer__form_input").placeholder='';
    sel(".footer__form_input").style.backgroundImage = `url('../../img/done.svg')`;
    emailForm.reset();
 
})