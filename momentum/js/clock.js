const clock = document.querySelector('h2#clock');

function getClock () {
    //인스턴스 date 생성
    const date = new Date();

    //padStart(원하는길이,'가 아니면 앞에 이걸추가해라') / 문자열만 취급
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
        //클록 이너텍스트에 화면이 나오게 설정.
    clock.innerHTML = (`${hours}:${minutes}:${seconds}`);
};

//바로 함수 실행
getClock();
//1초뒤 실행됨
setInterval(getClock, 1000);