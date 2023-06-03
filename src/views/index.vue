<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col-sm-10 mx-auto homepage">
        <div class="row">
          <div class="col-sm-6 homeimg">
            <!--  <img src="../assets/moplexlogo.png"> -->
          </div>
          <div class="col-sm-6">
            <form class="mt-5">

              <h5>Welcome Back</h5>
              <p>Sign in to your account</p>
              <div class="formgroup mt-3">
                <label> Email</label>
                <input type="text" placeholder="Email" class="form-control" v-model="email">
              </div>
              <div class="formgroup mt-3">
                <label>Password</label>
                <input type="password" placeholder="Password" class="form-control" v-model="password">
                <i class="fa fa-eye"></i>
              </div>
              <div class="formgroup">
                <p>Forgot Password?</p>
              </div>
              <div class="formgroup mt-3">
                <button class="btn form-control " @click.prevent="userLogin()">{{ login
                }}</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const login = ref('Sign In');
const email = ref('');
const password = ref('');

const userLogin = () => {
  // const router = useRouter()
  login.value = 'Progress..'
  var params = new FormData();
  params.append("email", email.value);
  params.append("password", password.value);
  store.commit("LOG_IN", params);


}

</script>


<style scoped>
.home {
  height: 100vh;
}

.homepage {
  margin: 3.5rem 0px;
  background: rgba(0, 0, 0, 0.8);
  height: 500px;
  border-radius: 10px;
  opacity: 70;
  color: white;
}

form {
  width: 80%;
  margin: auto;
}

form h5 {
  font-size: 50px;
  font-weight: 800;
}

.formgroup input,
.formgroup button {
  margin-top: 10px;
  padding: 10px;

}

.formgroup button {
  background: #ff0000;
  font-weight: bolder;
  color: white;
}

.formgroup p {
  float: right;
  margin-top: 10px;
}

.formgroup input:focus,
.formgroup button:focus {
  box-shadow: none;
}

.formgroup button:hover {
  border: none;
  margin-top: 10px;
  padding: 10px;
}

.formgroup i {
  position: relative;
  bottom: 35px;
  right: 20px;
  float: right;
}

.homeimg img {
  display: block;
  margin: 200px 0px auto auto;
}
</style>