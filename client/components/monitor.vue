<template>
  <b-container fluid class="text-light text-center">
    <br />
    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'onOff')"
      >
        <i class="fa fa-power-off"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'arrowUp')"
      >
        <i class="fa fa-chevron-circle-up"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'volumeUp')"
      >
        <i class="fa fa-volume-up"></i>
      </b-col>
    </b-row>
    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'arrowLeft')"
      >
        <i class="fa fa-chevron-circle-left"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'arrowCenter')"
      >
        <i class="fa fa-circle"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'arrowRight')"
      >
        <i class="fa fa-chevron-circle-right"></i>
      </b-col>
    </b-row>

    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'menu')"
      >
        <i class="fa fa-th-list"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'arrowDown')"
      >
        <i class="fa fa-chevron-circle-down"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('monitor', 'volumeDown')"
      >
        <i class="fa fa-volume-down"></i>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  // methods: {
  //   sendpApi: function (cmd) {
  //     // 何らかの処理
  //     // thisはこのインスタンスを指す
  //     console.log(cmd);
  //   }
  // }
  // https://public-constructor.com/nuxtjs-with-axios/

  methods: {
    async sendApi(device, cmd) {
      // console.log(cmd);
      navigator.vibrate(50);
      const url = "http://192.168.100.130:5367/api/" + device + "/" + cmd;
      // const url = "http://0.0.0.0:5367/api/" + device + "/" + cmd;
      const response = await this.$axios.$get(url);
      if (response == "OK") {
        navigator.vibrate(50);
      }
    }
  }
};
</script>