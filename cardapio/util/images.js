

const images = {
  1001: require('../assets/hamburguer.jpeg'),
  1002: require('../assets/x_burguer.jpeg'),
  1003: require('../assets/x_bacon.jpeg'),
  1004: require('../assets/x_salada.jpeg'),
  1005: require('../assets/misto_quente.jpeg')
}

export default function getImage(codigo) {
  return images [codigo];
}