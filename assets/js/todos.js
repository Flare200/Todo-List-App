//Check off todos by clicking
$("ul").on("click","li",function() { 
   $(this).toggleClass("completed")
});

//Click on X to delete todo
$("ul").on("click","span",function(e) { 
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove()
    })
    e.stopPropagation() 
});

$("input[type='text']").keypress(function(e) { 
    if(e.which===13)
    {
        //Grab text from input
        var todoText=$(this).val()
        $(this).val("")
        //Create new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+todoText+"</li>")
    }
});