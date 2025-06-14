<script setup lang="ts">
// import VScroll from "@/components/VirtualScroll.vue";
// import { DynamicHeightVScroll } from "@/components/DynamicHeightVScroll";
// import { state } from "@/composables/useVScroll";
// import { ref } from "vue";
type LayoutProps = {
  data?: string[];
  reverse?: boolean;
};
const props = withDefaults(defineProps<LayoutProps>(), {
  data: () => [],
  reverse: false,
});
</script>

<template>
  <section>
    Hello world
    <!-- <BNavbar toggleable> -->
    <!--   <BNavbarToggle target="contr-scroll-panel" /> -->
    <!---->
    <!--   <BNavbarBrand tag="h1" class="mb-0">VScroll Layout</BNavbarBrand> -->
    <!---->
    <!--   <BCollapse id="contr-scroll-panel" is-van> -->
    <!--     <BNavItem href="#">DEMOLINK</BNavItem> -->
    <!--   </BCollapse> -->
    <!-- </BNavbar> -->

    <!-- <nav> -->
    <!-- <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"> -->
    <!--   <span>Preload Data</span> -->

    <!-- </h6> -->

    <!-- <ul class="nav flex-column mb-2"> -->
    <!--   <li class="nav-item"> -->
    <!--     <a class="nav-link" href="#">Mock Data</a> -->
    <!--   </li> -->
    <!-- </ul> -->
    <!-- <ul> -->
    <!--   <span>Reverse: {{ props.reverse }}:{{ reverse }}</span> -->
    <!-- </ul> -->
    <!-- <ul> -->
    <!--   <span>State: {{ state.debugValue }}</span> -->
    <!-- </ul> -->
    <!-- </nav> -->

    <main class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 container-fluid">
      <!--   <div -->
      <!--     class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> -->
      <!--     <h1 class="h2">Logs</h1> -->
      <!--     <div class="btn-toolbar mb-2 mb-md-0"> -->
      <!--       <div class="btn-group me-2"> -->
      <!--         <button type="button" class="btn btn-sm btn-outline-secondary" @click="reverse = !reverse"> -->
      <!--           Reverse -->
      <!--         </button> -->
      <!--         <button type="button" class="btn btn-sm btn-outline-secondary"> -->
      <!--           Export -->
      <!--         </button> -->
      <!--       </div> -->
      <!--     </div> -->
      <!--   </div> -->

      <div class="fluid-container">
        <slot></slot>
      </div>
    </main>
  </section>
</template>
