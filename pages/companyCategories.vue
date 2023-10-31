<template>
    <div v-if="companyCategories" class="container mx-auto mt-12" >
        <div v-for="item in companyCategories" :key="item.id" class="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
            <div class="md:col-span-2 my-auto ">
                <h3 class="font-bold text-3xl pb-2">{{ item.name }} </h3>
                <h3>{{ item.brief }} </h3>
            </div>
            <div class="md:col-span-1 h-[20rem] ">
                <img class="w-full h-[20rem] rounded-[2rem] object-cover " :src="item.image" alt="motawefy-hogag">
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();

const companyCategories = ref(null)
useAsyncData("companyCategories", () => {
    $fetch(`${config.public.baseURL}companyCategories`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        companyCategories.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped>

</style>