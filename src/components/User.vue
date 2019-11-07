<template>
  <div id="user">
    <div class="card">{{ name }}, {{ age }} tahun - {{ department }}</div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['name', 'age', 'department'],
  data: () => ({

  })
}
</script>

<style scoped>
  .card {
    border: 1px solid grey;
    margin: 5px;
    padding: 5px;
  }
</style>
