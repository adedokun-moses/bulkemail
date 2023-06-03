<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-2">
                <sidenav />
            </div>
            <div class="col-sm-10 ">
                <div class="row">
                    <div class="col-sm-12 design_plat m-0 p-0 mt-3">

                        <div class=" design_tab ">
                            <h5> <i class="fa fa-envelope"> Contacts </i>
                                <span style="color:  #989898;"></span>
                            </h5>
                            <h4>3000</h4>
                            <!--   <img src="../assets/f.png" alt="" class="mt-5" style="margin-left: 15px;"> -->
                        </div>

                        <div class=" design_tab" @click="group_push()" style="cursor: pointer;">
                            <h5>
                                Contact Groups <span style="color:  #989898;"><br>
                                </span></h5>
                            <h4>30</h4>
                        </div>


                   <!--      <div class=" design_tab ">
                            <h5> Import New <br> Contacts <span style="color:  #989898; "><br>
                                </span></h5>
                            <div class="mt-3 ">
                                <sms_import />
                            </div>
                        </div> -->
                     <!--    <div class=" design_tab ">
                            <h5> Import New <br> Emails <span style="color:  #989898; "><br>
                                </span></h5>
                            <div class="mt-3 d-flex">
                               <div>
                                <mail_import />
                               </div>
                               <div style="font-size: 15px;">
                                <mail_text_import/>
                               </div>
                                  
                            </div>
                        </div> -->

                        <div class=" design_tab ">
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-circle"></i>
                                Send Message
                            </button>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-center" id="exampleModalLabel">New Message
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body"
                                            style="width: 100% !important; height: 80vh; overflow: scroll;">
                                            <form_tab />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-sm-11 mx-auto">
                        <h5 class="mt-4"><b>Reports</b></h5>
                        <div class="table_head d-flex mt-5">
                            <div class="entries d-flex">
                                <h5>Show Entries</h5>
                                <button><i class="fa fa-cloud-upload"></i> Import</button>
                                <button><i class="fa fa-download"></i> Export</button>
                            </div>
                            <div class="filter_box">
                                <input type="text" placeholder="search">
                                <button><i class="fa fa-import"></i> Filter</button>
                                <button><i class="fa fa-import"></i> Action</button>
                            </div>
                        </div>

                        <table class="table mt-4">
                            <thead>
                                <th><input type="checkbox"></th>
                                <th>
                                    <div class="pull-left">
                                        <span style="padding-right: 8px !important">Time</span>
                                        <div class='icon-container'>
                                            <i class="fa fa-caret-up pull-right" aria-hidden="true"></i>
                                            <i class="fa fa-caret-down pull-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </th>

                                <th>
                                    <div class="pull-left">
                                        <span style="padding-right: 8px !important">From</span>
                                        <div class='icon-container'>
                                            <i class="fa fa-caret-up pull-right" aria-hidden="true"></i>
                                            <i class="fa fa-caret-down pull-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div class="pull-left">
                                        <span style="padding-right: 8px !important">To</span>
                                        <div class='icon-container'>
                                            <i class="fa fa-caret-up pull-right" aria-hidden="true"></i>
                                            <i class="fa fa-caret-down pull-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div class="pull-left">
                                        <span style="padding-right: 8px !important">Type</span>
                                        <div class='icon-container'>
                                            <i class="fa fa-caret-up pull-right" aria-hidden="true"></i>
                                            <i class="fa fa-caret-down pull-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div class="pull-left">
                                        <span style="padding-right: 8px !important">Status</span>
                                        <div class='icon-container'>
                                            <i class="fa fa-caret-up pull-right" aria-hidden="true"></i>
                                            <i class="fa fa-caret-down pull-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div class="pull-left">
                                        <span style="padding-right: 8px !important">Action</span>
                                        <div class='icon-container'>
                                            <i class="fa fa-caret-up pull-right" aria-hidden="true"></i>
                                            <i class="fa fa-caret-down pull-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </th>
                            </thead>
                            <tbody style="margin-top: 200px !important;">
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td>17th, May 2022. 9:46am</td>
                                    <td>98228391912</td>
                                    <td>98228391912 +250 more</td>
                                    <td>Email, SMS</td>
                                    <td>Delivered</td>
                                    <td><i class="fa fa-trash"></i> <i class="fa fa-edit"
                                            style="padding-left: 10px !important;"></i></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup >
import sidenav from '../components/sidenav.vue';
import form_tab from '../components/form.vue';
import mail_text_import from '../components/mailimporttext.vue';
import mail_import from '../components/mailimport.vue';
import sms_import from '../components/smsimport.vue';

import router from '@/router';

const group_push = () => {
    router.push('/groups')
};


</script>


<style scoped>
.home {
    background: red;
    height: 100vh;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0px;
    padding: 0px;
    -ms-overflow-style: none !important;
    /* for Internet Explorer, Edge */
    width: 100%;
}

.home_page {
    background: red;
    height: 100vh;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0px;
    padding: 0px;
    -ms-overflow-style: none !important;
    /* for Internet Explorer, Edge */
    width: 100%;
}


.home::-webkit-scrollbar {
    display: none;
}

.home_page::-webkit-scrollbar {
    display: none;
}

.icon-container {
    display: flex;
    flex-direction: column;
    align-content: center;
}


.design_plat {
    justify-content: space-between;
    display: flex;
}

.design_plat>div {
    margin: 0px;
    padding: 0px;
    width: 30%;
    height: 130px;
    margin: 0px 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
}

.design_tab h5 {
    font-size: 20px;
    text-align: center;
    margin: 15px 0px 0px 0px;
}

.design_tab h4 {
    font-size: 20px;
    width: 50%;
    margin: 25px auto;
    border: 2px solid black;
    border-radius: 30px;
    padding: 15px;
    text-align: center;
}
.design_tab button {
    margin: 35px;
    outline: none;
    border: none;
    padding: 20px;
    border-radius: 20px;
    width: 80%;
}
.pull-left {
    display: flex;
    align-items: center;
}

span {
    padding-top: 0px;
}

.table_head {
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px #888888;
    background: #989898;
    padding: 5px 2px;
    border-radius: 3px;

}

.table_head>div {
    align-items: center;
}

.table_head button {
    margin: 0px 10px !important;
    padding: 10px 25px !important;
    outline: none;
    border: none;
    border-radius: 10px;
}

.filter_box input {
    padding: 8px 10px !important;
    border-radius: 5px;
    outline: none;
}

</style>