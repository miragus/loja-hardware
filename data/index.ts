import { Category } from "../types/category";

type Data = {
    categories: Category[],
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
        
}