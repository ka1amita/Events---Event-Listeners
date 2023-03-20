$('.first').click(() => {
console.log( 'Yeah, you clicked me' )
})

$('.second').click(() => {
$('.first').text('Yeah, you clicked me')
})

let numberOfClicks = 0
$('.third').click(() => {
    console.log('click')
    numberOfClicks ++
    console.log(numberOfClicks)

    let color = $('input').val()
    console.log(color)
    if (numberOfClicks === 1) {
    
        $('button').css('background-color',color)
    
}

})
