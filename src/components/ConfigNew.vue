<template>
  <div id="app">

  <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
      <router-link to="/" class="left"><img class="logo" src="../assets/logo2.png"></router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li><router-link to="/">Busca</router-link></li>
          <li><router-link to="/config">Configurações</router-link></li>
          <li><router-link to="/site">Sites</router-link></li>
          <li><router-link to="/favorite">Favoritos</router-link></li>
        </ul>
      </div>
    </nav>

  <ul class="sidenav" id="mobile-demo">
    <li style = "margin-bottom:10%"><router-link to="/" class="center"><img class="logo2" src="../assets/logo2Blue.png"></router-link></li>
    <li><router-link to="/">Busca</router-link></li>
    <li><router-link to="/config">Configurações</router-link></li>
    <li><router-link to="/site">Sites</router-link></li>
    <li><router-link to="/favorite">Favoritos</router-link></li>
  </ul>

    <div class="container">

      <form @submit.prevent="saveConfigs">

          <input type="text" placeholder="Nome" v-model="config.name">
          <input type="text" placeholder="Descrição" v-model="config.descrition">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

    </div>

  </div>
</template>

<script>

import Configs from '../services/configs'

export default{

  data(){
    return{
      config: {
      	name:'',
      	descrition: ''
      }
    }
  },

  mounted(){
  },

  methods:{
    saveConfigs(){
        Configs.saveConfigs(this.config).then(resp => {
          window.location.replace("#/config");
        })
    }
     
  } 
}



</script>

<style>
nav.nav-center ul {
    text-align: center;
}
nav.nav-center ul li {
    display: inline;
    float: none;
}
nav.nav-center ul li a {
    display: inline-block;
}

</style>
