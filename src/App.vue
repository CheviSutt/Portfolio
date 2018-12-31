<template>
  <div id="app" class="background">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
// import HomePage from "./components/HomePage";

export default {
  name: 'app',
  components: {
    // HomePage,
    NavBar,
  }
}
</script>

<style>

#app {
  font-family: graffiti, sans-serif;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*image-position: center;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  /*background-repeat: no-repeat;*/
  /*background-color: grey;*/
}
.background{
  /*height: 936px;*/
  /*width: 2592px;*/
  height: 100%;
  width: 100%;
  background-image: url("./assets/BG.png");
  /*background-repeat: no-repeat;*/
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
