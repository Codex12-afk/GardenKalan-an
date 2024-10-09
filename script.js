const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');});

loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');});

btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');});

iconClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');});





  function login() {
            var email = document.querySelector('.login input[type="email"]').value;
            var password = document.querySelector('.login input[type="password"]').value;

            var correctEmail = "group6@presentation.com";
            var correctPassword = "123";

            if (email === correctEmail && password === correctPassword) {
                alert("You have logged in successfully!");
                document.querySelector('.wrapper').classList.add('hidden');
                document.getElementById('logoutBtn').classList.remove('hidden');
                document.getElementById('logoutBtnHeader').classList.remove('hidden'); // Show logout button in header
                document.getElementById('loginBtnHeader').classList.add('hidden'); // Hide login button in header
            } else {
                alert("Incorrect email or password. Please try again.");
            }
        }

        function logout() {
            document.querySelector('.wrapper').classList.remove('hidden');
            document.getElementById('logoutBtn').classList.add('hidden');
            document.getElementById('logoutBtnHeader').classList.add('hidden'); // Hide logout button in header
            document.getElementById('loginBtnHeader').classList.remove('hidden'); // Show login button in header
        }

        document.addEventListener('DOMContentLoaded', function() {
            const registerForm = document.querySelector('.form-box.register form');
            const usernameInput = document.querySelector('.form-box.register input[type="text"]');
            const emailInput = document.querySelector('.form-box.register input[type="email"]');
            const passwordInput = document.querySelector('.form-box.register input[type="password"]');
            const termsCheckbox = document.querySelector('.form-box.register input[type="checkbox"]');
        
            // Function to handle form submission
            registerForm.addEventListener('submit', function(event) {
              event.preventDefault(); // Prevent form submission
        
              // Check if all fields are filled and terms are accepted
              if (usernameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '' || !termsCheckbox.checked) {
                alert("Please fill in all fields and accept the terms & conditions.");
                return;
              }
        
              // Here you can handle the registration
              // For simplicity, just showing an alert with the entered data
              alert("Registration Successful!\nUsername: " + usernameInput.value + "\nEmail: " + emailInput.value);
              // You can also send the registration data to a backend server for processing
        
              // Clear the form fields
              usernameInput.value = "";
              emailInput.value = "";
              passwordInput.value = "";
              termsCheckbox.checked = false;
            });
          });