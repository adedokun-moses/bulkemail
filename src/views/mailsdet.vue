<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-2">
                <sidenav />
            </div>
            <div class="col-sm-10">
                <div class=" design_tab d-flex mt-3 ">
                    <div>
                        <i class="fa fa-envelope fa-5x m-5"></i>
                    </div>
                    <div class="user_det">
                        <h5>Hello <b>{{ fullname }}</b>, Welcome</h5>
                        <p>You currently have <b>{{ mail_list.length }}</b> mails in this group</p>
                    </div>
                </div>
                <div class="mail_list_tab mt-2">
                    <h5>Mail List</h5>
                    <h3 v-for="mails in mail_list" :key="mails.id">{{ mails.emails }}</h3>
            
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import sidenav from '../components/sidenav.vue'
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const fullname = JSON.parse(sessionStorage.getItem("fullname"));
const route = useRoute()
const id = route.params.id
const store = useStore()

const mail_list = computed(() => {
    return store.state.mailModule.mail_list;
});

onMounted(() => {
    store.dispatch('emaillist', id);
});

</script>

<style scoped>
.design_tab {
    align-items: center;
    width: 95%;
    height: 150px;
    margin: 0px 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
}

.design_tab h5 {
    font-size: 20px;
}

.mail_list_tab {
    width: 80%;
    margin: auto;
    height: 450px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none !important;
}

.mail_list_tab::-webkit-scrollbar {
    display: none;
}

.mail_list_tab h3 {
    font-size: 15px;
}
</style>