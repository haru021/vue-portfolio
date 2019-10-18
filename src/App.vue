<template>
  <div id="app">
    <header class="w-100"> 
          <h1 class="bg-dark"><router-link to="/" class="text-light">Moe'sPorfolio</router-link></h1>
          <nav class="navbar navbar-dark bg-dark">
            <b-button class="navbar-toggler" @click="openMenu"><span class="navbar-toggler-icon"></span></b-button>
            <Drawer :direction="'left'" :exist="true" ref="LeftDrawer">
              <b-button class="navbar-toggler close-btn" @click="closeMenu"><span class="close-btn-icon"><font-awesome-icon icon="times" /></span></b-button>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><router-link to="/Profile">自己紹介</router-link></li>
                <li><a href="#">こんな風に働きたい</a></li>
                <li><a href="#">こんな風に働きたい</a></li>
              </ul>
            </Drawer>
          </nav> 
    </header>
    <router-view />
    <footer class="w-100 bg-dark">
      <div class="container">
        <div class="row">
          <div class="col d-flex text-light">made with by Moe</div>
          <div class="col d-flex justify-content-end">
              <a href="#" class="icon-right"><font-awesome-icon icon="envelope" /></a>
              <a href="#" class="icon-right"><font-awesome-icon :icon="['fab', 'twitter-square']" /></a>
              <a href="#" class="icon-right"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>  
          </div><!--class="col" -->
          </div><!--class="row" -->
        </div>
    </footer>
    
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
  padding: 0.5rem 1rem;
}
.close-btn{
  padding-left:3%; 
}
.close-btn-icon{
  font-size: 2rem;
  color:#ffffff;
}
.navbar-toggler{
  padding: 0.25rem 0.4rem;
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
.icon-right{
  text-align:center;
  padding-left: 5%;
}
.col{
  font-size: 1rem;
}
</style>

