<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12" v-if="enrichment">
        <div class="col-span-1 ">
            <h4 class="text-[3rem] font-bold mb-5 text-primary">{{ enrichment?.title }}</h4>
            <h6 class="font-bold my-3">{{ enrichment?.title }}</h6>
            <p class="w-3/4">{{ enrichment?.text }}</p>
            <div class="flex mt-8">
                <p class="mt-1">زر الموقع الالكتروني:</p>
                <nuxt-link :to="enrichment?.url" target="_blank"
                    class="gold-text font-bold mr-8 flex bg-[#FDF9F5] px-5 py-2 rounded">{{ enrichment?.url }}
                    <img src="https://hogag.ui.aait-d.com/_nuxt/link.e6ed8921.svg" alt="visit_our_website"
                        class="w-fit h-fit mr-2">
                </nuxt-link>
            </div>
        </div>
        <div class="col-span-1 ">
            <img :src="enrichment?.image" alt="motawefy-hogag">
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["enrichment"]);

</script>

<style lang="scss" scoped></style>