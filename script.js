
fetch('https://whatyear-backend-tawny.vercel.app/year')
    .then(response => response.json())
    .then(data => {
    console.log(data.year);
    document.querySelector('#year').textContent = data.year
});

