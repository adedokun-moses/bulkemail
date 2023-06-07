import axios from 'axios';
import router from '@/router';
import setAuthHeader from './setAuthHeader';
import Swal from 'sweetalert2';

if (sessionStorage.getItem("token") & sessionStorage.getItem("token") != "" & sessionStorage.getItem("token") != "undefine") {
    let token = sessionStorage.getItem("token")
    setAuthHeader(token)
}
const mail = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        email_groups: [],
        mail_list: [],
        messagelist: [],
        loading: false,
        group_name: "",
        report: []

    },

    mutations: {
        FETCH_ALL_GROUPS(state) {
            axios
                .get(state.baseUrl + "api/user_auth/email_group", {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    state.email_groups = res.data.group_email_list;
                    //  console.log(state.email_groups)
                }).catch((err) => {
                    console.log(err)
                })
        },

        ADD_EMAIL_GROUP(state, params) {
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
        EDIT_EMAIL_GROUP(state, params) {
            axios
                .post(state.baseUrl + "api/user_auth/add_emails_group_text", params, {
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
                        router.go('/groups')
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
        },

        SEND_BULK_EMAIL(state, params) {
            axios.post(state.baseUrl + "api/user_auth/sendBulkEmail", params, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                if (res.data.status == 'success') {
                    Swal.fire({
                        title: "Good job!",
                        text: res.data.message,
                        icon: "success",
                    });
                    router.go('/groups')
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: res.data.message,
                        icon: "error",
                    });
                    //  console.log(res.data)
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        ADD_EMAIL_GROUP_CSV(state, params) {
            axios
                .post(state.baseUrl + "api/user_auth/new_emails_group_csv", params, {
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
        EDIT_EMAIL_GROUP_CSV(state, params) {
            axios
                .post(state.baseUrl + "api/user_auth/add_emails_group_csv", params, {
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

        EMAIL_LIST(state, id) {
            axios
                .get(state.baseUrl + "api/user_auth/group_email_list/" + id, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    state.mail_list = res.data.group_email_list;
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
           
            // console.log(state.mail_list)
        }).catch((err) => {
            console.log(err)
        })
    },

    MESSAGE_LIST(state, id) {
        axios
            .get(state.baseUrl + "api/user_auth/email_group_messages/" + id, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.messagelist = res.data.group_email_message;
                state.group_name = res.data.group_email_name
                //  console.log(state.mail_list)
            }).catch((err) => {
                console.log(err)
            })
    },
    REPORT_DET(state) {
        axios
            .get(state.baseUrl + "api/user_auth/report", {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.report = res.data.reports;
                console.log(state.report)
            }).catch((err) => {
                console.log(err)
            })
    },
    DELETE_GRP(state, id) {
        axios
            .delete(state.baseUrl + "api/user_auth/delete_group/" + id, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                if (res.data.status == 'success') {
                    Swal.fire({
                        title: "Good job!",
                        text: res.data.message,
                        icon: "success",
                    });
                    console.log(res.data.message)
                    router.go('/groups')
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: res.data.message,
                        icon: "error",
                    });
                    console.log(res.data.message)
                    //  console.log(res.data)
                }
                
            }).catch((err) => {
                console.log(err)
            })
    },






},
    actions: {
        async fetchAllGroups({ commit }) {
            await commit('FETCH_ALL_GROUPS')
        },
        async addEmail({ commit }, params) {
    await commit('ADD_EMAIL_GROUP', params)
},
        async addEmailCSV({ commit }, params) {
    await commit('ADD_EMAIL_GROUP_CSV', params)
},
        async sendEmail({ commit }, params) {
    await commit('SEND_BULK_EMAIL', params)
},
        async editEmail({ commit }, params) {
    await commit('EDIT_EMAIL_GROUP', params)
},
        async editEmailCSV({ commit }, params) {
    await commit('EDIT_EMAIL_GROUP_CSV', params)
},
        async emaillist({ commit }, id) {
    await commit('EMAIL_LIST', id)
},
        async messagelist({ commit }, id) {
    await commit('MESSAGE_LIST', id)
},
        async fetchReports({ commit }) {
    await commit('REPORT_DET')
},
        async deletegrp({ commit }, id) {
    await commit('DELETE_GRP', id)
},
    }
}

export default mail
