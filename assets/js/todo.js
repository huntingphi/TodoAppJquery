$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
})

$("ul").on("click","span",function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(function(){
        console.log(this);
        $(this).remove();
    });
});

$("input[type ='text']").on("keypress",function(event) {
    // console.log(this);
    if(event.which === 13){
        let todoText = $(this).val();
        $("ul").append("<li><span><i class = \"fas fa-trash-alt\"></i> </span>" + todoText + "</li>")
        $(this).val("");
    };
});

$("#add").click(function(){
    $("input[type='text']").fadeToggle();
})