/**
 * Repository del oráculo
 * Contiene los datos mock para cada signo zodiacal
 */

const ORACLE_DATA = {
    aries: {
        panorama: 'El 2026 será un año de innovación disruptiva para Aries. Tu energía natural te llevará a liderar proyectos de vanguardia en tecnología emergente.',
        skill: 'Liderazgo técnico y arquitectura de sistemas distribuidos',
        stack: ['Rust', 'Kubernetes', 'WebAssembly', 'Edge Computing'],
        avoid: 'Microservicios innecesarios y sobre-arquitectura prematura',
        useCase: 'Plataformas de alta concurrencia y sistemas de tiempo real',
        mindset: 'Actúa rápido, itera más rápido. La perfección es enemiga del progreso.',
        message: 'Tu impulso natural te convertirá en pionero de las tecnologías del futuro. Confía en tu instinto, pero valida con datos.'
    },
    tauro: {
        panorama: 'Tauro encontrará estabilidad en la construcción de sistemas robustos y escalables. Tu paciencia será tu mayor ventaja en 2026.',
        skill: 'Optimización de rendimiento y arquitectura de bases de datos',
        stack: ['PostgreSQL', 'Redis', 'Go', 'Infrastructure as Code'],
        avoid: 'Cambios tecnológicos sin justificación clara',
        useCase: 'Sistemas financieros y plataformas de alta disponibilidad',
        mindset: 'La consistencia supera a la velocidad. Construye para durar.',
        message: 'Tu capacidad para crear fundamentos sólidos será invaluable. No subestimes el poder de la estabilidad.'
    },
    geminis: {
        panorama: 'Géminis brillará en la versatilidad tecnológica. El 2026 te verá dominando múltiples stacks y conectando equipos diversos.',
        skill: 'Full-stack development y comunicación técnica',
        stack: ['TypeScript', 'React', 'Node.js', 'GraphQL'],
        avoid: 'Dispersión excesiva sin profundizar en ninguna tecnología',
        useCase: 'Aplicaciones web modernas y APIs RESTful/GraphQL',
        mindset: 'Aprende amplio, pero domina profundo en lo que importa.',
        message: 'Tu adaptabilidad es tu superpoder. Úsala para conectar mundos tecnológicos diferentes.'
    },
    cancer: {
        panorama: 'Cáncer encontrará su fortaleza en crear experiencias de usuario excepcionales. Tu empatía se traducirá en productos que la gente ama.',
        skill: 'UX Engineering y desarrollo centrado en el usuario',
        stack: ['React Native', 'Flutter', 'Firebase', 'Design Systems'],
        avoid: 'Funcionalidades que no resuelven problemas reales de usuarios',
        useCase: 'Aplicaciones móviles y productos consumer-facing',
        mindset: 'Construye con el corazón, valida con la mente.',
        message: 'Tu intuición sobre las necesidades humanas creará productos memorables. Escucha a tus usuarios.'
    },
    leo: {
        panorama: 'Leo liderará la revolución del contenido digital en 2026. Tu creatividad encontrará expresión en plataformas innovadoras.',
        skill: 'Arquitectura de contenido y plataformas de streaming',
        stack: ['Next.js', 'Vercel', 'CDN', 'Video Processing'],
        avoid: 'Soluciones genéricas que no destacan',
        useCase: 'Plataformas de contenido y experiencias multimedia',
        mindset: 'Piensa en grande, ejecuta con excelencia.',
        message: 'Tu visión audaz creará plataformas que capturen la imaginación. No temas brillar.'
    },
    virgo: {
        panorama: 'Virgo perfeccionará el arte del código limpio y las mejores prácticas. El 2026 será tu año para establecer estándares de calidad.',
        skill: 'Testing, CI/CD y code quality',
        stack: ['Jest', 'Cypress', 'GitHub Actions', 'SonarQube'],
        avoid: 'Perfeccionismo que paraliza el delivery',
        useCase: 'Sistemas críticos que requieren alta confiabilidad',
        mindset: 'La calidad es un proceso, no un destino.',
        message: 'Tu atención al detalle prevendrá desastres. Encuentra el balance entre calidad y velocidad.'
    },
    libra: {
        panorama: 'Libra equilibrará tecnología y diseño en armonía perfecta. El 2026 te verá creando interfaces que son arte funcional.',
        skill: 'Frontend architecture y design engineering',
        stack: ['Vue.js', 'Tailwind CSS', 'Framer Motion', 'Storybook'],
        avoid: 'Diseños que sacrifican usabilidad por estética',
        useCase: 'Aplicaciones web con experiencias visuales excepcionales',
        mindset: 'La belleza y la función no son opuestos, son complementos.',
        message: 'Tu sentido del equilibrio creará productos que deleitan. Confía en tu ojo para la armonía.'
    },
    escorpio: {
        panorama: 'Escorpio dominará la seguridad y la privacidad en 2026. Tu intensidad se canalizará en proteger sistemas críticos.',
        skill: 'Cybersecurity y arquitectura de seguridad',
        stack: ['OAuth 2.0', 'JWT', 'Encryption', 'Penetration Testing'],
        avoid: 'Complejidad que introduce vulnerabilidades',
        useCase: 'Sistemas de autenticación y protección de datos sensibles',
        mindset: 'La paranoia es profesionalismo en seguridad.',
        message: 'Tu profundidad te permitirá ver amenazas que otros ignoran. Sé el guardián digital.'
    },
    sagitario: {
        panorama: 'Sagitario explorará las fronteras de la IA y el machine learning. El 2026 será tu aventura en territorios tecnológicos inexplorados.',
        skill: 'Machine Learning y AI integration',
        stack: ['Python', 'TensorFlow', 'LangChain', 'Vector Databases'],
        avoid: 'Usar IA donde soluciones simples funcionan mejor',
        useCase: 'Sistemas inteligentes y automatización avanzada',
        mindset: 'Explora con curiosidad, implementa con responsabilidad.',
        message: 'Tu espíritu aventurero te llevará a la vanguardia de la IA. Mantén los pies en la tierra mientras vuelas alto.'
    },
    capricornio: {
        panorama: 'Capricornio construirá la infraestructura que sostiene el futuro. El 2026 recompensará tu disciplina con sistemas inquebrantables.',
        skill: 'DevOps y cloud infrastructure',
        stack: ['AWS', 'Terraform', 'Docker', 'Monitoring'],
        avoid: 'Soluciones on-premise cuando cloud es más eficiente',
        useCase: 'Infraestructura empresarial y plataformas escalables',
        mindset: 'La infraestructura invisible es la mejor infraestructura.',
        message: 'Tu perseverancia construirá cimientos que durarán décadas. El éxito es inevitable para quien no se rinde.'
    },
    acuario: {
        panorama: 'Acuario revolucionará la colaboración remota y las tecnologías descentralizadas. El 2026 es tu momento de innovar radicalmente.',
        skill: 'Blockchain y sistemas distribuidos',
        stack: ['Solidity', 'Web3.js', 'IPFS', 'Smart Contracts'],
        avoid: 'Blockchain donde bases de datos tradicionales son suficientes',
        useCase: 'Aplicaciones descentralizadas y economías digitales',
        mindset: 'Cuestiona todo, pero construye lo que funciona.',
        message: 'Tu visión del futuro está adelantada a su tiempo. Sé paciente mientras el mundo te alcanza.'
    },
    piscis: {
        panorama: 'Piscis canalizará su creatividad en experiencias inmersivas. El 2026 te verá creando mundos digitales que tocan el alma.',
        skill: 'XR development y creative coding',
        stack: ['Three.js', 'Unity', 'AR/VR', 'WebGL'],
        avoid: 'Tecnología por tecnología sin propósito emocional',
        useCase: 'Experiencias inmersivas y arte digital interactivo',
        mindset: 'La tecnología es el medio, la emoción es el mensaje.',
        message: 'Tu imaginación no tiene límites. Usa la tecnología para hacer sentir, no solo para hacer funcionar.'
    }
};

/**
 * Obtiene los datos del oráculo para un signo específico
 */
function getOracleDataBySign(sign) {
    return ORACLE_DATA[sign] || null;
}

module.exports = {
    getOracleDataBySign
};
