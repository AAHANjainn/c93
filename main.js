function send()
{
    var username = document.getElementById("username").value;
    window.location="Kwitter_room.html";
    localStorage.setItem("username" ,username );
}

