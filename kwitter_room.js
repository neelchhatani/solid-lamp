function Addroom(){
var i_trust_you = document.getElementById("room_name").value;
firebase.database().ref("/").child(i_trust_you).update({
purpose:"adding room name"      
})};
function logout(){
window.location("index.html");
}
