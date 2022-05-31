<script>
    export default{
        data(){
            return {
                movies: [
    {
      name: 'Avengers',
      available: 3,
      img: 'https://pm1.narvii.com/6898/90ca2f233315eaf4abc92dfee1d2ded86a013c0cr1-1000-1500v2_hq.jpg',
    },
    {
      name: 'Terminator',
      available: 5,
      img: 'https://phantom-marca.unidadeditorial.es/5bc7c319dd5eaef9f50904b674261e71/assets/multimedia/imagenes/2020/01/31/15804900436112.jpg'
    },
    {
      name: 'Spider-Man',
      available: 0,
      img: 'https://pm1.narvii.com/6122/25c286a99381ef79bb8df1dfaee31685390b502b_hq.jpg'
    }
  ]
            }
        }
    }
</script>

<template>
    <h1 style="text-decoration: underline rgb(155, 229, 170);" align="center">Peliculas</h1>
    <form v-for="movie in movies">
        <h2 align="center">{{movie.name}}</h2>
        <div class="d-flex justify-content-center">
            <img :src="movie.img" style="max-height: 220px;"/>
        </div>
        <h3 align="center">Entradas disponibles: {{movie.available}}</h3>
        <h4 align="center" v-if="movie.available < 1">No hay entradas!</h4>
        <div class="d-flex justify-content-center">
            <button v-on:click="movie.available -= 1" :disabled="movie.available < 1" type="button" class="form-control" style="max-width: 100px;">Comprar</button>
        </div>
        <hr>
    </form>
</template>