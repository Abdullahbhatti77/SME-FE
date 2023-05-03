<template>
  <div class="tw-bg-white tw-px-10 tw-py-8">
    <div class="tw-container tw-mx-auto tw-h-auto tw-shadow-md">
      <div class="tw-flex tw-items-center tw-gap-2">
        <div class="">
          <q-img
            class=""
            src="../assets/login-cover-image.svg"
            alt=""
            style="height: 85vh; width: 40vw"
          />
        </div>
        <div class="tw-w-4/5">
          <div
            class="tw-flex tw-flex-col tw-justify-between tw-mx-auto tw-w-9/12 tw-p-4 tw-gap-2"
          >
            <h1 class="tw-text-center heading">Login</h1>
            <label for="Enter Email" class="label text-sm">Enter Email</label>
            <q-input
              outlined
              dense
              v-model="text"
              label="Email"
              class="label tw-text-base tw-leading-4"
            />
            <label for="Enter Email" class="label text-sm">Password</label>

            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              outlined
              dense
              label="password"
              class="label tw-text-base tw-leading-4"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                  size="xs"
                />
              </template>
            </q-input>
            <a href="#" class="tw-text-right label text-sm tw-py-1"
              >Forget Password?</a
            >

            <q-btn
              class="tw-text-[15px] tw-font-sm label text-sm custom-bg-color tw-justify-center tw-h-11 tw-flex tw-text-white tw-rounded"
              >Login</q-btn
            >

            <div
              class="label tw-text-center tw-flex tw-justify-center tw-gap-2 tw-my-2"
            >
              <hr class="tw-border tw-w-full tw-my-3" />
              <p class="or-color">OR</p>
              <hr class="tw-border tw-w-full tw-my-3" />
            </div>

            <div class="tw-flex tw-gap-3">
              <div
                class="fb-bg-color tw-w-60 tw-justify-center tw-h-10 tw-gap-1 tw-flex tw-text-white tw-rounded"
              >
                <img class="tw-p-3" src="../assets/facebook-icon.svg" alt="" />
                <q-btn class="tw-ms-2 tw-font-semibold tw-text-[12px]">
                  Login with Facebook
                </q-btn>
              </div>
              <div
                class="google-bg-color tw-w-60 tw-justify-center tw-h-10 tw-gap-1 tw-flex tw-text-white tw-rounded"
              >
                <img class="tw-p-3" src="../assets/gmail-icon.svg" alt="" />
                <q-btn class="tw-ms-2 tw-text-[16px]">
                  Login with Google
                </q-btn>
              </div>
            </div>
            <p class="tw-text-center label tw-text-base tw-py-3">
              New Member?
              <router-link to="/register" class="register"
                >Register Now</router-link
              >
            </p>
            <!-- <q-input
          ref="inputRef"
          filled
          type="number"
          dense
          color="secondary"
          label="Minimum Miles"
          class="q-gutter-md col-12 col-sm"
        />
        <q-input
          class="input text-white q-pa-sm"
          color="white"
          placeholder="search service type"
        /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
const password = ref("");
const isPwd = ref(true);
</script>

<style scoped>
.heading {
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 42px;
}
.custom-bg-color {
  background-color: #fb406c;
}
.fb-bg-color {
  background-color: #2066b9;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
}
.or-color {
  color: #94a7af;
}
.google-bg-color {
  background-color: #d92047;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
}
.label {
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
}
.register {
  color: #fb406c;
}
</style>
