export function monkeyCount(n: number) {
  const monkeys: number[] = [];
  for (let i = 1; i <= n; i++) {
    monkeys.push(i);
  }
  return monkeys;
}