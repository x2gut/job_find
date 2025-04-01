const sendEmail = (email: string) => {
  return (window.location.href = `mailto:${email}`);
};

export default sendEmail;
