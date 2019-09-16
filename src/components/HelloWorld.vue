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

      <form @submit.prevent="listSites">

          <input type="text" placeholder="Search" v-model="query.search">

          <button class="waves-effect waves-light btn-small">Buscar<i class="material-icons left">search</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>PREÇO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="sites of site" :key="sites.id" >

            <td>{{sites.name}}</td>
            <td>{{sites.price}}</td>
            <td>
              </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Product from '../services/products'

export default{

  data(){
    return{
      query:{
        search:''
      },
      site:[]
    }
  },

  mounted(){
    
  },
  methods:{
    listSites(){
        Product.listSites(this.query.search).then(resp => {
          this.site = resp.data
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
