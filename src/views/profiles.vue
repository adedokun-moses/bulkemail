<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-2">
                <sidenav />
            </div>
            <div class="col-sm-10 ">
                <div class="row">
                    <div class="col-sm-11 mx-auto">
                        <h5 class="mt-4"><b>Profiles Management</b></h5>
                        <div class="row">
                            <div class="col-sm-12 design_plat m-0 p-0 mt-3">

                                <div class=" design_tab d-flex ">
                                    <div>
                                        <i class="fa fa-user fa-5x m-5"></i>
                                    </div>
                                    <div class="user_det">
                                        <h5>Hello <b>John</b>, Welcome to your database</h5>
                                        <p>Take Charge of your database by making changes to your employee details</p>
                                        <p>You currently have <b>10</b> registered user</p>
                                    </div>
                                    <div>
                                        <button class="btn btn-success mr-5" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal1">Add New User</button>
                                        <!-- Modal -->
                                        <div class="modal fade" id="exampleModal1" tabindex="-1"
                                            style="width: 50% !important; margin-left: 300px !important;; "
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">

                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body"
                                                        style="width: 100% !important; height: 80vh; overflow: scroll;">
                                                        <form>
                                                            <h5>Add New User</h5>
                                                            <p>Ensure All Details are filled correctly</p>
                                                            <div class="formgroup mt-4">
                                                                <label>Employee Name</label>
                                                                <input type="text" class="form-control mt-2">
                                                            </div>

                                                            <div class="formgroup mt-4">
                                                                <label>Employee Email</label>
                                                                <input type="email" class="form-control mt-2"
                                                                    placeholder="example@yahoo.com">
                                                            </div>

                                                            <div class="formgroup mt-4">
                                                                <label>Employee Phone</label>
                                                                <input type="text" class="form-control mt-2"
                                                                    placeholder="0902288282">
                                                            </div>

                                                            <div class="formgroup mt-4">
                                                                <button class="form-control btn btn-success p-3">Register
                                                                    User</button>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <table class="table">
                                    <thead>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th style="text-align: center;">Action</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Adedokun Moses</td>
                                            <td>09029768539</td>
                                            <td>adedokunmoses@gmail.com</td>
                                            <td style="text-align: center;"><span><i class="fa fa-trash mr-5">
                                                    </i>Delete</span> <span style="margin-left: 30px;"><i
                                                        class="fa fa-edit mr-5"> </i>Edit</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import sidenav from '../components/sidenav.vue';


</script>


<style scoped>
.design_plat {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 200px;
    margin: 0px 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
}

.design_tab {
    align-items: center;
}

.design_tab h5 {
    font-size: 20px;
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

.user_det h5 {
    font-size: 35px;
    padding-top: 10px;
}

.user_det p {
    margin: 10px 0px;
    font-size: 20px;
}

.design_tab button {
    display: block;
    margin-left: 50px;
    border-radius: 10px;
}

.formgroup button {
    margin-left: 0px;
}

.design_tab button:focus {
    box-shadow: none;

}

.table {
    margin-top: 10px;
    max-height: 350px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none !important;
}

.table::-webkit-scrollbar {
    display: none;
}

@media only screen and (min-width: 481px max-width: 768px) {
    .design_plat {
        flex-direction: column;
    }

    .design_plat>div {
        width: 100%;
        height: 130px;
        margin: 20px 10px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
        border-radius: 12px;
    }

}

</style>