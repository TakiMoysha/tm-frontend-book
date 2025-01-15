export default (defaultLoading = false, defaultLocking = true) => {
  let isLoading = shallowRef(defaultLoading); // page load process is pending
  let isLocking = shallowRef(defaultLocking); // form processing is pending

  return {
    isLoading,
    isLocking,
  };
};
