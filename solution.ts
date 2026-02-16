export function findOutlier(integers: number[]): number {
  const even = integers.filter((x) => x % 2 == 0);
  const odd = integers.filter((x) => x % 2 != 0);
  if (even.length == 1) {
    return even[0];
  } else {
    return odd[0];
  }
}