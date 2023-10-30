<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5" v-if="deputyChairManSpeech">
        <div class="col-span-1">
            <img :src="deputyChairManSpeech.image" alt="motawefy-hogag">
        </div>
        <div class="col-span-2" v-html="deputyChairManSpeech.ar.text"></div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();

const deputyChairManSpeech = ref(null)
useAsyncData("deputyChairManSpeech",()=>{
    $fetch(`${config.public.baseURL}aboutCompany/deputyChairManSpeech`, {
    headers: {
        "Accept-language": locale.value,
        "Accept": "application/json"
    },
}).then((res) => {
    const data = res.data
    deputyChairManSpeech.value = data
}).catch((err) => {
    console.log(err);
})
})

</script>

<style lang="scss" scoped>

</style>