<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-register-image"></div>

              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Criar conta!</h1>
                  </div>
                  <FormCadastroVue />
                  <hr>
                  <div class="text-center">
                    <router-link to="/recuperar-senha" class="small">Esqueceu sua senha?</router-link>
                  </div>
                  <div class="text-center">
                    <router-link to="/" class="small">Já possuo uma conta</router-link>
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
import FormCadastroVue from '@/components/FormCadastro.vue';

export default {
  name: 'CadastroView',
  components: {
    FormCadastroVue
  }
}
</script>

<style scoped>
.bg-register-image {
  background-image: url('/public/images/dog-register.jfif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>