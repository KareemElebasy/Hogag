<template>
    <div v-if="testimonials" class="mt-20">
        <div class="flex justify-between items-center mb-3">
            <h6 class="font-bold text-[2rem]">{{ $t('whatsay') }}</h6>
            <nuxt-link class="main_btn" :to="localePath('/')">
                {{ $t("ReadMoreBtn") }}
            </nuxt-link>
        </div>
        <div class="mb-8">
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
                <SwiperSlide v-for="item  in testimonials" :key="testimonials.id">
                    <div class="bg-white p-3">
                        <div class="flex items-center gap-4 mb-6">
                            <img class="max-w-[4rem]" :src="item.image" alt="motawefy-hogag">
                            <h4 class="font-bold text-1xl">{{ item.name }}</h4>
                        </div>
                        <p>{{ item.text }}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['testimonials'])
const localePath = useLocalePath()
</script>
<style lang="scss" scoped></style>