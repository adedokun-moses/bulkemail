<template>
    <button @click="openModal()"><i class="fa fa-envelope"></i> SMS </button>
    <!-- The Modal -->
    <div class="modal" id="myModal" v-if="modal == true">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close" @click="closeModal()"> &times;</span>
            <form>
                <div class="input ">
                    <div class="hidden"><label for="subject" class=" mb-2">Subject</label></div>
                    <div class="icon-container"><input type="text" name="subject" id="subject" placeholder="Subject"
                            v-model="message_title" class="icon-content" required><span
                            class="fas fa-pencil-alt icon"></span></div>
                </div>

                <div class="input ">
                    <div class="hidden"><label for="message" class="mb-2">Message</label></div>
                    <editor v-model="message_body" :init="editorConfig"></editor>
                    <!--  <div class="icon-container"><textarea name="message" id="message" cols="100" rows="12"  v-model="message_body"
                            placeholder="Message..." class="icon-content" required></textarea><span
                            class="fas fa-quote-left icon"></span></div> -->
                </div>



                <div class="row">
                    <div class="col-12 subject mt-5">
                        <button class="" @click.prevent="sendMail()">{{ msg }} </button>
                    </div>
                </div>


            </form>

        </div>
    </div>
</template>
    
    
<script>

import Editor from '@tinymce/tinymce-vue';
export default {
    components: { Editor },
    props: ["mails"],
    data() {
        return {
            modal: false,
            msg: "Send Message",
            loader: "",
            email_group_id: this.mails.group_id,
            message_title: "",
            message_body: ""

        }
    },

    methods: {
        closeModal() {
            // Get the modal
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        },
        openModal() {
            if (this.modal == "") {
                return (this.modal = true);
            }
            return (this.modal = "");
        },

        sendMail() {
            this.msg = "Sending...";
            this.loader = "fa fa-spinner fa-spin";
            const params = new FormData();
            params.append("email_group_id", this.email_group_id);
            params.append("message_body", this.message_body);
            params.append("message_title", this.message_title);
            // alert(this.group_name)
            this.$store.dispatch("sendEmail", params);
        },
        editorConfig() {
            height = 500,
                plugins = 'link image',
                toolbar = 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | link image',
                images_upload_handler = uploadImage
        },
        uploadImage(blobInfo) {
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
        },

        handleImageUpload() {
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


    },

};



</script>
    
<style scoped>
button {
    width: 100%;
    background: grey;
    outline: none;
    border: none;
    border-radius: 10px;
}

/* The Modal (background) */
.modal {
    display: block;
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: hidden;
    /* Enable scroll if needed */
    background-color: rgb(176, 34, 34);
    /* Fallback color */
    background-color: rgba(1, 1, 1, 0.4);
    /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 1% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    overflow: scroll;
    height: 70vh;
}

.modal-content h5 {
    text-align: center;
    color: black;
    font-family: sans-serif;
    font-weight: bold;
}

/* The Close Button */
.close {
    color: red;
    float: right !important;
    font-size: 40px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}



/* Form */



.input input,
.input textarea {
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
    
    
    
    