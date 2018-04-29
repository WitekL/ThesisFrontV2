<template>
  <form class=connection-form> 
    <select name="connection" v-model="connection" v-on:change="emitConnection">
      <option value="series-series">series-series</option>
      <option value="parallel-parallel">parallel-parallel</option>
      <option value="series-parallel">series-parallel</option>
      <option value="parallel-series">parallel-series</option>
      <option value="cascade">cascade</option>
    </select>
  </form>
</template>


<script>

export default {
  name: 'Circuits',

  data() {
    return {
      connection: ''
    }
  },

  methods: {
    emitConnection() {
      this.$emit('connection', this.connection);
    }
  }
}
</script>
