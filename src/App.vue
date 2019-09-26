<template>
<div id="app">
  <b-container class="header">
    <b-row>
      <b-col cols="12">  
        <h1 class="bg-dark">Moe'sPorfolio</h1>
        <nav class="navbar navbar-dark bg-dark">
      <b-button v-b-modal.modal-1 class="navbar-toggler"><span class="navbar-toggler-icon"></span></b-button>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  </nav> 
  </b-col>
  </b-row>
        </b-container>
        <router-view />
        </div>
</template>