<template>
    <button @click="openModal()"><i class="fa fa-cloud-upload"></i> CSV</button>
    <!-- The Modal -->
    <div class="modal" id="myModal" v-if="modal == true">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="closeModal()"> &times;</span>
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <input type="file" @change="onChange" ref="email_file" class="hidden-input"  />
  
          <div class="row">
            <div class="col-sm-12">
  
              <h4 style="text-align: center;">Drag and Drop File</h4>
              <label for="fileInput" class="file-label">
                <div v-if="isDragging"><i class="fa fa-upload fa-5x"></i></div>
                <div v-else><i class="fa fa-upload fa-5x"></i></div>
                {{ text }}
              </label>
              <label class="mt-2"> Group Name </label>
              <input type="text" placeholder="Group Name" class="form-control mt-3" style="border-radius: 10px;" v-model="email_group_name">
  
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
    data() {
      return {
        modal: false,
        msg: "Import",
        loader: "",
        Images: [],
        isDragging: false,
        text: "",
        date: "",
        email_group_name: ""
  
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
        if (this.Images != "" || this.Images == null) {
          this.msg = "Loading...";
          this.loader = "fa fa-spinner fa-spin";
          const params = new FormData();
          params.append("email_file", this.Images);
          params.append("email_group_name", this.email_group_name);
          this.$store.dispatch("addEmailCSV", params);
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
    padding: 10px 45px;
    border: none;
    border-radius: 10px;
    margin-left: 7px;
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
  
  .button_import {
    display: block;
    margin: 10px auto;
    width: 50%;
  }
  
  input:focus {
    box-shadow: none;
    outline: none;
  }
  </style>
  
  
  
  