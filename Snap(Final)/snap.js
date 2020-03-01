/* $(document).ready(() => {
    $('#button').click(() => {
        $('#fate').delay('1500').fadeOut('10000', 'linear');
        $('#live').delay('4000').fadeIn('10000', 'linear');
    })
})*/


/*$(function userName() {
    let name = document.getElementById('name').value;
    name === '' ? alert(`Please enter your full name`) : alert(`Hello ${name}!`)
})

$(function userAge() {
    let age = document.getElementById('age').value;
    age === '' ? alert(`Please enter your current age`) : alert(`You are ${age} years old.`)
    
})

$(function userGender() {
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    
    if (male.checked == true) {
        alert(`Your gender is ${male.value}`)
    } else if (female.checked == true) {
        alert(`Your gender is ${female.value}`)
    } else {
        alert('You have not chosen a gender')
    }
})

$(function snap() {
    document.getElementById('snap').src="./Snap.gif";
    
})

$(function live() {
    document.getElementById('snap').src="./snap.gif";   
})

$(function die() {
    document.getElementById('snap').src="./EbonyMaw.png";   
})*/

$(document).ready(() => {
    $('#button').click(function destiny() {
        let name = document.getElementById('name').value.length;
        let age = document.getElementById('age').value;
        const male = document.getElementById('male');
        const female = document.getElementById('female');
        const evenAge = age % 2 === 0;
        const evenName = name % 2 === 0;
        let snap;
        
        if (name === '' || age === '' || male.checked === false && female.checked === false) {
            alert('Please complete all required fields');
            return false;
        } else if (evenName === true && evenAge === true && male.checked === true || 
                evenName === false && evenAge === false && female.checked === true) {
                snap = document.getElementById('snap').src="./Snap.gif";
                $('#fate').delay('1500').fadeOut('10000', 'linear');
                $('#live').delay('4000').fadeIn('10000', 'linear');
                $('#reset1').delay('4000').fadeIn('10000', 'linear');
                $('#info').delay('1500').fadeOut('10000', 'linear');
                $('#instructions').delay('1500').fadeOut('10000', 'linear');
            } else {
                snap = document.getElementById('snap').src="./Snap.gif";
                $('#fate').delay('1500').fadeOut('10000', 'linear');
                $('#die').delay('4000').fadeIn('10000', 'linear');
                $('#reset2').delay('4000').fadeIn('10000', 'linear');
                $('#info').delay('1500').fadeOut('10000', 'linear');
                $('#instructions').delay('1500').fadeOut('10000', 'linear');
            }
        })

    })
