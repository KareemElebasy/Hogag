<template>
    <div class="container mt-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5" v-if="chairManSpeech">
        <div class="md:col-span-2" v-html="chairManSpeech.ar.text"></div>
        <div class="md:col-span-1">
            <img :src="chairManSpeech.image" class="w-full object-cover" alt="motawefy-hogag">
        </div>
    </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const chairManSpeech = ref(null)

useAsyncData("chairManSpeech", () => {
    $fetch(`${config.public.baseURL}aboutCompany/chairManSpeech`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        chairManSpeech.value = data
    }).catch((err) => {
        console.log(err);
    })
})

</script>

<style lang="scss" scoped></style>