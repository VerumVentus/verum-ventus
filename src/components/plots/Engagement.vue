<template>
  <h3>Tweet engagement correlation</h3>
  <p>
    For tweet engagement, we look at the correlation among Likes, Replies,
    Retweets, and Quote tweets.
  </p>

  <v-plotly
    :key="`yearlyTweetCountData`"
    :data="engagementHeatmapData"
    :layout="engagementHeatmapLayout"
    :config="config"
  />
  <p>
    The strongest correlations in this graph are of that between
    <b>likes and retweets</b>, and between <b>replies and quote tweets</b>. It
    means it is highly likely that a tweet with more likes also has more
    retweets, and tweets with more replies also have more quote tweets.
  </p>
</template>

<script setup>
import { ref } from 'vue';
import settings from '@/utils/plotly';

var xValues = ['Likes', 'Replies', 'Retweets', 'Quote Tweets'];

var yValues = ['Quote Tweets', 'Retweets', 'Replies', 'Likes'];

var zValues = [
  [0.16, 0.64, 0.049, 1],
  [0.5, -0.0032, 1, 0.049],
  [0.082, 1, -0.0032, 0.64],
  [1, 0.082, 0.5, 0.16],
];

var colorscaleValue = [
  [0, '#03051a'],
  [0.5, '#8f3ced'],
  [1, '#e9e7ed'],
];

const engagementHeatmapData = ref([
  {
    z: zValues,
    x: xValues,
    y: yValues,
    type: 'heatmap',
    colorscale: colorscaleValue,
    hoverongaps: false,
  },
]);

const engagementHeatmapLayout = ref({
  title: 'Engagement Heatmap',
  annotations: [],
  xaxis: {
    ticks: '',
    side: 'bottom',
  },
  yaxis: {
    ticks: '',
    ticksuffix: ' ',
  },
  ...settings,
});

for (var i = 0; i < yValues.length; i++) {
  for (var j = 0; j < xValues.length; j++) {
    var currentValue = zValues[i][j];
    if (currentValue != 1) {
      var textColor = 'white';
    } else {
      var textColor = 'black';
    }
    var result = {
      xref: 'x1',
      yref: 'y1',
      x: xValues[j],
      y: yValues[i],
      text: zValues[i][j],
      font: {
        family: 'Biryani',
        size: 20,
        color: textColor,
      },
      showarrow: false,
    };
    engagementHeatmapLayout.value.annotations.push(result);
  }
}

const config = {
  displayModeBar: false,
  resposive: true,
  scrollZoom: true,
};
</script>
