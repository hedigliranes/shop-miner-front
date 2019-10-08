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


      <div id="chart">
         <apexchart type=line height=350 :options="chartOptions" :series="series" />
      </div>

      
       <form @submit.prevent="predictPrice">

                <h5>Predição:</h5>

                <div class="input-field search col s6">
                    <input id="init" type="text" v-model="Init">
                    <label for="init">Data inicial</label> 
                </div> 

                <div class="input-field search col s6">
                    <input id="end" type="text" v-model="End">
                    <label for="end">Data Final</label> 
                </div> 

                <button class="left waves-effect waves-light btn-small">Buscar<i class="material-icons right">search</i></button>

             </form> 

             <h5>{{this.Resp}}</h5>
     
    </div>

  </div>
</template>


<script>

import Favorite from '../services/favorite'
import Product from '../services/products'
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

export default{

  props:[
  'id',
  'query',
  'idFav'
  ],
    components: {
        apexchart: VueApexCharts,
  }, 

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
      sites:[],
      linhas:[],
      colunas:[],
      idSite: '',
      Init: '',
      Resp:'',
      End: '',
      series: [{
            name: "Preço",
            data: [450,520,470,470,449]
        }],
        chartOptions: {
          chart: {
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'VARIAÇÃO DE PREÇO',
                align: 'center'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ["2019-05-20","2019-05-30","2019-05-31","2019-06-20","2019-06-25"],
            }
        }

    }
  },

  mounted(){
    this.findFavorite();
  },

  methods:{

    
    findFavorite(){
      Favorite.findFavorite(this.idFav).then(resp => {
          this.fav = resp.data;
          this.listData(); 
        })
    },

    listData(){
        Product.listSites(this.query,this.id).then(resp => {
          this.sites = resp.data;
          this.idSite = this.sites[0].site.id;
          this.predict();
          var i;
          for (i = 0; i < 3; i++){
              this.chartOptions.xaxis.categories.push(String((resp.data[i].date).substring(0, 10)));
              this.series[0].data.push(parseInt((resp.data[i].value).replace("R$", "").replace(".","").replace(",",".").replace("")));
              console.log(this.chartOptions.xaxis.categories);
          }
        })
    },

    predictPrice(){
      Favorite.predictPrice(this.idFav,this.Init,this.End).then(resp => {
          this.Resp = resp.data;
          console.log(resp.data);          
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

.att{
    text-align: left
}

</style>
  