<template>
    <div class="container mx-auto mt-14" v-if="partners">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="item in partners" :key="item.id">
                <nuxt-link :to="item.link">
                    <div class="h-[12rem] border-2 rounded-lg p-5" >
                        <img class="w-full h-full object-contain" :src="item?.logo" alt="motawefy-hogag">
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const partners = ref(null)

useAsyncData("countries", () => {
    $fetch(`${config.public.baseURL}partners`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        partners.value = data
    }).catch((err) => {
        console.log(err);
    })
})
console.log(partners);
</script>

<style lang="scss" scoped></style>