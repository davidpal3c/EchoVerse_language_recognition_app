// Vue instance managing:

new Vue({
    el: '#app',
    data: {
        showModal: false,
        isLogin: true,
        loginForm: {
            email: '',
            password: ''
        },
        registerForm: {
            full_name: '',
            email: '',
            password: '',
            password_2: ''
        }
    },
    methods: {
        openModal(isLogin) {
            this.isLogin = isLogin;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submitLogin() {
            axios.post('/user_auth/login', {
                email: this.loginForm.email,
                password: this.loginForm.password
            })
            .then(response => {
                window.location.href = response.data.redirect;
            })
            .catch(error => {
                alert("Error Logging In. Please Try Again...");
            });
        },
        submitRegister() {
            axios.post('/user_auth/register_user', {
                full_name: this.registerForm.full_name,
                email: this.registerForm.email,
                password: this.registerForm.password,
                password_2: this.registerForm.password_2
            })
            .then(response => {
                window.location.href = response.data.redirect;
            })
            .catch(error => {
                alert("Registration failed. Please try again.");
            });
        }
    }
});








//  the modal's visibility, form submissions, and AJAX requests

// document.addEventListener('DOMContentLoaded', function () {
//     Vue.config.productionTip = false;

//     // Defines a global function to open the modal
//     window.openModal = function(action) {
//         const app = new Vue({
//             el: '#app',
//             data: {
//                 showModal: false,
//                 action: '',
//                 email: '',
//                 password: '',
//                 passwordConfirm: '',
//                 errors: [],
//             },
//             methods: {
//                 closeModal() {
//                     this.showModal = false;
//                 },
//                 openModal(action) {
//                     this.action = action;
//                     this.email = '';
//                     this.password = '';
//                     this.passwordConfirm = '';
//                     this.errors = [];
//                     this.showModal = true;
//                 },
//                 async submitForm(e) {
//                     e.preventDefault();
//                     const formData = new FormData(e.target);
//                     const response = await fetch('/ajax/auth/', {
//                         method: 'POST',
//                         body: JSON.stringify({
//                             action: this.action,
//                             email: this.email,
//                             password: this.password,
//                             passwordConfirm: this.passwordConfirm,
//                         }),
//                         headers: {
//                             'Content-Type': 'application/json'
//                         }
//                     });
//                     const data = await response.json();
//                     if (data.status === 'success') {
//                         console.log(data.message);
//                         this.closeModal();
//                     } else {
//                         this.errors = data.errors || [];
//                     }
//                 }
//             }
//         });
//     };

//     // Initialize the Vue instance
//     new Vue({
//         el: '#app',
//         data: {
//             showModal: false,
//             action: '',
//             email: '',
//             password: '',
//             passwordConfirm: '',
//             errors: [],
//         },
//         methods: {
//             closeModal() {
//                 this.showModal = false;
//             },
//             openModal(action) {
//                 this.action = action;
//                 this.email = '';
//                 this.password = '';
//                 this.passwordConfirm = '';
//                 this.errors = [];
//                 this.showModal = true;
//             },
//             async submitForm(e) {
//                 e.preventDefault();
//                 const formData = new FormData(e.target);
//                 const response = await fetch('/ajax/auth/', {
//                     method: 'POST',
//                     body: JSON.stringify({
//                         action: this.action,
//                         email: this.email,
//                         password: this.password,
//                         passwordConfirm: this.passwordConfirm,
//                     }),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 const data = await response.json();
//                 if (data.status === 'success') {
//                     console.log(data.message);
//                     this.closeModal();
//                     // Additional logic for handling successful login or registration
//                 } else {
//                     this.errors = data.errors || [];
//                     // Display errors to the user
//                 }
//             }
//         }
//     });
// });