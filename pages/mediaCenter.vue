<template>
    <div v-if="photoGalleries" class="mt-14 container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div v-for="item in photoGalleries" :key="item.id"
                        class="bg-white w-full flex flex-col rounded-[1rem] h-full pb-5 border ">
                        <div class="w-[100%]"><img :src="item?.images[0]?.url" alt="motawefy-hogag"
                                class="rounded-t-[3rem] h-[12rem] w-full object-cover"></div>
                        <div class="p-3">
                            <div class="text-gray-400 flex gap-2 mb-3">
                                <p class="mb-2 font-bold">{{ item.photo_category_name }}</p>
                                <p>{{ item.added_date }}</p>
                            </div>
                            <div class="text-gray-400 flex justify-between">
                                <p class="mb-2 font-bold">{{ item.views_number }}</p>
                                <p>{{ item.downloads_number }}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-1">
                <div class="bg-white border w-full p-5 rounded-xl filterSec">

                    <h2 class="font-bold mb-2">الأقسام</h2>

                    <ul class="ms-5 space-y-2">
                        <li>
                            <label for="all-category">الكل
                                <input type="checkbox" id="all-category" value="true">
                            </label>
                        </li>
                        <li>
                            <label for=""> شركة مطوفي حجاج الدول الأفريقية غير العربية
                                <input type="checkbox" id="" value=""></label>
                        </li>
                        <li>
                            <label for=""> استقبال الحجيج
                                <input type="checkbox" id="" value=""></label>
                        </li>
                        <li>
                            <label for="">تجهيز المخيمات
                                <input type="checkbox" id="" value=""></label>
                        </li>
                        <li>
                            <label for="">التفويج
                                <input type="checkbox" id="" value=""></label>
                        </li>
                        <li>
                            <label for="">مجتمع المؤسسة
                                <input type="checkbox" id="" value=""></label>
                        </li>

                    </ul>

                    <hr class="my-6">
                    <h2 class="font-bold mb-2">السنة</h2>
                    <ul class="ms-5 mediaCenterList space-y-2">
                        <li>
                            <label for="all">الكل
                                <input type="checkbox" id="all" value="">
                            </label>
                        </li>
                        <li>
                            <label for="year0">2017 <input type="checkbox" id="year0" value="2017"></label>
                        </li>
                        <li>
                            <label for="year1">2018 <input type="checkbox" id="year1" value="2018">
                            </label>
                        </li>
                        <li>
                            <label for="year2">2019
                                <input type="checkbox" id="year2" value="2019"></label>
                        </li>
                        <li>
                            <label for="year3">2020
                                <input type="checkbox" id="year3" value="2020">
                            </label>
                        </li>
                        <li>
                            <label for="year4">2021
                                <input type="checkbox" id="year4" value="2021">
                            </label>
                        </li>
                        <li>
                            <label for="year5">2022 <input type="checkbox" id="year5" value="2022">
                            </label>
                        </li>
                        <li>
                            <label for="year6">2023 <input type="checkbox" id="year6" value="2023">
                            </label>
                        </li>
                    </ul>
                    <button type="submit" class="main_btn h-10 w-full mt-5 font-[2rem]">search</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n()
const localePath = useLocalePath()
const photoGalleries = ref(null)

await useAsyncData("photoGalleries", () => {
    $fetch(`${config.public.baseURL}photoGalleries`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        }
    }).then((res) => {
        const data = res.data
        photoGalleries.value = data
    }).catch((err) => {
        console.log(err);
    })
})
console.log(photoGalleries);
</script>

<style lang="scss" scoped>
.filterSec ul li label {
    display: flex;
    justify-content: space-between;
}
</style>