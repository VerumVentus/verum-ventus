<template>
  <div class="article-wrapper">
    <Navbar class="relative block invisible" />
    <h1>Results</h1>
    <h2>Statistical Analysis</h2>
    <p>
      To test our hypothesis that the red-tagging of activists increased with
      time in the course of the Duterte administration,
      <code> we performed linear regression </code> to determine if a
      correlation exists between the frequency of tweets and time.
    </p>
    <p>
      This model is appropriate for a time series analysis since both its
      predictor and outcome variables are quantitative. If there were multiple
      predictor variables or if the predictor variable was a categorical value,
      then the model would be a multiple regression or a logistic regression
      instead.
    </p>
    <p>
      The resulting linear regression is a steadily increasing graph, with a
      root mean squared error (RMSE) of 26.53, a coefficient of determination
      (R^2) of 0.33, and a <code>p-value of 2.896 x 10^-8</code> which is less
      than 0.05. This means that our graph partially predicts the outcome, and
      that we can reject the null hypothesis.
    </p>
    <p>
      We therefore conclude that there is indeed a positive correlation between
      tweet frequency and time, and that
      <span class="highlighted">
        the red-tagging of activists increased over time under the Duterte
        administration </span
      >.
    </p>
    <v-plotly
      :key="`yearlyTweetCountData`"
      :data="modelingData"
      :layout="modelingLayout"
      :config="config"
    />
    <h2>Computational Modeling</h2>
    <p>
      To model our time series data, we used an event detection model,
      specifically peak detection. This allows us to identify spikes in our time
      series data that could be correlated with important events. Furthermore,
      there are parameters in peak detection that can be modified to achieve a
      certain result.
    </p>
    <p>
      A height of 24 is used. Since 24 is approximately the average number of
      tweets per month, this ensures that peaks detected must have a height of
      at least our mean value. A width of 1 means that a peak must have at least
      a width of 1 month. A threshold of 1 means that the height difference
      between a peak and its surrounding data points must be at least 1. A
      distance of 1 means that the time difference between a peak and its
      surrounding data points must be at least 1 month. A prominence of 1 means
      that the height difference between a peak and its baseline must be at
      least 1.
    </p>
    <p>
      With all these parameters, the model identified six peaks. Upon inspection
      of these peaks, these correlated with the following historical events:
    </p>

    <Timeline />

    <p>
      These peaks all correlate with politically charged events since the start
      of the lockdown. They were mostly instances where public outcry of
      activists and the people's criticism on the government increased, and
      therefore a big number of accounts pushed back against this criticism
      using counternarratives of red-tagging. One of them, particularly the
      national elections, was an instance where narratives of red-tagging took
      the lead instead of being primarily a reaction to already existing public
      outcry.
    </p>
    <h2>Conclusion</h2>
    <p>
      Given this, we can conclude that our statistical hypothesis testing and
      computational modeling were successful. Through these tests, not only was
      the null hypothesis rejected, but a clear correlation was established with
      significant historical events in Philippine history that involve the
      red-tagging of activists under the Duterte administration.
    </p>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import settings from '@/utils/plotly';
import Timeline from '@/components/Timeline.vue';

const x = [
  '2016-03',
  '2016-11',
  '2017-01',
  '2017-03',
  '2017-04',
  '2017-05',
  '2017-06',
  '2017-07',
  '2017-08',
  '2017-09',
  '2017-10',
  '2017-11',
  '2017-12',
  '2018-01',
  '2018-02',
  '2018-03',
  '2018-04',
  '2018-05',
  '2018-06',
  '2018-07',
  '2018-08',
  '2018-09',
  '2018-10',
  '2018-11',
  '2018-12',
  '2019-01',
  '2019-02',
  '2019-03',
  '2019-04',
  '2019-05',
  '2019-06',
  '2019-07',
  '2019-08',
  '2019-09',
  '2019-10',
  '2019-11',
  '2019-12',
  '2020-01',
  '2020-02',
  '2020-03',
  '2020-04',
  '2020-05',
  '2020-06',
  '2020-07',
  '2020-08',
  '2020-09',
  '2020-10',
  '2020-11',
  '2020-12',
  '2021-01',
  '2021-02',
  '2021-03',
  '2021-04',
  '2021-05',
  '2021-06',
  '2021-07',
  '2021-08',
  '2021-09',
  '2021-10',
  '2021-11',
  '2021-12',
  '2022-01',
  '2022-02',
  '2022-03',
  '2022-04',
  '2022-05',
  '2022-06',
];

