//.ck-editor__editable
var del = document.querySelector("#del")
var superkey = localStorage.getItem("key3")
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
    questionList.unshift(doc.data())
  })
  master()
})

const master = () => {
  let gesipanTopindex = document.querySelector(".gesipan_topindex")
  let gesipanToptitle = document.querySelector(".gesipan_toptitle")
  let gesipanTopmaker = document.querySelector(".gesipan_topmaker")
  let gesipanToptime = document.querySelector(".gesipan_toptime")
  let gesipanContent = document.querySelector(".gesipan_content")
  let masterKey = localStorage.getItem("key3")
  localStorage.removeItem("key3")

  const render = () => {
    gesipanTopindex.textContent = masterKey
    gesipanToptitle.textContent = questionList[questionList.length - masterKey].phone
    gesipanTopmaker.textContent = questionList[questionList.length - masterKey].name
    gesipanToptime.textContent = questionList[questionList.length - masterKey].time

    var 템플릿 = `문의날짜: ${questionList[questionList.length - masterKey].time}</br>
    화장품 시작한지 [${questionList[questionList.length - masterKey].회사명}] 되었습니다.</br>
    담당자 성함: ${questionList[questionList.length - masterKey].담당자}</br>
    전화번호: ${questionList[questionList.length - masterKey].연락처}</br>
    온라인, 오프라인사업에서 고민되는 것은 </br>"${questionList[questionList.length - masterKey].이메일}"입니다.</br>
    마케팅을 했으나 매출이 안오른 경험은: </br>"${questionList[questionList.length - masterKey].content}"입니다.</br>`
    $(".gesipan_content").append(템플릿)
  }   
  render()
}


  del.onclick = function() {
    var directer = ''  
    let count = superkey
    let masterCount = questionList.length
    console.log(count)
    for(let i = 0 ; i < count + 1 ; i++) {
      directer = directer + '1'
      questionList.pop()
    }
    console.log(directer)
    db.collection('product').doc(directer).delete().then(() => {
      for(let j = 0 ; j < masterCount - count ; j++) {
        console.log("2")
        let newquestionList = questionList.pop()
        var newindex = superkey
        superkey++
        var newname = newquestionList.name
        var newphone1 = newquestionList.phone1
        var newphone2 = newquestionList.phone2
        var newphone3 = newquestionList.phone3
        var newcontent = newquestionList.content
        var time = newquestionList.time
        var save = {
          'name' : newname,
          'phone1' : newphone1,
          'phone2' : newphone2,
          'phone3' : newphone3,
          'content' : newcontent,
          'time' : time,
          'index' : newindex
        }
        db.collection('product').doc(directer).set(save)
        directer = directer + '1'
        db.collection('product').doc(directer).delete()
      }
    } )
    
}
var king = document.querySelector(".king")
var king2 = document.querySelector(".king2")
