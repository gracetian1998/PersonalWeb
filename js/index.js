$('#btn-exa1').click(function() {
    if ($(this).hasClass('on-exa')) {
        $(this).removeClass('on-exa');
        $(this).parent().removeClass('on-exa');
    } else {
        $(this).addClass('on-exa');
        $(this).parent().addClass('on-exa');
    }
})

$("#btn-exa2").click(function() {
    $.ajax({
        url: "https://api.github.com/users/ygunoil/repos",
        type: "GET",
        dataType: "json",
        success: function(result) {
            var arr = [];
            result.forEach(element => {
                arr.push(element.html_url + "\n");
            });
            alert(arr);
        }
    });
});
$('#btn-exa3').click(function() {
    $.ajax({
        url: "https://api.github.com/users",
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            var i = Math.ceil(Math.random() * 20);
            $('#img-axios').attr('src', res[i++].avatar_url);
        }
    });
});