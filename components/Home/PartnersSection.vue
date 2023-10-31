<template>
    <div v-if="partners" class="mt-20">
        <div class="flex justify-between items-center mb-3">
            <h6 class="font-bold text-[2rem]">شركاؤنا</h6>
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
                <SwiperSlide v-for="item  in partners" :key="partners.id">
                    <div class="bg-white p-3">
                        <div>
                            <img class="object-cover min-h-[8rem] max-h-[8rem]" :src="item.logo" alt="motawefy-hogag">
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['partners'])
const localePath = useLocalePath()
</script>
<style lang="scss" scoped></style>