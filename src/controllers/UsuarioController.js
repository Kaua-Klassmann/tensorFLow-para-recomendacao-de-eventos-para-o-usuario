import recomendarUsuario from "../machines/recomendarUsuario.js";

const usuario = {
  nome: "João",
  interesses: ["Jogos", "Programação"],
};

const eventos = [
  {
    nome: "BGA",
    categorias: ["Jogos"],
  },
  {
    nome: "Jogo do gremio",
    categorias: ["Futebol", "Esportes"],
  },
  {
    nome: "Hackathon",
    categorias: ["Ciência", "Tecnologia", "Programação"],
  },
  {
    nome: "Criação de jogos",
    categorias: ["Programação", "Jogos"],
  },
];

class UsuarioController {
  async recomendarUsuario(req, res) {
    const recomendado = recomendarUsuario(usuario, eventos);
    return res.send(recomendado);
  }
}

export default new UsuarioController();
