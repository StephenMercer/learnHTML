
function toggleColor () {
    var item = document.getElementById('first');

    if(item.className === 'first-paragraph') {
        item.className = 'second-paragraph';
    } else {
        item.className = 'first-paragraph'
    }
}