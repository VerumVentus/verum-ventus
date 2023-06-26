<template>
  <h3>Likes</h3>
  <p>
    We explore outliers in the Likes variable. An outlier was found where a
    satirical tweet earned more than 400 likes. This outlier was dropped since
    this was not highly significant to the analysis.
  </p>

  <p>A boxplot was then used to visualize the distribution of Likes.</p>

  <div class="grid grid-cols-2 gap-4">
    <v-plotly
      class="lg:col-span-1 col-span-2"
      :key="`likesXpostedScatterData`"
      :data="likesXpostedScatterData"
      :layout="likesXpostedScatterLayout"
      :config="config"
    />
    <v-plotly
      class="lg:col-span-1 col-span-2"
      :key="`likesXpostedBoxData`"
      :data="likesXpostedBoxData"
      :layout="likesXpostedBoxLayout"
      :config="config"
    />
  </div>
  <p>
    From this, the researchers decided to drop the 3 outliers that exceeded a
    <code>z-score</code> of 3. These were not highly significant to the
    analysis.
  </p>

  <p>We now look at the distribution of likes over time.</p>

  <p>
    The high number of likes in the distribution may be due to accounts having a
    large number of followers. Tweets with more than 10 likes were dropped for
    the analysis. The final graph is as follows:
  </p>
  <div>
    <v-plotly
      :key="`likesRemovedOutliersData`"
      :data="likesRemovedOutliersData"
      :layout="likesXpostedScatterLayout"
      :config="config"
    />
  </div>
  <p>
    A total of 8 rows were removed in the process of dropping the outliers
    from144 rows the Likes field. The dataset now has <b>144 rows</b>.
  </p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { DateTime } from 'luxon';
import settings from '@/utils/plotly.js';

import Papa from 'papaparse';
const likesRemovedOutliersData = ref([]);
const likesXpostedScatterData = ref([]);
const likesXpostedScatterLayout = ref({
  title: 'Likes over time',
  xaxis: {
    title: 'Date',
    type: 'date',
    dtick: 'M12',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Likes',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
});

const likesXpostedBoxLayout = {
  title: 'Box plot of Likes',
  yaxis: {
    title: 'Likes',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
};
const likesXpostedBoxData = ref([]);

const config = {
  displayModeBar: false,
  resposive: true,
  scrollZoom: true,
};

onMounted(() => {
  loadExploration();
  loadDroppedLikesOutlier();
});

const loadDroppedLikesOutlier = () => {
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

        likesRemovedOutliersData.value = [
          {
            x: csvData.map((row) => row['Date posted']),
            y: csvData.map((row) => row['Likes']),
            name: 'Likes',
            hovertemplate: '%{x}: %{y}',
            type: 'scatter',
            mode: 'markers',
            marker: { color: '#8f3ced' },
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
    'https://raw.githubusercontent.com/VerumVentus/twitter-scraper/main/exploration/0_original.csv',
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
                  'dd/MM/yyyy HH:mm'
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

        likesXpostedScatterData.value = [
          {
            x: csvData.map((row) => row['Date posted']),
            y: csvData.map((row) => row['Likes']),
            name: 'Likes',
            type: 'scatter',
            mode: 'markers',
            hovertemplate: '%{x}: %{y}',
            marker: { color: '#8f3ced' },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
        likesXpostedBoxData.value = [
          {
            hovertemplate: '%{y}',
            name: 'Likes',
            y: csvData.map((row) => row['Likes']),
            type: 'box',
            marker: { color: '#8f3ced' },
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
