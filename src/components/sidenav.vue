<template>
    <nav class="desktop">
        <div class="user_info text-center pt-5 ">
            <router-link to="/dash">
                <div class="img_tab">
                    <img src="../assets/svg.png">
                </div>
            </router-link>

            <h5> {{ fullname }}</h5>
            <p class="mail">{{ email }}</p>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-circle"></i> Quick
                Compose</button>
        </div>
        <ul>
            <li><b>Menu</b></li>
            <router-link to="/dash">
                <li><i class="fa fa-bar-chart" style="margin-right: 20px !important; "></i>Reports</li>
            </router-link>

            <router-link to="/groups">
                <li><i class="fa fa-bookmark" style="margin-right: 20px !important; "></i>Groups</li>
            </router-link>

            <router-link to="/mails">
                <li><i class="fa fa-envelope-open" style="margin-right: 20px !important; "></i>Manage Mails</li>
            </router-link>

            <router-link to="/profiles">
                <li><i class="fas fa-user" style="margin-right: 20px !important; "></i>Edit Profile</li>
            </router-link>

            <li @click="logOut()"><i class="fa fa-sign-out " style="margin-right: 20px !important; "></i>Log Out</li>

        </ul>


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="exampleModalLabel">New Message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="width: 100% !important; height: 80vh; overflow: scroll;">
                        <form_tab />
                        <!--   <form>
                            <h5>Please select your preffered message platform</h5>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <input type="radio" id="sms" name="fav_language" value="SMS">
                                    <label for="sms"> SMS</label>
                                </div>
                                <div class="col-6">
                                    <input type="radio" id="email" name="fav_language" value="Email" >
                                    <label for="email"> Email</label>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-8 subject">
                                    <input type="text" placeholder="Recipients" class="form-control">
                                </div>
                                <div class="col-4 subject">
                                    <button>Import Contacts </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-2 subject">
                                    <input type="text" placeholder="Subject" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-2 subject">
                                    <textarea name="" id="" cols="100" rows="10" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-2">
                                <input type="file">
                                </div>
                            </div>

                            <button class="mt-4">Send Message </button>

                            
                           


                        </form> -->
                    </div>
                </div>
            </div>
        </div>


    </nav>

    <nav class="mobile">
        <div class="brand">
            <i class="fa fa-bars fa-2x m-2" @click="open_nav()"></i>
        </div>
        <div v-if="mobilemenu != ''">
            <div class="user_info text-center pt-5 ">
                <router-link to="/dash">
                    <div class="img_tab">
                        <img src="../assets/svg.png">
                    </div>
                </router-link>

                <h5> {{ fullname }}</h5>
                <p class="mail">{{ email }}</p>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-circle"></i> Quick
                    Compose</button>
            </div>
            <ul>
                <li><b>Menu</b></li>
                <router-link to="/dash">
                    <li><i class="fa fa-bar-chart" style="margin-right: 20px !important; "></i>Reports</li>
                </router-link>

                <router-link to="/groups">
                    <li><i class="fa fa-bookmark" style="margin-right: 20px !important; "></i>Groups</li>
                </router-link>

                <router-link to="/mails">
                    <li><i class="fa fa-envelope-open" style="margin-right: 20px !important; "></i>Manage Mails</li>
                </router-link>
      

                <router-link to="/profiles">
                    <li><i class="fas fa-user" style="margin-right: 20px !important; "></i>Edit Profile</li>
                </router-link>

                <li @click="logOut()"><i class="fa fa-sign-out " style="margin-right: 20px !important; "></i>Log Out</li>

            </ul>

        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="exampleModalLabel">New Message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="width: 100% !important; height: 80vh; overflow: scroll;">
                        <form_tab />
                        <!--   <form>
                            <h5>Please select your preffered message platform</h5>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <input type="radio" id="sms" name="fav_language" value="SMS">
                                    <label for="sms"> SMS</label>
                                </div>
                                <div class="col-6">
                                    <input type="radio" id="email" name="fav_language" value="Email" >
                                    <label for="email"> Email</label>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-8 subject">
                                    <input type="text" placeholder="Recipients" class="form-control">
                                </div>
                                <div class="col-4 subject">
                                    <button>Import Contacts </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-2 subject">
                                    <input type="text" placeholder="Subject" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-2 subject">
                                    <textarea name="" id="" cols="100" rows="10" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-2">
                                <input type="file">
                                </div>
                            </div>

                            <button class="mt-4">Send Message </button>

                            
                           


                        </form> -->
                    </div>
                </div>
            </div>
        </div>


    </nav>
</template>
<script setup>
import form_tab from '../components/form.vue'
import { useStore } from 'vuex'
import { ref } from 'vue';
const store = useStore()
const fullname = JSON.parse(sessionStorage.getItem("fullname"));
const email = JSON.parse(sessionStorage.getItem("email"))
const logOut = () => {
    store.dispatch("logout");
}
const mobilemenu =ref(false)
const open_nav = () => {
    alert('menu')
    if(mobilemenu.value === ""){
        return mobilemenu.value = true
    } 
     return mobilemenu.value = ''
    
}

</script>


<style>
nav {
    height: 100vh;
    border-right: 1px solid red;
    padding: 0px !important;
    margin: 0px !important;
}

.mobile {
    display: none;
}

.img_tab {
    height: 100px;
    overflow: hidden;
    width: 80%;
    margin: auto;
    border-radius: 200px;
}

.img_tab img {
    width: 70%;
}

.mail {
    font-size: 14px;
    margin: 0px;
    padding: 0px;

}

.user_info button {
    background: blue;
    padding: 10px !important;
    color: aliceblue;
    width: 80%;
    margin: 10px !important;
    outline: none;
    border: none;
    border-radius: 20px;
}

.user_info h5 {
    font-size: 15px;
}

nav ul {
    list-style: none;
}

nav ul li {
    padding: 10px !important;
}

.modal-dialog {
    max-width: 1000px !important;
    margin: 1.5rem auto;
}

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
.subject textarea {
    border-bottom: 1px solid grey;
}

.subject input:focus {
    outline: none;
    border: none;
    box-shadow: none;
    border-bottom: 1px solid grey;

}

.subject button {
    outline: none;
    border: none;
    box-shadow: none;
    padding: 5px;
    border-bottom: 1px solid grey;

}

@media only screen and (max-width: 600px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: none;
    }

    .user_info {
        display: none;
    }

}
</style>