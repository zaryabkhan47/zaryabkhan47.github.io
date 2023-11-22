 const imageFilenames = ['pic1.jpg' , 'pic2.jpg' , 'pic3.jpg' , 'pic4.jpg' , 'pic5.jpg'];
/* Declaring the alternative text for each image file */

const altTexts = [
'Description for pic1',
'Description for pic2',
'Description for pic3',
'Description for pic4',
'Description for pic5'
];
imageFilenames.forEach((filename, index) => {
newImage.setAttribute('src', `images/${filename}`);
newImage.setAttribute('alt', altTexts[index]);
thumbBar.appendChild(newImage);

/*  Add Click event listener to each thumbnail image*/

newImage.addEventListener('click' , () => {
displayedImage.src = newImage.src;
displayedImage.alt = newImage.alt;

});

})
/* Wiring up the Darken/Lighten button */
 btn.addEventListener('click', () => {
const currentClass = btn.getAttribute('class');
if (currentClass === 'dark') {
    btn.setAttribute('class' , 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
}
