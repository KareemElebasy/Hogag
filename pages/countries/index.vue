<template>
    <div v-if="countries" class="container mt-16">
        <div>
            <input type="text" id="">
            <p>ابحث عن الدولة</p>
        </div>
        <div>
            <div v-for="item in countries">
                <div>
                    <h6 v-if="Object.keys(item).length > 0">{{ Object.keys(item) }}</h6>
                    <div v-for="item, index in Object.values(item)" :key="item.index"
                        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div v-for="item in item ">
                            <nuxt-link :to="`/countries/${item.id}`" class="block max-w-[12rem] w-[12rem] h-[18rem] max-h-[18rem]">
                                <img class="w-fit" :src="item.logo" :alt="item.name">
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- <p v-if="Object.keys(item).join()">{{ Object.keys(item)}}</p> -->

            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const countries = ref(null)
const localePath = useLocalePath()
const countryAlpha = ref(null)
const countryAlphaItems = ref(null)
useAsyncData("countries", () => {
    $fetch(`${config.public.baseURL}countries`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        countries.value = data
        data.map((item) => {
            countryAlphaItems.value = item
            console.log(Object.keys(item));
            console.log(Object.values(item));

        })
    }).catch((err) => {
        console.log(err);
    })
})
</script>

<style lang="scss" scoped></style>