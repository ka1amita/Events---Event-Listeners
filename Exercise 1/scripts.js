$('.first').click(() => {
console.log( 'Yeah, you clicked me' )
})

$('.second').click(() => {
$('.first').text('Yeah, you clicked me')
})

// $('.third').click(() => {
//     $('button').css('background-color', 'purple')
// })

$('.third').on('click', () => {
    $('button').css('background-color', 'purple')
})