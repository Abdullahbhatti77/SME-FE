<template>
  <div class="tw-w-screen">
    <div class="tw-h-[70vh]">
      <q-img
        src="../assets/homebg.svg"
        class="tw-object-cover tw-w-full tw-h-full"
        alt=""
      />
    </div>
    <div
      class="tw-w-3/5 tw-pb-5 tw-min-h-[50vh] tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-centertw-mx-auto tw-text-center"
    >
      <q-h1
        class="tw-text-12 tw-mt-20 tw-text-red-500 tw-text-[40px] tw-font-normal tw-relative"
      >
        <img
          src="../assets/hearts.svg"
          class="tw-absolute tw-left-0"
          style="top: 0%; left: -10%"
          alt=""
        />

        What is SME matrimony
      </q-h1>
      <q-p class="tw-text-gray-800 tw-text-lg tw-font-normal tw-leading-7">
        Welcome to SME Matrimony. The world's first matchmaking website that
        pre-screens all its candidates through our Matrimonial events to ensure
        they are educated, well settled, and belong to a good family background.
        The only matchmaking website that offers the most comprehensive
        pre-screening of candidates that the Muslim community has to offer!
      </q-p>
    </div>

    <div
      class="div3 tw-h-[80vh] tw-w-full tw-text-center tw-flex tw-justify-center tw-items-center tw-gap-5 tw-flex-col"
    >
      <q-h1 class="tw-relative tw-text-white tw-text-5xl tw-font-normal">
        <img
          src="../assets/hearts.svg"
          class="tw-absolute tw-left-0"
          style="top: -30%; left: -10%"
          alt=""
        />
        Happy Couples
      </q-h1>
      <q-p class="tw-text-white tw-text-lg tw-font-bold tw-leading-7">
        Here are some of the couples who have successfully married through our
        Matrimonial events & online services.
      </q-p>
      <div
        class="tw-flex tw-ml-20 tw-mt-5 tw-gap-3 tw-w-full scrollbar-remover tw-overflow-auto"
        style="max-width: 90vw"
      >
        <div
          class="tw-flex-col tw-flex tw-w-[20%]"
          v-for="items in data"
          :key="items.id"
        >
          <img :src="items.img" :alt="items.img" class="" />
          <q-btn
            class="tw-flex tw-p-3 tw-bg-red-500 tw-text-white tw-gap-2 tw-items-center tw-justify-center"
          >
            <img src="../assets/link_icon.svg.svg" alt="" /> View Story
          </q-btn>
        </div>
      </div>
    </div>

    <div
      class="div4 tw-mx-auto tw-w-full tw-flex tw-justify-center tw-items-center tw-py-10 tw-flex-col tw-gap-4"
    >
      <q-h1
        class="tw-text-12 tw-text-red-500 tw-text-5xl tw-font-normal tw-mt-20 tw-text-center tw-relative"
      >
        <img
          src="../assets/hearts.svg"
          class="tw-absolute tw-left-0"
          style="top: -30%; left: -10%"
          alt=""
        />
        New Members
      </q-h1>
      <q-p
        class="tw-text-center tw-text-gray-800 tw-text-lg tw-font-normal tw-leading-7"
      >
        Sallam, We are very happy that you are part of SME Matrimony. We love
        all of our customers, and that includes you!
      </q-p>
      <div
        class="tw-flex tw-justify-between tw-items-start tw-flex-wrap tw-w-[70%] tw-gap-4 tw-mx-auto tw-mt-8"
      >
        <div
          class="tw-flex tw-flex-col w-full inner-div4 tw-w-full tw-max-w-[250px] tw-rounded-[10px] tw-overflow-hidden"
          v-for="items in data2"
          :key="items.id"
        >
          <q-img :src="items.img" alt="" />
          <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
            <div
              class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center"
            >
              <q-h1
                class="tw-text-xl tw-leading-7 tw-font-bold tw-text-gray-800"
              >
                {{ items.name }}
              </q-h1>
              <q-p
                class="tw-text-sm tw-leading-7 tw-font-normal tw-text-green-500"
              >
                View Profile
              </q-p>
            </div>
            <div class="tw-self-start tw-p-2 tw-h-[50px]">{{ items.text }}</div>
            <q-btn
              class="tw-flex tw-bg-red-500 tw-text-white tw-text-base tw-leading-7 tw-font-normal tw-p-3 tw-gap-2 tw-items-center tw-justify-center"
            >
              Send message
            </q-btn>
          </div>
          <div class="tw-grid tw-grid-cols-2">
            <q-btn
              class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center tw-border-solid tw-border-[#d92047] tw-border-b-[1px] tw-border-l-[1px] tw-rounded-bl-[10px]"
            >
              <i class="fa fa-solid fa-xmark" style="color: #d92047"></i>
            </q-btn>
            <q-btn
              class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center tw-border-solid tw-border-[#1baacc] tw-border-b-[1px] tw-border-l-[1px] tw-border-r-[1px] tw-rounded-br-[10px]"
            >
              <i class="fa fa-solid fa-heart" style="color: #1baacc"></i>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
    <div
      class="div5 tw-min-h-[180vh] tw-py-10 tw-mx-auto tw-w-full tw-flex tw-flex-col tw-gap-4"
    >
      <q-h1
        class="tw-text-[40px] tw-mt-20 tw-text-center tw-text-white tw-leading-10 tw-font-normal"
      >
        Upcoming Events
      </q-h1>

      <div
        class="tw-flex tw-flex-wrap tw-w-[62%] tw-gap-4 tw-justify-between tw-mx-auto tw-mt-4"
      >
        <div
          class="tw-flex tw-flex-col tw-w-full inner-div5 tw-max-w-[300px] tw-rounded-[10px] tw-overflow-hidden"
          v-for="items in data3"
          :key="items.id"
        >
          <q-img src="../assets/aiyzah.svg" alt="" />
          <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
            <div
              class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center"
            >
              <h1 class="tw-text-xl tw-leading-7 tw-font-bold tw-text-gray-800">
                Dubai Events
              </h1>
              <q-p class="tw-text-[#1baacc] tw-text-[14px]">
                <i class="fa fa-sharp fa-solid fa-location-dot"></i> Lahore,
                Pakistan
              </q-p>
            </div>
            <q-h6
              class="tw-self-start tw-px-2 tw-text-sm tw-leading-7 tw-font-normal tw-text-gray-800"
            >
              Matrimonial events description here Matrimonial events description
              hereMatrimonial events description here <br />

              <q-span class="tw-text-[#1baacc]">
                <i class="fa fa-regular fa-clock" style="color: #1baacc"></i>
                Mar 28,2023</q-span
              >
            </q-h6>

            <q-btn
              class="tw-flex tw-bg-red-500 tw-text-white tw-p-2 tw-gap-2 tw-items-center tw-justify-center"
            >
              View Details
            </q-btn>
          </div>
        </div>
      </div>
      <q-btn
        class="tw-max-w-[160px] tw-border-[1px] tw-border-solid tw-border-white tw-rounded-[10px] tw-mx-auto tw-w-full tw-p-2 tw-text-base tw-leading-4 tw-text-white tw-bg-none"
      >
        View All Events
      </q-btn>
      <h1
        class="tw-text-[40px] tw-mt-20 tw-text-center tw-text-white tw-leading-10 tw-font-normal"
      >
        Past Events
      </h1>

      <div
        class="tw-flex tw-flex-wrap tw-w-[62%] tw-gap-4 tw-justify-between tw-mx-auto tw-mt-4"
      >
        <div
          class="tw-flex tw-flex-col tw-w-full inner-div5 tw-max-w-[300px] tw-rounded-[10px] tw-overflow-hidden"
          v-for="items in data3"
          :key="items.id"
        >
          <q-img src="../assets/aiyzah.svg" alt="" />
          <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
            <div
              class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center"
            >
              <q-h1
                class="tw-text-xl tw-leading-7 tw-font-bold tw-text-gray-800"
              >
                Dubai Events
              </q-h1>
              <q-p class="tw-text-[#1baacc] tw-text-[14px]">
                <i class="fa fa-sharp fa-solid fa-location-dot"></i> Lahore,
                Pakistan
              </q-p>
            </div>
            <q-h6
              class="tw-self-start tw-px-2 tw-text-sm tw-leading-7 tw-font-normal tw-text-gray-800"
            >
              Matrimonial events description here Matrimonial events description
              hereMatrimonial events description here <br />

              <q-span class="tw-text-[#1baacc]">
                <q-i
                  class="fa fa-regular fa-clock"
                  style="color: #1baacc"
                ></q-i>
                Mar 28,2023</q-span
              >
            </q-h6>

            <q-btn
              class="tw-flex tw-bg-red-500 tw-text-white tw-p-2 tw-gap-2 tw-items-center tw-justify-center"
            >
              View Details
            </q-btn>
          </div>
        </div>
      </div>
      <q-btn
        class="tw-max-w-[160px] tw-border-[1px] tw-border-solid tw-border-white tw-rounded-[10px] tw-mx-auto tw-w-full tw-p-2 tw-text-base tw-leading-4 tw-text-white tw-bg-none"
      >
        View All Events
      </q-btn>
    </div>
    <div class="div6 tw-w-4/5 tw-mx-auto tw-text-center">
      <h1 class="tw-leading-10 tw-font-normal tw-text-[40px] tw-mt-20">
        Find Your Partner In Just Few Steps
      </h1>
      <br />
      <q-p class="tw-text-lg tw-leading-7 tw-font-normal">
        WP Matrimony will help you find your perfect match with just a few
        steps. You focus on what is <br />
        most important to you, we do all the work.
      </q-p>

      <div
        class="tw-flex tw-flex-wrap tw-mt-10 tw-pb-24 tw-gap-4 tw-justify-center tw-items-start"
      >
        <div
          class="tw-flex tw-justify-start tw-items-start"
          v-for="items in data4"
          :key="items.id"
        >
          <div
            class="tw-w-60 tw-flex tw-gap-2 tw-flex-col tw-justify-center tw-items-center"
          >
            <q-img :src="items.img" class="tw-w-24" alt="" />
            <q-h6 class="tw-text-xl tw-leading-7 tw-font-normal">
              {{ items.header }}
            </q-h6>
            <q-p
              class="tw-text-lg tw-leading-7 tw-font-normal"
              style="font-size: 16px"
            >
              {{ items.text }}
            </q-p>
          </div>
          <img
            v-if="items.arrow"
            src="../assets/upperArrow.svg"
            class="tw-mt-5 max-lg:tw-hidden"
            alt=""
          />
          <img
            v-if="items.larrow"
            src="../assets/lowerArrow.svg"
            class="tw-mt-20 max-lg:tw-hidden"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-remover::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-remover {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.div3 {
  background: linear-gradient(
    87.57deg,
    #fb406c 0%,
    rgba(234, 20, 126, 0.95) 0%,
    #1baacc 99.61%
  );
}
.div5 {
  background: linear-gradient(
    87.57deg,
    #fb406c 0%,
    rgba(234, 20, 126, 0.95) 0%,
    #1baacc 99.61%
  );
}
</style>
<script setup>
const data = [
  { id: 1, img: new URL(`../assets/couple1.svg`, import.meta.url).href },

  { id: 2, img: new URL(`../assets/couple2.svg`, import.meta.url).href },
  { id: 3, img: new URL(`../assets/couple3.svg`, import.meta.url).href },
  { id: 6, img: new URL(`../assets/couple4.svg`, import.meta.url).href },
  { id: 4, img: new URL(`../assets/couple1.svg`, import.meta.url).href },
  { id: 5, img: new URL(`../assets/couple2.svg`, import.meta.url).href },
];
const data2 = [
  {
    id: 1,
    img: new URL(`../assets/aiyzah.svg`, import.meta.url).href,
    text: "Age 26 years, Lahore, Pakistan Graphic Designer",
    name: "rukshana",
  },
  {
    id: 2,
    img: new URL(`../assets/member2.svg`, import.meta.url).href,
    text: `Age 60 years, Dubai, UAE  Doctor`,
    name: "wpdatingcom",
  },
  {
    id: 3,
    img: new URL(`../assets/member3.svg`, import.meta.url).href,
    text: " Age 56 years, Dubai, UAE Doctor",
    name: "nikeshMaharjan",
  },
  {
    id: 4,
    img: new URL(`../assets/member4.svg`, import.meta.url).href,
    text: " Age 26 years, Lahore, Pakistan Graphic Designer",
    name: "jonbro",
  },
];
const data3 = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
const data4 = [
  {
    id: 1,
    header: " Register",
    arrow: true,
    img: new URL(`../assets/rigesterIcon.svg`, import.meta.url).href,
    text: "Register to our website, fill up your profile completely, and put a beautiful image on your profile.",
  },
  {
    id: 2,
    header: " Find Your Partner",
    larrow: true,
    img: new URL(`../assets/searchIcon.svg`, import.meta.url).href,

    text: "You can find your partners online here, or you can also attend our marriage events and meet hundreds of people who are also looking for a partner for life.",
  },
  {
    id: 3,
    header: "Connect",
    img: new URL(`../assets/connect.svg`, import.meta.url).href,

    text: "Join with 1000's of Muslim community online around the world who are here just for marriage.",
  },
];
</script>
