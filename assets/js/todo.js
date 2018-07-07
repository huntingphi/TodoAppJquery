var getTodos = firebase.database().ref('todos');
getTodos.once('value',function(snapshot){
    snapshot.forEach(function(childSnapshot){
        $("ul").append("<li><span><i class = \"fas fa-trash-alt\"></i> </span>" + childSnapshot.val().todo + "</li>")
    })
})

$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
})

$("ul").on("click","span",function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
});

$("input[type ='text']").on("keypress",function(event) {
    // console.log(this);
    if(event.which === 13){
        let todoText = $(this).val();
        // $("ul").append("<li><span><i class = \"fas fa-trash-alt\"></i> </span>" + todoText + "</li>")
        writeTodoData(todoText);
        $(this).val("");
    };
});

$("#add").click(function(){
    $("input[type='text']").fadeToggle();
})

function writeTodoData(description) {
    // alert(firebase.database.ref('todos').push().key);
    var newPostKey = firebase.database().ref().child('todos').push().key;
    // alert(newPostKey);
    firebase.database().ref('todos/'+newPostKey).update({
        todo: description
    });
}