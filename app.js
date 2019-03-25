const lists = {
  theatrical: [
    {
      title: 'Bao',
      image: 'images/bao.jpg',
      video : 'https://www.youtube.com/embed/7rspQR7rhf0'
    },
    {
      title: 'Lou',
      image: 'images/lou.jpg',
      video : src='https://www.youtube.com/embed/l-OIl2i6YH8'
    },
    {
      title: 'Partly Cloudy',
      image: 'images/partly-cloudy.jpg',
      video : src='https://www.youtube.com/embed/ix13P9NqBjo'
    },
    {
      title: 'Piper',
      image: 'images/piper.jpg',
      video : src='https://www.youtube.com/embed/vz426Q1SrSk'
    },
    {
      title: "Sanjay's Super Team",
      image: 'images/sanjay.png',
      video : src='https://www.youtube.com/embed/I80bfv7fbXk'
    },
    {
      title: 'Lava',
      image: 'images/lava.jpg',
      video : src='https://www.youtube.com/embed/uh4dTLJ9q9o'
    },
    {
      title: 'Party Central',
      image: 'images/Party_central.jpg',
      video : src='https://www.youtube.com/embed/MWDJwQg5KKo'
    }
    
  ],
  spark: [
    {
      title: 'Purl',
      image: 'images/purl.jpg',
      video: src='https://www.youtube.com/embed/B6uuIHpFkuo'
    },
    {
      title: 'Smash and Grab',
      image: 'images/smash.jpg',
      video: src='https://www.youtube.com/embed/A4-G7YpSFb4'
    },
    {
      title: 'La Luna',
      image: 'images/La-luna.png',
      video: src='https://www.youtube.com/embed/7kT29xihoCk'
    },
    {
      title: 'Kitbull',
      image: 'images/kitbull.png',
      video: src='https://www.youtube.com/embed/AZS5cgybKcI'
    },
    {
      title: 'Float',
      image: 'images/float.jpg',
    },
    {
      title: 'Loop',
      image: 'images/loop.jpg',
    },
    {
      title: 'Wind',
      image: 'images/Wind.jpg',
    },
  ],
  home: [
    {
      title: 'Auntie Edna',
      image: 'images/Endaaunt.png',
      video: src='https://www.youtube.com/embed/MDVs8OVQm00'
    },
    {
      title: 'Jack-Jack Attack',
      image: 'images/jack.jpg',
      video: src='https://www.youtube.com/embed/qXssl33KNw0'
    },
    {
      title: "Riley's First Date",
      image: 'images/first.png',
      video: src='https://www.youtube.com/embed/ILsVIW8aOpk'
    },
    {
      title: "Dug's Special Mission",
      image: 'images/Dug.png',
      video: src='https://www.youtube.com/embed/CKEEaFg6DS8',
    },
    {
      title: "Your Friend The Rat",
      image: 'images/rat.jpg',
      video: src='https://www.youtube.com/embed/72KsjWUCUJQ&t=24s',
    },
    {
      title: 'BURN•E',
      image: 'images/Burn.jpg',
      video: src='https://www.youtube.com/embed/ppfSPzbAQYc',
    },
    {
      title: 'The Legend of Mor’du',
      image: 'images/Legend.jpg',
    }
  ]
}

function fillVideoList (idList, videos) {
  const list = document.getElementById(idList)
  for (let index = 0; index < videos.length; index++) {
    const item = document.createElement('li')
    const image = document.createElement('img')
    const titleMovie = document.createElement('h4')
    const trailerMovie = document.createElement('iframe')
    const close = document.createElement('span')
    close.innerHTML = "&times;";
    close.classList.add('closeTrailer')
    titleMovie.innerHTML = videos[index].title
    trailerMovie.src = videos[index].video
    image.id = videos[index].title
    trailerMovie.classList.add('list-trailer')
    image.src = videos[index].image
    image.alt = videos[index].title
    image.classList.add('list-video--image')
    item.appendChild(image)
    item.appendChild(titleMovie)
    item.appendChild(close)
    item.appendChild(trailerMovie)
    list.appendChild(item)
  }
}


fillVideoList('list-theatrical', lists.theatrical)
fillVideoList('list-spark', lists.spark)
fillVideoList ('list-home', lists.home)

const modal = document.getElementsByClassName('list-trailer')

const modalBtn = document.getElementsByClassName('list-video--image')

const closeBtn = document.getElementsByClassName('closeTrailer')

//Para abrir el modal
function openModal () {
  for (let i = 0; i< modal.length; i++) {
    modal[i].style.display= "block";
  }
  for (let i = 0; i< closeBtn.length; i++) {
    closeBtn[i].style.display= "block";
  }
  
}
//Llamando a la funcion desde el boton (imagen)
for (let i = 0; i< modalBtn.length; i++) {
  modalBtn[i].addEventListener('click', openModal);
}

//Cerrando el modal

function closeModal () {
  for (let i = 0; i< modal.length; i++) {
    modal[i].style.display= "none";
  }
  for (let i = 0; i< closeBtn.length; i++) {
    closeBtn[i].style.display= "none";
  }
  
}

//Llamando a la funcion desde el boton cerrar (x)
for (let i = 0; i< closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', closeModal);
}