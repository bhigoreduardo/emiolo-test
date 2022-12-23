<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>

              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Bem-vindo ao DogAdmin!</h1>
                  </div>
                  <FormLoginVue />
                  <hr>
                  <div class="text-center">
                    <router-link to="/cadastro" class="small">Criar um conta</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormLoginVue from '../components/FormLogin.vue';

export default {
  name: 'LoginView',
  components: {
    FormLoginVue
  }
}
</script>

<style scoped>
.bg-login-image {
  background-image: url('/public/images/dog-login.jfif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card {
  overflow: hidden !important;
}

.small {
  font-size: 80%;
  font-weight: 400;
  color: #4e73df;
  text-decoration: none;
  background-color: transparent;
  transition: all .15s ease-in-out;
}

.small:hover {
  text-decoration: underline;
}
</style>