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

      <form @submit.prevent="saveSites">

          <input type="text" placeholder="Nome" v-model="site.name">
          <input type="text" placeholder="URL" v-model="site.url">
          <input type="text" placeholder="Tag Class" v-model="site.tagClass">
          <input type="text" placeholder="Produto Class" v-model="site.productClass">
          <input type="text" placeholder="Descrição Class" v-model="site.descriptionClass">
          <input type="text" placeholder="Radical Class" v-model="site.radicalLink">
          <input type="text" placeholder="Imagem Class" v-model="site.imgClass">
          <input type="text" disabled placeholder="Id da configuração" v-model="site.config.id">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

    </div>

  </div>
</template>

<script>

import Sites from '../services/sites'

export default{

props:[
  'confId'
  ],

  data(){
    return{
      site: {
      	name:'',
      	url: '',
        tagClass:'',
        productClass: '',
        descriptionClass: '',
        productLink: '',
        radicalLink: '',
        imgClass:'',
        config:{
          id:''
        }
      }
    }
  },

  mounted(){
    this.site.config.id = this.confId;
  },

  methods:{
    saveSites(){
        Sites.saveSites(this.site).then(resp => {
          window.location.replace("#/config/view/" + this.confId);
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
