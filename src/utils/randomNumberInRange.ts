const getRandomNumberInRange = (min: number, max: number): number => {
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomNumberInRange;
