//이미지를 배열로 가져옴./이미지 주소 똑같이 가져와야함
const images = ['leekingin.jpeg', 'park.jpeg', 'manutd.png'];
// 랜덤이미지로 가져옴/설명 quotes.js 에 있음
const randomImage = images[Math.floor(Math.random() * images.length)];

//html에서 img태그를 생성/자바스키립트에서 html을 만듦/index.html에는 없음.
const imagess = document.createElement('img');

//img태그에 src 이미지가 들어가있는 폴더이름(img폴더인것임)/랜덤이미지 추가
imagess.src = `img/${randomImage}`;
//바디 자식으로 이미지태그 넣음.
document.body.appendChild(imagess);