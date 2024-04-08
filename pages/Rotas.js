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
            setUser(_user);
            if(initializing) {
                setInitializing(false);
            }
        });

        return unsubscribe;

    }, []);

    return(
        <Stack.Navigator>
            <Stack.Screen name="Acesso" component={Acesso}/>

        </Stack.Navigator>
    );

}





export default Rotas;


