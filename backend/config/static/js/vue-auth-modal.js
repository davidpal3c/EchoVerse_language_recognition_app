// Vue instance managing:

// setting X-CSRFToken header globally for Axios (automatic inclusion)
// document.addEventListener('DOMContentLoaded', function() {
//     const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//     axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
// });

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
        },
        csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
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
            axios.post('/members/login/', {
                email: this.loginForm.email,
                password: this.loginForm.password, 
                csrfmiddlewaretoken: this.token 
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requeste-With': 'XMLHttpRequest',
                }
            })
            .then(response => {
                if (response.data.success) {
                    window.location.href = response.data.redirect;
                } else {
                    this.errors = response.data.errors;
                }
            })
            .catch(error => {
                if (error.response) {
                    this.errors = error.response.data.errors;
                } else {
                    console.error('Error:', error);
                }
            });
        },
        submitRegister() {
            axios.post('/members/register/', {
                ...this.registerForm,
                csrfmiddlewaretoken: this.csrfToken       //csrf token added in the request payload (JSON)
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requeste-With': 'XMLHttpRequest',
                }
            })
            .then(response => {
                if (response.data.success) {
                    window.location.href = response.data.redirect;
                } else {
                    this.errors = response.data.errors;
                }
            })
            .catch(error => {
                if (error.response) {
                    this.errors = error.response.data.errors;
                } else {
                    console.error('Error:', error);
                }
            });
            console.log(this.csrfToken)
        }
    }
});





// new Vue({
//     el: '#app',
//     data: {
//         csrfToken: "{{ csrf_token }}" ,
//         showModal: false,
//         isLogin: true,
//         loginForm: {
//             email: '',
//             password: ''
//         },
//         registerForm: {
//             full_name: '',
//             email: '',
//             password: '',
//             password_2: ''
//         }
//     },
//     methods: {
//         openModal(isLogin) {
//             this.isLogin = isLogin;
//             this.showModal = true;
//         },
//         closeModal() {
//             this.showModal = false;
//         },
//         submitLogin() {
//             axios.post(window.authUrls.login, this.loginForm, {
//                 headers: {
//                     'X-CSRFToken': this.csrfToken
//                 }
//             })
//             .then(response => {
//                 if (response.data.success) {
//                     window.location.href = response.data.redirect;
//                 } else {
//                     this.errors = response.data.errors;
//                 }
//             })
//             .catch(error => {
//                 if (error.response) {
//                     this.errors = error.response.data.errors;
//                 } else {
//                     console.error('Error:', error);
//                 }
//             });
//             console.log('CSRF Token:',this.csrfToken)     //debugging logs
//             console.log('CSRF Token Length:', this.csrfToken.length);

//         },
//         submitRegister() {
//             axios.post(window.authUrls.register, this.registerForm) 
//             .then(response => {
//                 if (response.data.success) {
//                     window.location.href = response.data.redirect;
//                 } else {
//                     this.errors = response.data.errors;
//                 }
//             })
//             .catch(error => {
//                 if (error.response) {
//                     this.errors = error.response.data.errors;
//                 } else {
//                     console.error('Error:', error);
//                 }
//             });
//         }
//     },
//     // debugging logs
//     watch: {
//         'loginForm.email': function(newEmail) {
//             console.log('Email changed:', newEmail);
//         },
//         'loginForm.password': function(newPassword) {
//             console.log('Password changed:', newPassword);
//         }
//     }
// });
