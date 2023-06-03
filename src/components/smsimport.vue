<template>
    <button @click="openModal()"><i class="fa fa-cloud-upload"></i> Import</button>
    <!-- The Modal -->
    <div class="modal" id="myModal" v-if="modal == true">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="closeModal()"> &times;</span>
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <input type="file" @change="onChange" ref="import_files" class="hidden-input" />
  
          <div class="row">
            <div class="col-sm-12">
  
              <h4 style="text-align: center;">Drag and Drop File</h4>
              <label for="fileInput" class="file-label">
                <div v-if="isDragging"><i class="fa fa-upload fa-5x"></i></div>
                <div v-else><i class="fa fa-upload fa-5x"></i></div>
                {{ text }}
              </label>
              <label class="mt-2"> Group Name </label>
              <input type="text" placeholder="Group Name" class="form-control mt-3" style="border-radius: 10px;">
  
              <button @click="submitFile" class="mt-4 button_import" >
                <i :class="loader"></i> {{ msg }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  
  export default {
    props: ['channel_id'],
    data() {
      return {
        modal: false,
        msg: "Import",
        loader: "",
        Images: [],
        isDragging: false,
        text: "",
        date: "",
  
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
        this.Images = this.$refs.import_files.files[0];
        this.text = this.$refs.import_files.files[0].name
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
        this.$refs.import_files.files = e.dataTransfer.files;
        this.onChange();
        this.isDragging = false;
      },
      submitFile() {
        if (this.Images != "" || this.Images == null) {
          this.msg = "Loading...";
          this.loader = "fa fa-spinner fa-spin";
          let user_id = JSON.parse(sessionStorage.getItem("user_id"));
          const params = new FormData();
          params.append("import_files", this.Images);
          params.append("user_id", user_id);
          params.append("channel_id", this.channel_id)
          this.$store.dispatch("import_playlist", params);
        }
      },
  
  
    },
    /* mounted() {
      alert(this.channel_id)
    } */
  };
  
  
  
  </script>
  
  <style scoped>
  button {
    background: #888;
    border: 0px solid white;
    cursor: pointer;
    color: black;
    outline: none;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-left: 60px;
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
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(176, 34, 34);
    /* Fallback color */
    background-color: rgba(1, 1, 1, 0.4);
    /* Black w/ opacity */
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    border-radius: 8px;
    height: auto;
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
  
  .file-upload-wrapper {
    width: auto;
    margin: auto;
    color: red;
  }
  
  .file-upload-wrapper button {
    border: 2px solid red;
    margin: 10px 0px;
  }
  
  .file-upload-wrapper button:hover {
    color: black;
    background: rgb(211, 134, 134);
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
  
  .preview-container {
    display: flex;
    margin-top: 0rem;
  }
  
  .preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    border-radius: 20px;
    height: 200px;
    overflow: hidden;
    background: red;
  }
  
  .preview-img {
    width: 100%;
    border-radius: 5px;
    border-radius: 10px;
  }
  
  .button_import {
    display: block;
    margin: 10px auto;
    width: 50%;
  }
  
  .formgroup input {
    width: 100%;
    outline: none;
    margin: 10px 0px;
    border-radius: 10px;
    padding: 10px;
  }
  </style>
  
  
  
  