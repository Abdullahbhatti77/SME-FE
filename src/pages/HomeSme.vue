<template>
  <div class="container">
    <div class="bg">
      <img src="../assets/homebg.svg" alt="" />
    </div>
    <div class="div2 tw-mx-auto tw-text-center">
      <h1 class="tw-text-12 tw-mt-20 tw-relative">
        <img src="../assets/heart.svg" class="tw-absolute tw-left-0" alt="" />
        What is SME matrimony
      </h1>
      <p class="">
        Welcome to SME Matrimony. The world's first matchmaking website that
        pre-screens all its candidates through our Matrimonial events to ensure
        they are educated, well settled, and belong to a good family background.
        The only matchmaking website that offers the most comprehensive
        pre-screening of candidates that the Muslim community has to offer!
      </p>
    </div>
    <div
      class="div3 tw-text-center tw-flex tw-justify-center tw-items-center tw-gap-5 tw-flex-col"
    >
      <h1 class="">Happy Couples</h1>
      <p class="">
        Here are some of the couples who have successfully married through our
        Matrimonial events & online services.
      </p>
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
            class="tw-flex tw-p-3 tw-gap-2 tw-items-center tw-justify-center"
          >
            <img src="../assets/link_icon.svg.svg" alt="" /> View Story
          </q-btn>
        </div>
      </div>
    </div>
    <div
      class="div4 tw-mx-auto tw-w-full tw-flex tw-py-10 tw-flex-col tw-gap-4"
    >
      <h1 class="tw-text-12 tw-mt-20 tw-text-center">New Members</h1>
      <p class="tw-text-center">
        Sallam, We are very happy that you are part of SME Matrimony. We love
        all of our customers, and that includes you!
      </p>
      <div
        class="tw-flex tw-justify-center tw-items-center tw-flex-wrap wi tw-gap-4 tw-mx-auto tw-mt-8"
      >
        <div
          class="tw-flex tw-flex-col w-full inner-div4"
          v-for="items in data2"
          :key="items.id"
        >
          <img :src="items.img" alt="" />
          <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
            <div
              class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center"
            >
              <h1 class="">{{ items.name }}</h1>
              <p class="">View Profile</p>
            </div>
            <div class="tw-self-start tw-p-2">{{ items.text }}</div>
            <q-btn
              class="tw-flex btn tw-p-3 tw-gap-2 tw-items-center tw-justify-center"
            >
              Send message
            </q-btn>
          </div>
          <div class="tw-grid tw-grid-cols-2">
            <q-btn
              class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center btn1"
            >
              <!-- <font-awesome-icon :icon="['fas', 'xmark']" /> -->
              <i class="fa fa-solid fa-xmark" style="color: #d92047"></i>
            </q-btn>
            <q-btn
              class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center btn2"
            >
              <i class="fa fa-solid fa-heart" style="color: #1baacc"></i>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
    <div
      class="div5 tw-py-10 tw-mx-auto tw-w-full tw-flex tw-flex-col tw-gap-4"
    >
      <h1 class="tw-text-12 tw-mt-20 tw-text-center">Upcoming Events</h1>

      <div
        class="tw-flex tw-flex-wrap wi5 tw-gap-4 tw-justify-center tw-mx-auto tw-mt-4"
      >
        <div
          class="tw-flex tw-flex-col w-full inner-div5"
          v-for="items in data3"
          :key="items.id"
        >
          <img src="../assets/aiyzah.svg" alt="" />
          <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
            <div
              class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center"
            >
              <h1 class="">Dubai Events</h1>
              <p class="">
                <i class="fa fa-sharp fa-solid fa-location-dot"></i> Lahore,
                Pakistan
              </p>
            </div>
            <h6 class="tw-self-start tw-px-2">
              Matrimonial events description here Matrimonial events description
              hereMatrimonial events description here <br />

              <span class="">
                <i class="fa fa-regular fa-clock" style="color: #1baacc"></i>
                Mar 28,2023</span
              >
            </h6>

            <q-btn
              class="tw-flex bt1 tw-p-2 tw-gap-2 tw-items-center tw-justify-center"
            >
              View Details
            </q-btn>
          </div>
        </div>
      </div>
      <q-btn class="btn5 tw-mx-auto tw-text-white tw-bg-none">
        View All Events
      </q-btn>
      <h1 class="tw-text-12 tw-mt-20 tw-text-center">Past Events</h1>

      <div
        class="tw-flex tw-flex-wrap wi5 tw-gap-4 tw-justify-center tw-mx-auto tw-mt-4"
      >
        <div
          class="tw-flex tw-flex-col w-full inner-div5"
          v-for="items in data3"
          :key="items.id"
        >
          <img src="../assets/aiyzah.svg" alt="" />
          <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
            <div
              class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center"
            >
              <h1 class="">Dubai Events</h1>
              <p class="">
                <i class="fa fa-sharp fa-solid fa-location-dot"></i>
                Lahore, Pakistan
              </p>
            </div>
            <h6 class="tw-self-start tw-px-2">
              Matrimonial events description here Matrimonial events description
              hereMatrimonial events description here <br />
              <i class="fa fa-regular fa-clock" style="color: #1baacc"></i>
              <span class=""> Mar 28,2023</span>
            </h6>

            <q-btn
              class="tw-flex bt1 tw-p-2 tw-gap-2 tw-items-center tw-justify-center"
            >
              View Details
            </q-btn>
          </div>
        </div>
      </div>
      <q-btn class="btn5 tw-mx-auto tw-text-white tw-bg-none">
        View All Events
      </q-btn>
    </div>
    <div class="div6 tw-mx-auto tw-text-center">
      <h1 class="tw-text-12 tw-mt-20">Find Your Partner In Just Few Steps</h1>
      <br />
      <p class="">
        WP Matrimony will help you find your perfect match with just a few
        steps. You focus on what is <br />
        most important to you, we do all the work.
      </p>

      <div
        class="tw-flex tw-flex-wrap tw-mt-10 tw-gap-4 tw-justify-center tw-items-start"
      >
        <div
          class="tw-flex tw-flex-col tw-justify-start tw-items-center"
          v-for="items in data4"
          :key="items.id"
        >
          <div
            class="tw-w-60 tw-flex tw-gap-2 tw-flex-col tw-justify-center tw-items-center"
          >
            <img :src="items.img" class="tw-w-24" alt="" />
            <h6>{{ items.header }}</h6>
            <p style="font-size: 16px">
              {{ items.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.div6 {
  width: 80%;
}
.div6 h1 {
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
}
.div6 h6 {
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
}
.div6 p {
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
}
.div5 h1 {
  color: white;
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
}
.container {
  width: 100vw;
}
.bg {
  height: 70vh;
}
.btn5 {
  width: 150px;
  padding: 10px;
  font-size: 16px;
  line-height: 16px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #ffffff00;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-remover::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-remover {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.bg img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.div2 {
  width: 60%;
  min-height: 50vh;
  padding-bottom: 20px;
}
.div2 h1 {
  color: #fb406c;
  font-size: 40px;
  font-weight: 400;
}
.div2 p {
  color: #444444;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.div4 h1 {
  color: #fb406c;
  font-size: 45px;
  line-height: 54px;
  font-weight: 400;
}
.div4 p {
  color: #444444;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
}
.div3 {
  width: 100%;
  height: 80vh;
  background: linear-gradient(
    87.57deg,
    #fb406c 0%,
    rgba(234, 20, 126, 0.95) 0%,
    #1baacc 99.61%
  );
}
.div5 {
  width: 100%;
  min-height: 180vh;
  background: linear-gradient(
    87.57deg,
    #fb406c 0%,
    rgba(234, 20, 126, 0.95) 0%,
    #1baacc 99.61%
  );
}

.div3 h1 {
  color: #ffffff;
  font-size: 45px;
  line-height: 54px;
  font-weight: 400;
}
.div3 p {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
}
.div4 .inner-div4 {
  max-width: 250px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.div5 .inner-div5 {
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.div3 button {
  background-color: #fb406c;
  color: #fefefe;
}
.div5 .bt1 {
  background-color: #fb406c;
  color: #fefefe;
}
.div4 .btn {
  background-color: #fb406c;
  color: #fefefe;
  font-size: 16px;
  line-height: 27px;
  font-weight: 400;
}
.div4 .inner-div4 h1 {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #343434;
}
.div5 .inner-div5 h1 {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #343434;
}
.div4 .inner-div4 p {
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #66cc66;
}
.div5 .inner-div5 p {
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #1baacc;
}
.div4 .inner-div4 h6 {
  font-size: 16px;
  line-height: 27px;
  font-weight: 400;
  color: #343434;
}
.div5 .inner-div5 h6 {
  font-size: 14px;
  line-height: 27px;
  font-weight: 400;
  color: #343434;
}
.wi {
  width: 80%;
}
.wi5 {
  width: 80%;
}
.btn1 {
  border-bottom: 1px solid #d92047;
  border-left: 1px solid #d92047;
  border-bottom-left-radius: 10px;
}
.btn2 {
  border-bottom: 1px solid #1baacc;
  border-left: 1px solid #1baacc;
  border-right: 1px solid #1baacc;
  border-bottom-right-radius: 10px;
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
    text: `Age 60 years, Dubai, UAE <br> Doctor`,
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
    img: new URL(`../assets/rigesterIcon.svg`, import.meta.url).href,
    text: "Register to our website, fill up your profile completely, and put a beautiful image on your profile.",
  },
  {
    id: 2,
    header: " Find Your Partner",
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
