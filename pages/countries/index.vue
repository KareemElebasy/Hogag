<template>
  <div v-if="countries" class="container mt-16">
    <div>
      <input type="text" id="" />
      <p>ابحث عن الدولة</p>
    </div>
    <div>
      <div v-for="(item, index) in countries" :key="item.index">
        <div>
          <h6 v-if="Object.values(item)[0].length > 0">
            {{ Object.keys(item).join() }}
          </h6>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div
                v-for="(item, index) in Object.values(item)[0]"
                :key="item.index"
                class=" flex items-center justify-center border-2 border-gray-100 rounded-lg pt-4"
              >
                <nuxt-link
                  :to="`/countries/${item.id}`"
                  class=" block max-w-[12rem] w-[12rem] h-[18rem] max-h-[18rem]"
                >
                  <img class="w-fit" :src="item.logo" :alt="item.name" />
                </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { locale } = useI18n();
const countries = ref(null);
const localePath = useLocalePath();
useAsyncData("countries", () => {
  $fetch(`${config.public.baseURL}countries`, {
    headers: {
      "Accept-language": locale.value,
      Accept: "application/json",
    },
  })
    .then((res) => {
      const data = res.data;
      countries.value = data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="scss" scoped></style>
