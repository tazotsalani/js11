let username = prompt(`who's there`);

if (username === 'admin') {
    let password = prompt('enter passord');

    if (password === `themaster`) {
        alert('welcome');
    } else if (!password) {
        alert('cancel');
    } else {
        alert('wrong password');
    }
} else if (!username) {
    alert('cancel');
} else {
    alert(`i don't know you`);
}