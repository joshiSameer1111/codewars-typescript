export function isValidWalk(walk: string[]) {
  // const directions = {
  //   n: 0,
  //   s: 0,
  //   w: 0,
  //   e: 0
  // };
  // for (const direction of walk) {    
  //   directions[direction as keyof typeof directions]++;
  // }
  // return walk.length == 10 && directions.n == directions.s && directions.w == directions.e;

  if (walk.length !== 10) return false;

  type directionValues = {
    [key: string]: number;
  };

  const directions: directionValues = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  walk.forEach((direction: string) => {
    directions[direction]++;
  });

  return directions.n === directions.s && directions.w === directions.e;
}