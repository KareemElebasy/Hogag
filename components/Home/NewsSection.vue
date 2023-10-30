<template>
    <div class="mt-10" v-if="news">
        <div class="flex justify-between items-center mb-3">
            <h6 class="font-bold text-[2rem]">أخبارنا</h6>
            <nuxt-link class="main_btn" :to="localePath('/')">
                {{ $t("ReadMoreBtn") }}
            </nuxt-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div v-for="item in news" :key="item.id" class="max-w-sm max-h-[30rem] bg-light-primary">
                <img class="min-h-[10rem] max-h-[10rem]  object-cover" :src="item.image[0]"
                    alt="motawefy-hogag" />
                <div class="p-3">
                    <div class="flex items-center justify-between  text-gray-400 text-[.9rem]">
                        <h5 class="mb-2 font-bold">{{ item.category_name }}
                        </h5>
                        <h6>{{ item.publish_date }}</h6>
                    </div>
                    <p class="mb-3 text-black font-bold">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["news"])
const localePath = useLocalePath()
</script>

<style lang="scss" scoped></style>