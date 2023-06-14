<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2">
                <sidenav />
            </div>
            <div class="col-sm-10 ">
                <div class="row">
                    <div class="col-sm-12 design_plat  mt-3">
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
                            <h4>{{ totalEmailAddresses }}</h4>
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

                    <div class="col-sm-12 mx-auto ">
                        <div class="row">
                            <div class="col-sm-8 report_dir">

                                <h5 class="mt-4 text-center"><b>Send Mail In Four Easy Steps</b></h5>
                                <div class="container">

                                    <div class="card">
                                        <div class="face face1">
                                            <div class="content">
                                                <span class="stars"></span>
                                                <h2 class="java">Send Instantly</h2>
                                                <p class="java"> Click on send message at the right hand side of the webpage
                                                    or click on quick compose. Select your recipiants, craft your messages
                                                    and hit the send button.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="face face2">
                                            <h2>01</h2>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="face face1">
                                            <div class="content">
                                                <span class="stars"></span>
                                                <h2 class="python">Create Group</h2>
                                                <p class="python"> Create a specific group for sone mails. These groups can
                                                    be deleted while new mails can also be added.</p>
                                            </div>
                                        </div>
                                        <div class="face face2">
                                            <h2>02</h2>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="face face1">
                                            <div class="content">
                                                <span class="stars"></span>
                                                <h2 class="cSharp">Manage Mails</h2>
                                                <p class="cSharp">Take charge of your mails. View sent mails, all emails
                                                    attached to a group and more.</p>
                                            </div>
                                        </div>
                                        <div class="face face2">
                                            <h2>03</h2>
                                        </div>
                                    </div>


                                    <div class="card">
                                        <div class="face face1">
                                            <div class="content">
                                                <span class="stars"></span>
                                                <h2 class="js">Manage Profile</h2>
                                                <p class="js">As an admin, you can manage your user profile. Create new
                                                    user, add user and perform other funtion.</p>
                                            </div>
                                        </div>
                                        <div class="face face2">
                                            <h2>04</h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-4">
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
const totalEmailAddresses = computed(() => {
    const groupEmailList = store.state.mailModule.email_groups;
    return groupEmailList.reduce(
        (total, group) => total + group.group_email_adrs,
        0
    );
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
    max-height: 450px;
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
    border-bottom: 2px solid grey;
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


.container {
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 35px;
    margin: 0 auto;
    padding: 30px 0;
    cursor: pointer;
}

body .container .card {
    position: relative;
    width: 300px;
    height: 180px;
    margin: 0 auto;
    background: #000;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}

body .container .card .face {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

body .container .card .face.face1 {
    box-sizing: border-box;
    padding: 20px;
}

body .container .card .face.face1 h2 {
    margin: 0;
    padding: 0;
}

body .container .card .face.face1 .java {
    background-color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

body .container .card .face.face1 .python {
    background-color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

body .container .card .face.face1 .cSharp {
    background-color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

body .container .card .face.face1 .js {
    background-color: #ebe4eb;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


body .container .card .face.face2 {
    transition: 0.5s;
}

body .container .card .face.face2 h2 {
    margin: 0;
    padding: 0;
    font-size: 10em;
    color: #fff;
    transition: 0.5s;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

body .container .card:hover .face.face2 {
    height: 15px;
}

body .container .card:hover .face.face2 h2 {
    font-size: 2em;
}

body .container .card:nth-child(1) .face.face2 {
    background-image: linear-gradient(40deg, #fffc00 0%, #fc00ff 45%, #00fffc 100%);
    border-radius: 15px;
}

body .container .card:nth-child(2) .face.face2 {
    background-image: linear-gradient(40deg, #fc00ff 0%, #00fffc 45%, #fffc00 100%);
    border-radius: 15px;
}

body .container .card:nth-child(3) .face.face2 {
    background-image: linear-gradient(40deg, #00fffc 0%, #fc00ff 45%, #fffc00 100%);
    border-radius: 15px;
}

body .container .card:nth-child(4) .face.face2 {
    background-image: linear-gradient(40deg, #00fffc 0%, #fc00ff 45%, #fffc00 100%);
    border-radius: 15px;
}

@media only screen and (max-width: 480px) {
    .design_plat {
        flex-direction: column;
    }

    .design_plat>div {
        width: 100%;
        height: 130px;
        margin: 20px 0px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
        border-radius: 12px;
    }

}
/* 
@media only screen and (min-width: 481px max-width: 768px) {
    .design_plat {
        flex-direction: column;
    }

    .design_plat>div {
        width: 100%;
        height: 130px;
        margin: 20px 10px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
        border-radius: 12px;
    }

} */






</style>