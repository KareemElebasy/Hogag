<template>
    <nav class="container max-auto flex justify-between items-center pt-2 pb-2 ">
        <div>
            <img src="../../assets/images/logo.svg" alt="motawefy-hogag">
        </div>
        <div class="lg:block hidden ">
            <ul class="flex items-center text-[.9rem] font-bold gap-2">
                <li><nuxt-link  :to="localePath('/')"> {{ $t("Home") }}
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
                            <li><nuxt-link :to="localePath('/')">{{ $t("boardOfDirectories") }}</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/')">{{ $t("Category") }} </nuxt-link></li>
                        </ul>
                    </div>
                </li>
                <li><nuxt-link :to="localePath('/')">{{ $t("OurServices") }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/')">{{ $t("Advancedthumbnails") }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/')">{{ $t("Countries") }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/')">{{ $t("OurServices") }}</nuxt-link></li>
                <li>
                    <div>
                        <div @click="toggleDropdwon2" class="flex gap-2 items-center relative">
                            <nuxt-link :to="localePath('/')">{{ $t("MediaCenter") }}</nuxt-link>
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6" data-v-inspector="components/Home/Navbar.vue:87:29">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" data-v-inspector="components/Home/Navbar.vue:89:33"></path>
                            </svg>
                        </div>
                        <ul v-if="dropDownIsOpen2" class="flex-col absolute z-50 mt-2 p-2 bg-white rounded min-w-[12rem]">
                            <li><nuxt-link :to="localePath('/')">معرض الصور</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/')">أخبارنا</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/')">مركز المعلومات</nuxt-link></li>
                        </ul>
                    </div>
                </li>
                <li><nuxt-link :to="localePath('/')">{{ $t("Contactus") }}</nuxt-link></li>
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
            X
        </div>
    </nav>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const dropDownIsOpen = ref(false);
const dropDownIsOpen2 = ref(false);
const subdropDownIsOpen = ref(false);
function toggleDropdwon() {
    dropDownIsOpen.value = !dropDownIsOpen.value
};
function toggleDropdwon2() {
    dropDownIsOpen2.value = !dropDownIsOpen2.value
};
function toggleSubDropdwon() {
    subdropDownIsOpen.value = !subdropDownIsOpen.value
};
const route = useRoute();
watch(
    () => route.path,
    () => {
        dropDownIsOpen.value = false
        dropDownIsOpen2.value = false
        subdropDownIsOpen.value = false
    }
);
</script>

<style lang="scss" scoped></style>