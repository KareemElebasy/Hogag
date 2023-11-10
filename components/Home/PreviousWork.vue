<template>
    <div v-if="previousWork">
        <div class="mb-8">
            <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :slides-per-view="1" :autoplay="{
                delay: 4000,
                disableOnInteraction: true,
            }" :navigation="false">
                <SwiperSlide v-for="item  in previousWork" :key="previousWork.id">
                    <div>
                        <div class="container bg-light-primary">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-28">
                                <div>
                                    <img class="object-cover rounded-[2rem] max-w-30rem]" :src="item.image[0]"
                                        alt="motawefy-hogag">
                                </div>
                                <div class="">
                                    <h4 class="text-black text-2xl mb-8">
                                        {{ $t("Advancedthumbnails") }}</h4>
                                    <p class="text-primary text-[1.1rem] mb-6">
                                        {{ item.title }}
                                    </p>
                                    <p class="text-black text-[1.1rem] mb-4">
                                        {{ item.description }}
                                    </p>
                                    <nuxt-link class="main_btn block mt-6 " :to="localePath(`/achievements/${item.id}`)">{{ $t("ReadMoreBtn") }}</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["previousWork"])
const localePath = useLocalePath()
</script>

<style lang="scss" scoped></style>b