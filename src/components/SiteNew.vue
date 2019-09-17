<template>
  <div id="app">

  <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
        <h2>Shop-Miner</h2>
      </div>
    </nav>

    <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/config">Configurações</router-link></li>
          <li><router-link to="/site">Sites</router-link></li>
          <li><router-link to="/favorite">Favoritos</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="saveSites">

          <input type="text" placeholder="Nome" v-model="site.name">
          <input type="text" placeholder="URL" v-model="site.url">
          <input type="text" placeholder="Tag Class" v-model="site.tagClass">
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
