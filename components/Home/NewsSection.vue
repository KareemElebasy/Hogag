<template>
    <div class="mt-10" v-if="news">
        <div class="flex justify-between items-center mb-3">
            <h6 class="font-bold text-[2rem]">أخبارنا</h6>
            <nuxt-link class="main_btn" :to="localePath('/')">
                {{ $t("ReadMoreBtn") }}
            </nuxt-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div v-for="item in news" :key="item.id"
                class="bg-white w-full flex flex-col rounded-[3rem] h-full pb-5 border">
                <div class="w-[100%]"><img :src="item.image[0]" alt="motawefy-hogag"
                        class="rounded-t-[3rem] h-[12rem] w-full object-cover"></div>
                <div class="p-3">
                    <div class="text-gray-400 flex gap-2">
                        <p class="capitalize mb-2 font-bold">{{ item.category_name }}</p>
                        <p>{{ item.publish_date }}</p>
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