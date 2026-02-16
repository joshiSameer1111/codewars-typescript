export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
   if(distance <= (mpg * fuelLeft)){
    return true;  
  };
  return false;
};