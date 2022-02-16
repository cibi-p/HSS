function menufunction()
{
    var x=document.getElementById("menu-menu-js");
    if (x.style.display != "flex")
    {
        x.style.display = "flex";
    }
    else{
        x.style.display = "none";
    }
}

function opencexpla()
{
    console.log("hello");
    var x=document.getElementById("opencexpla");
    if (x.style.display != "block")
    {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}