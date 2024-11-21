//시저 암호 https://school.programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' ';
        
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + n) % 26) + 65);
        } else {
            return String.fromCharCode(((code - 97 + n) % 26) + 97);
        }
    }).join('');
}
