<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-2">
                <sidenav />
            </div>
            <div class="col-sm-10 ">
                <div class="row">
                    <div class="col-sm-12 design_plat m-0 p-0 mt-3">

                        <div class=" design_tab ">
                            <h5> <i class="fa fa-envelope"> Contacts </i>
                                <span style="color:  #989898;"></span>
                            </h5>
                            <h4>3000</h4>
                        </div>

                        <div class=" design_tab" @click="group_push()" style="cursor: pointer;">
                            <h5>
                                Contact Groups <span style="color:  #989898;"><br>
                                </span></h5>
                            <h4>{{ mail_groups.length }}</h4>
                        </div>


                        <!--      <div class=" design_tab ">
                            <h5> Import New <br> Contacts <span style="color:  #989898; "><br>
                                </span></h5>
                            <div class="mt-3 ">
                                <sms_import />
                            </div>
                        </div> -->
                        <!--    <div class=" design_tab ">
                            <h5> Import New <br> Emails <span style="color:  #989898; "><br>
                                </span></h5>
                            <div class="mt-3 d-flex">
                               <div>
                                <mail_import />
                               </div>
                               <div style="font-size: 15px;">
                                <mail_text_import/>
                               </div>
                                  
                            </div>
                        </div> -->

                        <div class=" design_tab ">
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-circle"></i>
                                Send Message
                            </button>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
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
                        </div>
                    </div>

                    <div class="col-sm-11 mx-auto ">
                        <h5 class="mt-4"><b>Reports</b></h5>
                        <div v-show="reports.length == 0" class="loader">
                            <loader />
                        </div>
                        <div class="report_tab">
                            <ul v-for="reportdet in reports" :key="reportdet.id" v-show="reports.length != 0">
                                <li>{{ reportdet.report_message }}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup >
import sidenav from '../components/sidenav.vue';
import form_tab from '../components/form.vue';
import loader from '../components/loader.vue';
/* import mail_text_import from '../components/mailimporttext.vue';
import mail_import from '../components/mailimport.vue';
import sms_import from '../components/smsimport.vue'; */
import router from '@/router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
const store = useStore()

const mail_groups = computed(() => {
    return store.state.mailModule.email_groups;
});

const reports = computed(() => {
    return store.state.mailModule.report;
});
const group_push = () => {
    router.push('/groups')
};
onMounted(() => {
    store.dispatch('fetchReports');
});

</script>


<style scoped>
.report_tab {
    height: 450px;
    overflow: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.report_tab::-webkit-scrollbar {
    display: none;
}

.report_tab li {
    list-style: none;
}

.icon-container {
    display: flex;
    flex-direction: column;
    align-content: center;
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

.design_tab button {
    margin: 35px;
    outline: none;
    border: none;
    padding: 20px;
    border-radius: 20px;
    width: 80%;
}

.pull-left {
    display: flex;
    align-items: center;
}

span {
    padding-top: 0px;
}

.table_head {
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px #888888;
    background: #989898;
    padding: 5px 2px;
    border-radius: 3px;

}

.table_head>div {
    align-items: center;
}

.table_head button {
    margin: 0px 10px !important;
    padding: 10px 25px !important;
    outline: none;
    border: none;
    border-radius: 10px;
}

.filter_box input {
    padding: 8px 10px !important;
    border-radius: 5px;
    outline: none;
}

@media only screen and (max-width: 600px) {
    .design_plat {
        flex-direction: column;
    }

    .design_plat>div {
        width: 90%;
        height: 130px;
        margin: 20px 10px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
        border-radius: 12px;
    }

}
</style>