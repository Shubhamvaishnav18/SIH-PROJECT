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

    const res = await fetch('http://localhost:3000/submit-form', {
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
