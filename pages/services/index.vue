<template>
    <div v-if="services" class="container">
        <div v-for="item in services" :key="item.id" class="grid grid-cols-1 md:grid-cols-3 gap-5 items-center p-5 rounded-lg bg-white mt-10">
            <div class="w-[18] h-[12rem]"><img class="w-[18] m-auto h-[12rem] object-cover" :src="item.image" alt=""></div>
            <div class="md:col-span-2 flex flex-col">
                <h2 class="font-bold text-[2rem] pb-2">{{ item.name }}</h2>
                <h4 class="text-[1rem] pb-2">{{ item.description }}</h4>
                <nuxt-link class="sec_btn" :to="localePath(`/services/${item.id}`)">أقرأ المزيد</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const localePath = useLocalePath()
const services = ref(null)
useAsyncData("services", () => {
    $fetch(`${config.public.baseURL}services`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        services.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped>

</style>