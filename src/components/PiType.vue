<template>
  <v-stage :config="configKonva">
    <v-layer>
      <div class="pitype">
        <v-line :config="topLine"></v-line>
        <v-line :config="leftLine"></v-line>
        <v-line :config="rightLine"></v-line>
        <v-line :config="bottomLine"></v-line>
      </div>
    </v-layer>
  </v-stage>
</template>

<script>
export default {
  data() {
    return {
      configKonva: {
        width: 1000,
        height: 800
      },
      topLine: {
        points: [100, 40, 660, 40],
        stroke: "black",
        strokeWidth: "round",
        lineCap: "round",
        lineJoin: "round"
      },
      leftLine: {
        points: [250, 40, 250, 220],
        stroke: "black",
        strokeWidth: "round",
        lineCap: "round",
        lineJoin: "round"
      },
      rightLine: {
        points: [500, 40, 500, 220],
        stroke: "black",
        strokeWidth: "round",
        lineCap: "round",
        lineJoin: "round"
      },
      bottomLine: {
        points: [100, 220, 660, 220],
        stroke: "black",
        strokeWidth: "round",
        lineCap: "round",
        lineJoin: "round"
      },
    };
  }
}
</script>
