<template>
    <button @click="openModal()"><i class="fa fa-cloud-upload"></i> Import </button>
    <!-- The Modal -->
    <div class="modal" id="myModal" v-if="modal == true">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="closeModal()"> &times;</span>
        <div class="dropzone-container">
          <div class="row">
            <div class="col-sm-12">
              <h4 style="text-align: center;">Copy and Paste Text Phone Numbers</h4>
              <div class="formgroup">
                <textarea name="textfile" cols="85" rows="10" placeholder="Paste Text File " v-model="phone_contact"></textarea>
              </div>
              <div class="formgroup">
                <label class="mt-2"> Group Name </label>
                <input type="text" placeholder="Group Name" class="form-control mt-3" style="border-radius: 10px;" v-model="phone_group_name">
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
    
    data() {
      return {
        modal: false,
        msg: "Import",
        loader: "",
        phone_contact: "",
        phone_group_name: ""
      
  
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
        if (this.phone_contact == "" || this.phone_group_name == ""){
          alert("All fields must be filled ")
        }
          this.msg = "Loading...";
          this.loader = "fa fa-spinner fa-spin";
          const params = new FormData();
          params.append("phone_contact", this.phone_contact);
          params.append("phone_group_name", this.phone_group_name);
          this.$store.dispatch("addPhone", params);
        
      },
  
  
    },
   
  };
  
  
  
  </script>
    
  <style scoped>
  button {
    background: #888;
    border: 0px solid white;
    cursor: pointer;
    color: black;
    outline: none;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    margin-left: 50px;
    text-align: center;
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
    
    
    
    