const 회사명 = document.querySelector("#회사명")
const 담당자 = document.querySelector("#담당자")
const 연락처 = document.querySelector("#연락처")
const 이메일 = document.querySelector("#이메일")
const 문의내용 = document.querySelector("#문의내용")
const 전송버튼 = document.querySelector("#전송버튼")
const 생일 = document.querySelector("#생일")
const 이메일2 = document.querySelector("#이메일2")

let gonjiList = []
let countList = []

var firebaseConfig = {
    apiKey: "AIzaSyDy1LPd6x4CErwRslttwe943aK9GqDK4WU",
    authDomain: "onehnb.firebaseapp.com",
    projectId: "onehnb",
    storageBucket: "onehnb.appspot.com",
    messagingSenderId: "414856974067",
    appId: "1:414856974067:web:46cf9879a3553175967186"
    };
    firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  db.collection('product').get().then((결과)=>{
      결과.forEach((doc)=>{
        gonjiList.unshift(doc.data())
     })
  })

전송버튼.onclick = () => {
    if(회사명.value === '') {
        alert("빈 칸이 있습니다.")
    }else {
        if(담당자.value === '') {
            alert("빈 칸이 있습니다.")
        }else {
            if(연락처.value === '') {
                alert("빈 칸이 있습니다.")
            }else {
                if(이메일.value === '') {
                    alert("빈 칸이 있습니다.")
                }else {
                    if(문의내용.value === '') {
                        alert("빈 칸이 있습니다.")
                    } else {
                        let directer = '1'  
                        let index = 1
                        let count = gonjiList.length
                        let time = new Date().getFullYear() + '-' + String(Number(new Date().getUTCMonth()) + 1) + '-' + new Date().getUTCDate()
                        for(let i = 0 ; i < count ; i++) {
                            directer = directer + '1'
                            index = index + 1
                        }
                        var save = {
                            "회사명" : 회사명.value,
                            "담당자" : 담당자.value,
                            "연락처" : 연락처.value,
                            "이메일" : 이메일.value,
                            "content" : 문의내용.value,
                            "time" : time,
                            "index" : index,
                        }                       
                        db.collection('product').doc(directer).set(save)
                        전송버튼.classList.add("hide")
                        alert("확인 버튼을 누르면 저장이 진행됩니다. 이후 자동으로 이동되며 창을 닫지 말아주세요.")
                        전송버튼.classList.add("hide")
                        setTimeout(function() {
                            location.href = "../../index.html";
                        }, 5000); 
                    }
                }
            } 
        }
    }
}