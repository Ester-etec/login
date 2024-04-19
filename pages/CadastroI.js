import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';


export default function Cadastro({navigation}) {

    const [initializing, setInitializing] = useState(true);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar(){
    auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Este email já está em uso!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('Este email é inválido!');
      }

      console.error(error);
    });
  }

return(
    <View style={styles.container}>
        
        <TextInput style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        />
     
        <TextInput style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        />
    
        <TouchableOpacity style={styles.botao}
        onPress={cadastrar}
        >
            <Text>Cadastrar</Text>
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