//약수의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/77884?language=javascript
//방법1
function countDivisorsBasic(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    return count;
}

function solution(left, right) {
    let result = 0;
    for (let num = left; num <= right; num++) {
        if (countDivisorsBasic(num) % 2 === 0) {
            result += num;
        } else {
            result -= num;
        }
    }
    return result;
}

//방법2
function countDivisorsSqrt(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (i * i === n) {
            count++;
        } else if (n % i === 0) {
            count += 2;
        }
    }
    return count;
}

function solution(left, right) {
    let result = 0;
    for (let num = left; num <= right; num++) {
        if (countDivisorsSqrt(num) % 2 === 0) {
            result += num;
        } else {
            result -= num;
        }
    }
    return result;
}

//방법3
function countDivisorsPrime(n) {
    let count = 1;
    let num = n;
    let i = 2;
    
    while (i * i <= num) {
        let power = 0;
        while (num % i === 0) {
            num = Math.floor(num / i);
            power++;
        }
        count *= (power + 1);
        i++;
    }
    if (num > 1) count *= 2;
    return count;
}

function solution(left, right) {
    let result = 0;
    for (let num = left; num <= right; num++) {
        if (countDivisorsPrime(num) % 2 === 0) {
            result += num;
        } else {
            result -= num;
        }
    }
    return result;
}
