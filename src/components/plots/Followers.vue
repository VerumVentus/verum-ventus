<template>
  <h3>Followers</h3>
  <p>Let us look at the initial distribution of followers.</p>
  <p>A boxplot was then used to visualize the distribution of followers.</p>

  <div class="grid grid-cols-2 gap-4">
    <v-plotly
      :key="`followersXpostedScatterData`"
      :data="followersXpostedScatterData"
      :layout="followersXpostedScatterLayout"
      :config="config"
    />
    <v-plotly
      :key="`followersXpostedBoxData`"
      :data="followersXpostedBoxData"
      :layout="followersXpostedBoxLayout"
      :config="config"
    />
  </div>

  <p>
    Accounts with a followers <code>z-score</code> of more than 3 were dropped
    from the data. To note, the outlier with more than 4000 followers was a
    columnist, though their tweet had low engagements.
  </p>

  <p>We now look at the distribution of followers over time.</p>

  <div>
    <v-plotly
      :key="`followersRemovedOutliersData`"
      :data="followersRemovedOutliersData"
      :layout="followersXpostedScatterLayout"
      :config="config"
    />
  </div>

  <p>
    Four rows were dropped in the process. There are now <b>140 rows</b> in our
    data.
  </p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { DateTime } from 'luxon';
import settings from '@/utils/plotly.js';

import Papa from 'papaparse';

const followersRemovedOutliersData = ref([]);
const followersXpostedScatterData = ref([]);
const followersXpostedScatterLayout = ref({
  title: 'Followers over time',
  xaxis: {
    title: 'Date',
    type: 'date',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Followers',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
});

const followersXpostedBoxLayout = {
  title: 'Box plot of followers',
  yaxis: {
    title: 'Followers',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
};
const followersXpostedBoxData = ref([]);

const config = {
  displayModeBar: false,
  resposive: true,
  scrollZoom: true,
};

onMounted(() => {
  loadExploration();
  loadDroppedFollowersOutlier();
});

const loadDroppedFollowersOutlier = () => {
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

        followersRemovedOutliersData.value = [
          {
            x: csvData.map((row) => row['Date posted']),
            y: csvData.map((row) => row['Followers']),
            name: 'Followers',
            hovertemplate: '%{x}: %{y}',
            type: 'scatter',
            mode: 'markers',
            marker: { color: '#c8245b' },
          },
        ];
      },
    }
  );
};

const loadExploration = () => {
  Papa.parse(
    'https://raw.githubusercontent.com/VerumVentus/twitter-scraper/main/exploration/1_dropped_likes_outliers.csv',
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

        followersXpostedScatterData.value = [
          {
            x: csvData.map((row) => row['Date posted']),
            y: csvData.map((row) => row['Followers']),
            type: 'scatter',
            mode: 'markers',
            name: 'Followers',
            hovertemplate: '%{x}: %{y}',
            marker: { color: '#c8245b' },
          },
        ];
        followersXpostedBoxData.value = [
          {
            hovertemplate: '%{y}',
            y: csvData.map((row) => row['Followers']),
            name: 'Followers',
            type: 'box',
            marker: { color: '#c8245b' },
          },
        ];
      },
    }
  );
};
</script>
