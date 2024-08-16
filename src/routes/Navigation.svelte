<script>
  import { generate } from 'random-words'

  import ThemeToggle from './ThemeToggle.svelte'

  async function fetchPosts() {}
</script>

<nav class="uk-navbar-container">
  <div class="uk-container">
    <div uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="/" aria-label="Back to Home">
          <img alt="logo" class="w-24 h-auto" src="./logo.png" />
        </a>

        <ul class="uk-navbar-nav">
          <li>
            <a href="/"> Features </a>
          </li>
        </ul>

        <div class="uk-navbar-item">
          <form action="javascript:void(0)">
            <input
              class="uk-input uk-width-small"
              type="text"
              placeholder={generate({ exactly: 2, join: ' ' }) + '...'}
              aria-label="Input"
            />
            <button
              on:click|preventDefault={fetchPosts}
              class="uk-button uk-button-default">Search</button
            >
          </form>
        </div>

        <ThemeToggle />
      </div>
    </div>
  </div>
</nav>
