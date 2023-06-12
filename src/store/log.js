import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
const signin = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        uername: JSON.parse(sessionStorage.getItem("fullname")),
        email: "",
        password: ""
    },

    mutations: {
        LOG_IN(state, params) {
            axios
                .post(state.baseUrl + "api/user_auth/login", params)
                .then((res) => {
                    let result = res.data;
                    if (result.status == "denied" || result.status == "failed") {
                        console.log(res.data.message)
                        Swal.fire({
                            title: "OOPS!",
                            text: res.data.message,
                            icon: "error",
                        });
                    } else {
                        sessionStorage.setItem("token", JSON.stringify(res.data.token));
                        sessionStorage.setItem("fullname", JSON.stringify(res.data.user.fullname));
                        sessionStorage.setItem("email", JSON.stringify(res.data.user.email));
                        router.push("/");
                        Swal.fire({
                            title: "Success",
                            text: res.data.message,
                            icon: "success",

                        });
                        setTimeout(function () {
                            window.location.reload(true);
                        }, 2000);
                        console.log(res.data);
                    }
                })
                .catch((error) => {
                    if (error.res) {
                        console.log(error.res.data);
                    }
                });
        },


        LOG_OUT(state) {
            Swal.fire({
                title: "Logged Out Successful!",
                icon: "success",
            });
            sessionStorage.clear();
        },

        /*   FORGET_PASSWORD(state, params) {
               axios.post(state.baseUrl + "/api/user_auth/forgot_password", params).then((res) => {
                   console.log(res)
                   let result = res.data;
   
                   if (result.status == "denied" || result.status == "failed") {
                       Swal.fire({
                           title: "OOPS!",
                           text: "Kindly Input Your Registered Email",
                           icon: "error",
   
                       });
                   } else {
                       Swal.fire({
                           title: "Weldone!",
                           text: res.data.status,
                           icon: "success",
                       });
                      router.push("/")
                   }
   
               }).catch((err) => {
                   console.log(err)
               })
           },
   
           RESET_PASSWORD(state, params) {
               axios
                   .post(state.baseUrl + "/api/user_auth/reset_password", params,{
                       headers: { Authorization: `Bearer ${state.token}` },
                   }).then((res) => {
                       let result = res.data;
                       console.log(result)
                    
                   })
                   .catch((error) => {
                       if (error.res) {
                           console.log(error.res.data);
                       }
                   });
           },
   
           CHANGE_PASSWORD(state, params) {
               axios.put(state.baseUrl + "/api/user_auth/change_password", params).then((res) => {
                   console.log(res)
                   let result = res.data;
   
                   if (result.status == "denied" || result.status == "failed") {
                       Swal.fire({
                           title: "OOPS!",
                           text: "Kindly Input Your Registered Email",
                           icon: "error",
   
                       });
                   } else {
                       Swal.fire({
                           title: "Weldone!",
                           text: res.data.status,
                           icon: "success",
                       });
                      router.push("/")
                   }
   
               }).catch((err) => {
                   console.log(err)
               })
           }, */





    },
    actions: {
        async login({ commit }, payload) {
            await commit('LOG_IN', payload)
        },
        async logout({ commit }) {
            await commit('LOG_OUT')
        },

        /*     async reset_password({ commit }, params) {
               await commit('FORGET_PASSWORD', params)
           },
           async reset_new_password({ commit }, params) {
               await commit('RESET_PASSWORD', params)
           },
           async change_password({ commit }, params) {
               await commit('CHANGE_PASSWORD', params)
           },
    */

    }
}

export default signin
