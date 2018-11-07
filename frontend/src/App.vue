<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>

          </v-flex>
          <v-flex xs6>
            <smTime></smTime>
          </v-flex>
        </v-layout>
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
