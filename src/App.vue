<template>
  <div id="app">
    <nav-bar>
      <router-view/>
    </nav-bar>
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
  /*background-color: dimgrey;*/
  /*border: 1px solid orange;*/
  height: 100%;
  width: 100%;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*image-position: center;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
html, body {
padding: 0;
margin: 0;
}
body {
  height: 100vh;
  width: 100vw;
  /*background-repeat: no-repeat;*/
  /*background-color: grey;*/
}
@media only screen and (max-width: 375px) {

   .navBar button {
     font-size: 9px;
   }
  .navBar h2 {
    font-size: 14px;
  }
}

</style>
