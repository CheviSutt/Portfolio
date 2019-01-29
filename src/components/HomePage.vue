<template>
        <div class="homeContainer">
            <div class="card">
                <router-link to="/about" tag="div" class="title">
                    <h1>{{ author }}</h1>
                </router-link>
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

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text');

body {

}

.homeContainer{
    height: 100%;
    width: 100%;
    background-image: url("../assets/BG.png");
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 32rem;
    padding-left: 28rem;
    padding-right: 4rem;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 4px;
    font-size: 34px;
    font-family: 'Libre Barcode 128 Text', cursive;
    background-color: rgba(238,238,238,0.6);
    width: 20rem;
    transform: rotate(-3deg);
}

.title:hover {
    transform: rotate(+3deg);
    background-color: rgba(238,238,238,0.7);
    cursor: pointer;
}

h1  {
    margin: 0;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

    @media only screen and (max-width: 750px) {
        .card {
            padding-top: 33rem;
            padding-left: 19rem;
            padding-right: 4rem;
        }
    }

    @media only screen and (max-width: 420px) {
        .card {
            padding-top: 24rem;
            padding-left: 12rem;
            padding-right: 5rem;
        }
    }


</style>
