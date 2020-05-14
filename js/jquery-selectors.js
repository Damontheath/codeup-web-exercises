// $('body').css({
//     'background-color': 'black',
//     'color': 'white'
// });
//
// $('li').css('font-size', '20px');
//
// $('h1,p,li').css({
//     'background-color': "white",
//     'color': 'black'
// });
//
// var popUp =  $('h1').html();
//
// alert(popUp);



$('h1').click(function (){
    $(this).css('background-color','green');
});

$('p').dblclick(function () {
    $(this).css('font-size','18px');
});

$('li').hover(function () {
    $(this).css('color','red');
},
    function () {
    $(this).css('color','black');
    });