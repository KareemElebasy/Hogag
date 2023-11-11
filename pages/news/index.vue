<template>
    <div v-if="news" class="mt-14 container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <nuxt-link :to="localePath(`/news/${item.id}`)" v-for="item in news" :key="item.id"
                        class="bg-white w-full flex flex-col rounded-[3rem] h-full pb-5 border ">
                        <div class="w-[100%]"><img :src="item.image[0]" alt="motawefy-hogag"
                                class="rounded-t-[3rem] h-[12rem] w-full object-cover"></div>
                        <div class="p-3">
                            <div class="text-gray-400 flex gap-2">
                                <p class="capitalize mb-2 font-bold">{{ item.category_name }}</p>
                                <p>{{ item.publish_date }}</p>
                            </div>
                            <p class="mb-3 text-black font-bold">{{ item.title }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="md:col-span-1">
                <div class="bg-white border w-full p-5 rounded-xl">
                    <div>
                        <h2 class="font-bold">ابحث عن خبر</h2>
                        <div class="relative">
                            <input type="text" placeholder="..."
                                class="form-control outline-none border rounded-3xl my-5 py-3 px-3 w-full">
                        </div>
                    </div>

                    <h2 class="font-bold mb-2">الأقسام</h2>

                    <ul class="ms-6 space-y-3">
                        <li>
                            <label class="flex justify-between"  for="all-category">الكل
                                <input type="checkbox" id="all-category" class="checked:bg-blue-500" value="true">
                            </label>
                        </li>
                        <li>
                            <label class="flex justify-between" for="news1">مجتمع المؤسسة
                                <input type="checkbox" id="news1" class="checked:bg-blue-500" value=""></label>
                        </li>
                        <li>
                            <label class="flex justify-between" for="news1">الموارد البشرية
                                <input type="checkbox" id="news1" class="checked:bg-blue-500" value=""></label>
                        </li>
                    </ul>

                    <hr class="my-6">
                    <h2 class="font-bold mb-2">سنة الخبر</h2>
                    <ul class="ms-5 mediaCenterList space-y-2">
                        <li>
                            <label class="flex justify-between"  for="all">الكل
                                <input type="checkbox" id="all" class="checked:bg-blue-500" value="">
                            </label>
                        </li>
                        <li>
                            <label class="flex justify-between"  for="year0">2017 <input type="checkbox" id="year0" class="checked:bg-blue-500"
                                    value="2017"></label>
                        </li>
                        <li>
                            <label class="flex justify-between"  for="year1">2018 <input type="checkbox" id="year1" class="checked:bg-blue-500"
                                    value="2018">
                            </label>
                        </li>
                        <li>
                            <label class="flex justify-between"  for="year2">2019
                                <input type="checkbox" id="year2" class="checked:bg-blue-500" value="2019"></label>
                        </li>
                        <li>
                            <label class="flex justify-between"  for="year3">2020
                                <input type="checkbox" id="year3" class="checked:bg-blue-500" value="2020">
                            </label>
                        </li>
                        <li>
                            <label class="flex justify-between"  for="year4">2021
                                <input type="checkbox" id="year4" class="checked:bg-blue-500" value="2021">
                            </label>
                        </li>
                        <li>
                            <label class="flex justify-between"  for="year5">2022 <input type="checkbox" id="year5" class="checked:bg-blue-500"
                                    value="2022">
                            </label>
                        </li>
                        <li>
                            <label class="flex justify-between"   for="year6">2023 <input type="checkbox" id="year6" class="checked:bg-blue-500"
                                    value="2023">
                            </label>
                        </li>
                    </ul>
                    <button class="main_btn h-10 w-full mt-5 font-[2rem]">search</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n()
const localePath = useLocalePath()
const news = ref(null)

await useAsyncData("news", () => {
    $fetch(`${config.public.baseURL}news`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        }
    }).then((res) => {
        const data = res.data
        news.value = data
    }).catch((err) => {
        console.log(err);
    })
})
console.log(news);
</script>

<style lang="scss" scoped></style>b