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

      <button class=" pink darken-3 btn-small"><router-link to="config/new" class="router-link">Adicionar </router-link><i class="material-icons left">add_circle</i></button>


      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="config of configs" :key="config.id" >

            <td>{{config.name}}</td>
            <td>{{config.descrition}}</td>
            <td>
            <button class=" red darken-3 btn-small"><router-link :to="'config/update/' + config.id" class="router-link"><i class="material-icons center">create</i></router-link></button>
            <button @click = "deleteConfigs(config)" class=" blue darken-3 btn-small"><i class="material-icons center">delete</i></button>
            <button class=" green darken-3 btn-small"><router-link :to="'config/view/' + config.id" class="router-link"><i class="material-icons center">remove_red_eye</i></router-link></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>



  </div>
</template>

<script>

import Configs from '../services/configs'

export default{

  data(){
    return{
      configs:[]
    }
  },

  mounted(){
    this.listConfigs()
  },

  methods:{
    listConfigs(){
        Configs.listConfigs().then(resp => {
          this.configs = resp.data
        })
    },
    deleteConfigs(configDel){
        Configs.deleteConfigs(configDel).then(resp => {
          this.listConfigs();
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

.router-link{
  color: white;
}

.pink, darken-3{
	float:left;
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>
