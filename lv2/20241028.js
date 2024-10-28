//JadenCase 문자열 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
    var answer = '';
    
    s.split(" ").forEach((element, index, array) => {
        if (element !== "") {
            answer += element.substr(0, 1).toUpperCase() + element.slice(1).toLowerCase();
        }
        
        if (index < array.length - 1) {
            answer += " ";
        }
    });
    
    return answer;
}