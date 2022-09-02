
//data cookie
const cookieModal = document.querySelector('.cookie_modal');
const cookieModalDarkBg = document.querySelector('.cookie_modal_bg');
const cookieButton = document.querySelector('.cookie_button');
const cookieCloseButton = document.querySelector('.cookie_close_button');

//data mail
const mailModal = document.querySelector('.mail_modal');
const mailModalDarkBg = document.querySelector('.mail_modal_bg');
const mailButton = document.querySelector('.mail_button');
const mailCloseButton = document.querySelector('.mail_close_button');

//data login
const loginModal = document.querySelector('.log_container');
const loginModalDarkBg = document.querySelector('.login_modal_bg');
const loginButton = document.querySelector('.login_button');
const loginCloseButton = document.querySelector('.login_close_button');
const signUpCloseButton = document.querySelector('.signUp_close_button');


// variables 

let hiddenCookie = true;
let hiddenMail = true;
let hiddenLogin = true;


// cookie event
cookieButton.addEventListener("click", () => {
    isHiddenCookie();
  });

cookieCloseButton.addEventListener("click", () => {
    isHiddenCookie();
});

cookieModalDarkBg.addEventListener("click", e => {
    if(e.target == e.currentTarget) {
        isHiddenCookie() ;
    }
});



function isHiddenCookie(){
    if(hiddenCookie == true){
        cookieModal.classList.add('is_visible');
        cookieModalDarkBg.classList.add('dark_bg');
        hiddenCookie = false;
    }else{
        cookieModal.classList.remove('is_visible');
        cookieModalDarkBg.classList.remove('dark_bg');
        hiddenCookie = true;
    }
}


//mail event

mailButton.addEventListener("click", () => {
    isHiddenMail();
  });

mailCloseButton.addEventListener("click", () => {
    isHiddenMail();
});

mailModalDarkBg.addEventListener("click", e => {
    if(e.target == e.currentTarget) {
        isHiddenMail() ;
    }
});


function isHiddenMail(){
    if(hiddenMail== true){
        mailModal.classList.add('is_visible');
        mailModalDarkBg.classList.add('dark_bg');
        hiddenMail = false;
    }else{
        mailModal.classList.remove('is_visible');
        mailModalDarkBg.classList.remove('dark_bg');
        hiddenMail = true;
    }
}


//login event

loginButton.addEventListener("click", () => {
    isHiddenLogin();
  });

loginCloseButton.addEventListener("click", () => {
    isHiddenLogin();
});

signUpCloseButton.addEventListener("click", () => {
    isHiddenLogin();
});

loginModalDarkBg.addEventListener("click", e => {
    if(e.target == e.currentTarget) {
        isHiddenLogin() ;
    }
});


function isHiddenLogin(){
    if(hiddenLogin== true){
        loginModal.classList.add('is_visible');
        loginModalDarkBg.classList.add('dark_bg');
        hiddenLogin = false;
    }else{
        loginModal.classList.remove('is_visible');
        loginModalDarkBg.classList.remove('dark_bg');
        hiddenLogin = true;
    }
}




