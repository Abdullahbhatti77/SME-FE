<template>
    <div class="tw-inline-block">
        <div>
            <button type="button"
                class="tw-inline-flex lg:tw-w-full tw-text-black tw-border tw-border-gray-300 tw-rounded-sm tw-shadow-sm tw-bg-[#F5F5F5] tw-relative"
                @click="isOpen = !isOpen">
                <!-- <span class="pr-3 lg:text-[10px] text-[7px]">Reader</span> -->
                <img src="../assets/Filter.svg" class="tw-absolute tw-right-0 lg:tw-w-5 lg:tw-h-5 tw-top-1 tw-w-2 tw-h-1" />
            </button>
        </div>
        <div v-if="isOpen"
            class="tw-absolute tw-right-0 tw-w-40 tw-p-1 tw-origin-top-right tw-bg-white tw-rounded-md tw-shadow-lg lg:tw-p-3 lg:tw-w-48">
            <div class="flex flex-col gap-2">
                <div>
                    <p class="tw-text-xs tw-font-normal lg:tw-text-sm">Reader</p>
                    <p class="tw-text-[#A0A0A0] tw-font-light tw-text-xs lg:tw-text-sm">Can view the video</p>
                </div>
                <div>
                    <p class="tw-text-xs tw-font-normal lg:tw-text-sm">Writer</p>
                    <p class="tw-text-[#A0A0A0] tw-font-light tw-text-xs lg:tw-text-sm">Can only view candor video and
                        interactions and
                        send replies</p>
                </div>
                <div>
                    <p class="tw-text-xs tw-font-normal lg:tw-text-sm">Creator</p>
                    <p class="tw-text-[#A0A0A0] tw-font-light tw-text-xs lg:tw-text-sm">Can only view candor video and
                        interactions and
                        send replies, and make changes to the candor video</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SamplePage',
    data() {
        return {
            isOpen: false
        }
    }
}
</script>
  