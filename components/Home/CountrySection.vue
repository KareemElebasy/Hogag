<template>
    <div dir="rtl" class="grid grid-cols-1 md:grid-cols-2 mt-10 rounded-[2rem] bg-bgprimary md:min-h-[22rem] min-h-[38rem]">
        <div class="col-span-2 md:col-span-1 relative">
            <img class="absolute" src="../../assets/images/countryimgright.svg" alt="motawefy-hogag">
            <div class="absolute top-28 right-20 md:right-40 font-bold text-black">
                <h5 class="text-[2rem] mb-2">{{ $t('ServicesCountryHeading') }}</h5>
                <p class="text-[1.2rem] mb-4">{{ $t('ServicesCountrryContent') }}</p>
                <NuxtLink class="main_btn" to="/countries">{{ $t('countryBtn') }}</NuxtLink>
            </div>
        </div>
        <div class=" col-span-2 md:col-span-1 relative ">
            <img class="absolute left-0 bottom-0 z-10 max-w-[22rem]" src="../../assets/images/countryimgleft1.svg"
                alt="motawefy-hogag">
            <img class="absolute left-0 bottom-0 max-w-[22rem]" src="../../assets/images/countryimgleft2.svg"
                alt="motawefy-hogag">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>