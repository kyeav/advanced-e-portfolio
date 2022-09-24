// template_s3chdi9
// service_049xwh7
// WAO1Gv2W66GyIBO4j

// global scope variables
let isModalOpen = false

let contrastToggle = false

const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')

    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    // recalculate position of shapes everytime we move the mouse
    // querySelectorAll returns an array
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0 
        const boolInt = isOdd ? -1 : 1

        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle

    if (contrastToggle) {
        document.body.classList += ' dark-theme'
    }
    else {
        document.body.classList.remove('dark-theme')
    }
    
}

function contact(event) {
    event.preventDefault()
    // to stop forms from refreshing the page by default

    // hit server
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    // show loading state
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm(
            'service_049xwh7',
            'template_s3chdi9',
            event.target,
            'WAO1Gv2W66GyIBO4j'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            // remove loading state 

            success.classList += ' modal__overlay--visible'
            // show success state
        }).catch(() => {
            // show error if server is down

            loading.classList.remove('modal__overlay--visible')

            alert(
                'The email service is temporarily unavailable. Please contact me directly on kylieavie@gmail.com'
            )

            // send loading request 
            // setTimeout(() => {
                // console.log('it worked')
            // }, 1000)
        })
}

function toggleModal() {
    // toggle modal

    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove('modal--open')
    }

    isModalOpen = true

    document.body.classList += ' modal--open'
}

/* function contact() {
    event.preventDefault()
    // to stop forms from refreshing the page by default
    emailjs
    .sendForm(
        'service_049xwh7', 
        'template_s3chdi9',
        event.target,
        'WAO1Gv2W66GyIBO4j'
    ).then(() => {
        console.log('this worked')
    })
} */

/* async function contact() {
    event.preventDefault()
    // to stop forms from refreshing the page by default
    await emailjs
        .sendForm(
            'service_049xwh7',
            'template_s3chdi9',
            event.target,
            'WAO1Gv2W66GyIBO4j'
        ).then(() => {
            console.log('this worked')
        })
} */