$.ajax({
    url: '/js/languages.json',
    success: res =>
        res.languages.forEach(language =>
            $('#languages').append(
                $('<div></div>').append(
                    $('<img>').attr({ 'src': language.image.path, 'width': '50px', 'draggable': false }),
                    $('<div></div>').text(`${ language.name }`)
                )
            )
        )
})

$(() => {
    $('img').on('contextmenu', evt => false);
})