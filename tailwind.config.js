import franken from 'franken-ui/shadcn-ui/preset-quick';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    franken({
      theme: 'slate'
      // TODO https://franken-ui.dev/docs/installation#picking-components
    })
  ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    {
      pattern: /^uk-/
    }
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
