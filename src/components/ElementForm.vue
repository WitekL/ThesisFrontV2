<template>
  <form>
    <select name="Type" v-model="type">
      <option value="r">R</option>
      <option value="c">C</option>
      <option value="l">L</option>
    </select>
    <input v-on:change="emitValues" type="text" name="Value" v-model.number="value">
  </form>
</template>


<script>

export default {
  name: 'Form',

  data() {
    return {
      type: '',
      value: ''
    }
  },

  methods: {
    emitValues() {
      var element = {};
      element.type = this.type;
      element.value = this.value;
      this.$emit('element-values', element);
    }
  }
}
</script>
