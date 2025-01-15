interface IAuthStoreUser {
  email: string;
  name: string;
  isAuth: boolean;
}

const defaultValue: { user: IAuthStoreUser } = {
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
    setUser(user: { email: string, name: string }) {
      this.user = { ...user, isAuth: true };
    }
  },
});
