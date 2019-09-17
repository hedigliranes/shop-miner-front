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


      <table>

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
