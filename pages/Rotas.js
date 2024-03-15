import {createStackNavigator} from '@react-navigation/stack';

import Acesso from './Login';

const Stack = createStackNavigator();

export default function Rotas(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Acesso" component={Acesso}/>

        </Stack.Navigator>
    )
}