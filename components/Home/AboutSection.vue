<template>
    <div v-if="about" class="grid grid-cols-1 md:grid-cols-2 gap-9 mb-11">
        <img :src="about[0]?.image"
            alt="motawefy-hogag"  />
        <div class="m-auto">
            <h2 class="text-3xl font-bold mb-5 capitalize w-[70%]">{{ $t("title") }} </h2>
            <p>{{ about[0]?.text }}</p>
            <nuxt-link class="main_btn block mt-6 " to="/about">{{$t("ReadMoreBtn")}}</nuxt-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["about"])
</script>

<style lang="scss" scoped></style>