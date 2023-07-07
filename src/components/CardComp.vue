<template>
    <div class=''>
        <div class="tw-w-full tw-overflow-hidden tw-bg-white tw-rounded-lg tw-shadow-md">
            <img :src="imagePath" class="tw-w-full tw-cursor-pointer tw-h-64 tw-object-cover" alt="Project1" />
            <div class="tw-px-4 tw-py-2 tw-h-24">
                <!-- <div class="tw-relative"> -->
                <div class="tw-mb-2 tw-text-lg tw-font-semibold tw-relative">{{ name }}
                    <p class="tw-text-sm tw-text-green-600 tw-absolute tw-right-0 tw-bottom-1">View Profile</p>
                </div>
                <!-- </div> -->
                <p class="tw-text-md tw-font-normal tw-text-[#8A8886]">
                    {{ location }}
                </p>
                <p class="tw-text-md tw-font-normal tw-text-[#8A8886] tw-mt-1">{{ profession }}</p>
            </div>

            <div class="tw-mt-3 tw-px-1 tw-py-1">
                <button
                    class="tw-py-2 tw-w-full tw-text-md tw-font-normal tw-text-white tw-bg-pink-600 tw-flex tw-justify-center tw-items-center tw-border-0">
                    Send message
                </button>
                <div class="tw-flex tw-flex-row tw-w-full">
                    <button class="tw-flex tw-justify-center tw-items-center tw-py-2 tw-w-1/2 tw-rounded-bl-lg tw-border-[0.7px]">
                        <img src="../assets/cross.svg">
                    </button>
                    <button class="tw-flex tw-justify-center tw-items-center tw-py-2 tw-w-1/2 tw-rounded-br-lg tw-border-[0.7px]">
                        <img src="../assets/hearticon.svg">
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        name: String,
        location: String,
        profession: String,
        imagePath: String
    },
    //   methods: {
    //   getImagePath() {
    //     // Return the full path to the image
    //     return require(`../assets/${this.imagePath}`)
    //   }
    // }
}

</script>
  