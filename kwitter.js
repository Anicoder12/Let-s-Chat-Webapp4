function adduser(){
    un=document.getElementById("us_name").value;
    localStorage.setItem("user_name",un)
    window.location="kwitter_room.html"
    }