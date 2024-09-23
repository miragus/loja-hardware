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
            title: 'Gabinetes e acessórios',
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
        { id: 21, idCategory: 3, image: "https://picsum.photos/id/20/200/200", title: "Bolsa de Couro", description: "Design clássico, espaçosa e elegante para uso.", price: 89.99 },
        { id: 25, idCategory: 3, image: "https://picsum.photos/id/24/200/200", title: "Chapéu Elegante", description: "Proteção solar, estilo casual e estiloso.", price: 19.99 },
        { id: 5, idCategory: 1, image: "https://picsum.photos/id/4/200/200", title: "Smartwatch", description: "Monitoramento de saúde e notificações inteligentes.", price: 149.99 },
        { id: 8, idCategory: 1, image: "https://picsum.photos/id/7/200/200", title: "Console X", description: "Gráficos avançados, ampla biblioteca de jogos.", price: 399.99 },
        { id: 24, idCategory: 3, image: "https://picsum.photos/id/23/200/200", title: "Carteira Slim", description: "Compacta e prática, material durável.", price: 29.99 },
        { id: 28, idCategory: 3, image: "https://picsum.photos/id/30/200/200", title: "Cinto de Couro", description: "Alta qualidade, fivela ajustável, durável.", price: 24.99 },
        { id: 3, idCategory: 1, image: "https://picsum.photos/id/2/200/200", title: "Fone Bluetooth", description: "Som cristalino, cancelamento de ruído ativo.", price: 199.99 },
        { id: 18, idCategory: 2, image: "https://picsum.photos/id/17/200/200", title: "Cachoeira Majestosa", description: "Queda d'água impressionante, espetáculo natural.", price: 64.99 },
        { id: 30, idCategory: 3, image: "https://picsum.photos/id/39/200/200", title: "Luvas de Inverno", description: "Forradas, confortáveis, aquecem em climas frios.", price: 19.99 },
        { id: 11, idCategory: 2, image: "https://picsum.photos/id/10/200/200", title: "Praia Tropical", description: "Areia branca, águas cristalinas, cenário paradisíaco.", price: 49.99 },
        { id: 19, idCategory: 2, image: "https://abre.ai/k7Cc", title: "Placa de Video ASRock Intel ARC", description: "A potência da Intel em cada pixel.", price: 999.99 },
        { id: 16, idCategory: 2, image: "https://picsum.photos/id/15/200/200", title: "Cânion Profundo", description: "Formações rochosas impressionantes, vista espetacular.", price: 54.99 },
        { id: 14, idCategory: 5, image: "https://abre.ai/k7BV", title: "Notebook Gamer Asus ", description: "Este poderoso notebook gamer fornece tudo e muito mais.", price: 2999.99 },
        { id: 29, idCategory: 3, image: "https://picsum.photos/id/36/200/200", title: "Colar Elegante", description: "Design sofisticado, charme e refinamento.", price: 44.99 },
        { id: 1, idCategory: 1, image: "https://picsum.photos/id/0/200/200", title: "Smartphone X1", description: "Alta performance, tela AMOLED e câmera avançada.", price: 599.99 },
        { id: 2, idCategory: 1, image: "https://picsum.photos/id/1/200/200", title: "Laptop Pro", description: "Design elegante, processador i7, 16GB RAM.", price: 1299.99 },
        { id: 7, idCategory: 1, image: "https://picsum.photos/id/6/200/200", title: "TV LED 50\"", description: "Imagem vívida, resolução 4K, serviços de streaming.", price: 799.99 },
        { id: 17, idCategory: 2, image: "https://picsum.photos/id/16/200/200", title: "Deserto Dourado", description: "Dunas infinitas, cenário árido e fascinante.", price: 44.99 },
        { id: 13, idCategory: 2, image: "https://abre.ai/k7B5", title: "Notebook Gamer Gigabyte Aorus", description: "Notebook poderoso com alto desempenho.", price: 4999.99 },
        { id: 22, idCategory: 3, image: "https://picsum.photos/id/21/200/200", title: "Relógio Esportivo", description: "Cronômetro, resistência à água, pulseira confortável.", price: 59.99 },
        { id: 10, idCategory: 1, image: "https://picsum.photos/id/9/200/200", title: "Drone Pro", description: "Voo preciso, câmera HD, controle intuitivo.", price: 699.99 },
        { id: 26, idCategory: 3, image: "https://picsum.photos/id/25/200/200", title: "Lenço de Seda", description: "Toque suave, estampas sofisticadas, elegante.", price: 14.99 },
        { id: 27, idCategory: 3, image: "https://picsum.photos/id/26/200/200", title: "Pulseira de Prata", description: "Detalhes delicados, sofisticação e estilo.", price: 39.99 },
        { id: 20, idCategory: 2, image: "https://abre.ai/k7Av", title: "SSD Portátil", description: "é uma ótima escolha para os que precisam de armazenamento rápido.", price: 199.99 }
    ]
}