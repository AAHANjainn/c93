var firebaseConfig = {
  apiKey: "AIzaSyAPhJlFvg7-9snDt8o92WcGo2sGT3nLIm4",
  authDomain: "lets-chat-2-9c6df.firebaseapp.com",
  databaseURL: "https://lets-chat-2-9c6df-default-rtdb.firebaseio.com",
  projectId: "lets-chat-2-9c6df",
  storageBucket: "lets-chat-2-9c6df.appspot.com",
  messagingSenderId: "119779777595",
  appId: "1:119779777595:web:8915d4804fafb543a5901e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

welcome_name = localStorage.getItem("username");
document.getElementById("welcome_username").innerHTML = welcome_name;

function add_room()
{
  room_name = document.getElementById("room_name_value").value;
console.log("room entered = " + room_name)
  firebase.database().ref("/").child(room_name).update({
    purpose :"adding room name"
  });
  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room_names = " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row; 
//End code
});});}
getData();

function redirectToRoomName(room_name)
{
  console.log(room_name);
  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html" ;
}