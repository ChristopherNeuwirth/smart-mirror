<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <smTime></smTime>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import smTime from './components/Time'

export default {
  name: 'App',
  components: {
    smTime
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
.theme--dark.application {
  background: black;
}
</style>
