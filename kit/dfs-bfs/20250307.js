//타겟 넘버 https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
    let count = 0;
    
    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                count++;
            }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    return count;
}
