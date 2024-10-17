//대충 만든 자판 https://school.programmers.co.kr/learn/courses/30/lessons/160586#
function solution(keymap, targets) {
    return targets.reduce((result, target) => {
        let count = 0;
        for(let char of target) {
            let indexOfkey = []
            let charFound = false;
            for(let key of keymap) {
                if(key.indexOf(char) !== -1) {
                    indexOfkey.push(key.indexOf(char) + 1);
                    charFound = true;
                }
            }
            if(!charFound) {
                result.push(-1);
                return result;
            }
            if(indexOfkey.length > 0)
                count += Math.min(...indexOfkey);
        }
        result.push(count);
        return result;
    }, []);
}

//코드 개선
function solution(keymap, targets) {
    return targets.map(target => {
        let count = 0;
        for(let char of target) {
            let indexOfkey = keymap.map(key => key.indexOf(char) + 1).filter(index => index > 0);
            if(indexOfkey.length > 0) {
                count += Math.min(...indexOfkey);
            } else {
                return -1;
            }
        }
        return count;
    });
}
