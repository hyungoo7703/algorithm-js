//개인정보 수집 유효기간 https://school.programmers.co.kr/learn/courses/30/lessons/150370
function solution(today, terms, privacies) {
    const termsObj = terms.reduce((acc, term) => {
        const [key, value] = term.split(' ');
        return { ...acc, [key]: parseInt(value) };
    }, {});
    return privacies.reduce((result, element, index) => {
        const elementArr = element.split(' ');
        const element0Arr = (elementArr[0]).split('.');
        let cal0Arr1 = parseInt(element0Arr[1]) + termsObj[elementArr[1]];
        let cal0Arr2 = parseInt(element0Arr[2]) - 1;
        let calOverYear = 0;
        if(cal0Arr1 > 12) {
            calOverYear = Math.floor(cal0Arr1 / 12);
            if((cal0Arr1 - (12 * calOverYear)) === 0) {
                calOverYear = calOverYear - 1;
            }
        }
        element0Arr[2] = cal0Arr2 === 0 ? 28 : cal0Arr2;
        element0Arr[1] = cal0Arr1 > 12 ? (cal0Arr1 - (12 * calOverYear)) === 0 ? 12 : (cal0Arr1 - (12 * calOverYear)) : cal0Arr1;
        if(cal0Arr2 === 0) {
            element0Arr[1] = element0Arr[1] - 1 === 0 ? 12 : element0Arr[1] - 1;
        }
        element0Arr[0] = parseInt(element0Arr[0]) + calOverYear;
        if(cal0Arr2 === 0 && cal0Arr1 <= 12) {
            element0Arr[2] = element0Arr[2] - 1;
        }

        console.log(element0Arr[2]);
        console.log(element0Arr[1]);
        console.log(element0Arr[0]);
        
        if (isDatePassed(element0Arr[0], element0Arr[1], element0Arr[2], today)) {
            result.push(index + 1);
        }
        return result;
    }, []);
}

function isDatePassed(inputYear, inputMonth, inputDay, today) {
    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);

    if (inputYear < todayYear) return true;
    if (inputYear > todayYear) return false;

    if (inputMonth < todayMonth) return true;
    if (inputMonth > todayMonth) return false;

    if (inputDay < todayDay) return true;
    
    return false;
}