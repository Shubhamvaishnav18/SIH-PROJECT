document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 


    const formData = new FormData(event.target);

    console.log('Name:', formData.get('name'));
    console.log('Email:', formData.get('email'));
    console.log('Number:', formData.get('number'));

    const body = {
        name: formData.get('name'),
        email: formData.get('email'),
        number: formData.get('number')
    }
    console.log(body);
    
try{

    const res = await fetch('https://sih-project-rho.vercel.app/submit-form', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then((res)=>res.json())
}catch(err){
    console.log(err);
    
}
    // console.log(res);
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const spinner = document.getElementById('spinner');
    const button = document.querySelector('.btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        spinner.style.display = 'flex'; // Show the spinner
        button.classList.add('loading'); // Add loading class to disable button

        // Simulate form submission or send data via AJAX
        setTimeout(() => {
            // Simulate form submission delay
            form.submit(); // Proceed with actual form submission
        }, 2000); // Adjust time as needed or replace with AJAX request
    });
});


