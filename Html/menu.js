function menufunction()
{
    
    console.log("hello");
    var x=document.getElementById("menu-menu-js");
    if (x.style.display != "flex")
    {
        x.style.display = "flex";
    }
    else{
        x.style.display = "none";
    }
}