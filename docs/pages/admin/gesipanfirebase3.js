var firebaseConfig = {
  apiKey: "AIzaSyDy1LPd6x4CErwRslttwe943aK9GqDK4WU",
  authDomain: "onehnb.firebaseapp.com",
  projectId: "onehnb",
  storageBucket: "onehnb.appspot.com",
  messagingSenderId: "414856974067",
  appId: "1:414856974067:web:46cf9879a3553175967186"
  };
  firebase.initializeApp(firebaseConfig);

const bd = firebase.firestore();
bd.collection('product').get().then((결과)=>{
    결과.forEach((doc)=>{
      questionList.unshift(doc.data())
   })
   master();
})
