$('.first').click(() => {
console.log( 'Yeah, you clicked me' )
})

$('.second').click(() => {
$('.first').text('Yeah, you clicked me')
})

$('.third').click(() => {
    console.log('click')
    let color = $('input').val()
    console.log(color)
    $('button').css('background-color',color)
})
