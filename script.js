const container = document.querySelector('.container');
const colorFlipper = document.querySelector('.color-flipper');
const simpleHex = document.querySelector('.simple-hex');
const cfNav = document.querySelector('.cf-nav');
const shNav = document.querySelector('.sh-nav');
const cfColor = document.querySelector('.cf-color');
const shColor = document.querySelector('.sh-color');


// Navigation Function
function colorFlipperNav() {
    colorFlipper.style.display = "block";
    simpleHex.style.display = "none";
    cfNav.style.color = "#5FA6E9";
    shNav.style.color = "#000";
    container.style.backgroundColor = 'red';
    cfColor.innerHTML = 'red';
}

colorFlipperNav();

function simpleHexNav() {
    simpleHex.style.display = "block";
    colorFlipper.style.display = "none";
    shNav.style.color = "#5FA6E9";
    cfNav.style.color = "#000";
    container.style.backgroundColor = '#ff0000';
    shColor.innerHTML = '#ff0000';
}


// Random Color Function
const templateColor = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow	', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', '	snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen'];

function cfRandomColor() {
    const randomColor = templateColor[Math.floor(Math.random()*templateColor.length)];

    container.style.backgroundColor = randomColor;
    cfColor.innerHTML = randomColor;
}

const hexColor = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function shRandomColor() {
    // Stackoverflow Way
    // const randomColor = "#000000".replace(/0/g, function() {
    //     return (~~(Math.random()*16)).toString(16);
    // });

    // Primitive Way
    let randomColor = '#';
    for (i=1; i<=6; i++) {
        randomColor += hexColor[Math.floor(Math.random()*hexColor.length)]
    }

    container.style.backgroundColor = randomColor;
    shColor.innerHTML = randomColor;
}