import  throttle  from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
};

const STORAGE_KEY = "feedback-form-state";
let data = {"email": "","message": ""};

refs.form.addEventListener('input', throttle(addStorage, 500))

function addStorage(e) {
    if (e.target === refs.email) {
        data.email = e.target.value;
    } if(e.target === refs.message) {
        data.message = e.target.value;
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

if (localStorage.getItem(STORAGE_KEY)) {
    data = JSON.parse(localStorage.getItem(STORAGE_KEY));
}
    refs.email.value = data.email;
    refs.message.value = data.message;

refs.form.addEventListener('submit',function(e) {
    e.preventDefault();
    if (refs.email.value !== '' && refs.message.value !== '') {
    console.log(data);
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    } 
})


