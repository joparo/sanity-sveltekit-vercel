<script>
  import Conference from "./Conference.svelte";
  import Days from "./Days.svelte";

  export let data;
  let { conference } = data;
</script>

<main>
  <div class="container mx-auto">
    <Conference {conference} />
    <Days days={conference.days} />
  </div>
</main>
