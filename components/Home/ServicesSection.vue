<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 " v-if="services">
        <div class="col-span-3 mb-4">
            <div class="grid grid-cols-1 items-center md:grid-cols-2 gap-5">
                <div class="">
                    <h4 class="text-xl md:text-5xl w-[50%] mb-3 flex font-bold py-5 capitalize">{{ $t('ServiceHeading') }}</h4>
                    <nuxt-link :to="localePath(`/services/${services[0].id}`)"
                        class="text-xl md:text-3xl md:max-w-[300px] mb-3 flex font-bold py-5 text-primary capitalize">
                        <p>{{ services[0].name }}</p>
                    </nuxt-link>
                    <p class="w-3/4">{{ services[0].description }}</p>
                </div>
                <img :src="services[0].image" alt="motawefy-hogag"
                    class="rounded-2xl w-full max-w-[18rem] ms-auto" />
            </div>
        </div>
        <div class="col-span-3 md:col-span-1">
            <div class="flex flex-col justify-center items-center gap-3 text-center">
                <img :src="services[1].image" alt="hogag" class="rounded-2xl w-full mb-5 max-w-[300px] m-auto">
                <nuxt-link :to="localePath(`/services/${services[1].id}`)" class="text-xl font-bold text-primary capitalize">{{ services[1].name }}
                </nuxt-link>
                <p class="w-3/4">{{ services[1].description }}</p>
            </div>
        </div>
        <div class="col-span-3 md:col-span-1">
            <div class="flex flex-col justify-center items-center gap-3  text-center">
                <img :src="services[2].image" alt="hogag" class="rounded-2xl w-full mb-5 max-w-[300px] m-auto">
                <nuxt-link :to="localePath(`/services/${services[2].id}`)" class="text-xl font-bold text-primary capitalize">{{ services[2].name }}
                </nuxt-link>
                <p class="w-3/4">{{ services[2].description }}</p>
            </div>
        </div>
        <div class="col-span-3 md:col-span-1">
            <div class="flex flex-col justify-center items-center gap-3 text-center">
                <img :src="services[3].image" alt="hogag" class="rounded-2xl w-full mb-5 max-w-[300px] m-auto">
                <nuxt-link :to="localePath(`/services/${services[3].id}`)" class="text-xl font-bold text-primary capitalize">{{ services[3].name }}
                </nuxt-link>
                <p class="w-3/4">{{ services[3].description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["services"]);
const localePath = useLocalePath()
console.log(props);
</script>

<style lang="scss" scoped></style>