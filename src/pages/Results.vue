<template>
  <div class="article-wrapper">
    <Navbar class="relative block invisible" />
    <h1>Results</h1>
    <h2>Statistical Analysis</h2>
    <p>
      To test our hypothesis that the red-tagging of activists increased with
      time in the course of the Duterte administration,
      <b> we performed linear regression </b> to determine if a correlation
      exists between the frequency of tweets and time.
    </p>
    <p>
      This model is appropriate for a time series analysis since
      <b> both its predictor and outcome variables are quantitative </b>. If
      there were multiple predictor variables or if the predictor variable was a
      categorical value, then the model would be a multiple regression or a
      logistic regression instead.
    </p>
    <p>
      The resulting linear regression is a steadily increasing graph, with a
      <b>root mean squared error (RMSE) of 26.53</b>,
      <b> a coefficient of determination (R^2) of 0.33 </b>, and a
      <b>p-value of 2.896 x 10^-8</b> which is less than 0.05. This means that
      our graph partially predicts the outcome, and that we can reject the null
      hypothesis.
    </p>
    <p>
      We therefore conclude that there is indeed a positive correlation between
      tweet frequency and time, and that
      <span class="highlighted">
        the red-tagging of activists increased over time under the Duterte
        administration </span
      >.
    </p>

    <Modeling />

    <h2>Computational Modeling</h2>

    <p>
      To model our time series data,<b>
        we used an event detection model, specifically peak detection </b
      >. This allows us to
      <b>
        identify spikes in our time series data that could be correlated with
        important events </b
      >. Furthermore, there are parameters in peak detection that can be
      modified to achieve a certain result.
    </p>

    <p>
      A height of 24 is used since it is approximately the average number of
      tweets per month. This ensures that peaks detected must have a height of
      at least our mean value.
    </p>

    <p>
      A width of 1 means that a peak must have at least a width of 1 month. A
      threshold of 1 means that the height difference between a peak and its
      surrounding data points must be at least 1. A distance of 1 means that the
      time difference between a peak and its surrounding data points must be at
      least 1 month. A prominence of 1 means that the height difference between
      a peak and its baseline must be at least 1.
    </p>

    <p>
      With all these parameters, <b>the model identified six peaks</b>. Upon
      inspection of these peaks, these correlated with the following historical
      events:
    </p>

    <Timeline />

    <p>
      <span class="highlighted">
        These peaks all correlate with politically charged events since the
        start of the lockdown.
      </span>
      They were mostly
      <b>
        instances where public outcry of activists and the people's criticism on
        the government increased </b
      >, and therefore a big number of accounts pushed back against this
      criticism using counternarratives of red-tagging. One of them,
      particularly the national elections, was an instance where
      <b> narratives of red-tagging took the lead </b> instead of being
      primarily a reaction to already existing public outcry.
    </p>
    <h2>Conclusion</h2>
    <p>
      Given this, we can conclude that our statistical hypothesis testing and
      computational modeling were successful. Through these tests, not only was
      the null hypothesis rejected, but
      <b
        >a clear correlation was established with significant historical events
        in Philippine history that involve the red-tagging of activists under
        the Duterte administration.
      </b>
    </p>

    <p>
      It was also observed that majority of tweets were from accounts recently
      created and most of the tweets have emotional type classification.
      <b>
        This suggests that this trend is inorganic and might be orchestrated
        behind the scenes.
      </b>
    </p>

    <router-link to="/summary" class="flex items-center gap-4 mt-8 group">
      <p>
        <span class="highlighted group-hover:text-primary">What now?</span>
      </p>

      <v-icon
        name="hi-arrow-right"
        class="transform transition-all group-hover:translate-x-3"
      />
    </router-link>
  </div>
</template>

<style scoped>
html {
  overflow-y: auto;
}
</style>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Modeling from '@/components/plots/Modeling.vue';
</script>
