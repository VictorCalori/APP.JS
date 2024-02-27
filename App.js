import * as React from 'react'; import { Button, View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Victor({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0', // Cor de fundo para a tela
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>O que eu quero que você faça??</Text>
      <View style={{ width: '50%', marginBottom: 10 }}>
        <Button
          title="Gabriel"
          onPress={() => navigation.navigate('Gab')}
          color="#008080" // Personalize a cor conforme desejado
        />
      </View>
      <View style={{ width: '50%' }}>
        <Button
          title="Gustavo"
          onPress={() => navigation.navigate('Gusta')}
          color="#800080" // Personalize a cor conforme desejado
        />
      </View>
    </View>
  );
}

function Gabriel({ navigation }) {
return (
<View style={styles.container}>
      <Text style={styles.text}>
       Opa Gabriel,tudo bem? Te escolhi como um amigo de confiança pois você já chupou laranja comigo, e sempre faz os amigos rirem, agora pedirei para que você imite o latido do poodle de uma senhora rica
      </Text>
    </View>
  );
}

function Gustavo({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>
      Eai Gustavo, tranquilo? Te escolhi como amigo pois você também já chupou laranja comigo, agora, teria como imitar nosso querido super xandão?
      </Text>
  </View>
);
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0', // Cor de fundo para a tela
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      paddingHorizontal: 20, // Adiciona um espaçamento horizontal para melhor legibilidade
    },
    buttonContainer: {
      width: '50%',
      marginBottom: 10,
    },
  });





const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="vic">
<Stack.Screen name="Gusta" component={Gustavo} />
<Stack.Screen name="Gab" component={Gabriel} />
<Stack.Screen name="vic" component={Victor} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;
