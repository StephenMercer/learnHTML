var mySiteConfig = {
    homePage: {
        title: 'Home Page '
    },
    aboutPage: {
        title: 'About'
    },
    changeColor: function(id) {
        document.getElementById(id).style = 'color: #FF0000';
    },
    addOne: function(value) {
        return value + 1;
    },
    automaticAddOne: function(id) {

        document.getElementById(id).innerText = Number(document.getElementById(id).innerText) + 1;

    }


}