<template>
    <div v-if="previous_work" class="container">
        <div v-for="item in previous_work" :key="item.id"
            class="grid grid-cols-1 md:grid-cols-3 gap-5 items-center p-5 rounded-lg bg-white mt-10">
            <div class="md:col-span-2 flex flex-col w-3/4">
                <h2 class="font-bold text-[2rem] pb-2">{{ item.title }}</h2>
                <h4 class="text-[1.2rem] pb-2 mt-4">{{ item.description }}</h4>
                <nuxt-link class="main_btn block w-fit mt-5" :to="localePath(`/achievements/${item.id}`)">{{$t("ReadMoreBtn")}}</nuxt-link>
            </div>
            <div class="w-[20] h-[14rem] rounded-2xl">
                <img class="w-[20] m-auto h-[14rem] object-cover rounded-2xl" :src="item?.image[0]" alt="motawefy-hogag">
            </div>
        </div>

    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const localePath = useLocalePath()
const previous_work = ref(null)
useAsyncData("previous_work", () => {
    $fetch(`${config.public.baseURL}previous_work`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        previous_work.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped></style>