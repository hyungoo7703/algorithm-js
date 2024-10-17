### 20240920 추가

## 소수 찾기(알고리즘에 소수 관련 문제를 대비하기 위해 정리)

### 접근 방법

1. 우선 0과 1은 소수가 아니므로, 0과 1은 false로 초기화
```js
let sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;
```

2. <b>에라토스테네스의 체 알고리즘 (주어진 범위 내 소수를 찾을 때 효율적인 알고리즘)</b>

알고리즘 원리
+ 2부터 N까지의 모든 자연수를 나열
+ 남은 수 중 가장 작은 수를 소수로 선택
+ 선택된 소수의 배수를 모두 제거
+ 2와 3의 과정을 반복

```js
for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
        for (let j = i * i; j <= n; j += i) {
            sieve[j] = false;
        }
    }
}
```
기억할 사항
+ 약수를 걸러내는 것과 동일 하기에, 반복문은 √n 이전까지만 돌리면 된다.
+ 에라토스테네스의 체 알고리즘에서 불필요한 계산을 줄이기 위해, 두번째 반복문에서는 배수 부터 시작하는 것이 좋다.
  + ex) i가 5일 때: 5 * 2 = 10은 이미 2의 배수, 5 * 3 = 15는 이미 3의 배수, 5 * 4 = 20은 이미 2의 배수로 처리됨
 
3. 최종 소수만 true로 배열에 남아있어, filter 후 개수를 체크해 주었다.
```js
return sieve.filter(Boolean).length;
```

### 20240923 추가

## 2016년(날짜에 대한 접근을 내장 객체 말고 접근하는 법)

Date 객체로 풀어도 되지만, 알고리즘 답게 접근해 보았다.

1. 변수 정의
   
+ monthDays 배열에 2016년 각 월의 날짜 수를 정의. 2016년은 윤년이므로 2월은 29일
+ daysOfWeek 배열에 요일 문자열을 정의
+ totalDays 변수에 입력받은 일자(b)에서 1을 뺀 값을 초기값으로 설정(날짜수)
```js
const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let totalDays = b - 1; // 입력받은 일자까지의 날짜 수 계산
```

2. 로직 정의
   
+ 매개변수 a, 월의 날짜수를 더하는데 이용 (for문)
+ dayIndex 변수에 (totalDays + 5) % 7을 계산하여 요일 인덱스를 계산 
+ daysOfWeek 배열에서 dayIndex에 해당하는 요일 문자열을 반환
```js
// 이전 달까지의 날짜 수 더하기
for (let i = 0; i < a - 1; i++) {
    totalDays += monthDays[i];
}
  
// 요일 인덱스 계산 (2016년 1월 1일이 금요일이므로 인덱스 5부터 시작)
const dayIndex = (totalDays + 5) % 7;

return daysOfWeek[dayIndex];
```

### 20241015 추가

## 카드뭉치(forEach는 break가 되지 않는다.)

반복문을 쓸때, 이터레이션으로 편하게 사용하려고 forEach를 자주쓴다. <br>
<b>forEach는 이터레이션을 돌 때마다 새로운 함수를 실행시키는 구조이기 때문에 break가 되지 않는다.</b> <br>
break가 필요한 경우 for문을 사용하자.

### 20241017 추가

## 대충 만든 자판

### 접근 방법

1. targets의 최소 자판수를 추출하는 것이 목적이라 reduce를 사용하는 것을 시작했다.
2. 문자열 내 target 문자가 있으면 되는거라 indexOf() 메서드를 사용했다.
3. indexOf()의 값이 -1인 경우를 제외하고 배열에 담아 주었고, 이 배열의 최솟값을 리턴하는 로직으로 알고리즘을 만들었다.
```js
function solution(keymap, targets) {
    return targets.reduce((result, target) => {
        let count = 0;
        for(let char of target) {
            let indexOfkey = []
            for(let key of keymap) {
                if(key.indexOf(char) !== -1) {
                    indexOfkey.push(key.indexOf(char) + 1);
                }
            }
            if(indexOfkey.length > 0)
                count += Math.min(...indexOfkey);
	else
	     count = -1;
        }
        result.push(count);
        return result;
    }, []);
}
```
<b> 이 코드에 엄청난 문제점이 있었다.</b> <br><br>
현재 코드에서는 한 문자를 찾을 수 없을 때 즉시 -1을 반환하지 않고 계속 진행하기에 테스트 케이스는 맞았으나 제출시 틀렸던 것이다. <br>
나무만 바라본 것이다. <br>
그래서 charFound 변수를 도입하여 문자를 찾았는지 여부를 추적해 주었다. <br>
모든 keymap을 확인한 후에 문자를 찾지 못했을 경우에만 -1을 결과에 추가하고 함수를 종료하는 로직을 더한것이다.
```js
function solution(keymap, targets) {
    return targets.reduce((result, target) => {
        let count = 0;
        for(let char of target) {
            let indexOfkey = []
            let charFound = false; //추가변수
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
```

### 코드 개선

통과한 후에도 계속 고민을 해봤다. reduce 내 중첩된 루프를 제거해 시간복잡도를 줄일 수 없을까? (가능할거 같았다.) <br>
사실 indexOfkey는 key.indexOf(char) + 1 배열에서 0보다 큰 것만 뽑으면 되는 배열이다. <br>
또 이때 indexOfkey가 비어있으면 -1을 즉시 반환해주면 훨씬 수월할거 같았다. <br>
그래서 사용한 방법은 map과 filter를 사용하여 더 간결하고 이해하기 쉬운 구조를 만들었다. <br>
코드는 아래와 같다.
```js
function solution(keymap, targets) {
    return targets.map(target => {
        let count = 0;
        for(let char of target) {
            let indexOfkey = keymap.map(key => key.indexOf(char) + 1).filter(index => index > 0);
            if(indexOfkey.length > 0) {
                count += Math.min(...indexOfkey);
            } else {
                return -1; // 문자를 찾을 수 없으면 즉시 -1 반환
            }
        }
        return count;
    });
}
```
두 번째 코드는 중첩된 루프 대신 map과 filter를 사용하여 시간 복잡도를 줄이는 것도 성공했다. <br>
시간 복잡도는 O(targets의 길이 * target의 길이 + targets의 길이 * keymap의 길이)가 되기에, 첫번째 짠 내 코드보다 효율적이었다.


   
