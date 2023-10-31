<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" v-if="facts">
        <div class="col-span-1"><img class="max-w-[22rem]" src="../../assets/images/facts-image.svg" alt="motawefy-hogag">
        </div>
        <div class="col-span-1 m-auto p-10">
            <div class="grid grid-cols-2 gap-10 font-bold">
                <div>
                    <img class="w-[3rem]" src="../../assets/images/msg.png" alt="motawefy-hogag">
                    <div class="flex">
                        <h5 class="text-[2rem]">{{ facts.customers }}</h5>
                        <h6 class="text-[1rem]">حاج سنويا</h6>
                    </div>
                </div>
                <div>
                    <img class="w-[3rem]" src="../../assets/images/msg.png" alt="motawefy-hogag">
                    <div class="flex">
                        <h5 class="text-[2rem]">{{ facts.countries }}</h5>
                        <h6 class="text-[1rem]">دولة </h6>
                    </div>
                </div>
                <div>
                    <img class="w-[3rem]" src="../../assets/images/msg.png" alt="motawefy-hogag">
                    <div class="flex">
                        <h5 class="text-[2rem]">{{ facts.camps_number }}</h5>
                        <h6 class="text-[1rem]">مخيم </h6>
                    </div>
                </div>
                <div>
                    <img class="w-[3rem]" src="../../assets/images/msg.png" alt="motawefy-hogag">
                    <div class="flex">
                        <h5 class="text-[2rem]">{{ facts.customers }}</h5>
                        <h6 class="text-[1rem]">زائر للموقع</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['facts'])
</script>

<style lang="scss" scoped></style>