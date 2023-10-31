//YOUR FIREBASE LINKS
name1=localStorage.getItem("user_name")
document.getElementById("welcome").innerHTML="Welcome "+user_name;
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBthMNik2ziBeC1kzNaloQaB_XZYyW6uLg",
    authDomain: "let-s-chat-webapp-b4030.firebaseapp.com",
    databaseURL: "https://let-s-chat-webapp-b4030-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-webapp-b4030",
    storageBucket: "let-s-chat-webapp-b4030.appspot.com",
    messagingSenderId: "217107305071",
    appId: "1:217107305071:web:3e6d136f5b169f18db339a",
    measurementId: "G-490HG2WHEF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function send() {
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:name1,
      message:msg,
      likes:0
})
document.getElementById("msg").value=" ";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message1 = message_data['message'];
name_with_tag = "<h4>"+name1+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message1+"</h4>";
msg = name_with_tag+message_with_tag+like_with_tag+likes;
document.getElementById("output").innerHTML=msg;
//End code
      } });  }); }
getData();
