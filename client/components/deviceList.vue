<template>
  <b-container fluid class="text-light text-center">
    <br />
    <b-row class>
      <b-col
        cols="6"
        @click="$router.push('/tv')"
        class="rounded p-3 bg-secondary border border-white"
      >
        <i class="fa fa-credit-card-alt"></i>
      </b-col>
      <b-col
        cols="6"
        @click="$router.push('/monitor')"
        class="rounded p-3 bg-secondary border border-white"
      >
        <i class="fa fa-desktop"></i>
      </b-col>
    </b-row>
  </b-container>
</template>

