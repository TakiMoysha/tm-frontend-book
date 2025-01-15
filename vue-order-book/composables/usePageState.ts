export default () => {
  let isLoad = shallowRef(false); // page load process is pending
  let isLock = shallowRef(true); // form processing is pending

  return {
    isLoad,
    isLock,
  };
};
