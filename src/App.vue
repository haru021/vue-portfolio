<template>
  <div id="app">
    <b-container class="header">
      <b-row>
        <b-col cols="12">  
          <h1 class="bg-dark"><router-link to="/" class="text-light">Moe'sPorfolio</router-link></h1>
          <nav class="navbar navbar-dark bg-dark">
            <b-button class="navbar-toggler" @click="openMenu"><span class="navbar-toggler-icon"></span></b-button>
            <Drawer :direction="'left'" :exist="true" ref="LeftDrawer">
              <b-button class="navbar-toggler" @click="closeMenu"><span class="close-btn"><font-awesome-icon icon="times" /></span></b-button>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">自己紹介</a></li>
                <li><a href="#">こんな風に働きたい</a></li>
                <li><a href="#">こんな風に働きたい</a></li>
              </ul>
            </Drawer>
          </nav> 
        </b-col>
      </b-row>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import Drawer from './components/Drawer.vue';
export default {
  name: 'App',
  data(){
    return{
      active: false,
      navi: false,
    }
  },
  components:{
    'Drawer': Drawer,
  },
  methods:{
    naviOpen:function(){
      this.active = !this.active;
      this.navi = !this.navi;
    },
    openMenu(){
      if(this.$refs.LeftDrawer.active){
        this.$refs.LeftDrawer.close();					
      }else{
        this.$refs.LeftDrawer.open();
      }
    },
    closeMenu(){
      if(this.$refs.LeftDrawer.active){
        this.$refs.LeftDrawer.close();					
      }
    }
  }
}
</script>

<style>
.bg-dark{
  margin-bottom: 0%;
  font-size: 1.5rem;
}
.close-btn{
  font-size: 3rem;
  color:#ffffff;
}
ul{
  padding-left: 0;
}
  li{
    list-style: none;
    padding-left: 0%;
    margin: 5%;
    background-color: #ffffff;
    padding:3%;
  }
  li a{
    font-size: 22px;
    color: #333333;
  }

</style>

