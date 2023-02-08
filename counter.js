export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
  //   ___   ___    __| |/ | _ __    __ _         _ __    ___  __      __
  //  / __| / _ \  / _` || || '_ \  / _` |       | '_ \  / _ \ \ \ /\ / /
  // | (__ | (_) || (_| || || | | || (_| |       | | | || (_) | \ V  V /
  //  \___| \___/  \__,_||_||_| |_| \__, | _____ |_| |_| \___/   \_/\_/
  //                                |___/ |_____|
