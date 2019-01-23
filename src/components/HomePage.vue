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
    /*align-items: flex-end;*/
    align-items: center;
    /*color: #ea7013;*/
    color: #fc9d20;
    padding-top: 55vh;
    padding-left: 36%;
    padding-right: 10%;
    font-size: 50px;
    /*font-family: 'Permanent Marker', cursive;*/
    /*font-family: 'ZCOOL KuaiLe', cursive;*/
    font-family: 'Libre Barcode 128 Text', cursive;
}


</style>
