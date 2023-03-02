document.querySelector(".close").addEventListener("click" , function(){
    document.querySelector(".detspopup").style.display = "none";
});

window.addEventListener("load" , function(){
    setTimeout(
        function open(event){
            document.querySelector(".detspopup").style.display = "block";
        },
        9000
    )
});