const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('#gallery')

function addLi(elements) {
  const addList = elements.map(element => {
    const liRef = document.createElement('li')
    const imageRef = document.createElement('img');
    liRef.classList.add('gallery-item');
    imageRef.classList.add('gallery-image');
    imageRef.src = element.url;
    imageRef.alt = element.alt;
    liRef.append(imageRef);  
    return liRef;
  })
  galleryRef.append(...addList);
}
addLi(images)