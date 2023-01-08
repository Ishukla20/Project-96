const firebaseConfig = {
      apiKey: "AIzaSyCEfgqZ05qjqmDlpLDVk_lEHhNQ8abYpt4",
      authDomain: "kwitter-edbf1.firebaseapp.com",
      databaseURL: "https://kwitter-edbf1-default-rtdb.firebaseio.com",
      projectId: "kwitter-edbf1",
      storageBucket: "kwitter-edbf1.appspot.com",
      messagingSenderId: "317884524414",
      appId: "1:317884524414:web:cf4cef574791481592f52f"
    };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value=" "; 
}