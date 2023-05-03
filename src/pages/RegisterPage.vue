<template>
  <div class="tw-bg-white tw-px-10 tw-py-8">
    <div class="tw-container tw-mx-auto tw-h-auto tw-shadow-md">
      <div class="tw-flex tw-items-center tw-gap-2">
        <div class="">
          <img class="" src="../assets/login-cover-image.svg" alt="" />
        </div>
        <div class="tw-w-4/5">
          <div
            class="tw-flex tw-flex-col tw-justify-between tw-mx-auto tw-w-9/12 tw-p-4 tw-gap-1.5"
          >
            <h1 class="tw-text-center heading tw-pb-2">Register Now</h1>
            <div class="tw-flex tw-gap-3">
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="label text-sm">
                  First Name
                </label>
                <q-input
                  outlined
                  dense
                  v-model="text"
                  class="label tw-text-base tw-leading-4"
                />
              </div>
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="label text-sm">Last Name</label>
                <q-input
                  outlined
                  dense
                  v-model="text1"
                  class="label tw-text-base tw-leading-4"
                />
              </div>
            </div>
            <label for="Enter Email" class="label text-sm">Enter Email</label>
            <q-input
              outlined
              dense
              v-model="text2"
              class="label tw-text-base tw-leading-4"
            />
            <label for="Enter Email" class="label text-sm">Password</label>
            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              outlined
              dense
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
            <label for="Enter Email" class="label text-sm"
              >Confirm Password</label
            >
            <q-input
              v-model="confirmpassword"
              :type="isconfPwd ? 'password' : 'text'"
              outlined
              dense
              class="label tw-text-base tw-leading-4"
            >
              <template v-slot:append>
                <q-icon
                  :name="isconfPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  size="xs"
                  @click="isconfPwd = !isconfPwd"
                />
              </template>
            </q-input>
            <div class="tw-flex tw-gap-4 label tw-text-base">
              <q-radio
                v-model="shape"
                dense
                val="Male"
                label="Male"
                color="red"
                size="xs"
              />
              <q-radio
                v-model="shape"
                val="Female"
                label="Female"
                dense
                size="xs"
                color="red"
              />
            </div>
            <div class="tw-flex tw-gap-3">
              <q-checkbox v-model="val" dense color="red" size="sm" />
              <p class="label tw-text-base tw-py-1">
                By clicking Register Now you agree to our
                <a href="#" class="register">terms and conditions</a>
              </p>
            </div>
            <div
              class="custom-bg-color tw-justify-center tw-h-11 tw-flex tw-text-white tw-rounded"
            >
              <q-btn class="tw-text-[16px] label text-sm">Register</q-btn>
            </div>
            <div
              class="label tw-text-center tw-flex tw-justify-center tw-gap-2 tw-py-1"
            >
              <hr class="tw-border tw-w-full tw-my-3" />
              <p class="or-color">OR</p>
              <hr class="tw-border tw-w-full tw-my-3" />
            </div>
            <div class="tw-flex tw-gap-3">
              <div
                class="fb-bg-color tw-w-full tw-justify-center tw-h-10 tw-gap-1 tw-flex tw-text-white tw-rounded"
              >
                <img class="tw-p-3" src="../assets/facebook-icon.svg" alt="" />
                <q-btn class="tw-ms-2 tw-text-[16px]">
                  Login with Facebook
                </q-btn>
              </div>
              <div
                class="google-bg-color tw-w-full tw-justify-center tw-h-10 tw-gap-1 tw-flex tw-text-white tw-rounded"
              >
                <img class="tw-p-3" src="../assets/gmail-icon.svg" alt="" />
                <q-btn class="tw-ms-2 tw-text-[16px]">
                  Login with Google
                </q-btn>
              </div>
            </div>
            <p class="tw-text-center label tw-text-base tw-pt-1">
              Already Member?
              <router-link to="/login" class="register">Login here</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
const text1 = ref("");
const text2 = ref("");
const password = ref("");
const isPwd = ref(true);
const confirmpassword = ref("");
const isconfPwd = ref(true);
const val = ref(true);
const shape = ref("Male");
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
