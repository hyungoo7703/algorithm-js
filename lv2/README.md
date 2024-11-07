### 20241107 추가

## 숫자의 표현(최적화에 대한 고민, 수학적 생각의 중요성)

### 최초 접근 방법

> #### [생각]
'주어진 숫자 n의 반절까지만 반복문을 돌려, 합계가 n을 넘지 않을 때를 찾아주면 무난하겠다.'
```js
function solution(n) {
    if(n == 1) {
        return 1;
    }
    let answer = 0;
    const fn = Math.floor(n/2);
    for(let i = 1; i <= fn; i++) {
        let target = i
        let sumTarget = 0;
        while(sumtarget < n) {
            sumTarget += target;
            target++;
            if(sumTarget == n) {
                answer++;
                break
            }
        }
    }
    return answer + 1;
}
```
하지만 이 코드를 제출하자, 효율성에서 통과를 하지 못하는 경우가 발생했다. <br>
시간 복잡도를 줄이면서 같은 접근 방식을 유지하며 고민을 했다.

1. 별도의 증가연산이 필요할 것인가?
```js
// while문의 경우
while(target < n) {
    sumTarget += target;
    target++;  // 별도의 증가 연산이 필요
}

// for문의 경우
for(let target = i; target <= n; target++) {
    sumTarget += target;
}
```

> #### [생각]
'for문은 증가 연산이 루프의 일부로 최적화되어 있기에 while을 for로 바꿔보자.'

2. for문으로 바꾸면 조건의 변화는 필요가 없나?

> #### [생각]
'항상 target을 n까지 다 돌리면 낭비가 될 수 밖에 없으니, 합계가 n을 넘기면 반복문을 중지하자.'

#### 최종 결과코드
```js
function solution(n) {
    if(n == 1) return 1;
    
    let answer = 0;
    const fn = Math.floor(n/2);
    
    for(let i = 1; i <= fn; i++) {
        let sumTarget = 0;
        for(let target = i; target <= n; target++) {
            sumTarget += target;
            if(sumTarget === n) {
                answer++;
                break;
            }
            if(sumTarget > n) {
                break;
            }
        }
    }
    
    return answer + 1;
}
```
**실제로 JavaScript 엔진의 최적화가 for문에서 더 효과적으로 작동한다고 한다.** <br>
제출결과 성공적으로 통과되었다.

### 수학적 생각의 중요성.
하지만 결국 for문을 두번 사용하기에 O(n²)를 가질 수 밖에 없다. <br>
그리고 푼 사람들은 대부분 수학적 생각을 기반으로 for문을 한번 사용해서 풀어냈다.
<br><br>
원리는 이렇다.

1. 연속된 k개의 수의 합이 n이 되려면, 아래와 같은 수학적 수식이 된다.
```
x + (x+1) + (x+2) + ... + (x+k-1) = n //여기서 x는 시작 숫자, k는 연속된 숫자의 개수
```
2. 이를 x에 대하여 정리하면
```
kx + k(k-1)/2 = n
x = (2n - k(k-1))/2k
```
3. 즉 x가 자연수가 되는 k의 개수를 세면 된다.
```
예시: n = 15

// k = 1: 15 (15)
// k = 2: 7,8 (시작숫자 7)
// k = 3: 4,5,6 (시작숫자 4)
// k = 4: 3,4,5,6 (불가능)
// k = 5: 1,2,3,4,5 (시작숫자 1)
```

#### 수학적 생각을 직관적으로 담은 코드
```js
function solution(n) {
    let count = 0;
    
    // k는 연속된 숫자의 개수
    for(let k = 1; k <= n; k++) {
        // x = (2n - k(k-1))/2k 공식 적용
        const up = 2 * n - k * (k - 1);
        const down = 2 * k;
        
        // x가 자연수인지 확인
        if(up > 0 && up % down === 0) {
            count++;
        }
    }
    
    return count;
}
```
