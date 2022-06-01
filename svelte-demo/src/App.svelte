<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Movies from './lib/Movies.svelte'
</script>

<main>
  <nav style="display: flex; justify-content: center; align-items: center; background-color: rgba(255, 62, 0, 0.2); border-bottom: 1px solid #ff3e00; padding: 15px 0;">
    <h1 style="display: display: inline; margin: 0;">Películas</h1>
    <img src={logo} alt="Svelte Logo" style="max-height: 50px; display: inline; cursor: pointer"/>
  </nav>

  <Movies />

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.1;
  }
</style>
