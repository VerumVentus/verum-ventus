<template>
  <h3>Timeline</h3>

  <div class="flex flex-col">
    <div class="timeline flex gap-16">
      <div class="event-top">
        <span class="event-date">Apr 2020</span>
        <div class="dot" />
        <div class="w-0 flex-1 border-l-1 border-l border-l-secondary">
          <div class="event-description">
            Start of lockdown in the Philippines.
          </div>
        </div>
      </div>
      <div class="event-bot">
        <span class="event-date">Oct 2020</span>
        <div class="dot" />
        <div class="w-0 flex-1 border-l-1 border-l border-l-secondary">
          <div class="event-description">
            Anti-Terrorism Council approves the implementing rules and
            regulations of the Anti-Terror Law.
          </div>
        </div>
      </div>
      <div class="event-top">
        <span class="event-date">Jan 2021</span>
        <div class="dot" />
        <div class="w-0 flex-1 border-l-1 border-l border-l-secondary">
          <div class="event-description">
            COVID cases in the Philippines reached 500,000 after the new year.
          </div>
        </div>
      </div>

      <div class="event-bot">
        <span class="event-date">Apr 2021</span>
        <div class="dot" />
        <div class="w-0 flex-1 border-l-1 border-l border-l-secondary">
          <div class="event-description">
            Rise of community pantry initiatives started by Patreng Non, an
            activist.
          </div>
        </div>
      </div>

      <div class="event-top">
        <span class="event-date">Feb 2022</span>
        <div class="dot" />
        <div class="w-0 flex-1 border-l-1 border-l border-l-secondary">
          <div class="event-description">
            Death of New Bataan 5 including Chad Booc, a Lumad teacher &
            indigenous peoples' rights activist.
          </div>
        </div>
      </div>

      <div class="event-bot">
        <span class="event-date">May 2022</span>
        <div class="dot" />
        <div class="w-0 flex-1 border-l-1 border-l border-l-secondary">
          <div class="event-description">National elections</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.event-top,
.event-bot {
  @apply relative text-center flex flex-col items-center gap-1 rounded-lg;
}

.event-date {
  @apply w-max font-serif italic font-bold;
}

.timeline {
  @apply h-[400px] relative flex justify-center;
}

.timeline::after {
  content: '';
  @apply bg-secondary/80 z-[-1] w-full h-px m-auto top-0 bottom-0 left-0 right-0 absolute;
}

.timeline > div:nth-child(odd) {
  @apply self-center transform -translate-y-1/2;
}
.timeline > div:nth-child(even) {
  @apply self-center flex-col-reverse transform translate-y-1/2;
}

.event-description {
  @apply translate-x-4 text-left w-32 text-xs border-secondary;
}

.timeline > div:nth-child(even) > div > .event-description {
  @apply pt-8;
}

.timeline > div:nth-child(odd) > div > .event-description {
  @apply pb-8;
}

.timeline > div:nth-child(odd):before {
  content: '';
  @apply bg-secondary bottom-0 z-[-1] rounded-full transform translate-y-1/2 w-2 h-2 m-auto left-0 right-0 absolute;
}

.timeline > div:nth-child(even):before {
  content: '';
  @apply bg-secondary top-0 z-[-1] rounded-full transform -translate-y-1/2 w-2 h-2 m-auto left-0 right-0 absolute;
}

.dot {
  @apply h-4 w-4 rounded-full mx-auto relative border border-secondary -outline-offset-[8px] outline outline-1 outline-secondary;
}
</style>
