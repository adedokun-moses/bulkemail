<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2">
                <sidenav />
            </div>
            <div class="col-sm-10 ">
                <div class="row">
                    <div class="col-sm-11 mx-auto">
                        <h5 class="mt-4"><b>Group Management</b></h5>
                        <div class="row">
                            <div class="col-sm-12 design_plat mt-3">
                                <div class=" design_tab" @click="group_push" style="cursor: pointer;">
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
                                    <!--   <img src="../assets/f.png" alt="" class="mt-5" style="margin-left: 15px;"> -->
                                </div>


                                <!--     <div class=" design_tab ">
                                    <h5> Import New <br> Contacts <span style="color:  #989898; "><br>
                                        </span></h5>
                                    <div class="mt-3 ">
                                        <phoneimport />
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


                            </div>

                            <div class="col-sm-12 group_tab">
                                <div class="row mt-5">
                                    <div v-show="mail_groups.length == 0" class="loader">
                                        <loader />
                                    </div>
                                    <div class="col-sm-4 col-12" v-for="mails in mail_groups" :key="mails.group_name"
                                        v-show="mail_groups.length != 0">
                                        <div class="row">
                                            <section class="movie_display col-sm-11  mx-auto">

                                                <div class="content">
                                                    <div>
                                                        <h5>Group Name <br>{{ mails.group_name }} </h5>
                                                    </div>
                                                    <div>
                                                        <h5>{{ mails.group_email_adrs }} </h5>
                                                    </div>
                                                </div>

                                                <div class="image_tab">
                                                    <div>
                                                        <editmailtext :mails="mails" />
                                                    </div>
                                                    <div>
                                                        <form_tab :mails="mails" />
                                                    </div>
                                                    <div>
                                                        <button @click="deleteGroup(mails.group_id)"><i
                                                                class="fa fa-trash ml-5"></i>
                                                            Delete</button>
                                                    </div>

                                                </div>
                                            </section>

                                        </div>

                                    </div>

                                    <!--   <InfiniteLoading @infinite="mail_groups" /> -->
                                </div>

                                <!--       <main class="mt-5">
                                    <div class="tab_section ">
                                        <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" id="ex1-tab-1" data-bs-toggle="tab"
                                                    href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1"
                                                    aria-selected="true">SMS Groups</a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="ex1-tab-2" data-bs-toggle="tab" href="#ex1-tabs-2"
                                                    role="tab" aria-controls="ex1-tabs-2" aria-selected="false">Email Groups
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="ex1-content">
                                            <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                                                aria-labelledby="ex1-tab-1">
                                                <div class="row">
                                                    <div class="col-sm-4 ">
                                                        <div class="row">
                                                            <section class="movie_display col-sm-11  mx-auto">
                                                                <div class="content">
                                                                    <div>
                                                                        <h5>Jolly <br> Customers </h5>
                                                                    </div>
                                                                    <div>
                                                                        <h5>7000 <br> Contacts </h5>
                                                                    </div>
                                                                </div>

                                                                <div class="image_tab">
                                                                    <div>
                                                                        <button><i class="fa fa-edit"></i> Edit</button>
                                                                    </div>
                                                                    <div>

                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"><i
                                                                                class="fa fa-plus-circle"></i>
                                                                            SMS
                                                                        </button>
                                                                       
                                                                        <div class="modal fade" id="exampleModal"
                                                                            tabindex="-1"
                                                                            aria-labelledby="exampleModalLabel"
                                                                            aria-hidden="true">
                                                                            <div class="modal-dialog">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header">
                                                                                        <h5 class="modal-title text-center"
                                                                                            id="exampleModalLabel">New
                                                                                            Message
                                                                                        </h5>
                                                                                        <button type="button"
                                                                                            class="btn-close"
                                                                                            data-bs-dismiss="modal"
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
                                                                    <div>
                                                                        <button><i class="fa fa-trash ml-5"></i>
                                                                            Delete</button>
                                                                    </div>

                                                                </div>


                                                            </section>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel"
                                                aria-labelledby="ex1-tab-2">
                                                <div class="row">
                                                    <div class="col-sm-4 " v-for="mails in mail_groups"
                                                        :key="mails.group_name">
                                                        <div class="row">
                                                            <section class="movie_display col-sm-11  mx-auto">
                                                                <div class="content">
                                                                    <div>
                                                                        <h5>Group Name <br>{{ mails.group_name }} </h5>
                                                                    </div>
                                                                    <div>
                                                                        <h5>{{ mails.group_email_adrs }} </h5>
                                                                    </div>
                                                                </div>

                                                                <div class="image_tab">
                                                                    <div>
                                                                        <editmailtext :mails="mails" />
                                                                    </div>
                                                                    <div>

                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal"><i
                                                                                class="fa fa-plus-circle"></i>
                                                                            SMS
                                                                        </button>
                                                                       
                                                                        <div class="modal fade" id="exampleModal"
                                                                            tabindex="-1"
                                                                            aria-labelledby="exampleModalLabel"
                                                                            aria-hidden="true">
                                                                            <div class="modal-dialog">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header">
                                                                                        <h5 class="modal-title text-center"
                                                                                            id="exampleModalLabel">New
                                                                                            Message
                                                                                        </h5>
                                                                                        <button type="button"
                                                                                            class="btn-close"
                                                                                            data-bs-dismiss="modal"
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
                                                                    <div>
                                                                        <button><i class="fa fa-trash ml-5"></i>
                                                                            Delete</button>
                                                                    </div>

                                                                </div>


                                                            </section>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </main> -->

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
import form_tab from '../components/formtab.vue';
import mail_import from '../components/mailimport.vue';
import mail_text_import from '../components/mailimporttext.vue';
import editmailtext from '../components/editmailtext.vue';
import Swal from 'sweetalert2';
import loader from '../components/loader.vue';
import router from '@/router';
import { computed, onMounted, reactive } from 'vue';
const loading = () => ref(true)
import { useStore } from 'vuex';


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




const deleteGroup = (id) => {
    Swal.fire({
        text: "Do You Want To Delete",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!!!!'
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch("deletegrp", id);
        }
        else {
            router.push('/groups')
        }
    })
}
onMounted(() => {
    store.dispatch('fetchAllGroups');
    // calculateTotalEmailAddresses();
});



</script>

<style scoped>
.nav {
    flex-wrap: wrap;
    justify-content: space-between;
}

.group_tab {
    /* background: yellow; */
    height: 400px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none !important;
}

.group_tab::-webkit-scrollbar {
    display: none;
}

.movie_display {
    height: 120px;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid gold;
    margin: 5px 0px;
}

.image_tab {
    height: 60px;
    overflow: hidden;
    display: flex;
    align-items: center;

}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

.image_tab>div {
    width: 100%;
    margin: 28px 0px 0px 5px;
}

.image_tab button {
    width: 100%;
    background: grey;
    outline: none;
    border: none;
    border-radius: 2px;

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

@media only screen and (min-device-width: 200px) and (max-device-width: 600px) {
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

    .design_tab h4 {
        font-size: 20px;
        width: 50%;
        margin: 25px auto;
        border: 2px solid black;
        border-radius: 30px;
        padding: 15px;
        text-align: center;
    }


    .movie_display {
        height: auto;
        overflow: hidden;
        border-radius: 10px;
        border: 1px solid gold;
        margin: 20px 30px;
    }

}

/* @media only screen and (min-device-width: 600px) and (max-device-width: 801px) {
    .design_plat {
        flex-direction: column;
    }

    .design_plat>div {
        width: 100%;
        height: 130px;
        margin: 20px 0px;
       
    }


} */
</style>