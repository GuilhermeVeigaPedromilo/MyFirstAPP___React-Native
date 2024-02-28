import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home  from '../pages/index.js';
import  Login  from '../pages/login.js';
import Cadastro from '../pages/cadastro.js';

const Tab = createBottomTabNavigator(); 

export function Routes(){
    
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Index"
                component={Home}
                headerTitle= 'Home'
                options={{
                    headerShown: false,
                    
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
                        <Tab.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
