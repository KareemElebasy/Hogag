<template>
  <div class="container mt-8" v-if="countryData">
    <div
      class="flex items-center justify-center max-w-[12rem] w-[12rem] h-[18rem] max-h-[18rem] border-2 border-gray-100 rounded-3xl"
    >
      <img class="m-auto w-fit" :src="countryData?.logo" :alt="countryData.name" />
      <h3 v-if="!countryData?.logo" >{{ countryData.name }}</h3>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const config = useRuntimeConfig();
const { id } = useRoute().params;
const countryData = ref(null);
useAsyncData("previous_workDada", () => {
  $fetch(`${config.public.baseURL}countries/${id}`, {
    headers: {
      "Accept-language": locale.value,
      Accept: "application/json",
    },
  })
    .then((res) => {
      const data = res.data;
      countryData.value = data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="scss" scoped></style>
