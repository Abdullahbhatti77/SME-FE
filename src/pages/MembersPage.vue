<template>
  <div class="tw-w-full tw-h-96 bgImg flex tw-justify-center tw-items-center">
    <div class="tw-flex tw-justify-center tw-items-center tw-flex-col tw-px-10">
      <p class="tw-text-sm tw-text-white">
        Our Members
      </p>
      <p class="tw-text-5xl tw-text-white tw-font-bold">
        Start Looking For You Partner
      </p>
      <p class="tw-text-white tw-text-md tw-font-normal tw-mt-10">Search your match based on your interests and don’t
        hesitate to approach them first. Interact with as many people as possible.</p>
    </div>
  </div>

  <div class="md:tw-px-40 tw-mt-10 tw-px-10">
    <label class="tw-relative tw-block">
      <span class="tw-sr-only">Search</span>
      <span class="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-2">
        <img src="../assets/searchicon.svg" class="tw-h-10 tw-w-10 tw-fill-slate-300">
      </span>
      <input
        class="tw-border-0 tw-placeholder:text-black tw-block tw-bg-white tw-w-full tw-rounded-md tw-py-3 tw-pl-14 tw-pr-3 tw-shadow-md tw-sm:text-sm"
        placeholder="Search Members..." type="text" name="search" />
      <span class="tw-absolute tw-inset-y-0 tw-right-0 tw-pr-2">
        <!-- <button class="tw-w-10 tw-h-10"><img src="../assets/Filter.svg"
            class=" tw-fill-slate-300 tw-w-8 tw-h-8" /></button> -->
        <FilterModal />
      </span>
    </label>
  </div>

  <div class="md:tw-px-40 tw-py-10 tw-px-10">
    <div class='tw-grid tw-justify-center tw-grid-cols-1 tw-gap-7 md:tw-grid-cols-2 lg:tw-grid-cols-3'>
      <CardComp name="rukshana" location="Age 60 years, Dubai, UAE" profession="Doctor" :imagePath="url1" />
      <CardComp name="rukshana" location="Age 26 years, Lahore, Pakistan" profession="Graphic Designer"
        :imagePath="url2" />
      <CardComp name="rukshana" location="Age 60 years, Dubai, UAE" profession="Doctor" :imagePath="url3" />
      <CardComp name="rukshana" location="Age 26 years, Lahore, Pakistan" profession="Graphic Designer"
        :imagePath="url2" />
      <CardComp name="rukshana" location="Age 60 years, Dubai, UAE" profession="Doctor" :imagePath="url1" />
      <CardComp name="rukshana" location="Age 26 years, Lahore, Pakistan" profession="Graphic Designer"
        :imagePath="url3" />
    </div>
  </div>

  <div class="tw-px-40 tw-pb-20">
    <div class="tw-flex tw-justify-center tw-flex-row tw-space-x-2">
      <button
        class="tw-w-8 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-flex tw-justify-center tw-items-center tw-border-0 tw-cursor-pointer"><img
          src="../assets/leftarrow.svg" /></button>
      <button class="tw-w-8 tw-h-8 tw-border-2 tw-border-gray-300 tw-rounded-md tw-bg-white tw-cursor-pointer">1</button>
      <button class="tw-w-8 tw-h-8 tw-border-2 tw-border-gray-300 tw-rounded-md tw-bg-white tw-cursor-pointer">2</button>
      <button
        class="tw-w-8 tw-h-8 tw-border-2 tw-border-gray-300 tw-rounded-md tw-bg-white tw-cursor-pointer">...</button>
      <button class="tw-w-8 tw-h-8 tw-border-2 tw-border-gray-300 tw-rounded-md tw-bg-white tw-cursor-pointer">9</button>
      <button class="tw-w-8 tw-h-8 tw-border-2 tw-border-gray-300 tw-rounded-md tw-bg-white tw-cursor-pointer">10</button>
      <button
        class="tw-w-8 tw-h-8 tw-border-2 tw-border-gray-300 tw-rounded-md tw-flex tw-justify-center tw-items-center tw-bg-white tw-cursor-pointer"><img
          src="../assets/rightarrow.svg" /></button>
    </div>
  </div>
</template>
    
<script setup type="module">
import CardComp from '../components/CardComp.vue'
import FilterModal from '../components/FilterModal.vue'

const url1 = new URL("../assets/cardimage1.svg", import.meta.url).href;
const url2 = new URL("../assets/cardimage2.svg", import.meta.url).href;
const url3 = new URL("../assets/cardimage3.svg", import.meta.url).href;
</script>
  
<style scoped>
.bgImg {
  background-image: url("../assets/banner.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
    