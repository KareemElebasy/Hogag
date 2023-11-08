<template>
    <div class="container" v-if="previous_workDada">
        <div class="grid grid-cols-1 p-5 rounded-lg bg-white mt-16">
            <h2 class="font-bold text-3xl mb-8">{{ previous_workDada?.title }}</h2>
            <div>
                <img class="w-full max-h-[32rem] object-cover rounded-lg" :src="previous_workDada?.image[0]"
                    alt="motawefy-hogag">
            </div>
            <h2 class="font-bold text-1xl mt-8">{{ previous_workDada?.title }}</h2>
            <p class="text-1xl mt-8">{{ previous_workDada?.description }}</p>
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
                <SwiperSlide v-for="item  in previous_workDada?.image" :key="item.id">
                    <div class="rounded-[2rem] p-3">
                        <img class="rounded-[2rem] p-2" :src="item" alt="motawefy-hogag">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="mt-14">
            <h2 class="font-bold text-1xl mt-8">{{ previous_workDada?.title }}</h2>
            <p class="text-1xl mt-8">{{ previous_workDada?.description }}</p>
        </div>
        <!-- Pagination -->
        <div class="bg-white pb-8 mt-14">
            <h2 class="text-2xl font-bold mb-[2rem] mt-[4rem] capitalize">مزيد من الخدمات</h2>
            <div class="card rounded bg-white p-4 shadow-md flex justify-between">
                <div class="flex  gap-2" v-if="previous_workDada?.previous">
                    <nuxt-link :to="`${previous_workDada?.previous?.id}`" class="m-auto">
                        <div class="gold-text">
                            <p class="font-bold"> {{ $t("PrevBtn") }}</p>
                        </div>
                    </nuxt-link>
                    <img :src="previous_workDada?.previous?.image" alt="hogag-motawefy"
                        class="rounded-[2rem] w-[90px] h-auto m-auto">
                    <h2 class="text-xl font-medium m-auto">{{ previous_workDada?.previous?.name }} </h2>
                </div>
                <div class="flex  gap-2" v-if="previous_workDada?.next">
                    <h2 class="text-xl font-[2rem] m-auto">{{ previous_workDada?.next?.title }}</h2><img
                        :src="previous_workDada?.next?.image" alt="hogag-motawefy"
                        class="w-[90px] rounded-[2rem] h-auto m-auto"><nuxt-link :to="`${previous_workDada?.next?.id}`"
                        class="m-auto">
                        <div class="gold-text">
                            <p class="font-bold">{{ $t("NextBtn") }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const { id } = useRoute().params
const previous_workDada = ref(null)
useAsyncData("previous_workDada", () => {
    $fetch(`${config.public.baseURL}previous_work/${id}`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        previous_workDada.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped></style>