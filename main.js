
window.onload = function () {
    //  *Call functions on page load.
    discGolf();
};
// require('dotenv').config();

// let somethingArray;

// const api_key = process.env.SECRET_API_KEY;

const discGolf = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9b204a9bfmsha70410478fb879bp14895ejsn323afe06f9ce',
            'X-RapidAPI-Host': 'disc-golf.p.rapidapi.com'
        }
    };

    fetch('https://disc-golf.p.rapidapi.com/all', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
}


