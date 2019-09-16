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
          <li><router-link to="config">Configurações</router-link></li>
          <li><router-link to="site">Sites</router-link></li>
          <li><router-link to="favorite">Favoritos</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="editConfigs">

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

  props:[
  'id'
  ],

  data(){
    return{
      configIdObj:'',
      config: {
        id:'',
        name:'',
        descrition: ''
      }
    }
  },

  mounted(){
    this.findConfig()
  },

  methods:{

    editConfigs(){
        Configs.editConfigs(this.config).then(resp => {
          window.location.replace("#/config");
        })
    },

    findConfig(){
      Configs.findConfig(this.id).then(resp => {
          this.config = resp.data;
          console.log(this.config);
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
  