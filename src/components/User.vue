<template>
  <div id="user">
    <div :class="'card ' + color">{{ nameAndAge }} - {{ department }}</div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['name', 'age', 'department', 'color'],
  data: () => ({

  }),
  computed: {
    nameAndAge() {
      return this.name + ', ' + this.age + ' tahun'
    }
  }
}
</script>

<style scoped>
  .card {
    border: 1px solid grey;
    margin: 5px;
    padding: 5px;
  }
  .genap {
    background-color: gray;
  }
</style>
