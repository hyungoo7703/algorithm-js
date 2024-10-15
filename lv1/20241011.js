//문자열 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript
function solution(s) {
    let answer = 0;
    let prev = '';
    let countPrev = 0;
    let countOther = 0;

    Array.from(s).forEach((element, index) => {
        if (prev === '') {
            prev = element;
            countPrev = 1;
        } else {
            if (prev === element) {
                countPrev++;
            } else {
                countOther++;
            }
        }

        if (countPrev === countOther || index === s.length - 1) {
            answer++;
            prev = '';
            countPrev = 0;
            countOther = 0;
        }
    });

    return answer;
}
