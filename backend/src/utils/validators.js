exports.validateEmail = (email) => {
  if (!email) return false;
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
};

exports.isPhone = (phone) => {
  if (!phone) return false;
  return /^[0-9+\-\s]{6,20}$/.test(phone);
};
