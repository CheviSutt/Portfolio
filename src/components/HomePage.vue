<template>
        <div class="homeContainer">
            <div class="card">
                <div class="title">
                    <h1>{{ author }}</h1>
                </div>
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
    /*@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');*/
    @import url('https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text');

    body {
        /*padding: 0;*/
        /*margin: 0;*/
        /*height: 100vh;*/
        /*width: 100vw;*/
        /*background-repeat: no-repeat;*/
        /*background-color: grey;*/
    }

.homeContainer{
    height: 90%;
    width: 100%;
    background-image: url("../assets/BG.png");
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /*padding-top: 20rem;*/
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 26rem;
    padding-left: 15rem;
    padding-right: 4rem;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 4px;
    font-size: 34px;
    /*font-family: 'ZCOOL KuaiLe', cursive;*/
    font-family: 'Libre Barcode 128 Text', cursive;
    background-color: rgba(238,238,238,0.7);
    width: 20rem;
}

h1  {
    margin: 0;
    padding: .5rem;
}


</style>
