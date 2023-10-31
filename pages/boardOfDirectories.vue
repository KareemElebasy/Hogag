<template>
    <div v-if="boardOfDirectories" class="container mt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="item in boardOfDirectories" :key="item.id" class="flex flex-col items-center justify-center">
                <div class="h-[16rem]"><img class="h-[16rem] w-full object-scale-down" :src="item.image" alt="motawefy-hogag"></div>
                <div class="text-center mt-2">
                    <h4 class="font-bold">{{ item.name }}</h4>
                    <h5>{{ item.job_title }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();

const boardOfDirectories = ref(null)
useAsyncData("boardOfDirectories", () => {
    $fetch(`${config.public.baseURL}aboutCompany/boardOfDirectories`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        boardOfDirectories.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped>

</style>