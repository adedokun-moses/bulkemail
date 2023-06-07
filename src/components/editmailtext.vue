<template>
    <button @click="openModal()"><i class="fa fa-edit"></i> Edit </button>
    <!-- The Modal -->
    <div class="modal" id="myModal" v-if="modal == true">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close" @click="closeModal()"> &times;</span>
            <h5>Choose The File Format You Want To Upload</h5>
            <div class="the_tabs">
                <input type="radio" id="tab_one" name="the_tabs" checked="checked">
                <label for="tab_one">Text</label>
                <div class="tab">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 style="text-align: center;">Copy and Paste Text File</h4>
                            <div class="formgroup">
                                <textarea name="textfile" cols="55" rows="10" placeholder="example@gmail.com"
                                    v-model="email_contact"></textarea>
                            </div>

                            <button @click="submitFile" class="mt-4 button_import">
                                <i :class="loader"></i> {{ msg }}
                            </button>
                        </div>
                    </div>
                </div>

                <input type="radio" id="tab_two" name="the_tabs">
                <label for="tab_two">CSV</label>
                <div class="tab">
                    <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
                        <input type="file" @change="onChange" ref="email_file" class="hidden-input" />

                        <div class="row">
                            <div class="col-sm-12">
                                <h4 style="text-align: center;">Drag and Drop File</h4>
                                <label for="fileInput" class="file-label">
                                    <div v-if="isDragging"><i class="fa fa-upload fa-5x"></i></div>
                                    <div v-else><i class="fa fa-upload fa-5x"></i></div>
                                    {{ text }}
                                </label>
                                <button @click="editCSV" class="mt-4 button_import">
                                    <i :class="loader"></i> {{ msg }}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
    
    
<script>

export default {
    props: ["mails"],
    data() {
        return {
            modal: false,
            msg: "Import",
            loader: "",
            email_group_id: this.mails.group_id,
            email_contact: "",
            group_name: this.mails.group_name,
            text: ""
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


        onChange() {
            // this.files = [...this.$refs.file.files];
            this.Images = this.$refs.email_file.files[0];
            this.text = this.$refs.email_file.files[0].name
            console.log(this.text)
        },
        dragover(e) {
            e.preventDefault();
            this.isDragging = true;
        },
        dragleave() {
            this.isDragging = false;
        },
        drop(e) {
            e.preventDefault();
            this.$refs.email_file.files = e.dataTransfer.files;
            this.onChange();
            this.isDragging = false;
        },


        submitFile() {
            if (this.email_contact == "") {
                alert("All fields must be filled ")
            }
            this.msg = "Loading...";
            this.loader = "fa fa-spinner fa-spin";
            const params = new FormData();
            params.append("email_group_id", this.email_group_id);
            params.append("email_contact", this.email_contact);
            params.append("email_group_name", this.group_name);
           // alert(this.group_name)
            this.$store.dispatch("editEmail", params);
        },

        editCSV() {
            if (this.Images != "" || this.Images == null) {
                this.msg = "Loading...";
                this.loader = "fa fa-spinner fa-spin";
                const params = new FormData();
                params.append("email_file", this.Images);
                params.append("email_group_id", this.email_group_id);
                this.$store.dispatch("editEmailCSV", params);
            }
        },
    },

};



</script>
    
<style scoped>
button {
    width: 100%;
    background: grey;
    outline: none;
    border: none;
    border-radius: 2px;
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
    margin: 2% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    border-radius: 8px;
    height: 100vh;
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


.dropzone-container {
    padding: 0rem;
    color: black;
}

.button_import {
    display: block;
    margin: 10px auto;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
}

.formgroup input {
    width: 100%;
    outline: none;
    margin: 10px 0px;
    border-radius: 10px;
    padding: 10px;
}

.formgroup input:focus {
    box-shadow: none;
}

.formgroup textarea {
    outline: none;
    border-radius: 10px;
}


/* Tabs */

.the_tabs {
    display: flex;
    flex-wrap: wrap;
    max-width: 75rem;
    margin: 0 auto;
    padding: 1rem;
}

.the_tabs input[type="radio"] {
    display: none;
}

.the_tabs label {
    padding: 1rem 2.5rem;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background: #ffffff;
    background: linear-gradient(0deg, #ffffff 0%, #d5d5d5 100%);
    outline: 0.063rem solid #d5d5d5;
    box-shadow: 0.063rem 0.063rem 0.063rem #555555;
    font-weight: bold;
    cursor: pointer;
}

.the_tabs .tab {
    width: 100%;
    padding: 1rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    background: #ffffff;
    background: linear-gradient(180deg, #ffffff 0%, #d5d5d5 80%);
    outline: 0.063rem solid #d5d5d5;
    box-shadow: 0.063rem 0.125rem 0.125rem #555555;
    order: 1;
    display: none;
}

.the_tabs .tab h2 {
    font-size: 2rem;
}

.the_tabs .tab p {
    padding-bottom: 1rem;
}

.the_tabs input[type="radio"]:checked+label+.tab {
    display: block;
}

.the_tabs input[type="radio"]:checked+label {
    background: #d5d5d5;
    background: linear-gradient(0deg, #d5d5d5 0%, #9d9d9d 100%);
    color: #ffffff;
}



.dropzone-container {
    padding: 0rem;
    color: black;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    width: 100%;
    margin: auto;
    padding: 20px;
    cursor: pointer;
    height: 200px;
    border-radius: 20px;
    text-align: center;
    border: 2px solid grey;
}
</style>
    
    
    
    