<script>
  import { page } from "$app/stores";
  export let label;
  export let href;
</script>

<a
  class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-red-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
  class:bg-gray-200={$page.path === href}
  class:hover:bg-red-200={$page.path !== href}
  {href}>{label}</a
>
