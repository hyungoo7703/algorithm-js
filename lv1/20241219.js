//예산 https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript
function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let count = 0;
    let sum = 0;
    
    for (let amount of d) {
        sum += amount;
        if (sum <= budget) {
            count++;
        } else {
            break;
        }
    }
    
    return count;
}