window.onload = function () {
  const rtlLangs = ['ar', 'he', 'fa', 'ur', 'ps', 'syr', 'dv'];
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.split('-')[0];

  if (rtlLangs.includes(langCode)) {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
};
