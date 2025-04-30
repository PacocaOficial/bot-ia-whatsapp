export const AI_API_URL = process.env.AI_API_URL || "http://localhost:8082";
export const LINK = process.env.LINK || "";
export const DISCORD = process.env.DISCORD || "";
export const READ_BOOKS = process.env.READ_BOOKS || "";

export const LINKS = {
    "link oficial": LINK,
    "termos de uso": `${LINK}/termos-uso`,
    "diretrizes": `${LINK}/termos-uso`,
    "login": `${LINK}/login`,
    "criar conta": `${LINK}/cadastro`,
    "doação": `${LINK}/doacao`,
    "Paçoca games - jogos online do paçoca": `${LINK}/jogos`,
    "readbooks - read books": READ_BOOKS,
    "configurações": `${LINK}/configuracoes`,
    "configurar privacidade": `${LINK}/privacidade`,
    "sessões ativas": `${LINK}/sessoes-ativas`,
    "notificações": `${LINK}/configuracoes/notificacoes`,
    "premium": `${LINK}/verificado`,
    "minhas comunidades": `${LINK}/comunidades`,
    "discord oficial": DISCORD,
    "baixar paçoca": `${LINK}/download`,
    "significado dos selos": `${LINK}/significado-selos`,
    "dashboard": `${LINK}/dashboard`,
    "repositório no github": "https://github.com/JoaoEnrique/chat-inteligencia-artificial",
    "repositório do github": "https://github.com/JoaoEnrique/chat-inteligencia-artificial",
} as const;

export const OFFICIAL_PROFILES = {
    "GitHub": "https://github.com/PacocaOficial",
    "Linkedin": "https://www.linkedin.com/company/pa%C3%A7oca-rede",
    "Instagram": "https://www.instagram.com/pacoca.rede",
    "GitHub do João": "https://www.github.com/JoaoEnrique",
    "Linkedin do João": "https://www.linkedin.com/in/joãoenrique"
} as const;


export const LINKS_TEXT = `Aqui estão os links oficiais do Paçoca:
* *Site oficial:* https://pacoca.net
* *Termos de uso:* https://pacoca.net/termos-uso
* *Diretrizes:* https://pacoca.net/diretrizes
* *Login:* https://pacoca.net/login
* *Criar conta:* https://pacoca.net/cadastro

E se você gostaria de acessar o dashboard com dados da plataforma: https://pacoca.net/dashboard

Lembre-se de que o Paçoca está sempre em desenvolvimento e evoluindo, então esteja atento para novas atualizações e recursos!
`

export const TECNOLOGIES = `Tecnologias usadas no Paçoca :)
    - IA: Python
    - Backend: Laravel (PHP) com MySQL
    - Web: HTML, CSS e JS (migrado para para React em 11/04/2025)
    - App Mobile: React Native (Android e Windows, iOS em desenvolvimento)
    - App Desktop: Electron (Windows, Linux e macOS)
`


export const CREATOR = `O Paçoca foi iniciado em 2020 e eu fui criada em 2025 por João Enrique Barbosa Santos Alves, um jovem muito criativo e talentoso que idealizou e programou o Paçoca da maneira como conhecemos hoje. Sua paixão e dedicação são os ingredientes principais do sucesso do nosso projeto. 

E para tornar a história ainda mais especial, o Paçoca teve o apoio de colaboradores excepcionais como Zack, Bochecha e Pixel. A equipe é essencial para a evolução e o crescimento do nosso sistema.

Então, para responder a sua pergunta, o Paçoca foi criado por uma combinação de inteligência, paixão e trabalho de equipe. E o resultado? Uma rede social que hoje conta com milhares de usuários e está ajudando pessoas a conectar-se e criar comunidades.
`