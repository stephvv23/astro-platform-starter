export type Post = {
    slug: string;
    title: string;
    excerpt: string;
    category: 'Código' | 'Producto' | 'Carrera';
    date: string;
    readingTime: string;
    number: string;
    color: 'peach' | 'lilac' | 'mint';
    intro: string;
    sections: Array<{
        title: string;
        paragraphs: string[];
        note?: string;
    }>;
};

export const posts: Post[] = [
    {
        slug: 'interfaces-que-se-sienten-humanas',
        title: 'Interfaces que se sienten humanas',
        excerpt: 'Pequeñas decisiones de diseño y código que convierten una pantalla correcta en una experiencia cercana.',
        category: 'Producto',
        date: '28 ago 2026',
        readingTime: '6 min',
        number: '01',
        color: 'peach',
        intro: 'Una interfaz no necesita hablar como una persona para sentirse humana. Necesita reconocer el contexto, cuidar el tiempo y responder con honestidad.',
        sections: [
            {
                title: 'La claridad también es una emoción',
                paragraphs: [
                    'Cuando alguien entiende de inmediato qué ocurrió y qué puede hacer después, aparece una sensación de calma. Esa claridad nace tanto del contenido como de la implementación: estados visibles, jerarquías limpias y mensajes que no esconden el problema.',
                    'Diseñar esa calma significa pensar más allá del estado ideal. Una carga lenta, un formulario incompleto o una búsqueda sin resultados también forman parte del producto.'
                ],
                note: 'Una buena interfaz no exige atención: la acompaña.'
            },
            {
                title: 'Microdecisiones con mucho peso',
                paragraphs: [
                    'El texto de un botón, el orden del foco, el espacio entre dos elementos o una transición breve pueden cambiar por completo cómo se percibe un flujo. Son detalles pequeños, pero juntos construyen confianza.',
                    'En mis proyectos intento revisar estas decisiones como revisaría una conversación: ¿es clara?, ¿llega en el momento correcto?, ¿permite corregir un error sin castigar a quien lo cometió?'
                ]
            }
        ]
    },
    {
        slug: 'mi-sistema-para-aprender-en-publico',
        title: 'Mi sistema para aprender en público',
        excerpt: 'Una forma sostenible de documentar hallazgos, compartir procesos y aprender sin esperar a tener todas las respuestas.',
        category: 'Carrera',
        date: '19 ago 2026',
        readingTime: '5 min',
        number: '02',
        color: 'lilac',
        intro: 'Publicar lo que aprendo no es una prueba de autoridad. Es una manera de dejar migas de pan para mi yo del futuro y para otras personas que recorren caminos parecidos.',
        sections: [
            {
                title: 'Notas antes que grandes artículos',
                paragraphs: [
                    'Durante mucho tiempo pensé que cada publicación debía ser definitiva. Esa expectativa convertía una idea sencilla en una tarea enorme. Ahora empiezo con una nota: una pregunta, un ejemplo y lo que cambió en mi forma de pensar.',
                    'Algunas notas crecen hasta convertirse en guías. Otras se quedan pequeñas y útiles. Las dos formas tienen valor.'
                ],
                note: 'Compartir el proceso permite que el conocimiento respire.'
            },
            {
                title: 'Un ritmo que sí puedo mantener',
                paragraphs: [
                    'Reservo un momento semanal para ordenar apuntes y elegir una sola idea. No persigo una frecuencia perfecta; priorizo que escribir siga siendo una práctica curiosa, no otra fuente de presión.',
                    'También anoto qué preguntas aparecen después de publicar. Esa conversación suele señalar mejor que cualquier calendario qué vale la pena explorar a continuación.'
                ]
            }
        ]
    },
    {
        slug: 'css-como-herramienta-de-narrativa',
        title: 'CSS como herramienta de narrativa',
        excerpt: 'Más allá de decorar componentes: ritmo, contraste y movimiento para guiar una historia en la web.',
        category: 'Código',
        date: '07 ago 2026',
        readingTime: '8 min',
        number: '03',
        color: 'mint',
        intro: 'CSS organiza la atención. Cada cambio de escala, pausa visual y movimiento puede ayudar a contar qué importa, en qué orden y con qué energía.',
        sections: [
            {
                title: 'Diseñar el ritmo',
                paragraphs: [
                    'Una página tiene tempo. Los bloques densos aceleran la lectura; el espacio amplio invita a detenerse. Cuando trato el espaciado como ritmo y no como relleno, la composición empieza a comunicar antes de que alguien lea una sola frase.',
                    'Las variables de diseño ayudan a sostener ese ritmo. No buscan que todo sea idéntico, sino que las variaciones se sientan parte de la misma voz.'
                ],
                note: 'El espacio en blanco también escribe.'
            },
            {
                title: 'Movimiento con intención',
                paragraphs: [
                    'Una animación es útil cuando explica una relación: de dónde llegó un elemento, qué cambió o dónde continúa la acción. Si solo compite por atención, se convierte en ruido.',
                    'Prefiero pocos gestos, suaves y consistentes. Además de cuidar el rendimiento, siempre respeto la preferencia de movimiento reducido para que la experiencia siga siendo cómoda.'
                ]
            }
        ]
    }
];
