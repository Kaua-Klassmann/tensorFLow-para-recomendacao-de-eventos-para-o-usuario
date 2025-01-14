import tf from "@tensorflow/tfjs";

function vetorizar(itens, categorias) {
  return categorias.map((categoria) => (itens.includes(categoria) ? 1 : 0));
}

function calcularScore(vetorA, vetorB) {
  const tensorA = tf.tensor1d(vetorA);
  const tensorB = tf.tensor1d(vetorB);

  const dotProduct = tf.dot(tensorA, tensorB).dataSync();

  const magnitudeA = tf.norm(tensorA).dataSync();
  const magnitudeB = tf.norm(tensorB).dataSync();

  return dotProduct / (magnitudeA * magnitudeB);
}

export default function recomendarUsuario(usuario, eventos) {
  const categorias = [
    ...new Set(eventos.flatMap((evento) => evento.categorias)),
  ];

  const vetorUsuario = vetorizar(usuario.interesses, categorias);

  const scores = eventos.map((evento) => {
    const vetorEvento = vetorizar(evento.categorias, categorias);
    const score = calcularScore(vetorUsuario, vetorEvento);
    return { evento: evento.nome, score };
  });

  const recomendacoes = scores.sort((a, b) => b.score - a.score);

  return recomendacoes;
}
