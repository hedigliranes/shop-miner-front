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

      <h5 class="att">Sites:</h5>

    <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>URL</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="site of sites">

            <td>{{site.site.name}}</td>
            <td>{{site.site.url}}</td>
            

          </tr>

        </tbody>
      
      </table>

      <h5 class="att">Produto:</h5>


    <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>PREÇO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="site of sites">

            <td>{{site.product.name}}</td>
            <td>{{site.price.value}}</td>
            

          </tr>

        </tbody>
      
      </table>
     
    </div>

  </div>
</template>

<script>

import Favorite from '../services/favorite'
import Product from '../services/products'

export default{

  props:[
  'id',
  'query',
  'idFav'
  ],

  data(){
    return{
      fav:{
        rateInteger:'',
        value:'',
        site:{
          name:'',
          config:{
            id:''
          }
        }
      },
      sites:[]
    }
  },

  mounted(){
    this.findFavorite()
  },

  methods:{

    
    findFavorite(){
      Favorite.findFavorite(this.idFav).then(resp => {
          this.fav = resp.data;
          this.listData()
        })
    },

    listData(){
        Product.listSites(this.query,this.id).then(resp => {
          this.sites = resp.data
        })
    },

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

.att{
    text-align: left
}

</style>
  