user_name=localStorage.getItem("user_name")
document.getElementById("usn").innerHTML="Welcome "+user_name;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyT7pfCxzOCfTJEZsSMhvVfZ1aJhLZOAY",
    authDomain: "lets-chat-webapp-b30c7.firebaseapp.com",
    projectId: "lets-chat-webapp-b30c7",
    storageBucket: "lets-chat-webapp-b30c7.appspot.com",
    messagingSenderId: "824935233192",
    appId: "1:824935233192:web:2a3ee58b90866c06e6349d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function add()
  {
    room_name = document.getElementById("room_name").value;    

  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

  localStorage.setItem("room_names", room_name);

  window.location = "kwitter_page.html";
  }

  function getData()
   {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});});}
getData();