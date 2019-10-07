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


      <table class="striped">

        <thead>

          <tr>
            <th>Tempo</th>
            <th>Query</th>
            <th>Configuração</th>
            <th>Opções</th>

          </tr>

        </thead>

        <tbody>

          <tr v-for="site of favorites" :key="site.id" >

            <td>{{site.rateInteger}}</td>
            <td>{{site.value}}</td>
            <td>{{site.config.id}}</td>
            <td>
            <button class=" red darken-3 btn-small"><router-link :to="'favorite/update/' + site.id" class="router-link"><i class="material-icons center">create</i></router-link></button>
            <button @click = "deleteFavorites(site)" class=" blue darken-3 btn-small"><i class="material-icons center">delete</i></button>
            <button class=" green darken-3 btn-small"><router-link :to="'favorite/view/' + site.id + '/' + site.config.id + '/' + site.value" class="router-link"><i class="material-icons center">remove_red_eye</i></router-link></button>
            </td>
            

          </tr>

        </tbody>
      
      </table>

    </div>



  </div>
</template>

<script>

import Favorites from '../services/favorite'

export default{

  data(){
    return{
      favorites:[]
    }
  },

  mounted(){
    this.listFavorites()
  },

  methods:{
    listFavorites(){
        Favorites.listFavorites().then(resp => {
          this.favorites = resp.data
        })
    },
    deleteFavorites(configDel){
        Favorites.deleteFavorites(configDel).then(resp => {
          this.listFavorites();
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
