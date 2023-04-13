module.exports = function () {
  let tab = [];
  for (let i= 0; i<100; i++){
      let x = i+1;
      if((x%3 == 0) && (x%5 == 0)){
          tab[i] = "FizzBuzz";
      }else if(x%3 == 0){
          tab[i]="Fizz";
      }else if(x%5 == 0){
          tab[i] = "Buzz";
      }else{
          tab[i] = x;
      }
  }
  return tab;
}
