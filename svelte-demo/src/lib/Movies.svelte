<script>
let movies = [
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
</script>

{#each movies as movie}
<form>
    <div class="d-flex align-items-center flex-column">
        <h2>{ movie.name }</h2>
        <img src={movie.img} alt="." style="max-height: 220px; flex-grow: 0">
        <br>
        <h3>Entradas disponibles: {movie.available}</h3>
        {#if movie.available < 1}
            <h4>No hay entradas!</h4>
        {/if}
        <button on:click={() => movie.available -= 1} disabled={movie.available < 1} type="button" class="form-control" style="max-width: 100px;">Comprar</button>
    </div>
    <hr>
</form>
{/each}