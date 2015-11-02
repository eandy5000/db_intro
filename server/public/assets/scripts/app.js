$(document).ready(function(){

   $('#search').submit(function(event){
       event.preventDefault();
       var values = {};
       $.each($(this).serializeArray(),function(i, field){
           values[field.name] = field.value;
       });


        $.ajax({
           type:"GET",
            url: "/data",
            data: values,
            success: function(data){
           processData(data);
            }
        });
   });



});

function processData(data){
console.log(data[0].name, data[0].animal);
    $('#result').children().remove();
    $('#result').append('<h2>'+data[0].name + '</h2>');
    $('#result').append('<h2>'+data[0].animal + '</h2>');


}