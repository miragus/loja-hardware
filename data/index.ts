import { Category } from "../types/category";
import { Product } from "../types/product";


type Data = {
    categories: Category[],
    products: Product[]
};
export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Periféricos de entrada',
            cover: 'https://encurtador.com.br/JTibS'
        },
        {
            id: 2,
            title: 'Componentes internos',
            cover: 'https://encurtador.com.br/Q7fPM'
        },
        {
            id: 3,
            title: 'Gabinetes',
            cover: 'https://encurtador.com.br/2ubxM'
        },
        {
            id: 4,
            title: 'Monitores',
            cover: 'https://cdn.windowsreport.com/wp-content/uploads/2022/02/dual-monitor-2.jpg'
        },
        {
            id: 5,
            title: 'Notebooks',
            cover: 'https://s2-techtudo.glbimg.com/q5wCnXq8GvbxjzOS3_77-oS7W0A=/0x0:1920x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/3/u/dyiYqQTpWAfYbiCC22ag/notebook-gamer-dell-g15-abertura.jpg'
        }

    ],
    products: [
        { id: 4, idCategory: 1, image: "https://encurtador.com.br/NLrqr", title: "Teclado Gamer", description: "Teclado mecânico com luzinha kk.", price: 119.99 },
        { id: 23, idCategory: 1, image: "https://encurtador.com.br/UzKFG", title: "Mouse Gamer", description: "Esse mouse é cabuloso.", price: 39.99 },
        { id: 15, idCategory: 3, image: "https://encurtador.com.br/1JqST", title: "Gabinete Gamer", description: "Gabinete branco lateral e frontal de vidro.", price: 249.99 },
        { id: 9, idCategory: 1, image: "https://encurtador.com.br/N8O4X", title: "Microfone Mancer", description: "Ótimo para criadores de conteúdo com altíssima qualidade sonora.", price: 79.99 },
        { id: 12, idCategory: 1, image: "https://encurtador.com.br/tSsWB", title: "Headset Mancer", description: "O headset Mancer Ameth traz a união de conforto e estilo.", price: 59.99 },
        { id: 6, idCategory: 2, image: "https://abrir.link/msFLu", title: "Memoria Team Group Xtreem ARGB", description: "Oferece um desempenho excepcional para entusiastas e profissionais.", price: 799.99 },
        { id: 21, idCategory: 1, image: "http://li.cnm.org.br/r/SSVSZ7", title: "Headset Gamer Redragon Zeus X", description: "Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho - H510-RGB", price: 99.99 },
        { id: 25, idCategory: 4, image: "https://encurtador.com.br/7Dxqm", title: "Monitor Gamer Curvo Concórdia", description: "27\", 100Hz, Led FULL HD, HDMI, VGA - Cz270f.", price: 19.99 },
        { id: 5, idCategory: 4, image: "https://encurtador.com.br/J9IOJ", title: "Monitor Gamer AOC", description: "Mergulhe num mundo de imersão tota de qualidade inigualável.", price: 249.99 },
        { id: 8, idCategory: 2, image: "http://li.cnm.org.br/r/Ojy3mM", title: "Memória RAM Gamer Husky Gaming Avalanche", description: "8GB, 3200MHz, DDR4, CL19, Preto - HGMF007.", price: 399.99 },
        { id: 24, idCategory: 2, image: "http://li.cnm.org.br/r/8dI8z4", title: "Placa de Vídeo Quadro T400 PNY NVIDIA", description: "4GB, GDDR6, PCIe 3.0 - VCNT4004GB-PB", price: 599.99 },
        { id: 28, idCategory: 2, image: "https://encurtador.com.br/Ogx69", title: "Placa Mae Pichau Danuri", description: "Tem todas as características para oferecer um bom desempenho.", price: 249.99 },
        { id: 3, idCategory: 1, image: "https://wallpapers.com/images/featured/cristiano-ronaldo-manchester-united-mdjrdsxu8xzt11pa.jpg", title: "CRISTIANO RONALDO", description: "SIUUUUU.", price: 9999999999.99 },
        { id: 18, idCategory: 1, image: "http://li.cnm.org.br/r/vwtygN", title: "Mouse Logitech", description: "RGB LIGHTSYNC, 6 Botões Programáveis, Ajuste de Peso e Sensor HERO 25K", price: 64.99 },
        { id: 30, idCategory: 2, image: "https://abre.ai/k8eJ", title: "HD Seagate ", description: "4TB BarraCuda, 3.5', SATA - ST4000DM004.", price: 349.99 },
        { id: 11, idCategory: 3, image: "http://li.cnm.org.br/r/Yf8IJi", title: "Gabinete Gamer Rise Mode Glass ", description: " Mid Tower, Lateral em Vidro Fumê e Frontal em Vidro Temperado, Preto", price: 299.99 },
        { id: 19, idCategory: 2, image: "https://abre.ai/k7Cc", title: "Placa de Video ASRock Intel ARC", description: "A potência da Intel em cada pixel.", price: 999.99 },
        { id: 16, idCategory: 2, image: "https://abre.ai/k8eE", title: "SSD WD Black", description: "Gaming Storage 1TB, M.2 2280 PCIe GEN4X4, NVMe, Leitura: 7300 MB/s e Gravação: 6300 MB/s.", price: 749.99 },
        { id: 14, idCategory: 5, image: "https://abre.ai/k7BV", title: "Notebook Gamer Asus ", description: "Este poderoso notebook gamer fornece tudo e muito mais.", price: 2999.99 },
        { id: 29, idCategory: 2, image: "https://abre.ai/k8eD", title: "Processador AMD Ryzen", description: "7 5700X3D, 3.6 GHz, (4.1GHz Max Turbo), Cachê 4MB, 8 Núcleos, 16 Threads.", price: 549.99 },
        { id: 1, idCategory: 1, image: "https://encurtador.com.br/rn623", title: "Headset Gamer HyperX", description: "Headset com alta qualidade de som e com fundamentos refinados.", price: 199.99 },
        { id: 2, idCategory: 4, image: "https://encurtador.com.br/7Nz9I", title: "Monitor Gamer KBM", description: "MG100 24\", 100hz, Full HD, HDMI E VGA, Ajuste De Ângulo - KGMG10024PT", price: 1299.99 },
        { id: 7, idCategory: 2, image: "https://abre.ai/k8eL", title: "HD Portártil Seagate", description: "1T, USB 3.0 - STGX1000400", price: 299.99 },
        { id: 17, idCategory: 2, image: "https://abre.ai/k8eX", title: "Fonte Gamer Rise Mode Zeus ", description: "550w, Bronze, Full Modular, PFC Ativo, Preto - RM-PSU-01-BZ-550.", price: 199.99 },
        { id: 13, idCategory: 5, image: "https://abre.ai/k7B5", title: "Notebook Gamer Gigabyte Aorus", description: "Notebook poderoso com alto desempenho.", price: 4999.99 },
        { id: 22, idCategory: 2, image: "http://li.cnm.org.br/r/1Vg703", title: "Placa de vídeo RTX 4060 ASUS Dual 8G EVO OC NVIDIA GeForce", description: "8GB GDDR6, G-SYNC, Ray Tracing - 90YV0JC7-M0NA00.", price: 1449.99 },
        { id: 10, idCategory: 1, image: "http://li.cnm.org.br/r/vC9P8y", title: "Teclado Gamer Razer Blackwidow V4", description: "Chroma RGB, Switch Yellow, Layout US - RZ0304691900R3U.", price: 599.99 },
        { id: 26, idCategory: 2, image: "https://abre.ai/k8eH", title: "Processador AMD Ryzen 7 7800x3d", description: "4.2GHz, 5.0GHz Max Turbo, Cache 104MB, Am5, C/ Vídeo E Sem Cooler.", price: 899.99 },
        { id: 27, idCategory: 2, image: "http://li.cnm.org.br/r/TTZC6o", title: "SSD PCIe Kingston NV3", description: "2 TB, M.2 2280, NVMe, Leitura: 6000 MB/s e Gravação: 5000 MB/s - SNV3S/2000G.", price: 599.99 },
        { id: 20, idCategory: 2, image: "https://abre.ai/k7Av", title: "SSD Portátil", description: "é uma ótima escolha para os que precisam de armazenamento rápido.", price: 199.99 },
        { id: 60, idCategory: 1, image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnj7yyyoakrt1e", title: "Mouse Gamer USB", description: "Led RGB com fio JX", price: 29.99 },
        { id: 41, idCategory: 3 , image: "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-superframe-boreas-mid-tower-vidro-temperado-atx-sem-fans-preto-sfgb-boreas-0_208236.jpg", title: "Gabinete Gamer SuperFrame Boreas", description: "Mid Tower, Vidro Temperado, ATX, Sem Fans, Preto, SFGB-BOREAS-0", price: 199.99 },
        { id: 43, idCategory: 4, image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hzn21-bl116120v3216.jpg", title: "Monitor Gamer Mancer Horizon", description: "21.45 Pol, VA, FHD, 1ms, 75Hz, VGA/HDMI, MCR-HZN21-BL1", price: 299.99 },
        { id: 51, idCategory: 5, image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/pdp/laptop-inspiron-15-3520-pdp-mod05-bk.psd?wid=1900&hei=1064&fmt=png-alpha&qlt=100%2c0&op_usm=1.75%2c0.3%2c2%2c0&resMode=sharp2&pscan=auto&fit=constrain%2c1&align=0%2c0", title: "Notebook Inspiron 15", description: "Notebook perfeito para todas as ocasiões.", price: 1999.99 },
        { id: 55, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F204669%2Fgabinete-gamer-rise-mode-z03-rgb-lateral-em-vidro-fume-preto-rm-z03-03-fb_1635006527_g.jpg&w=640&q=100", title: "Gabinete Gamer Rise Mode Z3 Glass", description: "Lateral em Vidro Fumê, Preto - RM-Z03-03-FB", price: 119.99 },
        { id: 33, idCategory: 4, image: "https://a-static.mlcdn.com.br/1500x1500/monitor-gamer-100hz-1ms-acer-ek1-series-ek251q-ebi-245-full-hd-ips-hdmi-freesync-um-ke1aa-e02/magazineluiza/238394700/5fbc79256bc7b0f4cc62f3edacdceccf.jpg", title: "Monitor Gamer 100Hz 1ms Acer EK1 Series EK251Q Ebi 24,5\" Full HD IPS HDMI FreeSync UM.KE1AA.E02", description: "", price:  249.99},
        { id: 56, idCategory: 5, image: "https://m.media-amazon.com/images/I/51lGW2nP9qL._AC_SL1080_.jpg", title: "Notebook Samsung Galaxy Book4", description: "i3 8GB 256 W11H NP750XGJ-KG5BR", price: 1999.99 },
        { id: 37, idCategory: 3, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages4.kabum.com.br%2Fprodutos%2Ffotos%2F497844%2Fgabinete-gamer-segotep-flexi-5-mid-tower-atx-lateral-em-vidro-branco-seg-case-flx5w-ww_1716987151_g.jpg&w=640&q=100", title: "Gabinete Gamer Segotep Flexi 5", description: "Mid Tower, ATX, Lateral em Vidro, branco - SEG-CASE-FLX5W-WW", price: 199.99 },
        { id: 45, idCategory: 5, image: "https://m.media-amazon.com/images/I/51250UmEzsL._AC_SL1000_.jpg", title: "Apple 2024 MacBook Air", description: "13 polegadas, Chip M3 da Apple com CPU de oito núcleos e GPU de oito núcleos, 8GB Memória unificada, de 256 GB", price: 9999.99 },
        { id: 54, idCategory: 4, image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hzn24-bl13161v331.jpg", title: "Monitor Gamer Mancer Horizon Z24", description: "24 Pol, VA, FHD, 1ms, 75Hz, VGA/HDMI, MCR-HZN24-BL1", price: 329.99 },
        { id: 40, idCategory: 3, image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-g250pr-011341.jpg", title: "Gabinete TGT G250", description: "Lateral Acrilico, Preto, TGT-G250PR-01", price: 249.99 },
        { id: 42, idCategory: 5, image: "https://p1-ofp.static.pub//medias/23809986225_IdeaPad115ADA7Cloud_Grey_202108120307091702910159521.png", title: "IdeaPad 1 15\" AMD", description: "Um companheiro versátil, onde quer que você precise de um", price:  1499.99},
        { id: 47, idCategory: 5, image: "https://carrefourbr.vtexassets.com/arquivos/ids/123670892-1280-auto?v=638252124000970000&width=1280&height=auto&aspect=true", title: "Notebook Lenovo IdeaPad 1", description: "8GB 256GB SSD Tela 156\" HD Linux", price:  1999.99},
        { id: 44, idCategory: 3, image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hex-rb01.jpg", title: "Gabinete Gamer Mancer Hexer", description: "Rainbow, Mid-Tower, Lateral de Vidro, Com 3 Fans, Preto, MCR-HEX-RB01", price: 129.99 },
        { id: 36, idCategory: 4, image: "https://m.media-amazon.com/images/I/61ryGDOT3hL._AC_SL1000_.jpg", title: "Monitor Gamer AOC Hero", description: "24\" 165Hz 1ms Ajuste de Altura 24G2S/BK", price: 199.99 },
        { id: 59, idCategory: 4, image: "https://m.media-amazon.com/images/I/71fExkr1vWL._AC_SL1500_.jpg", title: "Samsung T350 - Monitor Gamer", description: "24\", FHD, 75Hz, HDMI, VGA, Freesync, Preto", price: 249.99 },
        { id: 48, idCategory: 5, image: "https://m.media-amazon.com/images/I/51SFlVhq0aL._AC_SL1000_.jpg", title: "Galaxy Book2 Intel® Core™ i7-1255U", description: "Windows 11 Home, 8GB, 256GB SSD, 15.6'' Full HD LED, 1.81kg", price: 1999.99 },
        { id: 53, idCategory: 3, image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/l/black-technology-mini1152025.jpg", title: "Gabinete Gamer Aigo Black", description: "Melhor design e melhores conjuntos de hardwares.", price: 149.99 },
        { id: 50, idCategory: 5, image: "https://m.media-amazon.com/images/I/71TK+vh6JIL._AC_SL1500_.jpg", title: "Notebook ASUS VivoBook Go 15", description: "AMD RYZEN 5 7520U, 8GB, 256GB SSD, KeepOS, Tela 15,6\" FHD, Mixed Black - E1504FA-NJ731", price: 2499.99 },
        { id: 57, idCategory: 5, image: "https://m.media-amazon.com/images/I/61E5hcB0lIL._AC_SL1500_.jpg", title: "Notebook Gamer Lenovo ", description: "8GB 512GB SSD RTX 2050 15.6\" FHD W11 83EU0000BR", price: 1599.99 },
        { id: 49, idCategory: 4, image: "https://http2.mlstatic.com/D_NQ_NP_839275-MLU77132910508_062024-O.webp", title: "Monitor Led", description: "20 Polegadas Hd Preto Hdmi/vga/vesa Brazilpc 110v/220v", price: 199.99 },
        { id: 46, idCategory: 5, image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages5.kabum.com.br%2Fprodutos%2Ffotos%2F564915%2Fnotebook-acer-aspire-5-amd-ryzen7-5700u-16gb-ram-ssd-512gb-15-6-full-hd-ips-amd-radeon-linux-prata-a515-45-r74n_1716491063_g.jpg&w=640&q=100", title: "Notebook Acer Aspire 5 AMD Ryzen7-5700U", description: "16GB RAM, SSD 512GB, 15.6\" Full HD IPS, AMD Radeon, Linux, Prata - A515-45-R74N", price: 3499.99 },
        { id: 58, idCategory: 5, image: "https://m.media-amazon.com/images/I/41J9j6iVDvS._AC_SL1000_.jpg", title: "Apple notebook MacBook Air", description: "3 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB", price:  4999.99},
        { id: 31, idCategory: 3, image: "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-k-mex-space-atx-mid-tower-vidro-temperado-atx-white-sem-fonte-sem-fan-cgw2r4rh002cb0x_190134.jpg", title: "Gabinete Gamer K-MEX Space ATX", description: "Mid Tower, Vidro Temperado, ATX, White, Sem Fonte, Sem Fan, CGW2R4RH002CB0X", price:  199.99},
        { id: 52, idCategory: 5, image: "https://m.media-amazon.com/images/I/51f+8DD2VbL._AC_SY300_SX300_.jpg", title: "Notebook Acer Aspire5", description: "R36L AMD Ryzen7 5700U 12GB RAM (AMD Radeon) 512GB SSD 15.6” LED IPS Full HD Prata Teclado numérico Independente Linux Gutta", price:  5999.99},
        { id: 32, idCategory: 4, image: "https://m.media-amazon.com/images/I/61rd8zerEqL._AC_SL1000_.jpg", title: "MONITOR GAMER SAMSUNG ODYSSEY", description: "G30 24\" 144Hz 1ms AMD FreeSync Premium", price: 349.99 },
        { id: 38, idCategory: 3, image: "https://m.media-amazon.com/images/I/81bnKIyqF3L._AC_SX679_.jpg", title: "Gabinete Gamer DT3 Hyper", description: "tipo aquário em vidro temperado, M-ATX/Mini-ITX.", price:  299.99},
    ]
}