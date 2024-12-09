//삼총사 https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript
function solution(number) {
    let count = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i + 1; j < number.length - 1; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
}

//숫자 문자열과 영단어 https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript
function solution(s) {
    const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (let i = 0; i < numWords.length; i++) {
        s = s.split(numWords[i]).join(i);
    }
    
    return Number(s);
}