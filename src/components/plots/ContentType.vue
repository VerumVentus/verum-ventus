<template>
  <p>We look at the frequency of content types:</p>

  <div class="grid grid-cols-2 gap-4">
    <v-plotly
      class="lg:col-span-1 col-span-2"
      :key="`frequencyContentTypeData`"
      :data="frequencyContentTypeData"
      :layout="frequencyLayout"
      :config="config"
    />
    <v-plotly
      class="lg:col-span-1 col-span-2"
      :key="`yearlyTweetCountData`"
      :data="yearlyTweetCountData"
      :layout="yearlyLayout"
      :config="config"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { DateTime } from 'luxon';
import settings from '@/utils/plotly';

import Papa from 'papaparse';

const yearlyLayout = ref({
  title: 'Tweet type of tweets posted yearly',
  xaxis: {
    title: 'Date',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Count',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
});

const frequencyLayout = ref({
  title: 'Frequency of tweet types',
  barmode: 'stack',
  xaxis: {
    title: 'Frequency',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
});

const colorHue = [
  '#8f3ced',
  '#c8245b',
  '#45c724',
  '#2824c7',
  '#c72424',
  '#249ec7',
];

const yearlyTweetCountData = ref([]);
const frequencyContentTypeData = ref([]);

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

          row['Year'] = row['Date posted']
            ? new Date(row['Date posted']).getFullYear()
            : row['Year'];

          row['Month'] = row['Date posted']
            ? DateTime.fromISO(row['Date posted'].toISOString()).toFormat('MMM')
            : undefined;
        });

        const years = new Set(csvData.map((row) => row['Year']));
        years.delete(undefined);
        const sortedYears = [...years].sort((a, b) => a - b);

        const contentTypes = new Set(csvData.map((row) => row['Content type']));
        contentTypes.delete(undefined);
        const accountTypes = new Set(csvData.map((row) => row['Account type']));
        const sortedAccountTypes = [...accountTypes].sort();
        const data = [];

        sortedAccountTypes.forEach((accType, index) => {
          if (!accType) {
            return;
          }

          const typeFrequency = [...contentTypes].map((tweetType) => {
            const subset = csvData.filter(
              (row) =>
                row['Content type'] === tweetType &&
                row['Account type'] === accType
            );
            return subset.length;
          });

          data.push({
            x: [...contentTypes],
            y: typeFrequency,
            name: accType,
            type: 'bar',
            marker: {
              color: colorHue[index],
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          });
        });

        frequencyContentTypeData.value = data;

        const yearlyData = [];

        [...contentTypes].forEach((type, index) => {
          if (!type) {
            return;
          }

          const yearlyTweetCounts = sortedYears.map((year) => {
            const subset = csvData.filter(
              (row) => row['Year'] === year && row['Content type'] === type
            );
            return subset.length;
          });

          yearlyData.push({
            x: sortedYears,
            y: yearlyTweetCounts,
            name: type,
            type: 'scatter',
            marker: {
              color: colorHue[index],
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          });

          yearlyTweetCountData.value = yearlyData;
        });
      },
    }
  );
};
</script>
