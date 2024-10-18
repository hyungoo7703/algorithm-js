//[PCCP 기출문제] 1번 / 동영상 재생기 https://school.programmers.co.kr/learn/courses/30/lessons/340213?language=javascript
function solution(video_len, pos, op_start, op_end, commands) {
    function timeToSeconds(time) {
        const [minutes, seconds] = time.split(":").map(Number);
        return minutes * 60 + seconds;
    }

    const videoLength = timeToSeconds(video_len);
    let posLength = timeToSeconds(pos);
    const opStart = timeToSeconds(op_start);
    const opEnd = timeToSeconds(op_end);

    commands.forEach(element => {
        if(opStart <= posLength && posLength <= opEnd) {
            posLength = opEnd;
        }
        if(element === 'next') {
            posLength = Math.min(videoLength, posLength + 10);
        } else {
            posLength = Math.max(0, posLength - 10);
        }
        if(opStart <= posLength && posLength <= opEnd) {
            posLength = opEnd;
        }
    });

    return `${String(Math.floor(posLength / 60)).padStart(2, '0')}:${String(posLength % 60).padStart(2, '0')}`;
}