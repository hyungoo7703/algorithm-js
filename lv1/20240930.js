//둘만의 암호 https://school.programmers.co.kr/learn/courses/30/lessons/155652?language=javascript
//풀이1
function solution(s, skip, index) {
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const filterArr = arr.reduce((result, element) => {
        if(!skip.split('').includes(element)) {
            result.push(element)
        }
        return result
    }, [])
    
    let answer = '';
    s.split('').forEach(element => {
        let newIndex = filterArr.indexOf(element) + index;
        
        if (newIndex >= filterArr.length) {
            newIndex = newIndex % filterArr.length;
        }
        
        answer += filterArr[newIndex];
    });
    return answer;
}

//풀이2
function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const filteredAlphabet = alphabet.split('').filter(char => !skip.includes(char));
    
    return s.split('').map(char => {
        const currentIndex = filteredAlphabet.indexOf(char);
        const newIndex = (currentIndex + index) % filteredAlphabet.length;
        return filteredAlphabet[newIndex];
    }).join('');
}
