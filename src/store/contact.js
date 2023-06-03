import axios from 'axios';
import router from '@/router';
import setAuthHeader from './setAuthHeader';
import Swal from 'sweetalert2';

if (sessionStorage.getItem("token") & sessionStorage.getItem("token") != "" & sessionStorage.getItem("token") != "undefine") {
    let token = sessionStorage.getItem("token")
    setAuthHeader(token)
}
const contact = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
      //  email_groups: []
       
    },

    mutations: {
        ADD_PHONE_GROUP(state, params) {
            axios
                .post(state.baseUrl + "api/user_auth/new_phonenos_group_text", params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                })
                .then((res) => {
                   // console.log(res)
                    if (res.data.status == 'success') {
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "success",
                        });
                        router.go('/dash')
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: res.data.message,
                            icon: "error",
                        });
                      //  console.log(res.data)
                    } 
                })
                .catch((error) => {
                    if (error.res) {
                        console.log(error.res.data);
                    }
                });
        },
     /*    EDIT_EMAIL_GROUP(state, params) {
            axios
                .post(state.baseUrl + "api/user_auth/new_emails_group_text", params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                })
                .then((res) => {
                   // console.log(res)
                    if (res.data.status == 'success') {
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "success",
                        });
                        router.go('/dash')
                    } else {
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "error",
                        });
                        console.log(res.data)
                    } 
                })
                .catch((error) => {
                    if (error.res) {
                        console.log(error.res.data);
                    }
                });
        }, */

      /*   SEND_BULK_EMAIL(state, params){
            axios.post(state.baseUrl + "api/user_auth/sendBulkEmail", params, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }, */
   


    },
    actions: {
        async addPhone({ commit }, params) {
            await commit('ADD_PHONE_GROUP', params)
        },
       /*  async addEmailCSV({ commit }, params) {
            await commit('ADD_EMAIL_GROUP_CSV', params)
        }, */
    

    

    }
}

export default contact
