export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Web Log",
    year: 2025,
    description:
      "Projeto pessoal, para postagens de ideias e interesses pessoais" +
      "Desenvolvido com ReactJS, Next, e TypeScript " +
      "O projeto possui deploy, e pode ser acessado pelo link na descrição do GitHub.",
    url: "https://github.com/moonixt/tailwind-weblog",
    image: "/photos/weblog.gif",
  },

  {
    title: "Feedbook Frontend",
    year: 2024,
    description:
      "Projeto FrontEnd de rede social que integra várias funcionalidades de redes sociais populares. " +
      "Desenvolvido principalmente com ReactJS e TypeScript, o projeto também utiliza Electron para " +
      "permitir a execução como uma aplicação desktop.",
    url: "https://github.com/moonixt/feed-book",
    image: "/photos/instafeed.png",
  },
  {
    title: "Feedbook Backend",
    year: 2024,
    description:
      "Projeto BackEnd de rede social que suporta todas as funcionalidades do Front End. " +
      "Desenvolvido com Python e Django, este projeto fornece uma API robusta e segura " +
      "para garantir a integração perfeita com o Front End.",
    url: "https://github.com/moonixt/backend-feed-book",
  },

  {
    title: "House Rents",
    year: 2025,
    description:
      "O projeto house rents foi construido com base em Angular, " +
      "foi um projeto de iniciativa da Google para se iniciar no Framework, " +
      "Após a conclusão do projeto, foi possível entender a estrutura do Angular e como ele funciona.",
    url: "https://github.com/moonixt/Angular-houses-rent",
    image: "/photos/houserent.png",
  },
  {
    title: "Imeal Frontend",
    year: 2024,
    description:
      "Projeto Frontend de site de delivery desenvolvido principalmente com ReactJS e JavaScript puro. " +
      "Durante o desenvolvimento, foram aplicadas várias APIs do Google, como Maps, Geolocation e Google Pay. " +
      "O Firebase foi utilizado para autenticação e banco de dados.",
    url: "https://github.com/moonixt/imeal-frontend",
    image: "/photos/imeal.png",
  },
  {
    title: "Imeal Backend",
    year: 2024,
    description:
      "Projeto Backend de site de delivery que complementa o Frontend. " +
      "Desenvolvido com Python e Django, este projeto fornece uma API robusta e segura " +
      "para garantir a integração perfeita com o Frontend, além de gerenciar a lógica de negócios e o armazenamento de dados.",
    url: "https://github.com/moonixt/imeal-backend",
  },
  {
    title: "Jogo de texto em python",
    year: 2024,
    description: "Um simples jogo de texto desenvolvido em Python. ",
    url: "https://github.com/moonixt/Jogo_em_texto_python",
    image: "/photos/textop.png",
  },
];
