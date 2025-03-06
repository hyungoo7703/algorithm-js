# DFS/BFS
> #### DFS (Depth-First Search): 그래프나 트리 구조에서 사용되는 탐색 알고리즘
DFS는 깊이 우선 탐색이라고도 불리며, 이름에서 알 수 있듯이 먼저 깊이를 우선으로 탐색하는 방식이다. <br>
DFS에 대해 알아보기 전, JavaScript에서 그래프를 표현할때를 먼저 알아보자. <br> 
결론부터 말하면 인접 리스트의 형태를 쓸 수 있다.
```js
// 그래프를 인접 리스트로 표현
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
}
```
이 그래프를 시각적으로 표현하면 아래 그림과 같이 만들 수 있다. <br><br>
![Image](https://github.com/user-attachments/assets/4d2fa95b-e55a-409d-b334-646ce7288891) <br>
이 그래프에서 깊이 우선 탐색이 이루어진다면 순서는 어떻게 될까? <br>
깊이 우선 탐색의 경우 아래 원칙을 지키며 진행하면 된다.

1. 시작 노드를 방문
2. 방문한 노드의 자식 노드들을 차례로 재귀적으로 방문
3. 모든 노드를 방문할 때까지 이 과정을 반복 <br>

이 원칙에 의하면 순서는 아래와 같다. <br>
**A→B→D→E→F→C** <br>

그렇다면 이를 코드로 구현은 어떻게 할 수 있을까? <br>
방법은 여러가지 이지만 Set을 이용해 간단하게 표현해보려고 한다.

### Set을 이용하는 방법 (깊이 우선 탐색)
```js
const dfs = (here, visited = new Set()) => {
    if(visited.has(here)) return
    visited.add(here);
    console.log(here);
    graph[here].forEach(e => dfs(e, visited));
}
dfs('A'); //A→B→D→E→F→C
```

-----

> #### BFS (Breadth-First Search): 그래프나 트리 구조에서 사용되는 탐색 알고리즘
BFS는 너비 우선 탐색이라고도 불리며 깊이 우선 탐색과 달리 너비를 우선으로 탐색한다. <br>
즉, 루트 노드부터 시작하여 인접한 노드들을 먼저 탐색한 후, 그 다음 레벨의 노드들을 탐색하는 방식이다. <br>
위 깊이우선 탐색에서 사용했던 그래프를 다시 예시로 들고, 순서가 어떻게 될지 생각해보자. <br>
너비 우선 탐색의 경우에는 아래 원칙을 지키며 진행하면 된다.

1. 시작 노드를 큐(queue)에 추가하고 방문했다고 표시
2. 큐에서 노드를 꺼내어 해당 노드의 인접 노드들을 모두 큐에 추가하고 방문했다고 표시
3. 큐가 빌 때까지 이 과정을 반복 <br>

이 원칙에 의하면 순서는 아래와 같다. <br>
**A→B→C→D→E→F** <br>

너비 우선 탐색도 마찬가지로 Set을 이용해 표현 할 수 있다.

### Set을 이용한 방법 (너비 우선 탐색)
```js
const bfs = (start) => {
    const visited = new Set();
    const queue = [start];
  
    visited.add(start);
  
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node);
  
      const neighbors = graph[node];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
};
bfs('A') //A→B→C→D→E→F
```