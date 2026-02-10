export class Kata {
  static squareDigits(num: number): number {
    // let result = "";
    // if (num == 0) {
    //   return 0; // Handle the case where the input is 0
    // }
    // while (num > 0) {
    //   const lastDigit = num % 10;
    //   num = Math.floor(num / 10); // Everything but the last digit
    //   const squaredDigit = lastDigit * lastDigit;
    //   result = squaredDigit + result;
    // }
    // return parseInt(result); // Convert the string back to a number

    return +num.toString()
               .split('')
               .map(n => Math.pow(+n,2))
               .join('');
  }

   
}