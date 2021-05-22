import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.cjs";
import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex(mdsvexConfig),
    sveltePreprocess({
      defaults: {
        style: "postcss",
      },
      postcss: true,
    }),
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};
