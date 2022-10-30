/**
 * BAI 1. Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
 */
// input
var sNumber = 0;// Smalest number.
// end input
// handel
for (let i = 0; i < 10000; i++) {
    sNumber += i;
    if (sNumber >= 10000) {
        // output
        sNumber = i;
        // end output
        break;
    }
}
// end handel
// output
console.log(sNumber);
// output
/**
 * BAI 2: 2. Viết chương trình nhập vào 2 số x, n tính tổng: 
 * S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
 */
// input
var x = 3;
var n = 3;
var total = 0;
// end input
// handel
const calTotal = (x, n) => {
    for (let i = 1; i <= n; i++) {
        total += Math.pow(x, i);
    }
    return total;
}
// end handel
// output
calTotal(x, n);
console.log(total);
// end output
/**
 * BAI 3: Nhập vào n. Tính giai thừa 1*2*...n
 */
// input
var m = 4;
var factorial = 1;
// end input
// handel
const calFactorial = (m) => {
    for (let i = 2; i <= m; i++) {
        factorial *= i;
    }
    return factorial;
}
// end handel
// output
console.log(calFactorial(m));
// end output
/**
 * BAI 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
 * Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
 * background màu xanh.
 */
// input
const TOTAL_DIV = 10;
// end input
// handel
const setTotalDiv = (j) => {
    for (let i = 1; i <= j; i++) {
        i % 2 === 0 ? console.log(`so chan ` + i) : console.log("so le " + i);;
    }
}
// end handel
// output
console.log(setTotalDiv(TOTAL_DIV));
// end output

/**
 * BAI 5: Viết chương trình có một ô input, một button. Khi click vào button
 * thì in ra các số nguyên tố từ 1 tới giá trị của ô input
 */
// input
var FACT = "";
const END = 100;


// end input
// handel
const calFact = (j) => {
    for (let i = 2; i <= j; i++) {
        var signal = true;
      for (let k = 2; k < i; k++) {
        if (i%k===0) {
            signal = false;
        }
      }
      if (signal===true) {
        
          FACT += i +",";
      }
    }
}
// end handel
// output
calFact(END);
console.log(FACT);
// end output