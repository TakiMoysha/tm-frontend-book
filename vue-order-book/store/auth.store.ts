import type { Store } from "pinia";

interface IAuthStore {
  email: string;
  name: string;
  isAuth: boolean;
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: "",
    name: "",
    isAuth: false,
  },
};

export const useAuthStore = defineStore("auth:user", {
  state: () => defaultValue,
  getters: {
    isAuth: (state) => state.user.isAuth,
  },
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
  },
});
