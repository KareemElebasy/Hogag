<template>
    <div v-if="!sliders">
        <Loading />
    </div>
    <HomeHeader />
    <div class="container">
        <HomeAboutSection />
        <HomeServicesSection :services="services" />
        <HomePreviousWork :previousWork="previousWork" />
        <HomeEnrichmentSection :enrichment="enrichment" />
        <HomeFactsSection :facts="facts" />
        <HomeCountrySection />
        <HomeNewsSection :news="news" />
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n();
const sliders = ref(null)
const services = ref(null)
const previousWork = ref(null)
const enrichment = ref(null)
const facts = ref(null)
const testimonials = ref(null)
const news = ref(null)
const partners = ref(null)
await useAsyncData("home", () => {
    $fetch(`${config.public.baseURL}home`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        },
    }).then((res) => {
        const data = res.data
        console.log(data);
        sliders.value = data.sliders
        services.value = data.services
        previousWork.value = data.previousWork
        enrichment.value = data.enrichment
        facts.value = data.facts
        testimonials.value = data.testimonials
        news.value = data.news
        partners.value = data.partners
    })
})
</script>

<style lang="scss" scoped></style>