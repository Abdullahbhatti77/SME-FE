<template>
    <div class="tw-inline-block">
        <div>
            <!-- <button type="button" class="" @click="isOpen = !isOpen">
                <img src="../assets/Filter.svg" class="tw-w-10 tw-h-10" />
            </button> -->
            <img src="../assets/Filter.svg" class="tw-w-10 tw-h-10 cursor-pointer" @click="isOpen = !isOpen" />
        </div>
        <div v-if="isOpen"
            class="tw-absolute tw-right-0 tw-w-[52] tw-p-1 tw-origin-top-right tw-bg-white tw-rounded-md tw-shadow-lg lg:tw-p-5 lg:tw-w-56 tw-z-10">

            <p class="tw-text-pink-500 text-md tw-pb-4">Filters</p>
            <div class="tw-flex tw-flex-col tw-gap-7">

                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Age from</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="18-24"><span class="tw-text-sm tw-text-[#969696]">18-24</span></option>
                        <option value="24-28"><span class="tw-text-sm tw-text-[#969696]">24-28</span></option>
                    </select>
                </div>
                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Martial Status</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="single"><span class="tw-text-sm tw-text-[#969696]">Single</span></option>
                        <option value="married"><span class="tw-text-sm tw-text-[#969696]">Married</span></option>
                    </select>
                </div>
                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Caste</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="Rajpoot"><span class="tw-text-sm tw-text-[#969696]">Rajpoot</span></option>
                        <option value="Shia"><span class="tw-text-sm tw-text-[#969696]">Shia</span></option>
                    </select>
                </div>
                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Job Title</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="mechanical engineer"><span class="tw-text-sm tw-text-[#969696]">mechanical
                                engineer</span></option>
                        <option value="mechanical engineer"><span class="tw-text-sm tw-text-[#969696]">Software
                                engineer</span></option>
                    </select>
                </div>
                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Hight(feet)</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="10 feet"><span class="tw-text-sm tw-text-[#969696]">10 feet</span></option>
                        <option value="12 feet"><span class="tw-text-sm tw-text-[#969696]">12 feet</span></option>

                    </select>
                </div>
                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Education</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="bachelors"><span class="tw-text-sm tw-text-[#969696]">bachelors</span></option>
                        <option value="masters"><span class="tw-text-sm tw-text-[#969696]">masters</span></option>
                    </select>
                </div>
                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Nationality</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="Indian"><span class="tw-text-sm tw-text-[#969696]">Indian</span></option>
                        <option value="Pakistani"><span class="tw-text-sm tw-text-[#969696]">Pakistani</span></option>
                    </select>
                </div>
                <div class="tw-relative">
                    <p class="tw-text-xs tw-absolute tw--top-2 tw-ml-3 tw-bg-white">Country</p>
                    <select name="age" id="age"
                        class="tw-w-48 tw-py-2 tw-rounded-lg tw-bg-white tw-outline-[#969696] tw-border-1 tw-cursor-pointer">
                        <option value="select"><span class="tw-text-sm tw-text-[#969696]">select</span></option>
                        <option value="Pakistan"><span class="tw-text-sm tw-text-[#969696]">Pakistan</span></option>
                        <option value="Russia"><span class="tw-text-sm tw-text-[#969696]">Russia</span></option>
                    </select>
                </div>
                <div>
                    <button
                        class="tw-w-48 tw-py-2 tw-bg-[#FB406C] tw-text-white tw-font-bold tw-text-md tw-rounded-md tw-border-0 tw-cursor-pointer">Apply</button>
                </div>


            </div>
        </div>
    </div>
</template>
  
<script>
import SelectTag from '../components/SelectTag.vue';

export default {
    name: 'FilterModal',
    data() {
        return {
            isOpen: false
        }
    }
}
</script>
<style scoped></style>
  