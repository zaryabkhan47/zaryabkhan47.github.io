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
