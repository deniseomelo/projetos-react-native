// Tecnologia em Análise e Desenvolvimento de Sistemas
// Tecnologia para Dispositivos móveis
// Denise de Oliveira Melo 5° Periodo "Manhã"


import { useState } from 'react';
import { SafeAreaView, 
         View, 
         Image, 
         TouchableOpacity, 
         Text, 
         StyleSheet } from 'react-native';

export default function App() {
  const [image, setImage] = useState(0);
  const img = [
    require('./assets/img1.png'),
    require('./assets/img2.png'),
    require('./assets/img3.png'),
  ];
  
  const mudarImage = (index) => {
    setImage(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{alignSelf: "center", width: 200, height: 200, marginBottom: 30}}
        source={img[image]}
        resizeMode="cover"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => mudarImage(0)}>
          <Text style={styles.buttonText}>IMAGEM  1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => mudarImage(1)}>
          <Text style={styles.buttonText}>IMAGEM 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => mudarImage(2)}>
          <Text style={styles.buttonText}>IMAGEM 3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4efec',
  },

  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
   
  },

  buttonText: {
    fontSize: 15,
    fontFamily: 'Verdana',
   
  },
  
  button: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    
  },
});
