//2016년 https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
//풀이1
function solution(a, b) {
    const dayOfWeek = new Date(`2016-${a}-${b}`).getDay();
    var answer = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return answer[dayOfWeek];
}
//풀이2
function solution(a, b) {
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    let totalDays = b - 1;
  
    for (let i = 0; i < a - 1; i++) {
      totalDays += monthDays[i];
    }
    
    const dayIndex = (totalDays + 5) % 7;
    
    return daysOfWeek[dayIndex];
  }
