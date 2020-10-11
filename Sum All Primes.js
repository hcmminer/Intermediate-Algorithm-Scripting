//S1 kiểm tra biến i chạy từ số 2 tới số max nếu xuất hiện bội số  của i ( trừ i và 0) thì đánh dấu chúng không thỏa mãn

function sumPrimes(num) {
    var res = 0;
  
    // Function to get the primes up to max in an array
    function getPrimes(max) {
      var sieve = [];
      var i;
      var j;
      var primes = [];
      for (i = 2; i <= max; i++) {
        if (!sieve[i]) {
          console.log(i)
          // i has not been marked -- it is primecủa 
          primes.push(i);
          // cái hay của thuật toán này là cứ thấy một bội số của i thì đánh dấu bội số vào 
          for (j = i << 1; j <= max; j += i) {
            sieve[j] = true;// đánh dấu những bội số của i tính từ i+i
            console.log("J: ",j);
          }
        }
      }
  
      return primes;
    }
  
    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
      res += primes[p];
    }
  
    return res;
  }
  
  // test here
  sumPrimes(12);

  //S2
  function sumPrimes(num) {
    let i = 1;
    let sum = 0;
    while (i <= num) {
      if (isPrime(i)) {
        sum += i;
      }
      i++;
    }
    return sum;
  }
  //function to check if a number is prime or not
  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;// kiểm tra tồn tại một số nằm giữa 1 và chính nó là ước của nó thì nó là số nguyên tố
    }
    return x !== 1 && x !== 0;// 0,1 không phải số nguyên tố
  }
  //test here
  sumPrimes(10);

  //S3
  function sumPrimes(num) {
    // function to check if the number presented is prime
    function isPrime(number) {
      for (let i = 2; i <= number; i++) {
        if (number % i === 0 && number != i) {// nếu chia hết cho i và khác i thì i không phải số nguyên tố
          // return true if it is divisible by any number that is not itself.
          return false;
        }
      }
      // if it passes the for loops conditions it is a prime
      return true;// nếu không thoaar mãn thì nó là số nguyên tố
    }
    // 1 is not a prime, so return nothing, also stops the recursive calls.
    if (num === 1) {
      return 0;// nếu nó là số 1 thì hàm sum có giá trị 0 và không làm thay đổi tổng của các số nguyên tố
    }
    // Check if your number is not prime
    if (isPrime(num) === false) {
      // for non primes check the next number down from your maximum number, do not add anything to your answer
      return sumPrimes(num - 1);// nếu không phải số nguyên tố thì kiêm tra tiếp với số truyền vào nhỏ đi
    }
  
    // Check if your number is prime
    if (isPrime(num) === true) {
      // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
      return num + sumPrimes(num - 1);// num là sô nguyên tố thì cộng tiếp với hàm kiểm tra số nguyên tố num-1
    }
  }
  // test here
  sumPrimes(10);

  //S4
  function sumPrimes(num) {
    let nums = Array.from({ length: num + 1 })// mảng có num+1 phần tử  { length: num + 1 } // object mô tả mảng có num+1 phần tử
      .map((_, i) => i)// trả về chỉ số  index của phần tử "_"
      .slice(2);// mảng được cắt từ phần tử thứ 3 ( mảng phải bắt dầu từ số 2)
    for (let n in nums) {
      console.log(n)
      nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);// lọc ra những số bằng or không chia hết cho nums[n] vì vậy tại sao mảng nums phải bắt đầu từ số 2 vì nếu bắt đầu từ số 0 or 1 thì mọi số đều chia hết cho 1
      console.log(nums)
    }
    return nums.reduce((prevSum, cur) => prevSum + cur);// tính tổng
  }
  // test here
  sumPrimes(13);

  // S5
  function sumPrimes(num) {
    // step 1
    let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
    // step 2
    let onlyPrimes = arr.filter(n => {
      let m = n - 1;
      while (m > 1 && m >= Math.sqrt(n)) {// để  test n thì giảm dần m từ m-1 xuống sqrt(n) và kiểm tra nếu chia hết thì n không phải số nguyên tố
        if (n % m === 0) return false;
        m--;
      }
      return true;
    });
    // step 3
    return onlyPrimes.reduce((a, b) => a + b);
  }
  // test here
  sumPrimes(13);
