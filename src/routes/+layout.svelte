<script>
  import '../app.css'
  import { onMount } from 'svelte'

  onMount(() => {
    var themeToggleBtn = document.getElementById('theme-toggle')

    if (!themeToggleBtn) return

    function changeTheme() {
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        } else {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        }
      }
    }

    themeToggleBtn.addEventListener('click', changeTheme)

    return () => {
      themeToggleBtn?.removeEventListener('click', changeTheme)
    }
  })
</script>

<slot />
