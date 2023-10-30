<template>
<!-- Swiper -->
<div class="mb-8" dir="rtl">
  <Swiper  :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :slides-per-view="1"  :autoplay="{
    delay: 4000,
    disableOnInteraction: true,
  }" :navigation="false">
    <SwiperSlide v-for="item  in sliderData" :key="item.id">
      <div class="swiper-wraper" :style="`background-image: url('${item.mainImage}');`">
        <div class="min-h-[88vh] font-[600]">
          <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-28" >
              <div class="" >
                <h1 class="text-white text-4xl mb-8">
                  {{ item.title }}
                </h1>
                <p class="text-white text-[1.1rem]">
                  {{ item.text }}
                </p>
              </div>
              <div>
                <img class="object-cover max-w-30rem]" :src="item.image" alt="motawefy-hogag">
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</div>
</template>

<script setup>

const sliderData = ref(null)

const getSliderData = $fetch('https://phpv8.aait-d.com/alhajaaj/public/api/website/sliders', {
  headers: {
    "Accept-language": "ar",
    "Accept": "application/json"
  },
}).then((res) => {
  const data = res.data
  sliderData.value = data

})
console.log(sliderData);
</script>

<style lang="scss" scoped>
.swiper-wraper {
  background-size: cover;
  background-repeat: no-repeat;
}


</style>