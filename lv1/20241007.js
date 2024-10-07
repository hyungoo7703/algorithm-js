//덧칠하기 https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript
function solution(n, m, section) {
    let paintCount = 0; // 페인트칠 횟수
    let lastPainted = 0; // 마지막으로 페인트칠한 위치
  
    for (let i = 0; i < section.length; i++) {
      const currentSection = section[i];
  
      if (lastPainted < currentSection) {
        paintCount++;
        lastPainted = currentSection + m - 1;
      }
    }
  
    return paintCount;
}