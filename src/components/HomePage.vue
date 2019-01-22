<template>
        <div class="homeContainer">
            <div class="title">
                <h1>{{ author }}</h1>
            </div>
        </div>
</template>

<script>
  export default {
      name: 'HomePage',
      data() {
        return {
            author: 'Chevi Sutton',
        };
      },
  }

</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');
    body {
        /*padding: 0;*/
        /*margin: 0;*/
        /*height: 100vh;*/
        /*width: 100vw;*/
        /*background-repeat: no-repeat;*/
        /*background-color: grey;*/
    }
h1  {
    margin: 0;
}

.homeContainer{
    height: 90%;
    width: 100%;
    background-image: url("../assets/BG.png");
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    /*color: #ea7013;*/
    color: #07e6ea;
    align-items: center;
    padding-top: 13rem;
    font-size: 43px;
    /*font-family: 'Permanent Marker', cursive;*/
    font-family: 'ZCOOL KuaiLe', cursive;
}


</style>
