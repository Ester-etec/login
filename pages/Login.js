import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Acesso({navigation}) {

return(
    <View style={styles.container}>
        
        <TextInput style={styles.input}
        placeholder="Digite o email"
        
        />
     
        <TextInput style={styles.input}
        placeholder="Digite a senha"
        
        />
    
        <TouchableOpacity style={styles.botao}
        onPress={()=>{login();
        }}>
            <Text>Entrar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    
    </View>
    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
          backgroundColor: '#BBCEFF',
        },
        input: {
          width: '100%',
          height: 40,
          borderColor: '#f9d043',
          borderWidth: 3,
          marginBottom: 12,
          paddingHorizontal: 8,
          backgroundColor: '#85acff',
          color: 'white',
          borderRadius: 20
        },
        titulo: {
            color: 'white',
            alignItems: 'center',
            margin: 40,
            fontSize: 30,
            fontWeight: 'bold'
        },
        botao: {
            width: '35%',
            height: 40,
            margin: 12,
            paddingHorizontal: 8,
            backgroundColor: '#c3d6ee',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        }
        
      });