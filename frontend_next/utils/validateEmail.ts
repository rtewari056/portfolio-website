const validateEmail = (email: string): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  // Check email is vaild or not
  if (regex.test(email) === false) {
    return false;
  }

  return true; // If everything is fine, return true
};

export default validateEmail;
