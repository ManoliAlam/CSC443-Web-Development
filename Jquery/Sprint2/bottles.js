(img).click(function () {
    var currentClass = $(this).attr('class');
    $('.' + currentClass).show();
    $(this).hide();
});
