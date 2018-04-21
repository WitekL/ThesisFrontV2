<template>
  <div>
    <select class="left" v-model.number="left">
      <option value=0>0</option>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
    </select>

    <select class="middle" v-model.number="middle">
      <option value=0>0</option>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
    </select>

    <select class="right" v-model.number="right">
      <option value=0>0</option>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
    </select>

    <v-stage :config="configKonva" ref="stage">
      <v-layer ref="layer">
        <div class="ttype">
          <v-line :config="topLine"></v-line>
          <v-line :config="middleLine"></v-line>
          <v-line :config="bottomLine"></v-line>
          <v-rect :config="rectLeft" v-for="n in left" :key="n" ref="rectLeft"></v-rect>
          <v-rect :config="rectMid" v-for="n in middle" :key="10+n" ref="rectMid"></v-rect>
          <v-rect :config="rectRight" v-for="n in right" :key="20+n" ref="rectRight"></v-rect>
        </div>
      </v-layer>
    </v-stage>

    <div class="formWrap">
      <div class="leftWrap">
        <h4 v-if="left > 0">Left branch</h4>
        <ElementForm @element-values='handleLeftElementValues($event, i)' class="leftForm" v-for="(n, i) in left" :key="30+n"/>
      </div>
      <div class="middleWrap">
        <h4 v-if="middle > 0">Middle branch</h4>
        <ElementForm @element-values='handleMiddleElementValues($event, i)' class="middleForm" v-for="(n, i) in middle" :key="40+n"/>
      </div>
      <div class="rightWrap">
        <h4 v-if="right > 0">Right branch</h4>
        <ElementForm @element-values='handleRightElementValues($event, i)' class="rightForm" v-for="(n, i) in right" :key="50+n"/>
      </div>
    </div>

    <button v-on:click='sendData' v-if='left>0 || right>0 || middle>0' type='button'>Calculate!</button>
  </div>
</template>

<script>
import ElementForm from './ElementForm.vue'

export default {
  name: 'TType',
  components: {
    ElementForm
  },
  data() {
    return {
      middle: 0,
      left: 0,
      right: 0,
      leftElements: [],
      middleElements: [],
      rightElements: [],

      configKonva: {
        width: 2000,
        height: 450
      },

      rectLeft: {
        x: 650,
        y: 25,
        width: 70,
        height: 30,
        stroke: "black",
        fill: "white"
      },

      rectMid: {
        x: 735,
        y: 60,
        width: 30,
        height: 70,
        stroke: "black",
        fill: "white"
      },

      rectRight: {
        x: 780,
        y: 25,
        width: 70,
        height: 30,
        stroke: "black",
        fill: "white"
      },

      topLine: {
        points: [430, 40, 1090, 40],
        stroke: "black",
        strokeWidth: "round",
        lineCup: "round",
        lineJoin: "round"
      },

      middleLine: {
        points: [750, 40, 750, 360],
        stroke: "black",
        strokeWidth: "round",
        lineCap: "round",
        lineJoin: "round"
      },

      bottomLine: {
        points: [430, 360, 1090, 360],
        stroke: "black",
        strokeWidth: "round",
        lineCap: "round",
        lineJoin: "round"
      },

      snapTopLeft: {
        x: 200,
        y: 20,
        width: 100,
        height: 40,
        stroke: 'gray',
        fill: 'white',
        strokeWidth: 1
      }
    };
  },

  methods: {
    handleLeftElementValues(value, index) {
      this.leftElements[index] = value;
      console.log(this.leftElements);
    },

    handleMiddleElementValues(value, index) {
      this.middleElements[index] = value;
      console.log(this.middleElements);
    },

    handleRightElementValues(value, index) {
      this.rightElements[index] = value;
      console.log(this.rightElements);
    },

    sendData() {
      this.$http.post('www.test.com/test', {
        elements: {
          left: this.leftElements,
          middle: this.middleElements,
          right: this.rightElements
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  },

  computed: {
    leftNum: function() {
      return this.left;
    }
  },

  watch: {
    left: function() {
      var vm = this;
      console.log(this.left);
      vm.$refs.layer.getStage().draw();

      setTimeout(function() {
        var index = vm.$refs.rectLeft.length-1
        var distance = index * 100;
        if(vm.$refs.rectLeft.length > 0) {
          vm.$refs.rectLeft[index].getStage().setAttr('x', 650-distance);
        }
        vm.$refs.layer.getStage().draw();
      });
    },

    middle: function() {
      var vm = this;
      vm.$refs.layer.getStage().draw();

      setTimeout(function() {
        var index = vm.$refs.rectMid.length-1
        var distance = index * 100;
        if(vm.$refs.rectMid.length > 0) {
          vm.$refs.rectMid[index].getStage().setAttr('y', 60+distance);
        }
        vm.$refs.layer.getStage().draw();
      });

    },

    right: function() {
      var vm = this;
      vm.$refs.layer.getStage().draw();

      setTimeout(function() {
        var index = vm.$refs.rectRight.length-1
        var distance = index * 100;

        if(vm.$refs.rectRight.length > 0) {
          vm.$refs.rectRight[index].getStage().setAttr('x', 780+distance);
        }
        vm.$refs.layer.getStage().draw();
      });
    }
  },
}
</script>

<style>
  .leftWrap {
    float: left;
    margin: 20px;
  }

  .middleWrap {
    float: left;
    margin: 20px;
  }

  .rightWrap {
    float: left;
    margin: 20px;
  }
</style>
