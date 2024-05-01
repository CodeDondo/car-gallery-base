const galleryArray = ['cars1.jpg', 'cars2.jpg', 'cars3.jpg', 'cars4.jpg', 'cars5.jpg', 'cars6.jpg', 'cars7.jpg', 'cars8.jpg', 'cars9.jpg', 'cars10.jpg',]

const gallery = document.getElementById('carGallery')

const sectionBgImg = document.createElement('section')
sectionBgImg.id = ('sectionBgImg')
gallery.appendChild(sectionBgImg)

const smallTiles = document.createElement('section')
smallTiles.id = ('tiles')
gallery.appendChild(smallTiles)

const bgImg = document.createElement('img')
bgImg.id = ('bgImg')
bgImg.src = 'assets/img/cars1.jpg'
sectionBgImg.appendChild(bgImg)

galleryArray.forEach(

    (imgName, index) => {
        if (index > 0) {
            const smallImage = document.createElement('img')
            smallImage.src = 'assets/img/' + imgName
            smallImage.classList.add('tileImage')

            smallTiles.appendChild(smallImage)

            smallImage.addEventListener('click',

                (event) => {
                    let bgImgURL = bgImg.src
                    let smallImageURL = event.target.src

                    bgImg.src = smallImageURL
                    event.target.src = bgImgURL


                })
        }
    }
)