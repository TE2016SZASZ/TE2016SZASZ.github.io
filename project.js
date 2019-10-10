    var element = document.getElementById("#btn1");
    var content_element = document.getElementById("#member_1");
    
    element.addEventListener("click",function(){
        content_element.classList.add("becomeVisible");
    });
