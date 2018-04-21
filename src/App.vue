<template>
  <div id="app">
    <div class="scheme-type">
      <label>Pi</label><input type="radio" v-model="x" value="Pi">
      <label>T</label><input type="radio" v-model="x" value="T">
    </div>
        <PiType v-if="x === 'Pi'"></PiType>
        <TType v-else></TType>
  </div>
</template>

<script>
import PiType from './components/PiType'
import TType from './components/TType'

export default {
  name: 'App',
  components: {
    PiType,
    TType
  },
  data() {
    return {
      x: "Pi"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
