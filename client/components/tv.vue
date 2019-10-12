<template>
  <b-container fluid class="text-light text-center">
    <br>
    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'onOff')"
      >
        <i class="fa fa-power-off"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'seeRecordingList')"
      >
        <i class="fa fa-database"></i>
        <i class="fa fa-angle-double-right"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'recordTVGuide')"
      >
        <i class="fa fa-angle-double-right"></i>
        <i class="fa fa-database"></i>
      </b-col>
    </b-row>

    <br>

    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'functionList')"
      >
        <i class="fa fa-bars"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'arrowkeyUp')"
      >
        <i class="fa fa-chevron-circle-up"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'recordDirect')"
      >
        <i class="fa fa-sign-out"></i>
        <i class="fa fa-database"></i>
      </b-col>
    </b-row>
    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'arrowkeyLeft')"
      >
        <i class="fa fa-chevron-circle-left"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'arrowkeyCenter')"
      >
        <i class="fa fa-circle"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'arrowkeyRight')"
      >
        <i class="fa fa-chevron-circle-right"></i>
      </b-col>
    </b-row>

    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'subMenu')"
      >
        <i class="fa fa-list-ul"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'arrowkeyDown')"
      >
        <i class="fa fa-chevron-circle-down"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'back')"
      >
        <i class="fa fa-reply"></i>
      </b-col>
    </b-row>
    <br>

    <b-row class>
      <b-col
        cols="3"
        class="rounded p-3 bg-info border border-white"
        v-on:click="sendApi('tv', 'blue')"
      >青</b-col>

      <b-col
        cols="3"
        class="rounded p-3 bg-danger border border-white"
        v-on:click="sendApi('tv', 'red')"
      >赤</b-col>

      <b-col
        cols="3"
        class="rounded p-3 bg-success border border-white"
        v-on:click="sendApi('tv', 'green')"
      >緑</b-col>

      <b-col
        cols="3"
        class="rounded p-3 bg-warning border border-white"
        v-on:click="sendApi('tv', 'yellow')"
      >黃</b-col>
    </b-row>
    <br>

    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'stop')"
      >
        <i class="fa fa-stop"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'pause')"
      >
        <i class="fa fa-pause"></i>
      </b-col>

      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'play')"
      >
        <i class="fa fa-play"></i>
      </b-col>
    </b-row>
    <br>

    <b-row class>
      <b-col
        cols="3"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'skipLeft')"
      >
        <i class="fa fa-fast-backward"></i>
      </b-col>

      <b-col
        cols="3"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'backward')"
      >
        <i class="fa fa-step-backward"></i>
      </b-col>

      <b-col
        cols="3"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'forward')"
      >
        <i class="fa fa-forward"></i>
      </b-col>

      <b-col
        cols="3"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'skipRight')"
      >
        <i class="fa fa-fast-forward"></i>
      </b-col>
    </b-row>
    <br>

    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'channelUp')"
      >
        <i class="fa fa-chevron-up"></i>
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '01NHKG')"
      >
        <img src="~/assets/image/nhk_g.png" style="max-height:30px; max-width:30px">
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '02NHKE')"
      >
        <img src="~/assets/image/nhk_e.png" style="max-height:30px; max-width:30px">
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '04NihonTV')"
      >
        <img src="~/assets/image/nihon_tv.png" style="max-height:30px; max-width:30px">
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '05TVAsahi')"
      >
        <img src="~/assets/image/tv_asahi.png" style="max-height:30px; max-width:30px">
      </b-col>
    </b-row>

    <b-row class>
      <b-col
        cols="4"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', 'channelDown')"
      >
        <i class="fa fa-chevron-down"></i>
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '07TVTokyo')"
      >
        <img src="~/assets/image/tv_tokyo.png" style="max-height:30px; max-width:30px">
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '08FujiTV')"
      >
        <img src="~/assets/image/fuji_tv.png" style="max-height:30px; max-width:30px">
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '06TBS')"
      >
        <img src="~/assets/image/tbs.jpeg" style="max-height:30px; max-width:30px">
      </b-col>

      <b-col
        cols="2"
        class="rounded p-3 bg-secondary border border-white"
        v-on:click="sendApi('tv', '09TokyoMX')"
      >
        <img src="~/assets/image/tokyo_mx.jpeg" style="max-height:30px; max-width:30px">
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
      navigator.vibrate(50);
      console.log(response);
    }
  }
};
</script>