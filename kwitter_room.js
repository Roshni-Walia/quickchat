
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBIHobG1ZaWerhm1lx8V-3Y7qH7c-ZXNYM",
      authDomain: "twitter-15dea.firebaseapp.com",
      databaseURL: "https://twitter-15dea-default-rtdb.firebaseio.com",
      projectId: "twitter-15dea",
      storageBucket: "twitter-15dea.appspot.com",
      messagingSenderId: "1045474057092",
      appId: "1:1045474057092:web:1162278e0210b81afd5bd1"
    };
    firebase.initializeApp(firebaseConfig)

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='redirecttochatroom(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();

function addroom() {
      roomname=document.getElementById("roomname").value 
      firebase.database().ref("/").child(roomname).set({
            purpose:"addingroom"
      })
localStorage.setItem("roomname",roomname)
window.location="kwitter_page.html"

}
function logout() {
      localStorage.removeItem("roomname")
      window.location="index.html"
      localStorage.removeItem("username")
}
function redirecttochatroom(name) {
      console.log(name)
      localStorage.setItem("roomname",name)
      window.location="kwitter_page.html"
}
username=localStorage.getItem("username")
document.getElementById("color_white").innerHTML="Welcome "+username+" !"


