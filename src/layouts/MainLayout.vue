<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title></q-toolbar-title>

        <div>Super Admin</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :dark="true">
      <div class="logo-adjustment">
        <img src="../assets/logo-white.svg" alt="Main Logo" />
      </div>
      <q-list>
        <q-item-label header class="title"> </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "fa fa-sharp fa-light fa-chart-line",
    link: "/dashboard",
  },
  {
    title: "Admins",

    icon: "fa fa-sharp fa-solid fa-user",
    link: "/admins",
  },
  {
    title: "Members",
    icon: "fa fa-sharp fa-solid fa-users",
    link: "/members",
  },
  {
    title: "Plans",
    icon: "fa fa-sharp fa-solid fa-plane-departure",
    link: "/plans",
  },
  {
    title: "Stories",
    icon: "fa fa-sharp fa-solid fa-thumbs-up",
    link: "/stories",
  },
  {
    title: "Events",
    icon: "fa fa-sharp fa-solid fa-calendar-days",
    link: "/events",
  },
  {
    title: "FeedBack",
    icon: "fa fa-sharp fa-solid fa-comments",
    link: "/feedback",
  },

  {
    title: "Email Templates",
    icon: "fa fa-sharp fa-solid fa-pen-to-square",
    link: "/email-templates",
  },
  {
    title: "Configuration",
    icon: "fa fa-sharp fa-solid fa-gears",
    link: "/configuration",
  },
  {
    title: "General Settings",
    icon: "fa fa-sharp fa-solid fa-gear",
    link: "/general-settings",
  },
  {
    title: "Seo Settings",
    icon: "fa fa-sharp fa-solid fa-gear",
    link: "/seo-settings",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
.logo-adjustment {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
}
</style>
