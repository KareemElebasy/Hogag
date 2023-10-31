<template>
    <nav class="container max-auto flex justify-between items-center pt-2 pb-2 ">
        <div>
            <nuxt-link :to="localePath('/')">
                <img src="../../assets/images/logo.svg" alt="motawefy-hogag">
            </nuxt-link>
        </div>
        <div class="lg:block hidden ">
            <ul class="flex items-center text-[.9rem] font-bold gap-2">
                <li><nuxt-link :to="localePath('/')"> {{ $t("Home") }}
                    </nuxt-link></li>
                <li>
                    <div>
                        <div @click="toggleDropdwon" class="flex gap-2 items-center relative">
                            {{ $t("About") }} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                                data-v-inspector="components/Home/Navbar.vue:87:29">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" data-v-inspector="components/Home/Navbar.vue:89:33"></path>
                            </svg>
                        </div>
                        <ul v-if="dropDownIsOpen" class="flex-col absolute z-50 mt-2 p-2 bg-white rounded min-w-[10rem]">
                            <li><nuxt-link :to="localePath('/about')">{{ $t("About") }}</nuxt-link></li>
                            <li>
                                <div>
                                    <div @click="toggleSubDropdwon" class="flex gap-2 items-center relative">
                                        {{ $t("Words") }} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                                            data-v-inspector="components/Home/Navbar.vue:87:29">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 4 4 4-4"
                                                data-v-inspector="components/Home/Navbar.vue:89:33"></path>
                                        </svg>
                                    </div>
                                    <ul v-if="subdropDownIsOpen"
                                        class="flex-col absolute z-50 mt-2 p-2 bg-white rounded min-w-[15rem]">
                                        <li><nuxt-link :to="localePath('/chairManSpeech')">{{ $t("WordManger")
                                        }}</nuxt-link></li>
                                        <li><nuxt-link :to="localePath('/deputyChairManSpeech')">{{ $t("WordDeputyManger")
                                        }}</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><nuxt-link :to="localePath('/boardOfDirectories')">{{ $t("boardOfDirectories")
                            }}</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/companyCategories')">{{ $t("Category") }} </nuxt-link></li>
                        </ul>
                    </div>
                </li>
                <li><nuxt-link :to="localePath('/services')">{{ $t("OurServices") }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/achievements')">{{ $t("Advancedthumbnails") }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/countries')">{{ $t("Countries") }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/partners')">{{ $t("Ourpartners") }}</nuxt-link></li>
                <li>
                    <div>
                        <div @click="toggleDropdwon2" class="flex gap-2 items-center relative">
                            {{ $t("MediaCenter") }}
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6" data-v-inspector="components/Home/Navbar.vue:87:29">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" data-v-inspector="components/Home/Navbar.vue:89:33"></path>
                            </svg>
                        </div>
                        <ul v-if="dropDownIsOpen2" class="flex-col absolute z-50 mt-2 p-2 bg-white rounded min-w-[12rem]">
                            <li><nuxt-link :to="localePath('/mediaCenter')">معرض الصور</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/news')">أخبارنا</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/mediaCenter')">مركز المعلومات</nuxt-link></li>
                        </ul>
                    </div>
                </li>
                <li><nuxt-link :to="localePath('/contactUs')">{{ $t("Contactus") }}</nuxt-link></li>
                <li>
                    <nuxt-link :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')" class="text-[#9F8B58]">
                        <img v-if="$i18n.locale == 'ar'" src="../../assets/images/en.png" class="w-[2rem]"
                            alt="flag-english">
                        <img v-if="$i18n.locale == 'en'" src="../../assets/images/ar.png" class="w-[2rem]"
                            alt="flag-arabic">
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div class="lg:hidden">
            <button @click="toggleSide" class="relative group z-50">
                <div
                    class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div
                        class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div
                            class="bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]">
                        </div>
                        <div
                            class="bg-primary h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10">
                        </div>
                        <div
                            class="bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]">
                        </div>
                    </div>
                </div>
            </button>
            <div v-if="sidebasIsOpen" class="fixed top-16 h-screen w-screen duration-300 z-40 start-0">
                <div class="p-3 bg-white w-[100%] h-full">
                    <ul class="">
                        <li><nuxt-link class="block mb-3 border rounded-xl p-3" :to="localePath('/')"> {{ $t("Home") }}
                            </nuxt-link></li>
                        <li>
                            <div>
                                <div @click="toggleDropdwon"
                                    class="flex gap-2 items-center relative mb-3 border rounded-xl p-3">
                                    {{ $t("About") }} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                                        data-v-inspector="components/Home/Navbar.vue:87:29">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4"
                                            data-v-inspector="components/Home/Navbar.vue:89:33"></path>
                                    </svg>
                                </div>
                                <ul v-if="dropDownIsOpen"
                                    class="flex-col absolute z-50 mt-2 p-2 bg-white rounded min-w-[10rem]">
                                    <li><nuxt-link :to="localePath('/about')">{{
                                        $t("About") }}</nuxt-link></li>
                                    <li>
                                        <div>
                                            <div @click="toggleSubDropdwon" class="flex gap-2 items-center relative">
                                                {{ $t("Words") }} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                                                    data-v-inspector="components/Home/Navbar.vue:87:29">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"
                                                        data-v-inspector="components/Home/Navbar.vue:89:33"></path>
                                                </svg>
                                            </div>
                                            <ul v-if="subdropDownIsOpen"
                                                class="flex-col absolute z-50 mt-2 p-2 bg-white rounded min-w-[15rem]">
                                                <li><nuxt-link :to="localePath('/chairManSpeech')">{{ $t("WordManger")
                                                }}</nuxt-link></li>
                                                <li><nuxt-link :to="localePath('/deputyChairManSpeech')">{{
                                                    $t("WordDeputyManger")
                                                }}</nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><nuxt-link :to="localePath('/boardOfDirectories')">{{ $t("boardOfDirectories")
                                    }}</nuxt-link></li>
                                    <li><nuxt-link :to="localePath('/companyCategories')">{{ $t("Category") }} </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><nuxt-link class="block mb-3 border rounded-xl p-3" :to="localePath('/services')">{{
                            $t("OurServices") }}</nuxt-link></li>
                        <li><nuxt-link class="block mb-3 border rounded-xl p-3" :to="localePath('/achievements')">{{
                            $t("Advancedthumbnails") }}</nuxt-link></li>
                        <li><nuxt-link class="block mb-3 border rounded-xl p-3" :to="localePath('/countries')">{{
                            $t("Countries") }}</nuxt-link></li>
                        <li><nuxt-link class="block mb-3 border rounded-xl p-3" :to="localePath('/partners')">{{
                            $t("Ourpartners") }}</nuxt-link></li>
                        <li>
                            <div>
                                <div @click="toggleDropdwon2"
                                    class="mb-3 border rounded-xl p-3 flex gap-2 items-center relative">
                                    {{ $t("MediaCenter") }}
                                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6" data-v-inspector="components/Home/Navbar.vue:87:29">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4"
                                            data-v-inspector="components/Home/Navbar.vue:89:33"></path>
                                    </svg>
                                </div>
                                <ul v-if="dropDownIsOpen2"
                                    class="flex-col absolute z-50 mt-2 p-2 bg-white rounded min-w-[12rem]">
                                    <li><nuxt-link :to="localePath('/mediaCenter')">معرض الصور</nuxt-link></li>
                                    <li><nuxt-link :to="localePath('/news')">أخبارنا</nuxt-link></li>
                                    <li><nuxt-link :to="localePath('/mediaCenter')">مركز المعلومات</nuxt-link></li>
                                </ul>
                            </div>
                        </li>
                        <li><nuxt-link class="block mb-3 border rounded-xl p-3" :to="localePath('/contactUs')">{{
                            $t("Contactus") }}</nuxt-link></li>
                        <li>
                            <nuxt-link :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
                                class="block mb-3 border rounded-xl p-3 text-[#9F8B58]">
                                <img v-if="$i18n.locale == 'ar'" src="../../assets/images/en.png" class="w-[2rem]"
                                    alt="flag-english">
                                <img v-if="$i18n.locale == 'en'" src="../../assets/images/ar.png" class="w-[2rem]"
                                    alt="flag-arabic">
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const dropDownIsOpen = ref(false);
const dropDownIsOpen2 = ref(false);
const subdropDownIsOpen = ref(false);
const sidebasIsOpen = ref(false);

function toggleDropdwon() {
    dropDownIsOpen.value = !dropDownIsOpen.value
};
function toggleDropdwon2() {
    dropDownIsOpen2.value = !dropDownIsOpen2.value
};
function toggleSubDropdwon() {
    subdropDownIsOpen.value = !subdropDownIsOpen.value
};
function toggleSide() {
    sidebasIsOpen.value = !sidebasIsOpen.value
};
const route = useRoute();
watch(
    () => route.path,
    () => {
        dropDownIsOpen.value = false
        dropDownIsOpen2.value = false
        subdropDownIsOpen.value = false
        sidebasIsOpen.value = false
    }
);
</script>

<style lang="scss" scoped></style>