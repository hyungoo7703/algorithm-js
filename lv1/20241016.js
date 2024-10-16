//모의고사 https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
function solution(answers) {
    const p1 = [];
    const p2 = [];
    const p3 = [];
    for(let i = 1; i <= 10000; i++) {
        p1.push([1, 2, 3, 4, 5][(i % 5) != 0 ? (i % 5) - 1 : 4]);
        p2.push([2, 1, 2, 3, 2, 4, 2, 5][(i % 8) != 0 ? (i % 8) - 1 : 7]);
        p3.push([3, 3, 1, 1, 2, 2, 4, 4, 5, 5][(i % 10) != 0 ? (i % 10) - 1 : 9]);
    }
    let correct1 = 0;
    let correct2 = 0;
    let correct3 = 0;
    answers.forEach((n, index) => {
        if(n === p1[index]) {
            correct1++;
        }
        if(n === p2[index]) {
            correct2++
        }
        if(n === p3[index]) {
            correct3++
        }
    });
    const corrects = [correct1, correct2, correct3];
    const maxCorrect = Math.max(correct1, correct2, correct3)
    return corrects.reduce((result, correct, index) => {
        if (correct === maxCorrect) {
            result.push(index + 1);
        }
        return result;
    }, []);
}