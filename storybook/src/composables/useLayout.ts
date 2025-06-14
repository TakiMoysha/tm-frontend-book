import { computed, reactive } from "vue";

const layoutConfig = reactive({
  menuMode: "static",
});
const layoutState = reactive({
  activeMenuItem: null,
  overlayMenuActive: false,

  staticMenuDesktopInactive: false,
  staticMenuMobileActive: false,
});

// ====================================================================================
export function useLayout() {
  const setActiveMenuItem = (item: any) => {
    layoutState.activeMenuItem = item.value || item;
  };

  const toggleMenu = () => {
    if (layoutConfig.menuMode === "overlay") {
      layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
    }

    if (window.innerWidth > 991) {
      layoutState.staticMenuDesktopInactive =
        !layoutState.staticMenuDesktopInactive;
    } else {
      layoutState.staticMenuDesktopInactive =
        !layoutState.staticMenuMobileActive;
    }
  };

  const isSidebarActive = computed(
    () => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive,
  );

  const isDarkTheme = computed(
    () => document.body.className.indexOf("dark-theme") !== -1,
  );

  const toggleDarkTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  return {
    layoutConfig,
    layoutState,
    setActiveMenuItem,
    isSidebarActive,
    isDarkTheme,
    toggleMenu,
    toggleDarkTheme,
  };
}
