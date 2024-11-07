//숫자의 표현 https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
//풀이1
function solution(n) {
    if(n == 1) return 1;
    
    let answer = 0;
    const fn = Math.floor(n/2);
    
    for(let i = 1; i <= fn; i++) {
        let sumTarget = 0;
        for(let target = i; target <= n; target++) {
            sumTarget += target;
            if(sumTarget === n) {
                answer++;
                break;
            }
            if(sumTarget > n) {
                break;
            }
        }
    }
    
    return answer + 1;
}
//풀이2
function solution(n) {
    let answer = 0;
    for (let k = 1; k * (k + 1) < 2 * n; k++) {
        if ((2 * n - k * (k + 1)) % (2 * (k + 1)) === 0) {
            answer++;
        }
    }
    return answer + 1;
}