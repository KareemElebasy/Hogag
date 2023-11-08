<template>
    <div class="container mt-8">
        {{ id }}
    </div>
</template>

<script setup>
const {locale} = useI18n()
const config = useRuntimeConfig()
const { id } = useRoute().params
const countryData = ref(null)
useAsyncData("previous_workDada", () => {
    $fetch(`${config.public.baseURL}countries/${id}`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        countryData.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped>

</style>