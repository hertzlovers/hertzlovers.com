<script>
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
  import MenuItem from "./menu-item.svelte";
  let openDropdown = false;
</script>

<div class="relative">
  <button
    on:click={() => (openDropdown = !openDropdown)}
    class:bg-gray-200={$page.path.startsWith("/tutorials/")}
    class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-red-200 focus:bg-red-200 focus:outline-none focus:shadow-outline"
  >
    <span>Tutorials</span>
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      class:rotate-180={openDropdown}
      class:rotate-0={!openDropdown}
      class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
      ><path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
  {#if openDropdown}
    <div
      transition:fly={{ y: -20, duration: 200 }}
      class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
    >
      <div class="px-2 py-2 bg-white rounded-md shadow ">
        <MenuItem label="Laser Panel" href="/tutorials/laser-panel" />
        <MenuItem label="Ultrafusor" href="/tutorials/ultrafusor" />
        <MenuItem label="Super Simply" href="/tutorials/super-simply" />
      </div>
    </div>{/if}
</div>
