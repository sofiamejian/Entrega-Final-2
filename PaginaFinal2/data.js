    const products = [
        { 
            id: 1, 
            title: 'Super Mario Bros (1985)', 
            price: 53.00, 
            orderCode: '69272', 
            manufacturer: 'Hator', 
            color: 'Black', 
            images: [
                'https://assets-prd.ignimgs.com/2022/01/08/smb-nesart-1641603921866.jpg?width=300&crop=1%3A1%2Csmart&auto=webp',
                'https://www.nintendo.com/eu/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros.jpg',
                'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/09/super-mario-bros.jpg',
                'https://images.milenio.com/16Ep-a-YnKxV4mzfKYKASHCS8LU=/345x194/uploads/media/2020/07/13/super-mario-bros-videojuego-caro_29_42_628_391.jpg'
            ],
            reviews: 15,
        },
        { 
            id: 2, 
            title: 'Super Metroid', 
            price: 60.00, 
            orderCode: '69272', 
            manufacturer: 'Hator', 
            color: 'Black', 
            images: [
                'super juego.png',
                'https://www.bostonherald.com/wp-content/uploads/migration/2013/05/29/052913supermetroid2.jpg?w=620',
                'https://img.asmedia.epimg.net/resizer/v2/KWIDQG72KREBLFOR46TN2457NI.png?auth=f770667049f804ac9c356e85b872297155f20872ab680e0097f1afb80949a556&width=360',
                'https://static.wikia.nocookie.net/metroid/images/f/f7/Hiperrayo_captura_sm.png/revision/latest/thumbnail/width/360/height/360?cb=20180225223947&path-prefix=es'
            ],
            reviews: 25,
        },
        {id: 3, 
        title: 'The Legend Of Zelda (1986)', 
        price: 42.00, 
        orderCode: '69272', 
        manufacturer: 'Hator', 
        color: 'Black', 
        images: [
            'https://www.nintendo.com/eu/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_TheLegendOfZelda_image1600w.jpg',
            'https://sm.ign.com/ign_pt/screenshot/default/the-legend-of-zelda-1986-nes-gameplay_yq6x.jpg',
            'https://www.denofgeek.com/wp-content/uploads/2020/04/zelda-anniversary01.jpg',
            'https://retrogamerjunction.weebly.com/uploads/8/0/7/6/80765120/published/teleporting-by-flute.png?1616259530'
        ],
        reviews: 25,
        },
        {id: 4, 
            title: 'Prince Of Persia', 
            price: 53.00, 
            orderCode: '69272', 
            manufacturer: 'Hator', 
            color: 'Black', 
            images: [
                'Prince of persia.jpg',
                'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/11/prince-persia-1989.jpg?tf=3840x',
                'https://www.yupijuegos.com/wp-content/uploads/2021/05/principe-persia.jpg',
                'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/11/prince-persia-1.jpg?tf=3840x'
            ],
            reviews: 25,},
            {id: 5, 
                title: 'Metal Slug', 
                price: 53.00, 
                orderCode: '69272', 
                manufacturer: 'Hator', 
                color: 'Black', 
                images: [
                    'metal juego.png',
                    'https://e.rpp-noticias.io/xlarge/2019/04/18/234323_779750.jpg',
                    'https://www3.minijuegosgratis.com/v3/games/thumbnails/4897_1.jpg',
                    'https://img.unocero.com/2020/06/metal-slug-juegos-nuevos-1-1.jpg'
                ],
                reviews: 25,},
                {id: 6, 
                    title: 'Resident Evil 4', 
                    price: 68.00, 
                    orderCode: '69272', 
                    manufacturer: 'Hator', 
                    color: 'Black', 
                    images: [
                        'https://media.vandal.net/m/67022/resident-evil-4-20193420315720_1.jpg',
                        'https://www.residentevil.com/re4/assets/images/mercenaries01-01_img.jpg',
                        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_b9fbb8b2d7e1204a074033e9bb9a19fa54f765fb.1920x1080.jpg?t=1707455805',
                        'https://i.ytimg.com/vi/aXvIeX3obJA/maxresdefault.jpg'
                    ],
                    reviews: 25,},
                    {id: 7, 
                        title: 'Megaman X', 
                        price: 56.00, 
                        orderCode: '69272', 
                        manufacturer: 'Hator', 
                        color: 'Black', 
                        images: [
                            'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mega_Man_X_%28videogame%29_logo.webp',
                            'https://www1.minijuegosgratis.com/v3/games/thumbnails/12627_1.jpg',
                            'https://gamersociety.files.wordpress.com/2012/09/lolwtf-megaman-x.jpg',
                            'https://im.ziffdavisinternational.com/ign_es/screenshot/default/34559-megaman-x-usa-41_eahb.jpg'
                        ],
                        reviews: 25,},
                        {id: 8, 
                            title: 'Contra', 
                            price: 63.00, 
                            orderCode: '69272', 
                            manufacturer: 'Hator', 
                            color: 'Black', 
                            images: [
                                'Contra.png',
                                'https://www.konami.com/games/50th/ac/s/img/en/contra/spirits_sample03.jpg',
                                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000018451/1b2ea71a89b0123ade7eaf0c03dfd1923d94462122faca71874554a3e81c0866',
                                'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000018451/43c93bf754045ac93ad7e4c7932926060f2daf00eca2fadd4fbfb48a46996b98'
                            ],
                            reviews: 25,},
                            {id: 9, 
                                title: 'Super Mario RPG: Legend of the Seven Stars', 
                                price: 40.00, 
                                orderCode: '69272', 
                                manufacturer: 'Hator', 
                                color: 'Black', 
                                images: [
                                    'https://m.media-amazon.com/images/M/MV5BMGYzYzdlOGMtZWFiMC00YTFhLTk2NmItYTA2ZjZjMDdkMTBjXkEyXkFqcGc@._V1_.jpg',
                                    'https://m.media-amazon.com/images/M/MV5BNzMwNTliMWItODkwYi00YzAzLWJjNjAtM2FhODcwZjBlZGFiXkEyXkFqcGdeQXVyNDI5Njk2Mzc@._V1_.jpg',
                                    'https://i0.wp.com/davegladow.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-29-at-12.34.36-PM.png?resize=825%2C510&ssl=1',
                                    'https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/30bd26ca7e1940a4ca0a1ab4437deeaa.jpg'
                                ],
                                reviews: 25,},
                                {id: 10, 
                                    title: 'Secret of Mana', 
                                    price: 55.00, 
                                    orderCode: '69272', 
                                    manufacturer: 'Hator', 
                                    color: 'Black', 
                                    images: [
                                        'https://static.wikia.nocookie.net/nintendo/images/2/22/Secret_of_Mana_%28NA%29.png/revision/latest?cb=20190807234713&path-prefix=es',
                                        'https://static.wikia.nocookie.net/nintendo/images/d/d8/Mana-1.gif/revision/latest?cb=20190807235834&path-prefix=es',
                                        'https://preview.redd.it/not-hd-secret-of-mana-remains-one-of-the-prettiest-games-of-v0-nccwms868h6c1.jpg?width=640&crop=smart&auto=webp&s=5a9abc6f6632b34a4eded1209c706b2187cc89fb',
                                        'https://preview.redd.it/quite-a-promising-addition-to-secret-of-mana-has-been-v0-mmewqo3frhpc1.png?auto=webp&s=d05f2a79121f89c444ce58bfa4b083b8a67aeb0e'
                                    ],
                                    reviews: 25,},
                                    {id: 11, 
                                        title: 'Final Fantasy VII', 
                                        price: 67.00, 
                                        orderCode: '69272', 
                                        manufacturer: 'Hator', 
                                        color: 'Black', 
                                        images: [
                                            'https://image.api.playstation.com/vulcan/img/cfn/11307-dNapclgq_VqNtQ98Xp_LxovvAdjd5AknZhd_-k2Cckq9FPtKDXAHk-ODCfvDKChH6hkEO0VLtj7Vk4E-Z8G707oe0N.png',
                                            'https://i.blogs.es/50a7d2/ffvii/450_1000.jpg',
                                            'https://www.egames.news/__export/1684615275553/sites/debate/img/2023/05/20/ff7.jpg_242310155.jpg',
                                            'https://i.blogs.es/dc5a74/final-20fantasy-20vii-20retroanalisis-2006/450_1000.webp'
                                        ],
                                        reviews: 25,},
                                        {id: 12, 
                                            title: 'Chrono Trigger', 
                                            price: 60.00, 
                                            orderCode: '69272', 
                                            manufacturer: 'Hator', 
                                            color: 'Black', 
                                            images: [
                                                'Chrono Trigger.png',
                                                'https://static.wikia.nocookie.net/chrono-trigger/images/d/dd/Mapa_de_la_Prehistoria.gif/revision/latest?cb=20151102120655&path-prefix=es',
                                                'https://static.wikia.nocookie.net/chrono-trigger/images/2/2a/Coto_de_caza.png/revision/latest/smart/width/250/height/250?cb=20220707150926&path-prefix=es',
                                                'https://static.wikia.nocookie.net/chrono-trigger/images/3/39/Cr%C3%A1ter_del_Tyranno.png/revision/latest/smart/width/250/height/250?cb=20220715192955&path-prefix=es'
                                            ],
                                            reviews: 25,},
                                            {id: 13, 
                                                title: 'Pacman', 
                                                price: 55.00, 
                                                orderCode: '69272', 
                                                manufacturer: 'Hator', 
                                                color: 'Black', 
                                                images: [
                                                    'https://e.rpp-noticias.io/xlarge/2022/05/19/320032_1261424.jpg',
                                                    'https://cdn.pomu.com/files/game/img_mobile/83/Pacman_.webp',
                                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKdpNKPZ6XQf5-WV-eyaI7DbLjcbv8XvZgx0nrkkt--cYp8oqZ-gWoUdFawnQloQ8FwU&usqp=CAU',
                                                    'https://www4.minijuegosgratis.com/v3/games/thumbnails/207858_1.jpg'
                                                ],
                                                reviews: 25,},
                                                {id: 14, 
                                                    title: 'Tetris', 
                                                    price: 48.00, 
                                                    orderCode: '69272', 
                                                    manufacturer: 'Hator', 
                                                    color: 'Black', 
                                                    images: [
                                                        'https://assetsio.gnwcdn.com/co2ufk.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
                                                        'https://modretro.com/cdn/shop/files/Tetris_01.png?v=1718221797&width=1445',
                                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhLaTxaVkqhOdjdSUJckhTCJqRknwimOg_Q&s',
                                                        'https://cdn2.excelsior.com.mx/media/inside-the-note/pictures/2023/06/06/tetris-version-original.jpeg'
                                                    ],
                                                    reviews: 25,},
                                                    {id: 15, 
                                                        title: 'Space Invaders', 
                                                        price: 57.00, 
                                                        orderCode: '69272', 
                                                        manufacturer: 'Hator', 
                                                        color: 'Black', 
                                                        images: [
                                                            'Space Invaders.webp',
                                                            'https://media.es.wired.com/photos/643859cbf381a957088482dc/master/w_1600%2Cc_limit/space-invaders-atari-2600.png',
                                                            'https://imagenes.heraldo.es/files/image_1920_1080/uploads/imagenes/2018/10/29/_spaceinvadersretroplain_e28fc5ae.jpg',
                                                            'https://cdn.mobygames.com/screenshots/16382538-space-invaders-arcade-start-up-position.png'
                                                        ],
                                                        reviews: 25,},
                                                        {id: 16, 
                                            title: 'Snow Bros', 
                                            price: 48.00, 
                                            orderCode: '69272', 
                                            manufacturer: 'Hator', 
                                            color: 'Black', 
                                            images: [
                                                'https://www.infobae.com/new-resizer/ZLcHacMaOvFJIO4vM3OW6GeYEuk=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/OUNMHLSEAJD5FJGKEPENVBP6KI.jpg',
                                                'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000050354/06116955d355e006c96be5aea477c3afa36c0dad54832f3d17d28aeda9305253',
                                                'https://img-eshop.cdn.nintendo.net/i/a59967f1ededab6d7095ca2952d706655f8a9049daf58ae9dfacd5027b0c317d.jpg?w=1000',
                                                'https://play-lh.googleusercontent.com/JOthQa2ZFqj3Ocm2yMsfrJJAD4lDOOGPqcK4jQHPFsiwtIYt9kJ-YPK6sRWhta98Lg=w526-h296-rw'
                                            ],
                                            reviews: 25,},
            
        
    ];

    function getProductIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('id'));
    }

    function renderProductDetail() {
        const productId = getProductIdFromURL();
        const product = products.find(p => p.id === productId);

        if (!product) {
            document.querySelector(".content-wrapper").innerHTML = "<p>Producto no encontrado</p>";
            return;
        }

        document.getElementById('title').textContent = product.title;
        document.getElementById('price').textContent = `Price: $${product.price.toFixed(2)}`;
        document.getElementById('order-code').textContent = `Order Code: ${product.orderCode}`;
        document.getElementById('manufacturer').textContent = `Manufacturer: ${product.manufacturer}`;
        document.getElementById('color').textContent = `Color: ${product.color}`;
        document.getElementById('reviews-count').textContent = `${product.reviews} reviews`;

        document.getElementById('main-image').src = product.images[0];

        const imagesSection = document.getElementById('images-section');
        imagesSection.innerHTML = '';
        product.images.forEach((imageSrc, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = `Screenshot ${index + 1}`;
            imagesSection.appendChild(imgElement);
        });
    }

    window.onload = renderProductDetail;
