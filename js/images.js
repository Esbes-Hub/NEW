const instruments = [
    '/IMAGES/drums.jpg',
    '/IMAGES/guitar.jpg',
    '/IMAGES/piano.jpg',
    '/IMAGES/trumpet.jpg'];
const container = document.getElementById('backgroundImages');
 instruments.forEach((src, index) =>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'instrument';
    img.style.setProperty = ('--random-x', Math.random());
    img.style.animationDelay = '${index * 2}s';
    container.appendChild(img);
});