var getAllPublic = $('#Cotpublicaciones');
var publicObje = [
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2021/11/Portada_estudio.jpg',
        titulo: 'Este es el ranking de las marcas más valiosas colombiano 2021',
        tags: ['2021', 'Estudio', 'Marcas más valiosas'],
        texto: '“El principal vínculo emocional de cada hincha con su equipo es la marca” El fútbol es el deporte más popular…',
        fecha: 'noviembre 26, 2021',
        img_referencia: 'https://espirituracer.com/archivos/2020/01/ferrari-logo-3.jpg'
    },
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2021/08/Portada_Futbol-1.jpg',
        titulo: 'Este es el ranking de las marcas más valiosas del fútbol colombiano 2021',
        tags: [ '2021', 'Futbol', 'Estudio', 'Marcas más valiosas'],
        texto: '“El principal vínculo emocional de cada hincha con su equipo es la marca” El fútbol es el deporte más popular…',
        fecha: 'agosto 5, 2021',
        img_referencia: 'https://www.atlnacional.com.co/wp-content/uploads/2021/09/DSC05569.jpg'
    },
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2020/12/Ranking-scalia-blog-default.jpg',
        titulo: 'Ranking de las marcas colombianas más valiosas de 2020',
        tags: ['2020', 'Estudio', 'Marcas más valiosas'],
        texto: '“El principal vínculo emocional de cada hincha con su equipo es la marca” El fútbol es el deporte más popular…',
        fecha: 'diciembre 1, 2020',
        img_referencia: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2020/12/Ranking-scalia-blog-default.jpg'
    },
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2020/11/Valor-Fortaleza-y-Papel-de-las-Marca-Grafica-scalia-blog-default.png',
        titulo: 'Valor, peso y fortaleza de las marcas tras la pandemia del covid19',
        tags: ['2020', 'Estudio', 'Marcas'],
        texto: '“Este año, atípico y convulsionado, el estudio de Compassbranding clasificó cuales son los productos líderes del mercado colombiano. Los consolidados,…',
        fecha: 'noviembre 30, 2020',
        img_referencia: 'https://www.atlnacional.com.co/wp-content/uploads/2021/09/DSC05569.jpg'
    },
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2019/11/action-2277292_1280-scalia-blog-default.jpg',
        titulo: 'D1, Rappi y Tostao ya superan a marcas más tradicionales',
        tags: ['2019', 'Estudio', 'Marcas'],
        texto: '“El principal vínculo emocional de cada hincha con su equipo es la marca” El fútbol es el deporte más popular…',
        fecha: 'agosto 5, 2021',
        img_referencia: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2019/11/action-2277292_1280-scalia-blog-default.jpg'
    },
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2021/08/Portada_Futbol-1.jpg',
        titulo: 'PRUEBA 1',
        tags: ['Futbol', 'Estudio', 'Marcas más valiosas'],
        texto: '“El principal vínculo emocional de cada hincha con su equipo es la marca” El fútbol es el deporte más popular…',
        fecha: 'agosto 5, 2021',
        img_referencia: 'https://www.atlnacional.com.co/wp-content/uploads/2021/09/DSC05569.jpg'
    },
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2021/08/Portada_Futbol-1.jpg',
        titulo: 'PRUEBA 2',
        tags: ['Futbol', 'Estudio', 'Marcas más valiosas'],
        texto: '“El principal vínculo emocional de cada hincha con su equipo es la marca” El fútbol es el deporte más popular…',
        fecha: 'agosto 5, 2021',
        img_referencia: 'https://www.atlnacional.com.co/wp-content/uploads/2021/09/DSC05569.jpg'
    },
    {
        img: 'https://secureservercdn.net/104.238.68.196/x7p.5b7.myftpupload.com/wp-content/uploads/2021/08/Portada_Futbol-1.jpg',
        titulo: 'PRUEBA 3',
        tags: ['Futbol', 'Estudio', 'Marcas más valiosas'],
        texto: '“El principal vínculo emocional de cada hincha con su equipo es la marca” El fútbol es el deporte más popular…',
        fecha: 'agosto 5, 2021',
        img_referencia: 'https://www.atlnacional.com.co/wp-content/uploads/2021/09/DSC05569.jpg'
    },
];
function getPublicList(grande, incremento){
    let getArticulo = $('.articulos__post');
    getArticulo.remove();
    let claves = Object.keys(publicObje);
      for(let i = incremento; i < grande; i++){
        let clave = claves[i];
        if(incremento <= grande){
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

}
var ListInit = 0;
var ListFinish = 5;
getPublicList (ListFinish, ListInit);
var getPag = $('.cont_pag li');
getPag.on('click', function(){
        var numPag = $(this).index();
        getPag.css('background-color', 'inherit').css('color', '#000');
        $(this).css('background-color', '#418f9a').css('color', '#fff');
        switch (numPag) {
            case 0:
                ListInit = 0;
                ListFinish = 5;
                break;
            case 1:
                ListInit = 5;
                ListFinish = 8;
                break;
            default:
                ListInit = 0;
                ListFinish = 5;
                break;
        }
    getPublicList (ListFinish, ListInit);
});
getPag.click(function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 500);
    return false;
});

