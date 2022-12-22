<template>
  <router-view />
</template>

<style>
body {
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
  height: 100vh;
}

.btn {
  width: 100%;
  border-radius: 10rem !important;
  padding: 15px !important;
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: #4e73df;
  border-color: #4e73df;
  transition: all .15s ease-in-out;
}

.form-group {
  margin-bottom: 1rem;
}

form.user .form-control-user {
  font-size: .8rem;
  border-radius: 10rem;
  padding: 1.5rem 1rem;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6e707e;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d1d3e2;
  border-radius: 0.35rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
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
