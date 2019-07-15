const moviesTheatrical = lists.theatrical

const openTrailer = (e) => {
  console.log('funciona')
    let data = moviesTheatrical
   for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (e.currentTarget.name === element.title) {
      console.log(moviesTheatrical[i].video)
        const markup = `
        <section class="modal" >
        <section class="modal-content" >
        <section class="modal-title-container" >
        <h2 class="modal-title"> ${element.title}</h2>
        <span  id="close" class="closeTrailer">&times;</span>
        </section>
        <iframe class="list-trailer" src=${element.video} frameborder="0"></iframe>
        </span>
        </section>
        </section>
      `;
      document.getElementById("openModalTrailer").innerHTML = markup;
  }
   }
   let closeTrailerButtons = document.getElementsByClassName("modal")
   for(let i = 0; i < closeTrailerButtons.length; i++) {
            closeTrailerButtons[i].addEventListener("click", () => {
              closeTrailerButtons[i].style.display="none"
            })
           }
  }

const moviesTheatricalShow = (data) => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const markup = `
      <li>
      <h4> ${element.title}</h4>
      <button class="open-modal" name=${element.title} id=button_${element.title}>
      <img class="list-video--image" src="${element.image}">
      </button>
      </li>
      `;
      document.getElementById("list-theatrical").innerHTML += markup;
            }
            let buttonTrailer = document.getElementsByClassName("open-modal")
            for(let i = 0; i < buttonTrailer.length; i++) {
                     buttonTrailer[i].addEventListener("click", openTrailer)
                    }
          }

moviesTheatricalShow(moviesTheatrical)
//document.getElementById('holi').addEventListener('click', function () {showAllPokemon(dataPokemon); } )

