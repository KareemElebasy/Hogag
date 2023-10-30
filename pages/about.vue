<template>
    <div class="container">
        <BreadCrumb :items="items" />
    </div>
    <div class="container mx-auto mb-8 mt-2" v-if="aboutData">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
            <div><img :src="aboutData[0]?.image" class="max-w-[22rem]" alt="motawefy-hogag"></div>
            <div class="m-auto">
                <h2 class="font-bold text-[1.8rem] mb-5">شركة مطوفي حجاج الدول الأفريقية غير العربية</h2>
                <p>{{ aboutData[0]?.text }}</p>
            </div>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
            <div class="m-auto">
                <h2 class="font-bold text-[1.8rem] mb-5">شركة مطوفي حجاج الدول الأفريقية غير العربية</h2>
                <p>{{ aboutData[1]?.text }}</p>
            </div>
            <div><img :src="aboutData[1]?.image" class="max-w-[22rem]" alt="motawefy-hogag"></div>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
            <div><img :src="aboutData[2]?.image" class="max-w-[22rem]" alt="motawefy-hogag"></div>
            <div class="m-auto">
                <h2 class="font-bold text-[1.8rem] mb-5">شركة مطوفي حجاج الدول الأفريقية غير العربية</h2>
                <p>{{ aboutData[2]?.text }}</p>
            </div>
        </div>
    </div>
    <!-- Vission and Mission -->
    <div class="container mx-auto bg-light-primary mb-6" v-if="vissinMsg">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="relative">
                <img src="../assets/images/heg.png" class="mx-auto max-h-[28rem]" alt="motawfyhogag">
                <img class="absolute top-0 left-0" src="../assets/images/bg-vission.svg" alt="">
            </div>
            <div class="m-auto">
                <div class="flex gap-5 mb-4">
                    <img class="block max-h-[3rem]" src="../assets/images/vission.png" alt="hogag">
                    <div>
                        <h4 class="mb-4">رؤيتنا</h4>
                        <p>{{ vissinMsg }}</p>
                    </div>
                </div>
                <div class="flex gap-5">
                    <img class="block max-h-[3rem]" src="../assets/images/vission.png" alt="hogag">
                    <div>
                        <h4 class="mb-4">رسالتنا</h4>
                        <p>{{ missionMsg }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Vission Values -->
    <div class="container mx-auto mt-9 mb-9" v-if="vissinValues">
        <h4 class="text-3xl font-bold mb-8">قيمنا</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            <div class="flex flex-col items-center gap-5">
                <img class="block" src="../assets/images/msg.png" alt="">
                <h6>{{ vissinValues[0] }}</h6>
            </div>
            <div class="flex flex-col items-center gap-5">
                <img class="block" src="../assets/images/msg.png" alt="">
                <h6>{{ vissinValues[1] }}</h6>
            </div>
            <div class="flex flex-col items-center gap-5">
                <img class="block" src="../assets/images/msg.png" alt="">
                <h6>{{ vissinValues[2] }}</h6>
            </div>
            <div class="flex flex-col items-center gap-5">
                <img class="block" src="../assets/images/msg.png" alt="">
                <h6>{{ vissinValues[3] }}</h6>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();

const aboutData = ref(null)
useAsyncData("AboutData", () => {
    $fetch(`${config.public.baseURL}aboutCompany`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        aboutData.value = data
    }).catch((err) => {
        console.log(err);
    })

})
const vissinMsg = ref(null)
const missionMsg = ref(null)
const vissinValues = ref(null)
useAsyncData("vissionData", () => {
    $fetch(`${config.public.baseURL}aboutCompany/visionAndMission`, {
        headers: {
            "Accept-language": "ar",
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        vissinMsg.value = data.vision
        missionMsg.value = data.mission
        vissinValues.value = data.values
    }).catch((err) => {
        console.log(err);
    })
})
const items = [
    {
        name: "الرئيسية",
        link: "/",
        disable: true,
    },
    {
        name: "عن الشركة",
        link: "/about",
        disable: true,
    },
    {
        name: "من نحن",
        link: "/",
        disable: false,
    },
];
</script>

<style lang="scss" scoped></style>