const data = [
    {
        nome: "Torre Eiffel",
        cidade_pais: "Paris, França",
        link_google_maps: "https://www.google.com/maps/place/Torre+Eiffel/@48.8583701,2.2919064,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE?entry=ttu",
        imagem: "https://s1.static.brasilescola.uol.com.br/be/2023/03/torre-eiffel.jpg",
        descrição: "A Torre Eiffel é uma torre de ferro localizada no Champ de Mars, em Paris, França. Ela foi projetada pelo engenheiro Gustave Eiffel e inaugurada em 1889. Com uma altura de 324 metros, a Torre Eiffel é um dos ícones mais reconhecidos do mundo e uma das principais atrações turísticas de Paris."
    },
    {
        nome: "Machu Picchu",
        cidade_pais: "Cusco, Peru",
        link_google_maps: "https://www.google.com/maps/search/Machu+Picchu/@-13.1741334,-72.5620866,14z/data=!3m1!4b1?entry=ttu",
        imagem: "https://content.r9cdn.net/rimg/simg/2048/45618.jpg?width=1366&height=768&xhint=1020&yhint=831&crop=true",
        descrição: "Machu Picchu é uma antiga cidade inca localizada no topo de uma montanha na região de Cusco, no Peru. Construída no século XV e abandonada posteriormente, Machu Picchu é um dos sítios arqueológicos mais importantes e visitados do mundo. Famosa por sua arquitetura impressionante e localização deslumbrante, Machu Picchu é considerada uma das Sete Maravilhas do Mundo Moderno."
    },
    {
        nome: "Grand Canyon",
        cidade_pais: "Arizona, Estados Unidos",
        link_google_maps: "https://www.google.com/maps/place/Grand+Canyon/@36.0997916,-112.1493922,14z/data=!3m1!4b1!4m6!3m5!1s0x80cc0654bd27e08d:0xb1c2554442d42e8d!8m2!3d36.0997631!4d-112.1124846!16s%2Fg%2F1tg6vzsz?entry=ttu",
        imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/cd/70/9b/guano-point.jpg?w=1200&h=-1&s=1",
        descrição: "O Grand Canyon é uma garganta escavada pelo rio Colorado, localizada no estado do Arizona, nos Estados Unidos. Com mais de 1,6 km de profundidade e até 29 km de largura, o Grand Canyon é um dos desfiladeiros mais impressionantes do mundo. Além de sua beleza natural deslumbrante, o Grand Canyon oferece uma variedade de atividades ao ar livre, como caminhadas, rafting e observação da vida selvagem."
    },
    {
        nome: "Cataratas do Iguaçu",
        cidade_pais: "Foz do Iguaçu, Brasil",
        link_google_maps: "https://www.google.com/maps/place/Cataratas+do+Igua%C3%A7u/@-25.691129,-54.4462038,16z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/800px-Cataratas.jpg",
        descrição: "As Cataratas do Iguaçu são um conjunto de cerca de 275 cachoeiras no rio Iguaçu, localizadas na fronteira entre o Brasil e a Argentina. Com suas quedas majestosas e beleza natural deslumbrante, as Cataratas do Iguaçu são uma das principais atrações turísticas da América do Sul. O Parque Nacional do Iguaçu, onde as cataratas estão situadas, é considerado Patrimônio Mundial pela UNESCO."
    },
    {
        nome: "Coliseu de Roma",
        cidade_pais: "Roma, Itália",
        link_google_maps: "https://www.google.com/maps/place/Coliseu/@41.8902142,12.489656,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!16zL20vMGQ1cXg?entry=ttu",
        imagem: "https://segredosdomundo.r7.com/wp-content/uploads/2022/11/coliseu-de-roma-historia-e-curiosidades-sobre-o-monumento-e1667486669803.jpg"
        , descrição: "O Coliseu de Roma é um antigo anfiteatro romano localizado no centro de Roma. Construído no século I d.C., é o maior anfiteatro já construído e é considerado uma das maiores obras da engenharia e arquitetura romanas. O Coliseu foi usado para diversos eventos públicos, incluindo combates de gladiadores e encenações de batalhas históricas."
    },
    {
        nome: "Acrópole de Atenas",
        cidade_pais: "Atenas, Grécia",
        link_google_maps: "https://www.google.com/maps/place/Acr%C3%B3pole+de+Atenas/@37.9715365,23.7231743,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd1837f5acf3:0x5c97c042f5eb0df6!8m2!3d37.9715323!4d23.7257492!16zL20vMHdqag?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg"
        , descrição: "A Acrópole de Atenas é uma antiga cidadela localizada no topo de uma colina rochosa na cidade de Atenas. Abriga diversos templos e estruturas antigas, sendo o mais famoso deles o Partenon, um templo dedicado à deusa Atena. Construída no século V a.C., a Acrópole é um dos símbolos mais importantes da civilização grega e um Patrimônio Mundial da UNESCO."
    },
    {
        nome: "Monte Fuji",
        cidade_pais: "Honshu, Japão",
        link_google_maps: "https://www.google.com/maps/place/Monte+Fuji/@35.3606336,138.7222135,16z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
        imagem: "https://coisasdojapao.com/wp-content/uploads/2018/01/monte-fuji-7.webp"
        , descrição: "O Monte Fuji é um icônico vulcão em cone localizado na ilha de Honshu, no Japão. Com uma altura de 3.776 metros, é a montanha mais alta do Japão e uma das principais atrações turísticas do país. O Monte Fuji é um símbolo cultural e espiritual importante no Japão, frequentemente retratado em obras de arte e considerado sagrado por muitos japoneses."
    },
    {
        nome: "Cristo Redentor",
        cidade_pais: "Rio de Janeiro, Brasil",
        link_google_maps: "https://www.google.com/maps/search/Cristo+Redentor/@-22.9519326,-43.2214636,15z/data=!3m1!4b1?entry=ttu",
        imagem: "https://grupocataratas.com/wp-content/uploads/2020/08/Paineiras_Drone_C-008-1024x683.jpg"
        , descrição: "O Cristo Redentor é uma estátua monumental de Jesus Cristo localizada no topo do Morro do Corcovado, no Rio de Janeiro, Brasil. Com uma altura de 30 metros, é uma das maiores estátuas de Cristo do mundo e um símbolo icônico do Brasil. Construído no início do século XX, o Cristo Redentor oferece uma vista panorâmica deslumbrante da cidade do Rio de Janeiro."
    },
    {
        nome: "Taj Mahal",
        cidade_pais: "Agra, Índia",
        link_google_maps: "https://www.google.com/maps/place/Taj+Mahal/@27.1751495,78.0372713,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu",
        imagem: "https://services.meteored.com/img/article/estos-son-los-motivos-por-los-que-el-taj-mahal-cambia-de-color-varias-veces-al-dia-1703443645398_1280.jpeg"
        , descrição: "O Taj Mahal é um mausoléu de mármore branco construído no século XVII pelo imperador mogol Shah Jahan, em memória de sua esposa Mumtaz Mahal. Localizado na cidade de Agra, na Índia, é considerado uma das mais belas construções do mundo e um Patrimônio Mundial da UNESCO. Com sua arquitetura deslumbrante e jardins exuberantes, o Taj Mahal é uma das principais atrações turísticas da Índia."
    },
    {
        nome: "Palácio de Buckingham",
        cidade_pais: "Londres, Reino Unido",
        link_google_maps: "https://www.google.com/maps/place/Pal%C3%A1cio+de+Buckingham/@51.5013673,-0.1444649,17z/data=!3m2!4b1!5s0x487605276d38fb6b:0xe1c60228d7946675!4m6!3m5!1s0x48760520cd5b5eb5:0xa26abf514d902a7!8m2!3d51.501364!4d-0.14189!16zL20vMDE5OGc?entry=ttu",
        imagem: "https://www.infoescola.com/wp-content/uploads/2011/08/Pal%C3%A1cio-de-Buckingham_668643088.jpg"
        , descrição: "O Palácio de Buckingham é a residência oficial da monarquia britânica em Londres. Construído no século XVIII, é um dos palácios mais famosos do mundo e um símbolo da realeza britânica. Além de servir como residência da rainha Elizabeth II, o Palácio de Buckingham também é conhecido por sua cerimônia de troca da guarda, que atrai milhões de turistas todos os anos."
    },
    {
        nome: "Opera House de Sydney",
        cidade_pais: "Sydney, Austrália",
        link_google_maps: "https://www.google.com/maps/place/%C3%93pera+de+Sydney/@-33.8567799,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu",
        imagem: "https://miro.medium.com/v2/resize:fit:2000/1*Ko1At6Sszoqat4wetJXo0w.jpeg"
        , descrição: "A Opera House de Sydney é um famoso centro de artes cênicas localizado no porto de Sydney, na Austrália. Projetada pelo arquiteto dinamarquês Jørn Utzon, foi inaugurada em 1973 e é considerada uma das obras mais importantes da arquitetura moderna. Com sua arquitetura distintiva em forma de concha, a Opera House de Sydney é um ícone cultural e turístico da Austrália."
    },
    {
        nome: "Pirâmides de Gizé",
        cidade_pais: "Gizé, Egito",
        link_google_maps: "https://www.google.com/maps/place/Pir%C3%A2mides+de+Giz%C3%A9/@29.9773008,31.1299206,17z/data=!3m1!4b1!4m6!3m5!1s0x14584f7de239bbcd:0xca7474355a6e368b!8m2!3d29.9772962!4d31.1324955!16s%2Fm%2F07s6gb8?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1200px-All_Gizah_Pyramids.jpg"
        , descrição: "As Pirâmides de Gizé são um complexo de três pirâmides antigas, incluindo a Grande Pirâmide, uma das Sete Maravilhas do Mundo Antigo. Construídas durante o Antigo Império Egípcio, as pirâmides são monumentos impressionantes da arquitetura e engenharia egípcia. Elas serviam como túmulos para os faraós e são símbolos duradouros da civilização egípcia."
    },
    {
        nome: "Parthenon",
        cidade_pais: "Atenas, Grécia",
        link_google_maps: "https://www.google.com/maps/place/Partenon/@37.9715327,23.7241417,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd19ca39ee61:0x1b3fa079b878a218!8m2!3d37.9715285!4d23.7267166!16zL20vMDV4N2I?entry=ttu",
        imagem: "https://cdn.britannica.com/54/150954-050-F8D14782/Night-view-Parthenon-Athens.jpg"
        , descrição: "O Parthenon é um antigo templo grego dedicado à deusa Atena, construído no topo da Acrópole de Atenas durante o século V a.C. É considerado um dos maiores exemplos de arquitetura dórica do mundo antigo e um símbolo da democracia e da civilização grega. O Parthenon é conhecido por suas colunas imponentes e esculturas decorativas."
    },
    {
        nome: "Estatua da Liberdade",
        cidade_pais: "Nova Iorque, Estados Unidos",
        link_google_maps: "https://www.google.com/maps/place/Estatua+da+Liberdade/@40.6892534,-74.0493713,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25090129c363d:0x40c6a5770d25022b!8m2!3d40.6892494!4d-74.0445004!16zL20vMDcycDg?entry=ttu",
        imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/ny-nova-york-eua-capa14.jpg"
        , descrição: "A Estátua da Liberdade é um dos símbolos mais reconhecíveis dos Estados Unidos e um ícone da liberdade e democracia. Presenteada pela França aos Estados Unidos em 1886, a estátua retrata a deusa romana da liberdade, Libertas, segurando uma tocha e uma tabuleta com a data da Declaração da Independência dos Estados Unidos. Ela está localizada na Ilha da Liberdade, na entrada do Porto de Nova Iorque."
    },
    {
        nome: "Monte Everest",
        cidade_pais: "Himalaias, Nepal",
        link_google_maps: "https://www.google.com/maps/place/Monte+Everest/@27.9881295,86.9198252,16z/data=!3m1!4b1!4m6!3m5!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.9881206!4d86.9249751!16zL20vMGJsYmQ?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/640px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
        , descrição: "O Monte Everest é a montanha mais alta do mundo, com uma altitude de 8.848 metros acima do nível do mar. Localizado na Cordilheira do Himalaia, na fronteira entre o Nepal e o Tibete, o Everest é um destino desafiador para alpinistas e uma maravilha natural impressionante. Sua ascensão requer preparo físico e técnico, e sua conquista é um feito notável na história do montanhismo."
    },
    {
        nome: "Basílica de São Pedro",
        cidade_pais: "Vaticano",
        link_google_maps: "https://www.google.com/maps/place/Bas%C3%ADlica+de+S%C3%A3o+Pedro/@41.9021707,12.4513618,17z/data=!3m1!4b1!4m6!3m5!1s0x132f6061b7149b59:0x724bf077cd875283!8m2!3d41.9021667!4d12.4539367!16zL20vMGpueW0?entry=ttu",
        imagem: "https://s3.sa-east-1.amazonaws.com/optima-intercambio/artigos/184425202003115e695bb98f9a9.jpg"
        , descrição: "A Basílica de São Pedro é uma das maiores igrejas do mundo e o centro do catolicismo. Localizada no Vaticano, em Roma, a basílica é um exemplo magnífico da arquitetura renascentista e barroca. Construída sobre o túmulo do apóstolo São Pedro, a basílica abriga inúmeras obras de arte, incluindo a famosa Pietà de Michelangelo e a icônica cúpula projetada por Gian Lorenzo Bernini."
    },
    {
        nome: "Ilha de Páscoa",
        cidade_pais: "Ilha de Páscoa, Chile",
        link_google_maps: "https://www.google.com/maps/place/Ilha+de+P%C3%A1scoa/@-27.1258975,-109.380014,13z/data=!3m1!4b1!4m6!3m5!1s0x9947f017a8d4ae2b:0xbbe5b3edc02a2db6!8m2!3d-27.112723!4d-109.3496865!16zL20vMGRfeno?entry=ttu",
        imagem: "https://s1.static.brasilescola.uol.com.br/be/2022/10/estatuas-ilha-pascoa.jpg"
        , descrição: "A Ilha de Páscoa é uma ilha remota no Oceano Pacífico conhecida por suas impressionantes estátuas de pedra, chamadas Moai. Construídas pelo povo Rapa Nui entre os séculos XIII e XVI, as estátuas representam antepassados e chefes tribais e são um exemplo notável de escultura monumental. Além das estátuas, a Ilha de Páscoa oferece paisagens deslumbrantes e uma rica cultura polinésia."
    },
    {
        nome: "Muralha da China",
        cidade_pais: "China",
        link_google_maps: "https://www.google.com/maps/place/Muralha+da+China/@40.4319118,116.5678,17z/data=!3m1!4b1!4m6!3m5!1s0x35f121d7687f2ccf:0xd040259b950522df!8m2!3d40.4319077!4d116.5703749!16zL20vMGQyZHEw?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Great_Wall_of_China_at_Jinshanling.jpg"
        , descrição: "A Muralha da China é uma série de fortificações construídas ao longo de séculos para proteger as fronteiras norte da China contra invasões e ataques. Estendendo-se por milhares de quilômetros através do território chinês, a muralha é uma das estruturas mais impressionantes já construídas pelo ser humano. Construída em diferentes períodos da história chinesa, a muralha é agora um Patrimônio Mundial da UNESCO e uma atração turística emblemática da China."
    },
    {
        nome: "Stonehenge",
        cidade_pais: "Wiltshire, Reino Unido",
        link_google_maps: "https://www.google.com/maps/place/Stonehenge/@51.1788853,-1.8287899,17z/data=!3m1!4b1!4m6!3m5!1s0x4873e63b850af611:0x979170e2bcd3d2dd!8m2!3d51.178882!4d-1.826215!16zL20vMDZ3Zmc?entry=ttu",
        imagem: "https://s2-g1.glbimg.com/tTEa1Gf4LU8rEsTiKO1398_DR9A=/0x918:3165x2878/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Y/4/wkA3q8SemBAsO0OS6wLg/2020-07-29t180807z-891779709-rc263i9iiv61-rtrmadp-3-science-stonehenge.jpg"
        , descrição: "Stonehenge é um antigo monumento megalítico localizado na planície de Salisbury, no sul da Inglaterra. Construído durante o final do período Neolítico e início da Idade do Bronze, Stonehenge é composto por círculos de pedras de grandes dimensões dispostas em padrões específicos. O propósito exato de Stonehenge ainda é objeto de debate, mas é amplamente considerado um local sagrado e um marco importante na história da humanidade."
    },
    {
        nome: "Monte Rushmore",
        cidade_pais: "Dakota do Sul, Estados Unidos",
        link_google_maps: "https://www.google.com/maps/place/Monte+Rushmore/@43.8803395,-103.4563495,17z/data=!3m1!4b1!4m6!3m5!1s0x877d35d8b53ed6df:0xdaf53dbe055cc641!8m2!3d43.8803357!4d-103.4537746!16zL20vMDE5ZHZ2?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Dean_Franklin_-_06.04.03_Mount_Rushmore_Monument_%28by-sa%29-3_new.jpg"
        , descrição: "O Monte Rushmore é uma montanha icônica localizada no estado de Dakota do Sul, nos Estados Unidos. É famoso por abrigar o Mount Rushmore National Memorial, onde estão esculpidos os rostos de quatro presidentes dos Estados Unidos: George Washington, Thomas Jefferson, Theodore Roosevelt e Abraham Lincoln. Concluído em 1941, o monumento é uma homenagem à história e à cultura dos Estados Unidos e atrai milhões de visitantes todos os anos."
    },
    {
        nome: "Petra",
        cidade_pais: "Ma'an, Jordânia",
        link_google_maps: "https://www.google.com/maps/place/Wadi+Musa,+Jord%C3%A2nia/@30.3206439,35.4636713,15z/data=!3m1!4b1!4m6!3m5!1s0x15016930021ab6b1:0xe43a697bc3a3e0b9!8m2!3d30.3216354!4d35.4801251!16s%2Fm%2F03nx74h?entry=ttu",
        imagem: "https://prefiroviajar.com.br/wp-content/uploads/petra-jordania-roteiro.jpg"
        , descrição: "Petra é uma antiga cidade arqueológica localizada no deserto de Wadi Musa, no sul da Jordânia. Conhecida por suas impressionantes construções esculpidas em rocha, Petra foi a capital do Reino Nabateu por muitos séculos, prosperando como uma importante rota comercial entre o Oriente e o Ocidente. Seu edifício mais famoso é o Tesouro, uma fachada esculpida em rocha que serviu como tumba real. Petra é considerada uma das maravilhas arqueológicas do mundo e é um Patrimônio Mundial da UNESCO."
    },
    {
        nome: "Florença",
        cidade_pais: "Florença, Itália",
        link_google_maps: "https://www.google.com/maps/place/Floren%C3%A7a,+It%C3%A1lia/@43.7800127,11.1997686,13z/data=!3m1!4b1!4m6!3m5!1s0x132a56a680d2d6ad:0x93d57917efc72a03!8m2!3d43.7695604!4d11.2558136!16zL20vMDMxeTI?entry=ttu",
        imagem: "https://imgmd.net/images/v1/guia/1684197/florenca-179-c.jpg"
        , descrição: "Florença, capital da região italiana da Toscana, é um centro cultural e histórico de renome mundial. É amplamente considerada o berço do Renascimento, com uma riqueza incomparável de arte, arquitetura e história. A cidade é o lar de algumas das obras de arte mais importantes da humanidade, incluindo a Catedral de Santa Maria del Fiore, o Batistério de São João, a Galeria Uffizi e a estátua de David de Michelangelo. Com suas ruas de paralelepípedos, praças encantadoras e vistas deslumbrantes, Florença continua a cativar visitantes de todo o mundo."
    },
    {
        nome: "Bora Bora",
        cidade_pais: "Polinésia Francesa",
        link_google_maps: "https://www.google.com/maps/place/Bora-Bora,+Polin%C3%A9sia+Francesa/@-16.3918639,-151.9211102,12z/data=!3m1!4b1!4m6!3m5!1s0x76bdbc53dc9fa52b:0x9bef76bb168bc559!8m2!3d-16.5058512!4d-151.7422329!16s%2Fg%2F121pvydw?entry=ttu",
        imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/10/74/8b/bungalows-facing-mont.jpg?w=700&h=-1&s=1"
        , descrição: "Bora Bora é uma ilha paradisíaca na Polinésia Francesa, conhecida por suas águas cristalinas, praias de areia branca e recifes de coral coloridos. É um destino popular para lua de mel e viagens românticas, oferecendo uma variedade de atividades como mergulho, snorkeling, passeios de barco e relaxamento em luxuosos resorts sobre a água. Com seu cenário deslumbrante de montanhas cobertas de vegetação exuberante e o icônico Monte Otemanu ao fundo, Bora Bora é verdadeiramente um paraíso na terra."
    },
    {
        nome: "Monte Kilimanjaro",
        cidade_pais: "Kilimanjaro, Tanzânia",
        link_google_maps: "https://www.google.com/maps/place/Kilimanjaro/@-3.0674139,37.3504774,16z/data=!3m1!4b1!4m6!3m5!1s0x1839fc5a396ea805:0x8e741c478eea6c01!8m2!3d-3.0674247!4d37.3556273!16zL20vMDE1MTNi?entry=ttu",
        imagem: "https://blog.viin.com.br/wp-content/uploads/2022/04/stephan-bechert-xQWelDCacZE-unsplash-1024x683.jpg"
        , descrição: "O Monte Kilimanjaro é a montanha mais alta da África e uma das mais famosas do mundo. Localizado no norte da Tanzânia, o Kilimanjaro é um vulcão inativo coberto por neves perenes em seu pico. É um destino popular para alpinistas e entusiastas de caminhadas, oferecendo várias rotas de trekking até o cume, incluindo a Rota Machame, Rota Marangu e Rota Lemosho. Além da paisagem deslumbrante e da rica biodiversidade ao redor da montanha, o Kilimanjaro é um símbolo de aventura e conquista."
    },
    {
        nome: "Santorini",
        cidade_pais: "Santorini, Grécia",
        link_google_maps: "https://www.google.com/maps/place/Santorini/@36.4072159,25.3794315,13z/data=!3m1!4b1!4m6!3m5!1s0x1499ce86adfd9ff7:0xb2a761f740d68afc!8m2!3d36.3931562!4d25.4615092!16zL20vMDcwdDk?entry=ttu",
        imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/04/santorini-grecia-capa-820x430.jpg"
        , descrição: "Santorini é uma das ilhas mais famosas e pitorescas do arquipélago das Ilhas Cíclades, na Grécia. Conhecida por suas impressionantes vistas do Mar Egeu, suas casas caiadas de branco com telhados azuis e seu pôr do sol deslumbrante, Santorini é um destino de férias verdadeiramente mágico. A ilha também abriga sítios arqueológicos fascinantes, como a antiga cidade de Akrotiri, e praias deslumbrantes, como Red Beach e Perissa Beach. Com sua atmosfera romântica e charme único, Santorini cativa visitantes de todo o mundo."
    },
    {
        nome: "Palácio de Versalhes",
        cidade_pais: "Versalhes, França",
        link_google_maps: "https://www.google.com/maps/place/Pal%C3%A1cio+de+Versalhes/@48.8048684,2.1177805,17z/data=!3m2!4b1!5s0x47e67dbeb2a2d1cb:0xfaa83490b67c0c36!4m6!3m5!1s0x47e67d94d7b14c75:0x538fcc15f59ce8f!8m2!3d48.8048649!4d2.1203554!16zL20vMGRfNjE?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg/1200px-Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg"
        , descrição: "O Palácio de Versalhes é um dos mais famosos palácios reais do mundo, localizado nos arredores de Paris, na França. Construído no século XVII, o palácio foi a residência dos reis da França, incluindo Luís XIV, Luís XV e Luís XVI. Conhecido por sua arquitetura opulenta, jardins deslumbrantes e decoração suntuosa, o Palácio de Versalhes é um marco histórico e cultural."
    },
    {
        nome: "Parque Nacional de Yellowstone",
        cidade_pais: "Wyoming, Estados Unidos",
        link_google_maps: "https://www.google.com/maps/place/Parque+Nacional+de+Yellowstone/@44.5799805,-111.7618558,9z/data=!3m1!4b1!4m6!3m5!1s0x5351e55555555555:0xaca8f930348fe1bb!8m2!3d44.427963!4d-110.588455!16zL20vMDg4NzQ?entry=ttu",
        imagem: "https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-11/HERO%201_GettyImages-181789038_Web72DPI.jpg?h=88ac1a36&itok=SICqOaMU",
        descrição: "O Parque Nacional de Yellowstone é um parque nacional localizado principalmente no estado de Wyoming, nos Estados Unidos, embora partes do parque se estendam para os estados vizinhos de Montana e Idaho. Famoso por suas fontes termais, geysers, cachoeiras e vida selvagem, Yellowstone é o parque nacional mais antigo do mundo e um destino popular para atividades ao ar livre e turismo ecológico."
    },
    {
        nome: "Monte Cook",
        cidade_pais: "Aoraki/Monte Cook, Nova Zelândia",
        link_google_maps: "https://www.google.com/maps/place/Monte+Cook%2FAoraki/@-43.5949665,170.1366385,16z/data=!3m1!4b1!4m6!3m5!1s0x6d2bcbf4957533cb:0x2459ca45fd83e865!8m2!3d-43.5949749!4d170.1417883!16zL20vMDUyZjg?entry=ttu",
        imagem: "https://media-cdn.tripadvisor.com/media/photo-c/768x250/0f/c0/7c/c4/en-montant-admirez-les.jpg",
        descrição: "O Monte Cook, também conhecido como Aoraki em maori, é a montanha mais alta da Nova Zelândia, com uma altitude de 3.724 metros. Localizado no Parque Nacional de Aoraki/Monte Cook, o Monte Cook é um destino popular para alpinismo, caminhadas e observação da natureza. A paisagem ao redor do Monte Cook é espetacular, com geleiras, lagos alpinos e picos rochosos impressionantes."
    },
    {
        nome: "Monte Blanc",
        cidade_pais: "Monte Branco, França/Itália/Suíça",
        link_google_maps: "https://www.google.com/maps/place/Monte+Branco/@45.8326292,6.8600251,16z/data=!3m1!4b1!4m6!3m5!1s0x4789459fb534be51:0xa908728c5dcec4c0!8m2!3d45.8326223!4d6.8651749!16zL20vMGM2MDE?entry=ttu",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/9/93/Mont_Blanc_from_air_2019_2.jpg",
        descrição: "O Monte Blanc é a montanha mais alta dos Alpes e da Europa Ocidental, com uma altitude de 4.808 metros. Localizado na fronteira entre a França, Itália e Suíça, o Monte Blanc é um destino popular para alpinismo, esqui e turismo alpino. A região ao redor do Monte Blanc oferece vistas deslumbrantes, trilhas pitorescas e uma rica história alpina."
    }
]

export default data;