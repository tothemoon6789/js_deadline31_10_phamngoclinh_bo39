// ---------------SET LAYOUT-------------------
var section = document.getElementsByTagName("section");
var li = document.getElementsByTagName("li");
const showAnswer = (active) => {
    for (let i = 0; i < section.length; i++) {
        const element = section[i];
        if (i===active) {
            element.setAttribute("style","display:block");
        }else {
            element.setAttribute("style","display:none");
        }
        
    }
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        if (i===active) {
            element.setAttribute("class","active");
        }else{
            element.setAttribute("class","");
            
        }
        
    }
}
for (let i = 0; i < li.length; i++) {
    const element = li[i];
    element.onclick = () => {
        
        showAnswer(i);
    }

}
// ---------------END SET LAYOUT-------------------

/**
 * BAI 1. Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
 */
// input
var sNumber = 0;// Smalest number.
var sNumber_btn = document.getElementById("sNumber_btn");
// end input
// handel
sNumber_btn.onclick = () => {
    for (let i = 1; i < 10000; i++) {
        sNumber += i;
        if (sNumber >= 10000) {
            // output
            sNumber = i;
            sNumber_btn.innerHTML = `Số nhỏ nhất là: ${sNumber}`;
            // end output
            break;
        }
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
var x = document.getElementById("totalX");
var n = document.getElementById("totalY");
var X = 0;
var N = 0;
var total_btn = document.getElementById("total_btn");

// end input
// handel
total_btn.onclick = () => {
    var total = 0;
    X = x.value * 1;
    N = n.value * 1;
    if (X > 0 && N > 0) {
        for (let i = 1; i <= N; i++) {
            total += Math.pow(X, i);
        }
        // output
        total_btn.innerHTML = `Kết quả là: ${total}`;
        // end output
    } else {
        alert("Nhap du lieu !")
    }

}
// end handel
// output

// console.log(total);
// end output
/**
 * BAI 3: Nhập vào n. Tính giai thừa 1*2*...n
 */
// input
var f = document.getElementById("factorial_input");
var F = 0;
var factorial_btn = document.getElementById("factorial_btn");
// end input
// handel
factorial_btn.onclick = () => {

    var factorial = 1;
    F = f.value * 1;
    if (F > 0) {

        for (let i = 2; i <= F; i++) {
            factorial *= i;
        }
        // output
        factorial_btn.innerHTML = factorial;
        // end output
    } else {
        alert("Nhập thông tin vào ô !")
    }
}

// end handel
// output
// console.log(calFactorial(m));
// end output
/**
 * BAI 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
 * Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
 * background màu xanh.
 */
// input
const TOTAL_DIV = 10;
const total_div_btn = document.getElementById("total_div_btn");
// end input
// handel
total_div_btn.onclick = () => {

 
    for (let i = 1; i <= 10; i++) {
        const element1 = document.createElement("div");
        const element2 = document.createElement("div");
        const textNote1 = document.createTextNode("Chẵn")
        const textNote2 = document.createTextNode("Lẻ")
        element1.appendChild(textNote1);
        element2.appendChild(textNote2);
        element1.setAttribute("style", "background-color:red");
        element2.setAttribute("style", "background-color:blue; color:white")
        i % 2 === 0 ? section[3].appendChild(element1) : section[3].appendChild(element2);
    }



}
// end handel
// output
// console.log(setTotalDiv(TOTAL_DIV));
// end output

/**

* BAI 5: Viết chương trình có một ô input, một button. Khi click vào button
 * thì in ra các số nguyên tố từ 1 tới giá trị của ô input
 */
// input

var fact_input = document.getElementById("fact_input");
var fact_btn = document.getElementById("fact_btn");

var END = 0;


// end input
// handel
fact_btn.onclick = () => {
    var FACT = "";
    END = fact_input.value*1;
  if (END===0) {
    alert("Nhập dữ liệu!")
  } else {
    for (let i = 2; i <= END; i++) {
        var signal = true;
        for (let k = 2; k < i; k++) {
            if (i % k === 0) {
                signal = false;
            }
        }
        if (signal === true) {
            
            FACT += i + ",";
        }
    }
    fact_btn.innerHTML = `Dãy số nguyên tố: ${FACT}`
  }
       
    
}
    // end handel
// output
// calFact(END);
// console.log(FACT);
// end output