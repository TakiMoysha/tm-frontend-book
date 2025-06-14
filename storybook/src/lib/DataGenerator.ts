const simpleDataGenerator = (count: number = 10_000) =>
  Array.from({ length: count }, (_, index) => ({
    id: Math.random().toString(36).slice(2),
    text: String(index),
  }));

export const generateData = async (kind?: "simple", opts?: { count?: number }) => {
  switch (kind) {
    case "simple":
      return simpleDataGenerator(opts?.count);
    default:
      return;
  }
};
