

//Aluna: Denise de Oliveira Melo

import { useState } from 'react';
import {SafeAreaView, 
        Text, 
        TextInput, 
        TouchableOpacity, 
        Alert, 
        StyleSheet,
        Image
        } from 'react-native';

export default function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const calcularIMC = () => {
    const pesoFloat = parseFloat(peso.replace(',', '.'));
    const alturaFloat = parseFloat(altura.replace(',', '.'));
    const valoresValidos = !isNaN(pesoFloat) && !isNaN(alturaFloat) && pesoFloat > 0 && alturaFloat > 0;
       if (!valoresValidos) {
          Alert.alert('Erro', 'Peso e Altura inválidos.');
      return;
    }

const imc = pesoFloat / (alturaFloat * alturaFloat);

    let categoria;
    if (imc < 18.5) {
      categoria = 'Abaixo do peso';

     } else if (imc < 25) {
      categoria = 'Peso Normal';

     } else if (imc < 30) {
      categoria = 'Acima do Peso';

    } else {
      categoria = 'Obesidade ';
    }

    Alert.alert('IMC', `Seu IMC é ${imc.toFixed(2)} (${categoria}).`);
  };

  return (
    <SafeAreaView style={styles.container}>
     <Text style={styles.header}>Cálculo do IMC</Text>
     <Text style={styles.headerSub}>Descubra seu Índice de Massa Corporal</Text>
     <Text style={styles.headerText}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPeso(text)}
          value={peso}
          placeholder="Digite seu Peso"
          keyboardType="numeric"
        />
      <Text style={styles.headerText}>Altura (m) </Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setAltura(text)}
          value={altura}
          placeholder="Digite sua Altura"
          keyboardType="numeric"
        />
          <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e7e9df',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'Georgia',
  },
  headerSub: {
    marginBottom:30,
    fontStyle: 'italic',
    fontSize: 15,
    fontFamily: 'Georgia',
    },
  headerText: {
    marginBottom:10,
    fontSize: 18,
    fontFamily: 'Georgia',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius:25,
    borderColor: 'gray',
    borderWidth: 2, 
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Georgia',
  },
});


