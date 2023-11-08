<template>
    <div class="container" v-if="serviceData">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-center p-5 rounded-lg bg-white mt-16">
            <div class="md:col-span-2 flex flex-col">
                <h2 class="font-bold text-[2rem] pb-2">{{ serviceData?.service?.name }}</h2>
                <h4 class="text-[1rem] pb-2">{{ serviceData?.service?.description }}</h4>
            </div>
            <div class="w-[20] h-[14rem]"><img class="w-[20] m-auto h-[14rem] object-cover"
                    :src="serviceData?.service?.image" alt=""></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div>
                <h6 class="font-bold text-[1rem]">{{ serviceData?.what_we_offer?.text }}</h6>
                <ul>
                    <li class="mt-3" v-for="item in serviceData?.what_we_offer?.items" :key="item.id">{{ item.ar.text }}
                    </li>
                </ul>
            </div>
            <div class="w-[20rem] h-[14rem]">
                <img class="w-[20rem] h-[14rem] m-auto" :src="serviceData?.what_we_offer?.image" alt="motawefy-hogag">
            </div>
        </div>

        <div class="bg-white pb-8 mt-12">
            <h2 class="text-2xl font-bold mb-[2rem] mt-[4rem] capitalize">مزيد من الخدمات</h2>
            <div class="card rounded bg-white p-4 shadow-md flow-root">
                <div class="flex float-right gap-2" v-if="serviceData?.service?.previous">
                    <nuxt-link :to="`${serviceData?.service?.previous?.id}`" class="m-auto">
                        <div class="text-primary">
                            <p class="text-bold"> {{ $t("PrevBtn") }}</p>
                        </div>
                    </nuxt-link>
                    <img :src="serviceData?.service?.previous?.image" alt="hogag-motawefy" class="w-[90px] h-auto m-auto">
                    <h2 class="text-xl font-medium m-auto">{{ serviceData?.service?.previous?.name }} </h2>
                </div>
                <div class="flex float-left gap-2" v-if="serviceData?.service?.next">
                    <h2 class="text-xl font-[2rem] m-auto">{{ serviceData?.service?.next?.title }}</h2>
                    <img :src="serviceData?.service?.next?.image" alt="hogag-motawefy" class="w-[90px] h-auto m-auto">
                    <nuxt-link :to="`${serviceData?.service?.next?.id}`" class="m-auto">
                        <div class="text-primary">
                            <p class="font-bold">{{ $t("NextBtn") }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const localePath = useLocalePath()
const { id } = useRoute().params
const serviceData = ref(null)
useAsyncData("serviceData", () => {
    $fetch(`${config.public.baseURL}services/${id}`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        serviceData.value = data
    }).catch((err) => {
        console.log(err);
    })

})
</script>

<style lang="scss" scoped></style>