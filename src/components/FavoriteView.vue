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
  