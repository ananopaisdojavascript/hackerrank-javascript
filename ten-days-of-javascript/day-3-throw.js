const isPositive = (a) => {
  if (a > 0) return "YES";
  if (a === 0) throw new Error("Zero Error");
  if (a < 0) throw new Error("Negative Error");
};

const a = 5;

try {
  console.log(isPositive(a));
} catch (error) {
  console.log(error.message);
}
