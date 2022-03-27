const testLessOrEqual = (val) =>
  val <= 12
    ? "Smaller Than or Equal to 12"
    : val <= 24
    ? "Smaller Than or Equal to 24"
    : "More Than 24";

testLessOrEqual(10);
