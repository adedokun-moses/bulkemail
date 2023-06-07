<template>
    <form>
        <div class="input ">
            <div class="hidden"><label for="receiver" class="mb-2">Reciptients</label></div>
            <div class="icon-container"> <select class="form-control icon-content" v-model="email_group_id">
                    <option :value="mail.group_id" v-for="mail in mail_groups" :key="mail.id">{{ mail.group_name }}</option>
                </select><span class="fas fa-pencil-alt icon"></span></div>
        </div>
        <div class="input ">
            <div class="hidden"><label for="subject" class=" mt-2">Subject</label></div>
            <div class="icon-container">
                <input type="text" name="subject" id="subject" placeholder="Subject" v-model="message_title"
                    class="icon-content" required> <span class="fas fa-pencil-alt icon"></span>
            </div>
        </div>
        <div class="input">
            <div class="hidden"><label for="message" class=" mt-2 mb-2">Message</label></div>
            <editor v-model="message_body" :init="editorConfig"></editor>
         <!--    <input type="file" ref="fileInput" @change="handleImageUpload"> -->
        </div>

        <!--    <div class="input ">
            <div class="hidden"><label for="message" class="mt-2">Message</label></div>
            <div class="icon-container"><textarea name="message" id="message" cols="100" rows="12" v-model="message_body"
                    placeholder="Message..." class="icon-content" required></textarea><span
                    class="fas fa-quote-left icon"></span></div>
        </div> -->



        <div class="row">
            <div class="col-12 subject mt-5">
                <button class="" @click.prevent="sendMail()">{{ msg }} </button>
            </div>
        </div>


    </form>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Editor from '@tinymce/tinymce-vue';



const store = useStore()
const mail_groups = computed(() => {
    return store.state.mailModule.email_groups;
});


const msg = ref('Send Message');
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
    params.append("message_body", message_body.value);
    params.append("message_title", message_title.value);
    store.dispatch("sendEmail", params);
}
const editorConfig = {
      height: 500,
      plugins: 'link image',
      toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | link image',
      images_upload_handler: uploadImage,
    };

/* function handleEditorChange() {
    content.value = editor.getContent();
} */
function uploadImage(blobInfo) {
      return new Promise((resolve, reject) => {
        const file = blobInfo.blob();
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result;
          resolve(base64Data);
        };
        reader.onerror = () => {
          reject('Image upload failed.');
        };
        reader.readAsDataURL(file);
      });
    }

    function handleImageUpload() {
      const file = this.$refs.fileInput.files[0];
      const blobInfo = { blob: () => file };
      uploadImage(blobInfo)
        .then((base64Data) => {
          const imageElement = `<img src="${base64Data}" alt="Uploaded Image" />`;
          const editor = tinymce.get('editor'); // Replace 'editor' with your editor instance ID
          editor.execCommand('mceInsertContent', false, imageElement);
        })
        .catch((error) => {
          console.error(error);
        });
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


.input input,
.input textarea,
.input select {
    width: 100%;
    margin-bottom: 0.75em;
    border: none !important;
    outline: none !important;
}

.icon-container {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    width: 100%;
}

.icon {
    background-color: #fff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    padding: 0.8em;
    display: inline-block;
    align-self: stretch;
    color: #ddd;
    transition: color 0.75s;
}

.icon-content {
    background-color: #fff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    padding: 0.8em;
    width: 100%;
    z-index: 2;
}

.icon-content:focus {
    border: none;
    outline: 2px solid #f857a8;
}

.icon-content:focus~.icon {
    color: #f857a8;
}
</style>