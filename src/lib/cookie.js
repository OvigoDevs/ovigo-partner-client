function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  localStorage.setItem(cname, JSON.stringify(cvalue), exdays)
}

function getCookie(cname) {
  return JSON.parse(localStorage.getItem(cname));
}

export { getCookie, setCookie };
