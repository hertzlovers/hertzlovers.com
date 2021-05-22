<script>
  import Item from "./item.svelte";
  import Title from "./title.svelte";
</script>

<footer class="bg-gray-800 text-gray-400  py-10">
  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8"
  >
    <div>
      <Title>Say hello. We like friends.</Title>
      <ul class="pl-8">
        <Item>Instagram</Item>
        <Item>Twitter</Item>
      </ul>
    </div>
    <div>
      <Title>Navigate</Title>
      <ul class="pl-8">
        <Item>Home</Item>
        <Item>Laser Panel</Item>
        <Item>Ultrafusor</Item>
        <Item>Super Simply</Item>
        <Item>FAQ</Item>
        <Item>Wikifactory</Item>
      </ul>
    </div>
    <div>
      <Title>Collaborators</Title>
      <ul>
        <Item>We are builders</Item>
        <Item>TrainYourEars</Item>
        <Item>Wikifactory</Item>
      </ul>
    </div>
    <div>
      <Title>License</Title>
      <div>
        All designs are licensed under a Creative Commons Attribution 4.0
        International License.
      </div>
    </div>
  </div>
</footer>
