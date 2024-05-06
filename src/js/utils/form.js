import IMask from "imask";

export const handleIsPhoneCheck = (field) => {
  const unmaskedValue = field.replace(/[^0-9.]/g, "");
  const phonePattern = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
  return phonePattern.test(unmaskedValue);
};

export const initPhoneMasks = () => {
  const tels = document.querySelectorAll('input[name*="phone"]');
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
    lazy: false,
  };

  if (tels && tels.length > 0) {
    tels.forEach((tel) => {
      IMask(tel, maskOptions);
    });
  }
};
