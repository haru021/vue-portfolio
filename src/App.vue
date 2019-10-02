<template>
<div id="app">
  <b-container class="header">
    <b-row>
      <b-col cols="12">  
        <h1 class="bg-dark">Moe'sPorfolio</h1>
        <nav class="navbar navbar-dark bg-dark">
      <b-button v-b-modal.modal-1 class="navbar-toggler"><span class="navbar-toggler-icon"></span></b-button>
  <b-modal id="modal-1" hide-footer="true">
    <b-list-group>
  <b-list-group-item><a href="#">Contact</a></b-list-group-item>
  <b-list-group-item><a href="#">初めまして！自己紹介</a></b-list-group-item>
  <b-list-group-item><a href="#">こんな風に働きたい</a></b-list-group-item>
  <b-list-group-item><a href="#">私の強みはこれ！</a></b-list-group-item>
</b-list-group>
  </b-modal>
  </nav> 
  </b-col>
  </b-row>
        </b-container>
        <router-view />
        </div>
</template>