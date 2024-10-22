document.getElementById('blue-theme').addEventListener('click', function() {
    document.body.classList.add('blue-theme');
    document.body.classList.remove('red-theme');
});

document.getElementById('red-theme').addEventListener('click', function() {
    document.body.classList.add('red-theme');
    document.body.classList.remove('blue-theme');
});


function userForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    if (!firstName || !lastName || !email || !address || !city || !province) {
        alert("Please fill in all the fields.");  
        return;  
    }

    const output = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Province:</strong> ${province}</p>
        <p><strong>Membership:</strong> ${membership}</p>
    `;

    document.getElementById('output').innerHTML = output;
}

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    document.getElementById('output').innerHTML = ''; 
});

document.getElementById('submitBtn').addEventListener('click', userForm);

function myExcelFunc() {
    
    const numberStr = document.getElementById('numbers').value;

   
    if (!numberStr.trim()) {
        alert("Please enter numbers separated by spaces.");
        return;
    }

    
    const numberArr = numberStr.trim().split(/\s+/).map(Number);


    if (numberArr.some(isNaN)) {
        alert("Please enter only numbers.");
        return;
    }


    const selectedFunction = document.querySelector('input[name="function"]:checked').value;

    let result;
    switch (selectedFunction) {
        case 'AutoSum':
            result = numberArr.reduce((acc, num) => acc + num, 0);  
            break;
        case 'Average':
            result = numberArr.reduce((acc, num) => acc + num, 0) / numberArr.length; 
            break;
        case 'Max':
            result = Math.max(...numberArr);  
            break;
        case 'Min':
            result = Math.min(...numberArr);  
            break;
        default:
            result = "Invalid function selected";
    }

    document.getElementById('output').innerHTML = `Result: ${result}`;
}
