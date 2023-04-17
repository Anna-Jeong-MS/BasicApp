$(document).ready(function () {

    $('#btnGreeting').click(function(){
        const name = $('#txtName').val()
        $('#result').append('<h2>Hello, ' + name + '</h2>')
    });

});