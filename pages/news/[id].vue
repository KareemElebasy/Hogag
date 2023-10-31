<template>
    <div class="container" v-if="newsData">
        <div class="grid grid-cols-1 p-5 rounded-lg bg-white mt-16">
            <h2 class="font-bold text-3xl mb-8">{{ newsData?.title }}</h2>
            <div>
                <img class="w-full max-h-[32rem] object-cover rounded-lg" :src="newsData?.main_image" alt="motawefy-hogag">
            </div>
            <h2 class="font-bold text-1xl mt-8">{{ newsData?.title }}</h2>
            <p class="text-1xl mt-8">{{ newsData?.category_name }}</p>
        </div>
        <!-- Swiper -->
        <div class="mt-14">
            <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :breakpoints="{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }" :autoplay="{
    delay: 4000,
    disableOnInteraction: true,
}" :navigation="false">
                <SwiperSlide v-for="item  in newsData?.image" :key="item.id">
                    <div class="rounded-[2rem] h-[18rem] p-3">
                        <img class="rounded-[2rem] h-[18rem] object-contain w-full p-2" :src="item" alt="motawefy-hogag">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="mt-14">
            <h2 class="font-bold text-1xl mt-8">{{ newsData?.title }}</h2>
            <p class="text-1xl mt-8" v-html="newsData?.description"></p>
        </div>

    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const localePath = useLocalePath()
const { id } = useRoute().params
const newsData = ref(null)
useAsyncData("previous_workDada", () => {
    $fetch(`${config.public.baseURL}news/${id}`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        newsData.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped></style>