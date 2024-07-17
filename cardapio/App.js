
//Tecnologia para dispositivos móveis-Tads 5° semestre " manhã"
//Aluna: Denise de Oliveira Melo

import React, { useState, useEffect } from 'react';
import { ScrollView,
         View,
         Text,
         Image,
         TouchableOpacity,
         StyleSheet,
         ActivityIndicator } from 'react-native';

import getImage from "./util/images";

const menuList = [
   {
    "codigo": 1001,
    "nome": "Hamburguer",
    "descricao": "Pão e hamburguer",
    "preco": 15.75,
    "imagem": "1001"
  },
  {
    "codigo": 1002,
    "nome": "X-Burguer",
    "descricao": "Pão, hamburguer e queijo",
    "preco": 18.50,
    "imagem": "1002"
  },
  {
    "codigo": 1003,
    "nome": "X-Bacon",
    "descricao": "Pão, hamburguer, queijo e bacon",
    "preco": 21.50,
    "imagem": "1003" 
  },
  {
    "codigo": 1004,
    "nome": "X-Salada",
    "descricao": "Pão, hamburguer, queijo, alface, tomate e maionese",
    "preco": 20.00,
    "imagem": "1004" 
  },
  {
    "codigo": 1005,
    "nome": "Misto Quente",
    "descricao": "Pão, presunto e queijo",
    "preco": 13.75,
    "imagem": "1005"
  }
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

    const handleSelectItem = (item) => {
          setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Cardápio</Text>
            {selectedItem && (
              <View style={styles.selectedItemContainer}>
               <Image source={getImage(selectedItem.imagem)} style={styles.selectedItemImage} />
                <View style={styles.itemDetails}>
                  <View style={styles. codigoNomeContainer}>
                        <Text style={styles.codigoDetails}>{selectedItem.codigo}</Text>
                        <Text style={styles.nomeDetails}>{selectedItem.nome}</Text>
                  </View>
                        <Text style={styles.precoDetails}>R$ {selectedItem.preco.toFixed(2)}</Text>
                        <Text style={styles.descricaoDetails}>{selectedItem.descricao}</Text> 
                </View>
              </View>
            )}
          </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={styles.menuContainer}>
     {menuList.map(item => (
        <TouchableOpacity
          key={item.codigo}
          onPress={() => handleSelectItem(item)}
          style={[styles.menuItem, selectedItem && selectedItem.codigo === item.codigo && styles.selectedItem]}>
         <View style={styles.itemImageContainer}>
            <Image source={getImage(item.imagem)} style={styles.itemImage} />
           </View>  
          </TouchableOpacity>
           ))}
         </View>
        </ScrollView>
      </>
     )}
   </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaccad',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 50, 
  },
  selectedItemContainer: {
    alignItems: 'center',
  },
  selectedItemImage: {
    width: 400,
    height: 400,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemDetails: {
    width: 500,
    marginTop: 10,
    borderBottomColor: '#00000',  
    borderBottomWidth: 3,
    position: 'relative',
  },
  codigoDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: 10,
    paddingLeft: 80,
  },
  nomeDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'left',  
    marginBottom: 10,  
  },
  precoDetails: {
    fontSize: 20,
    textAlign: 'right',
    paddingRight: 60,
    position: 'absolute', 
    top: 0, 
    right: 20, 
  },
  descricaoDetails: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'left',
    marginBottom:20,
    paddingLeft: 80,
  },
  codigoNomeContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',   
   },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',  
  },
  menuItem: {
    marginRight: 10,  
    padding: 10,
    alignItems: 'center', 
  },
  selectedItem: {
    borderColor: '#00ff00',
    borderWidth: 5,
    borderRadius: 100,
  },
  itemImageContainer: {
    borderRadius: 100,
    overflow: 'hidden', 
  },
  itemImage: {
    width: 100,
    height: 100, 
    borderRadius: 50,
  },
});
