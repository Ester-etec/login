import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect,useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import Acesso from './Login';
import Cadastro from './CadastroI';
import Home from './Home';

const Stack = createStackNavigator();

const Rotas = () => {
    const [initializing, setInitializing] = useState(true);
    const [user,setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(_user => {
            if(initializing) {
                setInitializing(false);
            }
            setUser(_user);
        });

        return unsubscribe;

    }, [initializing]);

    if (initializing){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Acesso" component={Acesso}/>

        </Stack.Navigator>
    );
}

return (
    <SafeAreaView style={{flex: 1}}>
      {user ? <HomeScreen /> : <SignInScreen />}
    </SafeAreaView>
  );

}





export default Rotas;


