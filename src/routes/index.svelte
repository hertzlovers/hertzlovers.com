<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import hertzlovers from "./hertzlovers.svg";
</script>

<svelte:head>
  <title>HertzLovers - Open Source Acoustics</title>
</svelte:head>

<section
  class="bg-red-400 flex justify-start flex-col items-center py-20 space-y-10"
>
  <img
    src={hertzlovers}
    width="300"
    alt="HertzLovers - Open Source acoustics"
  />
  <div class="text-center space-y-2 font-sans">
    <h1>Build your own</h1>
    <h2 class="underline">acoustic panels</h2>
  </div>
</section>

<section class="h-40 bg-blue-100" />