const peaks = [
  '2020-04',
  '2020-10',
  '2021-01',
  '2021-04',
  '2022-02',
  '2022-05',
];

const y_pred = [
  -15.16459512, -7.61549548, -5.73592373, -3.91797729, -2.96278509, -2.03840554,
  -1.08321334, -0.15883379, 0.79635841, 1.75155061, 2.67593016, 3.63112236,
  4.55550191, 5.51069411, 6.46588631, 7.32864055, 8.28383275, 9.2082123,
  10.1634045, 11.08778405, 12.04297625, 12.99816845, 13.922548, 14.8777402,
  15.80211974, 16.75731194, 17.71250414, 18.57525839, 19.53045059, 20.45483014,
  21.41002234, 22.33440189, 23.28959409, 24.24478629, 25.16916583, 26.12435803,
  27.04873758, 28.00392978, 28.95912198, 29.85268888, 30.80788108, 31.73226063,
  32.68745283, 33.61183237, 34.56702457, 35.52221677, 36.44659632, 37.40178852,
  38.32616807, 39.28136027, 40.23655247, 41.09930672, 42.05449891, 42.97887846,
  43.93407066, 44.85845021, 45.81364241, 46.76883461, 47.69321416, 48.64840636,
  49.57278591, 50.52797811, 51.48317031, 52.34592455, 53.30111675, 54.2254963,
  55.1806885,
];

const y_actual = [
  1, 1, 3, 3, 12, 8, 19, 22, 11, 4, 3, 5, 13, 6, 15, 8, 5, 3, 16, 9, 1, 10, 11,
  11, 16, 4, 5, 7, 6, 11, 3, 11, 17, 10, 7, 5, 9, 20, 21, 32, 41, 36, 30, 30,
  20, 11, 73, 32, 14, 64, 21, 17, 118, 25, 18, 11, 9, 11, 16, 12, 16, 82, 124,
  115, 71, 169, 43,
];

const modelingData = ref([
  {
    x: x,
    y: y_actual,
    type: 'scatter',
    mode: 'markers+lines',
    marker: {
      color: '#8f3ced',
    },
    name: 'Actual',
    hoverlabel: {
      bordercolor: '#00000000',
      font: {
        color: 'white',
      },
    },
  },
  {
    x: x,
    y: y_pred,
    type: 'line',
    marker: {
      color: '#3ced8f',
    },
    name: 'Regression',
    line: {
      dash: 'dash',
    },
    hoverlabel: {
      bordercolor: '#00000000',
      font: {
        color: 'white',
      },
    },
  },
  {
    x: peaks,
    y: y_actual.filter((_, i) => peaks.includes(x[i])),
    name: 'Peak',
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: '#c7245b',
      size: 10,
      symbol: 'x',
    },
    hoverlabel: {
      bordercolor: '#00000000',
      font: {
        color: 'white',
      },
    },
  },
]);

const peak_slices = peaks.map((peak) => {
  return {
    type: 'line',
    x0: peak,
    x1: peak,
    y0: 0,
    y1: Math.max(...y_actual),
    line: {
      color: '#c7245b',
      width: 1,
      dash: 'dot',
    },
  };
});

const modelingLayout = ref({
  title: 'Linear Regression and Peak Detection on Tweet Data',
  xaxis: {
    title: 'Date',
    type: 'date',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Count',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  shapes: peak_slices,
  ...settings,
});

const config = {
  displayModeBar: false,
  resposive: true,
  scrollZoom: true,
};
</script>
