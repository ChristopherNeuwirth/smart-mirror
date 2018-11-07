<template>
  <div class="time-date text-xs-right">
    <div class="time-date__time">
      <Clock :blink="true" :displaySeconds="false" />
      <span class="time-date__time-indicator">h</span>
    </div>
    <div class="time-date__date">
      <span>{{ new Date() | moment("dddd, Do MMMM YYYY") }}</span>
    </div>
  </div>
</template>

<script>
import Clock from 'vue-digital-clock'

// TODO: Make new Date() called recursivly so its keeps up to date

export default {
  data: () => ({}),
  components: {
    Clock
  }
}
</script>

<style lang="scss">
$font-size-time: 130px;
$margin-ticker: -4%;

.time-date {
  &__time {
    font-size: $font-size-time;
    font-family: "Lucida Console", Monaco, monospace;
  }
  &__time-indicator {
    font-size: calc(#{$font-size-time} - 5%);
    display: none;
  }
  &__date {
    font-size: calc(#{$font-size-time} * 0.23);
    margin-top: -40px;
  }
}

.clock {
  span {
    display: inline-block;
  }
  span:nth-of-type(2) {
    margin-left: $margin-ticker;
    margin-right: $margin-ticker;
    font-size: calc(#{$font-size-time} + 20%);
  }
}
</style>
