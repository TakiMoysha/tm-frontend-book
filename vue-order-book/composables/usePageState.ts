export default () => {
  let isLoading = shallowRef(false); // page load process is pending
  let isLocking = shallowRef(true); // form processing is pending

  return {
    isLoading,
    isLocking,
  };
};
