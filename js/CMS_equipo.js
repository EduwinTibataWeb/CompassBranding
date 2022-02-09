var getAllEquipo = $('#Cotequipo');
var equipoObje = [
    {
      foto: 'https://compassbranding.com/wp-content/uploads/2020/04/Gonzalo-Piñeros-Final-678x1024.jpg',
      nombre: "Gonzalo Piñeros",
      cargo: 'Vicepresidente',
      descripcion: 'El amor es una experiencia universal que nos conmueve a todos, pero a veces no hallamos las palabras adecuadas para expresarlo. ',
      fotoFondo: 'https://en.investinbogota.org/sites/default/files/node/news/field_news_imagen/Dario_FuentesFOTO%20BOGOTA%201%20Centro%20Bogota%CC%81-%20DARIO%20%28REDES%29.jpg',
      enlaceLi: 'https://www.linkedin.com/in/gonzalo-pi%C3%B1eros/',
      enlaceWa: '3232812574',
    },
    {
      foto: 'https://compassbranding.com/wp-content/uploads/2020/04/Fernando-Final-678x1024.jpg',
      nombre: "Fernando Garzón",
      cargo: 'Director de cuentas',
      descripcion: 'Bla bal bla',
      fotoFondo: 'https://en.investinbogota.org/sites/default/files/node/news/field_news_imagen/Dario_FuentesFOTO%20BOGOTA%201%20Centro%20Bogota%CC%81-%20DARIO%20%28REDES%29.jpg',
      enlaceLi: 'https://www.linkedin.com/in/fergarzon/',
      enlaceWa: '3232812574',
    },
    {
      foto: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/194409771_4244607968912042_1462343248467021874_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FaL7spd2Gb4AX-OfkfL&tn=s-L-xCp19x1RKnPF&_nc_ht=scontent-bog1-1.xx&oh=00_AT9NbpAknY9juefNx5I8kEqWzz9HIGvjIF-UvusUGiQiRg&oe=61FBBB04',
      nombre: "Eduwin Tibatá",
      cargo: 'Productor Multimedia',
      descripcion: 'Bla bal bla',
      fotoFondo: 'https://en.investinbogota.org/sites/default/files/node/news/field_news_imagen/Dario_FuentesFOTO%20BOGOTA%201%20Centro%20Bogota%CC%81-%20DARIO%20%28REDES%29.jpg',
      enlaceLi: 'https://www.linkedin.com/in/eduwintibata/',
      enlaceWa: '3232812574',
    },
    {
      foto: 'https://compassbranding.com/wp-content/uploads/2020/04/Gonzalo-Piñeros-Final-678x1024.jpg',
      nombre: "Gonzalo Piñeros",
      cargo: 'Vicepresidente',
      descripcion: 'El amor es una experiencia universal que nos conmueve a todos, pero a veces no hallamos las palabras adecuadas para expresarlo. El amor es una experiencia universal que nos conmueve a todos, pero a veces no hallamos las palabras adecuadas para expresarlo.  ',
      fotoFondo: 'https://en.investinbogota.org/sites/default/files/node/news/field_news_imagen/Dario_FuentesFOTO%20BOGOTA%201%20Centro%20Bogota%CC%81-%20DARIO%20%28REDES%29.jpg',
      enlaceLi: 'https://www.linkedin.com/in/gonzalo-pi%C3%B1eros/',
      enlaceWa: '3232812574',
    },
    {
      foto: 'https://compassbranding.com/wp-content/uploads/2020/04/Fernando-Final-678x1024.jpg',
      nombre: "Fernando Garzón",
      cargo: 'Director de cuentas',
      descripcion: 'Bla bal bla',
      fotoFondo: 'https://en.investinbogota.org/sites/default/files/node/news/field_news_imagen/Dario_FuentesFOTO%20BOGOTA%201%20Centro%20Bogota%CC%81-%20DARIO%20%28REDES%29.jpg',
      enlaceLi: 'https://www.linkedin.com/in/fergarzon/',
      enlaceWa: '3232812574',
    },
    {
      foto: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/194409771_4244607968912042_1462343248467021874_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FaL7spd2Gb4AX-OfkfL&tn=s-L-xCp19x1RKnPF&_nc_ht=scontent-bog1-1.xx&oh=00_AT9NbpAknY9juefNx5I8kEqWzz9HIGvjIF-UvusUGiQiRg&oe=61FBBB04',
      nombre: "Eduwin Tibatá",
      cargo: 'Productor Multimedia',
      descripcion: 'Bla bal bla',
      fotoFondo: 'https://en.investinbogota.org/sites/default/files/node/news/field_news_imagen/Dario_FuentesFOTO%20BOGOTA%201%20Centro%20Bogota%CC%81-%20DARIO%20%28REDES%29.jpg',
      enlaceLi: 'https://www.linkedin.com/in/eduwintibata/',
      enlaceWa: '3232812574',
    },
    {
        foto: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/194409771_4244607968912042_1462343248467021874_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FaL7spd2Gb4AX-OfkfL&tn=s-L-xCp19x1RKnPF&_nc_ht=scontent-bog1-1.xx&oh=00_AT9NbpAknY9juefNx5I8kEqWzz9HIGvjIF-UvusUGiQiRg&oe=61FBBB04',
        nombre: "Eduwin Tibatá",
        cargo: 'Productor Multimedia',
        descripcion: 'Bla bal bla',
        fotoFondo: 'https://en.investinbogota.org/sites/default/files/node/news/field_news_imagen/Dario_FuentesFOTO%20BOGOTA%201%20Centro%20Bogota%CC%81-%20DARIO%20%28REDES%29.jpg',
        enlaceLi: 'https://www.linkedin.com/in/eduwintibata/',
        enlaceWa: '3232812574',
    },
]




for (i of equipoObje) {
  getAllEquipo.append(`<figure class="snip1336">
                            <img src="${i.foto}" alt="sample87" />
                            <figcaption>
                                <img src="${i.foto}" alt="profile" class="profile" />
                                <h2>${i.nombre}<span>${i.cargo}</span></h2>
                                <p>${i.descripcion}</p>
                                <a href="${i.enlaceLi}" target="_blank" title="linkedin" class="follow"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://api.whatsapp.com/send?phone=57${i.enlaceWa}" title="Whatsapp" target="_blank" class="info"><i class="fab fa-whatsapp"></i></a>
                              </figcaption>
                            </figure>`)
}