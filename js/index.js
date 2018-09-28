var buttom = $('#arrow');

buttom.click(dropDown);

function dropDown () {
    $('#songs').slideUp(3000, function () {
       $('#songs').remove()
    })
}