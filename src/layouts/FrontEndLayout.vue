<template>
  <q-layout view="lHh Lpr lFf" class="tw-overflow-x-hidden">
    <q-header elevated>
      <div class="header-2 font-[Helvetica]">
        <nav class="tw-bg-white tw-px-10 tw-py-2">
          <div class="tw-container tw-mx-auto tw-h-auto">
            <div class="tw-flex tw-justify-between tw-items-center tw-gap-2">
              <img
                class="tw-w-[150px] tw-lg:w-[150px] tw-xl:w-[200px]"
                src="../assets/logo.svg"
                alt=""
              />
              <div
                class="tw-flex tw-items-center tw-leading-4 tw-lg:ml-auto tw-mt-3 tw-lg:mt-0 tw-gap-2"
              >
                <router-link
                  to="/home"
                  class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                  >Home</router-link
                >
                <router-link
                  to="#"
                  class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                  >Members</router-link
                >
                <router-link
                  to="#"
                  class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                  >Matrimonial Events</router-link
                >
                <router-link
                  to="#"
                  class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                  >Chat</router-link
                >
                <router-link
                  to="#"
                  class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                  >Interests</router-link
                >
                <router-link
                  to="#"
                  class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                  >Success Stories</router-link
                >
                <router-link
                  to="#"
                  class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                  >Plans</router-link
                >
                <router-link
                  to="/login"
                  class="custom-bg-color tw-cursor-pointer tw-justify-center tw-gap-1 tw-flex tw-w-[10rem] tw-lg:w-[8rem] tw-xl:w-[10rem] tw-p-3 tw-lg:px-2 tw-md:mx-2 tw-text-white tw-rounded tw-xl:text-sm"
                >
                  <img class="" src="../assets/user.svg" alt="" />
                  <div class="tw-ms-2 tw-text-[16px]">Login/Register</div>
                </router-link>
              </div>
              <button
                class="tw-hidden tw-border tw-mt-4 tw-border-solid tw-border-gray-600 tw-px-3 tw-py-1 tw-rounded tw-text-gray-600 tw-opacity-50 tw-hover:opacity-75 tw-lg:hidden"
                id="navbar-toggle"
                @click="togglebtn"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>
            <div
              v-if="state"
              class="tw-sm-flex tw-flex-col tw-items-center tw-leading-4 tw-lg:ml-auto tw-mt-3 tw-lg:mt-0 tw-gap-2"
              id="navbar-collapse"
            >
              <router-link
                to="/Home"
                class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
              >
                Home
              </router-link>
              <a
                href="#"
                class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                >Members</a
              >
              <a
                href="#"
                class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                >Matrimonial Events</a
              >
              <a
                href="#"
                class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                >Chat</a
              >
              <a
                href="#"
                class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                >Interests</a
              >
              <a
                href="#"
                class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                >Success Stories</a
              >
              <a
                href="#"
                class="tw-p-1 tw-text-[16px] tw-xl:text-[16px] tw-lg:px-2 tw-md:mx-2 tw-text-gray-600 tw-rounded tw-hover:bg-gray-200 tw-hover:text-gray-700 tw-transition-colors tw-duration-300 tw-lg:text-sm"
                >Plans</a
              >
              <router-link
                to="/login"
                class="custom-bg-color tw-cursor-pointer tw-justify-center tw-gap-1 tw-flex tw-w-[10rem] tw-lg:w-[8rem] tw-xl:w-[10rem] tw-p-3 tw-lg:px-2 tw-md:mx-2 tw-text-white tw-rounded tw-xl:text-sm"
              >
                <img class="" src="../assets/user.svg" alt="" />
                <div class="tw-ms-2 tw-text-[16px]">Login/Register</div>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="tw-text-white tw-px-10 bg font-normal">
      <div class="tw-flex tw-justify-center tw-pt-8">
        <img class="" src="../assets/heart.svg" alt="" />
      </div>
      <h1 class="tw-text-center tw-mb-3 footerHeading">
        Please contact us if you have any questions
      </h1>
      <div class="tw-container tw-py-8 tw-mx-auto">
        <div class="tw-flex tw-justify-between tw-gap-6 tw-flex-wrap">
          <div class="tw-flex tw-justify-center tw-gap-2">
            <i class="fa-solid fa-phone tw-p-1"></i>
            <div class="tw-flex tw-flex-col tw-gap-1">
              <span class="tw-text-[22px] tw-ms-2 tw-font-serif tw-opacity-80"
                >Give Us A Call
              </span>
              <div class="tw-ms-2 tw-text-[20px]">+971 52 204 7059</div>
            </div>
          </div>
          <div class="tw-flex tw-justify-center tw-gap-2">
            <i class="fa-solid fa-envelope tw-p-1"></i>
            <div class="tw-flex tw-flex-col tw-gap-1">
              <span class="tw-text-[22px] tw-ms-2 tw-font-serif tw-opacity-80"
                >Send Us Email</span
              >
              <div class="tw-ms-2 tw-text-[20px]">info@smematrimony.com</div>
            </div>
          </div>
          <div class="tw-flex tw-justify-center tw-gap-2">
            <i class="fa-solid fa-location-dot tw-p-1"></i>
            <div class="tw-flex tw-flex-col tw-gap-1">
              <span class="tw-text-[22px] tw-ms-2 tw-font-serif tw-opacity-80">
                Head Office</span
              >
              <div class="tw-ms-2 tw-text-[22px]">
                224 Dorchester place Waterloo <br class="" />
                <span class="tw-ms-2 tw-text-[22px]"
                  >Ontario n2t2h7 Canada.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="tw-bg-white tw-px-10 tw-py-2">
        <div
          class="tw-container tw-mx-auto tw-flex tw-justify-between tw-mt-2 tw-items-center tw-flex-wrap tw-gap-2"
        >
          <div class="tw-flex tw-justify-between tw-items-center tw-me-8">
            <img
              class="tw-lg:w-[150px] tw-xl:w-[200px]"
              src="../assets/logo.svg"
              alt=""
            />
          </div>

          <div
            class="tw-flex tw-flex-wrap tw-text-[13px] tw-ml-auto tw-text-[#3D3D3D]"
          >
            <router-link
              to="/home"
              href="#"
              class="tw-p-1 tw-lg:px-2 tw-mx-2 tw-rounded tw-transition-colors tw-text-gray-600 tw-duration-300"
              >Home</router-link
            >
            <router-link
              to="#"
              class="tw-p-1 tw-lg:px-2 tw-mx-2 tw-rounded tw-transition-colors tw-text-gray-600 tw-duration-300"
              >Matrimonial Events</router-link
            >
            <router-link
              to="#"
              class="tw-p-1 tw-lg:px-2 tw-mx-2 tw-rounded tw-transition-colors tw-text-gray-600 tw-duration-300"
              >Privacy Policy</router-link
            >
            <router-link
              to="#"
              class="tw-p-1 tw-lg:px-2 tw-mx-2 tw-rounded tw-transition-colors tw-text-gray-600 tw-duration-300"
              >Terms & Conditions</router-link
            >
            <router-link
              to="#"
              class="tw-p-1 tw-lg:px-2 tw-mx-2 tw-rounded tw-transition-colors tw-text-gray-600 tw-duration-300"
              >Contact Us</router-link
            >
          </div>
        </div>
        <hr class="tw-container tw-mx-auto tw-mt-4" />
      </div>
    </div>
    <div class="tw-px-10 tw-mb-3 tw-mx-auto">
      <div
        class="tw-container tw-mx-auto tw-flex tw-justify-between tw-flex-wrap tw-gap-2 tw-items-center"
      >
        <p class="tw-text-gray-400 tw-text-[14px]">
          Copyright © 2023 smematrimony.com - All Rights Reserved.
        </p>
        <div class="tw-flex tw-gap-4">
          <i
            class="fa-brands fa-facebook-f tw-text-white tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full custom-bg-color"
          ></i>
          <img
            class="tw-text-white custom-bg-color tw-p-2 tw-flex tw-justify-center tw-w-9 tw-h-9 tw-items-center tw-rounded-full"
            src="../assets/youtube.svg"
            alt=""
          />

          <i
            class="fa-brands fa-instagram tw-text-white custom-bg-color tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full"
          ></i>

          <i
            class="fa-brands fa-whatsapp tw-text-white custom-bg-color tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full"
          ></i>
          <i
            class="fa-brands fa-meetup tw-text-white custom-bg-color tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full"
          ></i>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

let state = ref(false);
function togglebtn() {
  state.value = !state.value;
}
</script>

<style scoped>
@media screen and (max-width: 770px) {
  .footerHeading {
    font-size: 10px;
  }
}
.logo-adjustment {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
}
a {
  text-decoration: none;
}
.custom-bg-color {
  background-color: #fb406c;
}
.footerHeading {
  font-family: "DM Serif Display";
  font-size: 42px;
  line-height: 50px;
}

.bg {
  background-image: url("../assets/footerImage.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
