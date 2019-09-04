<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">SHOP MINER</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="listSites">

          <label>Busca</label>
          <input type="text" placeholder="Search" v-model="query.search">

          <button class="waves-effect waves-light btn-small">Buscar<i class="material-icons left">save</i></button>

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

import Product from './services/products'

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
          alert("Buscando...")
          this.site = resp.data
        })
    }
     
  } 
}



</script>

<style>

</style>
