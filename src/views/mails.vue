<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-2">
                <sidenav />
            </div>
            <div class="col-sm-10 ">
                <div class="row">
                    <div class="col-sm-11 mx-auto">
                        <h5 class="mt-4"><b>Mails Management</b></h5>
                        <div class="row">
                            <div class="col-sm-12 design_plat m-0 p-0 mt-3">
                                <div class=" design_tab" @click="group_push()" style="cursor: pointer;">
                                    <h5>
                                        Email Groups <span style="color:  #989898;"><br>
                                        </span></h5>
                                    <h4>{{ mail_groups.length }}</h4>
                                </div>


                                <div class=" design_tab ">
                                    <h5>Email Contacts 
                                        <span style="color:  #989898;"></span>
                                    </h5>
                                    <h4>{{totalEmailAddresses}}</h4>
                                    <!--   <img src="../assets/f.png" alt="" class="mt-5" style="margin-left: 15px;"> -->
                                </div>

                             

                                <!--   <div class=" design_tab ">
                                    <h5> Import New <br> Emails <span style="color:  #989898; "><br>
                                        </span></h5>
                                    <div class="mt-3 ">
                                        <mail_import />
                                    </div>
                                </div> -->
                                <div class=" design_tab ">
                                    <h5> Import New <br> Emails <span style="color:  #989898; "><br>
                                        </span></h5>
                                    <div class="mt-3 d-flex">
                                        <div>
                                            <mail_import />
                                        </div>
                                        <div style="font-size: 15px;">
                                            <mail_text_import />
                                        </div>
                                    </div>
                                </div>
                                <!-- 
                                <div class=" design_tab ">
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                            class="fa fa-plus-circle"></i> Send Message
                                    </button>
                                 
                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title text-center" id="exampleModalLabel">New Message
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body"
                                                    style="width: 100% !important; height: 80vh; overflow: scroll;">
                                                    <form_tab />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 main_table">

                                <table class="table mt-4">
                                    <thead>
                                        <th> Group Name </th>
                                        <th>Messages Sent </th>
                                        <th>No. Of Mails </th>
                                        <th colspan="2" style="text-align: center;"> Action </th>
                                    </thead>

                                    <tbody>
                                        <tr v-show="mail_groups.length == 0" class="loader">
                                            <loader />
                                        </tr>
                                        <tr v-for="mails in mail_groups" :key="mails.id" v-show="mail_groups.length != 0">
                                            <td>{{ mails.group_name }}</td>
                                            <td>{{ mails.group_messages }}</td>
                                            <td>{{ mails.group_email_adrs }}</td>
                                            <td class="edit_btn" @click="procedtoMailDet(mails.group_id)">
                                                
                                                <button class="btn"><i class="fa fa-eye"
                                                        style="padding-left: 10px !important;"></i> View
                                                    Mails</button>
                                            </td>
                                            <td class="edit_btn" @click="procedtoMesDet(mails.group_id)">
                                                
                                                <button class="btn"><i class="fa fa-eye"
                                                        style="padding-left: 10px !important;"></i> View
                                                    Messages</button>
                                            </td>
                                            <td>
                                                <button class="btn">
                                                    <editmailtext :mails="mails" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import sidenav from '../components/sidenav.vue';
import mail_import from '../components/mailimport.vue';
import mail_text_import from '../components/mailimporttext.vue';
import editmailtext from '../components/editmailtext.vue';
import loader from '../components/loader.vue';
import router from '@/router';
import { computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const mail_groups = computed(() => {
    return store.state.mailModule.email_groups;
});
const totalEmailAddresses = computed(() => {
    const groupEmailList = store.state.mailModule.email_groups;
    return groupEmailList.reduce(
        (total, group) => total + group.group_email_adrs,
        0
    );
});
const procedtoMailDet = (id) =>{  
    router.push("/mailsdet/" + id)
}
 
const procedtoMesDet =(id) =>{
    router.push("/messages/" + id)
}
</script>


<style scoped>
.home {
    background: red;
    height: 100vh;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0px;
    padding: 0px;
    -ms-overflow-style: none !important;
    /* for Internet Explorer, Edge */
    width: 100%;
}

.home_page {
    background: red;
    height: 100vh;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0px;
    padding: 0px;
    -ms-overflow-style: none !important;
    /* for Internet Explorer, Edge */
    width: 100%;
}


.home::-webkit-scrollbar {
    display: none;
}

.home_page::-webkit-scrollbar {
    display: none;
}

.design_plat {
    justify-content: space-between;
    display: flex;
}

.design_plat>div {
    margin: 0px;
    padding: 0px;
    width: 30%;
    height: 130px;
    margin: 0px 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
}

.design_tab h5 {
    font-size: 20px;
    text-align: center;
    margin: 15px 0px 0px 0px;
}

.design_tab h4 {
    font-size: 20px;
    width: 50%;
    margin: 25px auto;
    border: 2px solid black;
    border-radius: 30px;
    padding: 15px;
    text-align: center;
}

.icon-container {
    display: flex;
    flex-direction: column;
    align-content: center;
}



.main_table {
    height: 60vh;
    overflow: scroll;
    -ms-overflow-style: none !important;
    overflow: -moz-scrollbars-none;
}

.main_table::-webkit-scrollbar {
    display: none;
}

.design_tab button {
    margin: 35px;
    outline: none;
    border: none;
    padding: 20px;
    border-radius: 20px;
}

/* .edit_btn button {
    margin: 0px 10px;
} */

.edit_btn button:focus {
    box-shadow: none;
}
</style>