<template>
  <h3>Following</h3>
  <p>We look at the initial distribution of our <b>Following</b> data.</p>
  <p>
    Obvious outliers from the Following field were shown to have been from users
    who posted the tweet after year 2020.
  </p>
  <p>A boxplot was then used to visualize the distribution of following.</p>

  <div class="grid grid-cols-2 gap-4">
    <v-plotly
      class="lg:col-span-1 col-span-2"
      :key="`followingXpostedScatterData`"
      :data="followingXpostedScatterData"
      :layout="followingXpostedScatterLayout"
      :config="config"
    />
    <v-plotly
      class="lg:col-span-1 col-span-2"
      :key="`followingXpostedBoxData`"
      :data="followingXpostedBoxData"
      :layout="followingXpostedBoxLayout"
      :config="config"
    />
  </div>

  <p>
    A similar trend was found when the outliers in Following was plot against
    the Joined field. Accounts with very high Following were users who joined
    from 2018 onwards. Users who joined before this year showed to have a
    following count of less than 1500.
  </p>

  <p>
    Since only 3 tweets were found, the researchers decided to drop these rows
    for now.
  </p>

  <p>Here's the final scatter plot for the following feature.</p>

  <div>
    <v-plotly
      :key="`followingRemovedOutliersData`"
      :data="followingRemovedOutliersData"
      :layout="followingXpostedScatterLayout"
      :config="config"
    />
  </div>

  <p>
    Three tweets were dropped in the process. There are now <b>137 rows</b> in
    our data.
  </p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { DateTime } from 'luxon';
import settings from '@/utils/plotly.js';

import Papa from 'papaparse';

const followingRemovedOutliersData = ref([]);
const followingXpostedScatterData = ref([]);
const followingXpostedScatterLayout = ref({
  title: 'Following over time',
  xaxis: {
    title: 'Date',
    type: 'date',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Following',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
});

const followingXpostedBoxLayout = {
  title: 'Box plot of following',
  yaxis: {
    title: 'Following',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
};
const followingXpostedBoxData = ref([]);

const config = {
  displayModeBar: false,
  resposive: true,
  scrollZoom: true,
};

onMounted(() => {
  loadExploration();
  loadDroppedFollowingOutlier();
});

const loadDroppedFollowingOutlier = () => {
  Papa.parse(
    'https://raw.githubusercontent.com/VerumVentus/twitter-scraper/main/exploration/3_dropped_following_outliers.csv',
    {
      download: true,
      header: true,
      complete(results) {
        const csvData = results.data;
        csvData.forEach((row) => {
          row['Date posted'] = row['Date posted']
            ? new Date(
                DateTime.fromFormat(
                  row['Date posted'],
                  'yyyy-MM-dd HH:mm:ss'
                ).toFormat('MM/dd/yyyy')
              )
            : row['Date posted'];

          row['Joined'] = row['Joined']
            ? new Date(
                DateTime.fromFormat(row['Joined'], 'MM/yyyy').toFormat(
                  'yyyy-MM'
                )
              )
            : row['Joined'];
        });

        followingRemovedOutliersData.value = [
          {
            x: csvData.map((row) => row['Date posted']),
            y: csvData.map((row) => row['Following']),
            name: 'Following',
            hovertemplate: '%{x}: %{y}',
            type: 'scatter',
            mode: 'markers',
            marker: { color: '#c82424' },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
      },
    }
  );
};

const loadExploration = () => {
  Papa.parse(
    'https://raw.githubusercontent.com/VerumVentus/twitter-scraper/main/exploration/2_dropped_followers_outliers.csv',
    {
      download: true,
      header: true,
      complete(results) {
        const csvData = results.data;
        csvData.forEach((row) => {
          row['Date posted'] = row['Date posted']
            ? new Date(
                DateTime.fromFormat(
                  row['Date posted'],
                  'yyyy-MM-dd HH:mm:ss'
                ).toFormat('MM/dd/yyyy')
              )
            : row['Date posted'];

          row['Joined'] = row['Joined']
            ? new Date(
                DateTime.fromFormat(row['Joined'], 'MM/yyyy').toFormat(
                  'yyyy-MM'
                )
              )
            : row['Joined'];
        });

        followingXpostedScatterData.value = [
          {
            x: csvData.map((row) => row['Date posted']),
            y: csvData.map((row) => row['Following']),
            type: 'scatter',
            name: 'Following',
            mode: 'markers',
            hovertemplate: '%{x}: %{y}',
            marker: { color: '#c82424' },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
        followingXpostedBoxData.value = [
          {
            hovertemplate: '%{y}',
            name: 'Following',
            y: csvData.map((row) => row['Following']),
            type: 'box',
            marker: { color: '#c82424' },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
      },
    }
  );
};
</script>
