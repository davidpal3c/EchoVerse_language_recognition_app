// Vue instance managing:

// setting X-CSRFToken header globally for Axios (automatic inclusion)
axios.defaults.headers.common['X-CSRFToken'] = window.csrfToken;


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
    created() {
        this.setCsrfToken();
    },
    methods: {
        setCsrfToken() {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            console.log("CSRF Token:", csrfToken);  
            axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
        },
        openModal(isLogin) {
            this.isLogin = isLogin;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submitLogin() {
            axios.post(window.authUrls.login, this.loginForm)
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
            axios.post(window.authUrls.register, this.registerForm)
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
