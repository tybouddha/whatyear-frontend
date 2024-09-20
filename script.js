
fetch('https://whatyear-backend-tawny.vercel.app/year')
    .then(response => response.json())
    .then(data => {
    document.querySelector('#year').textContent = data.year
});

