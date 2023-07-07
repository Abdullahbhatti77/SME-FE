<template>
    <div class="tw-relative">
        <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-pink">{{ label }}</p>
        <select name="age" id="age" class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1">
            <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
        </select>
    </div>
</template>
<script>
export default ({
    props: {
        label: String,
    },
})

</script>
<style scoped></style>