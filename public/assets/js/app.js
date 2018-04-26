$(document).ready(function(){
    function addBurger(){
        var burger = {
            burger: $("#userInput").val().trim()
        };
        console.log(burger)
        $.post("/api/add-burger",burger,function(data){
            // console.log(data);
        })
    }
    $(document).on("click", "#addBurger", function(e){
        e.preventDefault();
        addBurger();
    })
})