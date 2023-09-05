import { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, Button, Touchable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { general_container } from './assets/styles/allstyles';
import Header from './components/Header'
import { TouchableOpacity } from 'react-native-web';

  export default function App() {

    const [valor_uno, set_valor_uno] = useState('');
    const [valor_dos, set_valor_dos] = useState('');
    const [resultado, set_resultado] = useState('');

    let calcular = (oper) => {

      let mi_resultado = 0;
      let mi_valor_uno = parseFloat(valor_uno);
      let mi_valor_dos = parseFloat(valor_dos);

      switch(oper){

        case "+":
          mi_resultado = mi_valor_uno + mi_valor_dos;
          break;

        case "-":
          mi_resultado = mi_valor_uno - mi_valor_dos;
          break;

        case "x":
          mi_resultado = mi_valor_uno * mi_valor_dos;
          break;

        case "/":
          mi_resultado = mi_valor_uno / mi_valor_dos;
          break;

      }

      set_resultado(mi_resultado.toFixed(2))

    };

    return (
      <View style={general_container.container}>

        <Header></Header>

        <Text style={general_container.title}>¡CALCULADORA!</Text>

        <View style={{ flex: 1, width: '300px', height: '300px'}}>

          <Text style={general_container.description}>Ingrese el primer valor</Text>

          <TextInput style={{borderRadius: '10px', borderColor: 'black', borderWidth: 5, marginTop: '5px', height: '10px', backgroundColor: 'white', fontWeight: 'bold'}}
            left={<TextInput.Icon icon="numeric"/>}
            onChangeText={(valor_uno) => set_valor_uno(valor_uno)}
            value={valor_uno}/>

          <Text style={general_container.description}>Ingrese el segundo valor</Text>
          
          <TextInput style={{borderRadius: 10, borderColor: 'black', borderWidth: 5, marginTop: '5px', height: '10px', backgroundColor: 'white', fontWeight: 'bold'}}
            left={<TextInput.Icon icon="numeric"/>} 
            onChangeText={(valor_dos) => set_valor_dos(valor_dos)}
            value={valor_dos}/>

        </View>

        <View style={{ flex: 1, width: '300px', height: '300px', backgroundColor: 'white', borderWidth: 5, borderRadius: '10px', alignItems: 'center'}}>

          <View style={{ display: 'flex', flexDirection: 'row', marginTop: '30px'}}>

            <TouchableOpacity style={{ backgroundColor: 'lightgray', borderWidth: 4, borderRadius: '10px', width: '50px', height: '50px' }} 
            
              onPress={()=>calcular("+")}>

                <Text style={{ fontSize: '30px', textAlign: 'center' }}> + </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'lightgray', borderWidth: 4, borderRadius: '10px', width: '50px', height: '50px', marginLeft: '20px', marginRight: '10px' }}
            
              onPress={()=>calcular("-")}>

                <Text style={{ fontSize: '30px', textAlign: 'center' }}> - </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'lightgray', borderWidth: 4, borderRadius: '10px', width: '50px', height: '50px', marginLeft: '10px', marginRight: '20px' }}
              
              onPress={()=>calcular("x")}>

                <Text style={{ fontSize: '30px', textAlign: 'center' }}> x </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'lightgray', borderWidth: 4, borderRadius: '10px', width: '50px', height: '50px' }}
              onPress={()=>calcular("/")}>

                <Text style={{ fontSize: '30px', textAlign: 'center' }}> / </Text>

            </TouchableOpacity>

          </View>

          <View style={{ width: '250px', height: '100px', backgroundColor: 'lightgray', borderWidth: 5, borderRadius: '10px', alignItems: 'center', marginTop: '20px'}}>

            <Text style={general_container.description}>Su resultado:</Text>

            <Text style={general_container.result}>{resultado}</Text>

          </View>

        </View>

      </View>
    );
  }