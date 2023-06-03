<template>
    <form>
    <!--     <div class="row mt-3">
            <div class="col-12 subject">
                <label>Sender Email</label>
                <input type="text" placeholder="Subject" class="form-control" v-model="sender_email">
            </div>
        </div> -->
        <div class="row mt-3">
            <div class="col-12 subject">
                <label>Recipients</label>
                <select class="form-control" v-model="email_group_id">
                    <option :value="mail.id" v-for="mail in mail_groups" :key="mail.id">{{ mail.group_name }}</option>
                </select>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 mt-2 subject">
                <input type="text" placeholder="Subject" class="form-control" v-model="message_title">
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-2 subject">
                <textarea name="" id="" cols="100" rows="10" placeholder="Message" v-model="message_body"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-2">
                <input type="file">
            </div>
        </div>

        <div class="row">
            <div class="col-12 mt-2 subject">
                <button class="mt-4" @click.prevent="sendMail()">{{ msg }} </button>
            </div>
        </div>
    </form>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const mail_groups = computed(() => {
    return store.state.mailModule.email_groups;
});
const msg = ref('Send Message');
const sender_email = ref('');
const email_group_id = ref('');
const message_title = ref('');
const message_body = ref('');

onMounted(() => {
    store.dispatch('fetchAllGroups');
});

const sendMail = () => {
    // const router = useRouter()
    msg.value = 'Sending.......'
    var params = new FormData(); 
    params.append("email_group_id", email_group_id.value);
    params.append("message_title", message_title.value);
    params.append("message_body", message_body.value);
//    console.log(params)
    store.dispatch("sendEmail", params);
}

</script>

<style scoped>
form {
    width: 70%;
    margin: auto;
}

.subject input,
.subject textarea {
    outline: none;
    border: none;
    box-shadow: none;
}

.subject input,
.subject textarea,
.subject select {
    border-bottom: 1px solid grey;
}

.subject input:focus,
.subject select:focus {
    outline: none;
    border: none;
    box-shadow: none;
    border-bottom: 1px solid grey;

}

.subject button {
    outline: none;
    border: none;
    box-shadow: none;
    padding: 10px;
    border-radius: 10px;

}
</style>