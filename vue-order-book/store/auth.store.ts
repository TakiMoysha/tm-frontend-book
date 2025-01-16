enum Status {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
}

interface IAuthStoreUser {
  email: string;
  name: string;
  status: Status;
}

const defaultValue: { user: IAuthStoreUser } = {
  user: {
    email: '',
    name: '',
    status: Status.NO_AUTH,
  },
};

export const useAuthStore = defineStore('auth:user', {
  state: () => defaultValue,
  getters: {
    isAuth: (state) => state.user.status === Status.AUTH,
  },
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
    setUser(user: { email: string; name: string }) {
      this.user = { ...user, status: Status.AUTH };
    },
  },
});
