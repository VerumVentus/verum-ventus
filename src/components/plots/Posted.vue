<template>
  <v-plotly
    :key="`yearlyTweetCountData`"
    :data="postedXjoinedScatterData"
    :layout="postedXjoinedScatterLayout"
    :config="config"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { DateTime } from 'luxon';
import settings from '@/utils/plotly';

import Papa from 'papaparse';

const postedXjoinedScatterData = ref([]);
const postedXjoinedScatterLayout = ref({
  title: 'Date Posted vs Date Joined',
  xaxis: {
    title: 'Date Posted',
    type: 'date',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Date Joined',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
});

const config = {
  displayModeBar: false,
  resposive: true,
  scrollZoom: true,
};

onMounted(() => {
  loadExploration();
});

const loadExploration = () => {
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
                DateTime.fromFormat(row['Joined'], 'yyyy-MM-dd').toFormat(
                  'MM/dd/yyyy'
                )
              )
            : row['Joined'];
        });

        // get the trendline
        const x = csvData.map((row) => row['Date posted']);
        const y = csvData.map((row) => row['Joined']);

        postedXjoinedScatterData.value = [
          {
            x: csvData.map((row) => row['Date posted']),
            y: csvData.map((row) => row['Joined']),
            hovertemplate: 'Posted: %{x}<br />Joined %{y}',
            type: 'scatter',
            name: '',
            mode: 'markers',
            marker: { color: '#c8245b' },
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
