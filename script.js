const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {

        if (e.target.id === 'beige') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'deepskyblue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'cadetblue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'darkgoldenrod') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'darkorange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'lightgreen') {
            body.style.backgroundColor = e.target.id;
        }

    })
})
