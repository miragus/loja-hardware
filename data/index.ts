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
        { id: 20, idCategory: 2, image: "https://abre.ai/k7Av", title: "SSD Portátil", description: "é uma ótima escolha para os que precisam de armazenamento rápido.", price: 199.99 }
    ]
}