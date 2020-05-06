import React, { Component, useState } from 'react';
import { TouchableOpacity, FlatList, Button, StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Pesquisa from './Pesquisa';

export default class App extends  Component () {

  constructor()
  {
    super()
    this.state = {
        valoPagoPorDia : 0, 
        dia : 0, 
        salario : 0, 
        salarioText : ""
      } //aqui tu tem o state não são props
  
    //this.calcular = this.calcular.bind(this) ///aqui tbm não precisa de props, se tu usar arrow function não precisa dar bind
  }
  //vou salvar aqui e testar
  //quando tu usa this tu ta se referindo a coisas que pertencem a esse objeto, ou seja 

  calcular = () => //ARROW function
  {
    const { valoPagoPorDia, dia } = this.state //desestruturação, tu pode pegar propriedades dentro de um objeto
    //como o this.state é um objeto tu pode ter acesso direto ao que tem dentro dele e utilizar dessa forma, fica mais legivel

    const salario = valoPagoPorDia * dia
    this.setState ({ salario }) // aqui tu pode dar um setState direto na propriedade que tu ta alterando, 
    //fica mais simples e não precisa declarar varias variaveis dentro da função
  }

  render(){

    const { salario } = this.state

    return (
      <ScrollView>
        
        <View style={styles.container}>
          <Text >EasyCompany HOME</Text>
          <Pesquisa/>
        </View>
          <Text>Cadastro de Colaboradores</Text>
          <Text>Selecione a função dele:</Text>
        
          <TextInput style={{height: 40}} placeholder="Nome do colaborador" />
          <TextInput style={{height: 40}} placeholder="dia trabalhado" keyboardType="numeric"  onChangeText={(dia)=>{this.setState({dia})}}/>
          <TextInput style={{height: 40}} placeholder="valor pago por dia" keyboardType="numeric"  onChangeText={(valoPagoPorDia)=>{this.setState({valoPagoPorDia})}}/>
          <TouchableOpacity  onPress={this.calcular}><Text style={styles.buttoncalcular}>calcular</Text></TouchableOpacity> 
          <Text >R${salario.toFixed(2)}</Text> 
        
      </ScrollView>
    );
  }
}
/*<Button ={() => {setIsHungry(false);}> <Text>diarista</Text></TouchableOpacity>
          <Button ={this.opcao2}> <Text>Cortador (peça)</Text></TouchableOpacity>
          <Button ={this.opcao3}> <Text>Cortador (diarista)</Text></TouchableOpacity> 
          //<FlatList
            data={[
              {key: 'Cadastos '},
              {key: 'Clientes'},
              {key: 'Colaboradores'},
              {key: 'Vend'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />*/

const styles = StyleSheet.create
({
  container: 
  {
    marginTop: 50,
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncalcular: 
  {
    alignSelf:'center',
    padding: 30,
    fontSize: 50,
    color:"#C0C0C0"
  }
});