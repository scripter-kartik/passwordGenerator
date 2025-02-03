function passwordGenerator(length){

    const smallChar = 'qwertyuiopasdfghjklzxcvbnm';
    const largeChar = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbers = '1234567890';
    const specialChar = '!@#$%^&*()[];:'

    const allChar = smallChar + largeChar + numbers + specialChar;
    let password = ''

    for (let i = 0; i < length; i++) {
       const randomindex = Math.floor(Math.random()*allChar.length)
       password += allChar[randomindex];
    }
    return password;
    input.innerHTML = password;
    
}

function displayPassword(){
    const password = passwordGenerator(12);
    document.getElementById('password').value= password;
}

