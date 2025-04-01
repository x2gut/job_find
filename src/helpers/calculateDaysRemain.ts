const calculateDaysRemaining = (expirationDate: string): number => {
  const expiration = new Date(expirationDate);
  const now = new Date();
  const differenceInMs = expiration.getTime() - now.getTime();
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  return differenceInDays;
};

export default calculateDaysRemaining;
