
let login = document.querySelector('#login')
var Ptitle = document.querySelector(".title_modal")
var happyend = document.querySelector(".happyend")
var happyend2 = document.querySelector(".happyend2")
var badend = document.querySelector(".badend")
var js = []
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
  db.collection('impo').get().then((결과)=>{
    결과.forEach((doc)=>{
      js.unshift(doc.data())
    })
  })

login.onclick = function() {
    let id = document.querySelector("#id")
    let pw = document.querySelector("#pw")
    console.log(id.value)
    if(id.value === "admin" && pw.value === "oiytnrk!@32") {
        happyend.classList.remove('hide')
        happyend2.classList.remove('hide')
        Ptitle.classList.add('hide')
        badend.classList.add('hide')
        localStorage.removeItem("master")
        localStorage.setItem("master", "501")
    } else {
        Ptitle.classList.remove('hide')
        badend.classList.remove('hide')
        localStorage.removeItem("master")
    }
} 
