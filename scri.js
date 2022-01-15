$(document).ready(function () {

    $('.one').click(function () {
        console.log("Inside one - mouse clicked")
        let r = document.querySelector('.one')
        r.innerText = "Red"

        $(this).css('background-color', "red")
        $(this).addClass("red").removeClass('blue')

    })

    $('.two').click(function () {
        console.log("Inside one - mouse clicked")
        let b = document.querySelector('.two')
        b.innerText = "Blue"

        $(this).css('background-color', "blue")
        $(this).addClass("blue").removeClass('blue')

    })

    $('.change-to-yellow').click(function () {

        $('.row').children().each(function () {
            $(this).css('background-color', "yellow")
        })

    })
    $('.change-to-blue').click(function () {

        $('.row').children().each(function () {
            $(this).css('background-color', "blue")
        })

    })
    $('.change-to-red').click(function () {

        $('.row').children().each(function () {
            $(this).css('background-color', "red")
        })

    })


    $('.change-to-green').click(function () {

        $('.row').children().each(function () {
            $(this).css('background-color', "green")
        })

    })


    $('.change-to-pink').click(function () {

        $('.row').children().each(function () {
            $(this).css('background-color', "pink")
        })

    })

    $('.change-to-white').click(function () {

        $('.row').children().each(function () {
            $(this).css('background-color', "white")
        })

    })

    let isDown = false
    $(document).mousedown(function () {
        isDown = true
    }).mouseup(function () {
        isDown = false
    })

    $('.box').hover(function () {
        if (isDown) {
            let currentSize = $('.box').css('font-size');
            currentSize = parseFloat(currentSize) * 1.5;
            $(this).css('font-size', currentSize)
        } else {
            let currentSize = $('.box').css('font-size');
            currentSize = 16;
            $(this).css('font-size', currentSize)
        }
    })

    $('.col').click(function () {
        let c = document.querySelector("#colors")
        console.log(c.value)
    })

})