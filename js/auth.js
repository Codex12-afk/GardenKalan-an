// Login/Register functionality
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

export function initializeAuth() {
    registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
    });
}

export function login() {
    var email = document.querySelector('.login input[type="email"]').value;
    var password = document.querySelector('.login input[type="password"]').value;

    var correctEmail = "group6@presentation.com";
    var correctPassword = "123";

    if (email === correctEmail && password === correctPassword) {
        alert("You have logged in successfully!");
        wrapper.classList.add('hidden');
        document.getElementById('logoutBtn').classList.remove('hidden');
        document.getElementById('logoutBtnHeader').classList.remove('hidden');
        document.getElementById('loginBtnHeader').classList.add('hidden');
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}

export function logout() {
    wrapper.classList.remove('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');
    document.getElementById('logoutBtnHeader').classList.add('hidden');
    document.getElementById('loginBtnHeader').classList.remove('hidden');
}