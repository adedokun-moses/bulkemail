<template>
    <button @click="openModal()"><i class="fa fa-edit"></i> Edit </button>
    <!-- The Modal -->
    <div class="modal" id="myModal" v-if="modal == true">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="closeModal()"> &times;</span>
        <div class="dropzone-container">
          <div class="row">
            <div class="col-sm-12">
              <h4 style="text-align: center;">Copy and Paste Text File</h4>
              <div class="formgroup">
                <textarea name="textfile" cols="85" rows="10" placeholder="example@gmail.com" v-model="email_contact"></textarea>
              </div>
            
              <button @click="submitFile" class="mt-4 button_import">
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
    props: ["mails"],
    data() {
      return {
        modal: false,
        msg: "Import",
        loader: "",
        email_group_id: this.mails.group_id,
        email_contact: "",
        group_name: this.mails.group_name
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
  
     
      submitFile() {
        if (this.email_contact == ""){
          alert("All fields must be filled ")
        }
          this.msg = "Loading...";
          this.loader = "fa fa-spinner fa-spin";
          const params = new FormData();
          params.append("email_group_id", this.email_group_id);
          params.append("email_contact", this.email_contact);
          params.append("group_name", this.group_name);
          this.$store.dispatch("editEmail", params);
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
    margin: 5% auto;
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
  .formgroup input:focus{
  box-shadow: none;
  }
  .formgroup textarea{
    outline: none;
    border-radius: 10px;
  }
  </style>
    
    
    
    