export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Feedbook Front End",
    year: 2024,
    description: "Projeto FrontEnd de rede social mesclando todas as funções de redes sociais conhecidas",
    url: "https://github.com/moonixt/feed-book",
  },
  {
    title: "Feedbook Back End",
    year: 2024,
    description: "Projeto BackEnd de rede social mesclando todas as funções de redes sociais conhecidas",
    url: "https://github.com/moonixt/backend-feed-book",
  },
  {
    title: "Imeal Backend",
    year: 2024,
    description: "Projeto Backend de site de delivery",
    url: "https://github.com/moonixt/imeal-backend",
  },
  {
    title: "Imeal Frontend",
    year: 2024,
    description: "Projeto Frontend de site de delivery",
    url: "https://github.com/moonixt/imeal-frontend",
  },
];
