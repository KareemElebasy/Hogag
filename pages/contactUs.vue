<template>
    <div class="container mx-auto mt-16">
        <h6 class="text-[1.5rem] font-bold pb-5">معلومات التواصل</h6>
        <div class=" min-h-[25rem] bg-secondary">
            Map
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { locale } = useI18n()
const localePath = useLocalePath()
const branches = ref(null)
await useAsyncData("branches", () => {
    $fetch(`${config.public.baseURL}contact_us/branches`, {
        headers: {
            "Accept-language": locale.value,
            "Accept": "application/json"
        }
    }).then((res) => {
        const data = res.data
        branches.value = data
    }).catch((err) => {
        console.log(err);
    })
})
console.log(branches);
// Send Msg
const contact_message =async ()=> await useAsyncData("contact_message", () => {
    try {
        $fetch(`${config.public.baseURL}contact_us/contact_message`, {
            method: "POST",
            headers: {
                "Accept-language": locale.value,
                "Accept": "application/json"
            },
            body: {
                subject: "",
                content: ""
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})
// Add Branch
const addBranch =async ()=> await useAsyncData("branch_details", () => {
    try {
        $fetch(`${config.public.baseURL}contact_us/branch_details`, {
            method: "POST",
            headers: {
                "Accept-language": locale.value,
                "Accept": "application/json"
            },
            body: {
                branchName: "",
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})


</script>

<style lang="scss" scoped></style>