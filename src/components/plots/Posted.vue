<template>
  <h3>Date Posted vs Date Joined</h3>
  <p>
    We look at the relationship between the posting of a tweet and the account
    creation of the user tweeting it.
  </p>

  <v-plotly
    :key="`yearlyTweetCountData`"
    :data="postedXjoinedScatterData"
    :layout="postedXjoinedScatterLayout"
    :config="config"
  />
  <p>
    While there is great variation, notice that there is an increasing density
    towards the upper right of the graph.
  </p>
  <p>
    This suggests that
    <b>
      many of the recent tweets targetting activists on Twitter were posted by
      newly made accounts,
    </b>
    a behavior which can be associated with the recent rise of troll farms in
    the country.
  </p>

  <p>
    This observation can also be a good place to start for future researchers
    who intend to further investigate on troll farms in the Philippines.
  </p>
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
