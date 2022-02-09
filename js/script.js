$( document ).ready(function() {
    var getFooterAction = $('#footer__menu_action');
    var getFooterMenu = $('.footer__menu_submenu');
    var getFooterMenuI = $('#footer__menu_action > i');
    getFooterAction.on("click", function(){
        getFooterMenu.toggleClass('action__footer_menu');
        if(getFooterMenu.hasClass('action__footer_menu')){
            getFooterMenuI.attr('class', 'fas fa-caret-down');
        }else{
            getFooterMenuI.attr('class', 'fas fa-caret-right');
        }
    });
    var offset = 100;

  // Fade duration
  var duration = 500;

  // Toggle view of button when scrolling.
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#c-go-top').fadeIn(duration);
    } else {
      $('#c-go-top').fadeOut(duration);
    }
  });

  // Scroll to top when button is clicked.
  $('#c-go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
  var getMenuIcon = $(".icon__menu");
  var getMenu = $(".nav__menu");
  getMenuIcon.on('click', function(){
    $(this).toggleClass("icon__active");
    $(getMenu).toggleClass("menu__active")
  });
  var i = 0;
  var texto = "Este es el ranking de las marcas más valiosas del fútbol colombiano 2021";
  var getTexto = document.getElementById('paraTitulo');
  function typing(){
      if(i<texto.length){
          getTexto.innerHTML += texto.charAt(i);
          i++;
          setTimeout(typing,70);
      }
  }
  typing();
});
var getBanner = $('#banner');
function bannerGenerate() {
  getBanner.append(`<figure class="banner" style="background-image: url(${publicObje[0].img_referencia})";>
                      <figcaption class="banner__content">
                          <div class="banner__text">
                              <h1>${publicObje[0].titulo}</h1>
                              <p>${publicObje[0].texto}</p>
                              <a href="futbol_colombiano.html" class="boton__blanco">Ver el estudio <i class="fas fa-caret-right"></i><span class="left"></span></a>
                          </div>    
                          <div class="banner__img">
                              <img src="${publicObje[0].img}" alt="Este es el ranking de las marcas más valiosas del fútbol colombiano 2021">
                              <a href="articulo.html"></a>
                          </div>
                      </figcaption>
                    </figure>`);
}
bannerGenerate();
var geTemas = $('.aside__temas li');
var geTitleTema = $('.articulos__publicaciones');
var geTitle = $('.titleArt');
geTemas.on('click', function(){
  var getTextCat = this.innerHTML;
  $('.articulos__publicaciones > div').remove();
  geTitleTema.prepend(`<div><h1>Tema: <span style="background: #2c2e3a; color: #fff; padding: .1em"> ${this.innerHTML} </span></h1></div>`);
  //Filtro
  let getArticulo = $('.articulos__post');
  getArticulo.remove();
  let claves = Object.keys(publicObje);
      for(let i = 0; i < publicObje.length; i++){
        let clave = claves[i];
        if(publicObje[i].tags[0] == getTextCat || publicObje[i].tags[1] == getTextCat || publicObje[i].tags[2] == getTextCat ){
            getAllPublic.append(`<article class="articulos__post">
                                    <figure class="snip1300 blue">
                                        <img src="${publicObje[i].img}" alt="sample6" />
                                        <i class="far fa-eye"></i>
                                        <a href="articulo.html"></a>
                                    </figure>
                                    <section class="articulo__texto">
                                        <div class="sec_1">
                                            <h2>${publicObje[i].titulo}</h2>
                                            <ul>
                                                <li>${publicObje[i].tags[0]}</li> |
                                                <li>${publicObje[i].tags[1]}</li> |
                                                <li>${publicObje[i].tags[2]}</li>
                                            </ul>
                                            <p>“${publicObje[i].texto}</p>
                                        </div>
                                        <div class="sec_2">
                                            <p>${publicObje[i].fecha}</p>
                                            <a href="articulo.html"><i class="fas fa-caret-right"></i> Leer Más</a>
                                        </div>
                                    </section>
                                  </article>`);
        }
      } 
});