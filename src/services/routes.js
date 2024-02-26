import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home  from '../pages/home/index.js';
import  Login  from '../pages/login/login.js';
import Cadastro from '../pages/cadastro/cadastro.js';

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
