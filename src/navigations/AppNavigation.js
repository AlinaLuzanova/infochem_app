import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {AppIcon, AppStyles} from '../AppStyles';
import {Configuration} from '../Configuration';
import DrawerContainer from '../components/DrawerContainer';
import CameraScreen from "../screens/CameraScreen";
import MendeleevScreen from "../screens/MendeleevScreen";
import HistoryScreen from "../screens/HistoryScreen";
import InfoElemento from '../screens/ModalScreen.js';
const Stack = createStackNavigator();

// login stack
const LoginStack = () => (
    <Stack.Navigator
        initialRouteName=" "
        screenOptions={{
            headerTintColor: 'red',
            headerTitleStyle: styles.headerTitleStyle,
            headerMode: 'float',
        }}>
        <Stack.Screen name="Начало" component={WelcomeScreen} />
        <Stack.Screen name="Войти" component={LoginScreen} />
        <Stack.Screen name="Зарегистрироваться" component={SignupScreen} />

    </Stack.Navigator>
);

const HomeStack = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTintColor: 'red',
            headerTitleStyle: styles.headerTitleStyle,
            headerMode: 'float',
        }}>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image style={styles.iconStyle} source={AppIcon.images.menu} />
                    </Pressable>
                ),
                headerLeftContainerStyle: {paddingLeft: 10},
            })}
        />

    </Stack.Navigator>
);
const CameraStack = () => (
    <Stack.Navigator
        initialRouteName=" "
        screenOptions={{
            headerTintColor: 'red',
            headerTitleStyle: styles.headerTitleStyle,
            headerMode: 'float',
        }}>
        <Stack.Screen
            name=" "
            component={CameraScreen}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image style={styles.iconStyle} source={AppIcon.images.menu} />
                    </Pressable>
                ),
                headerLeftContainerStyle: {paddingLeft: 10},
            })}
        />

    </Stack.Navigator>
);
const HistoryStack = () =>(
    <Stack.Navigator
        initialRouteName=" "
        screenOptions={{
            headerTintColor: 'red',
            headerTitleStyle: styles.headerTitleStyle,
            headerMode: 'float',
        }}>
        <Stack.Screen
            name=" "
            component={HistoryScreen}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image style={styles.iconStyle} source={AppIcon.images.menu} />
                    </Pressable>
                ),
                headerLeftContainerStyle: {paddingLeft: 10},
            })}
        />


    </Stack.Navigator>

);
const MendeleevStack = () =>(
    <Stack.Navigator
        initialRouteName=" "
        screenOptions={{
            headerTintColor: 'red',
            headerTitleStyle: styles.headerTitleStyle,
            headerMode: 'float',
        }}>
        <Stack.Screen
            name=" "
            component={MendeleevScreen}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image style={styles.iconStyle} source={AppIcon.images.menu} />
                    </Pressable>
                ),
                headerLeftContainerStyle: {paddingLeft: 10},
            })}
        />
        <Stack.Group
            screenOptions={() => ({
                presentation: 'modal',
                headerRight: () => null,

            })}>
            <Stack.Screen name="InfoElemento" component={InfoElemento} />

        </Stack.Group>


    </Stack.Navigator>

);


const BottomTab = createBottomTabNavigator();

const TabNavigator = () => (
    <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarInactiveTintColor: 'grey',
            tabBarActiveTintColor: AppStyles.color.tint,
            tabBarIcon: ({focused}) => {
                return (
                    <Image
                        style={{
                            tintColor: focused ? AppStyles.color.tint : AppStyles.color.grey,
                        }}
                        source={AppIcon.images.home}
                    />
                );
            },
            headerShown: false,
        }}>
        <BottomTab.Screen
            options={{tabBarLabel: 'Рисовать'}}
            name="HomeStack"
            component={HomeStack}
        />
        <BottomTab.Screen
            options={{tabBarLabel: 'Сканировать'}}
            name="CameraStack"
            component={CameraStack}
        />
        <BottomTab.Screen
            options={{tabBarLabel: 'История'}}
            name="HistoryStack"
            component={HistoryStack}
        />
        <BottomTab.Screen
            options={{tabBarLabel: 'Справки'}}
            name="MendeleevStack"
            component={MendeleevStack}
        />
    </BottomTab.Navigator>
);

// drawer stack
const Drawer = createDrawerNavigator();
const DrawerStack = () => (
    <Drawer.Navigator
        screenOptions={{
            drawerStyle: {outerWidth: 200},
            drawerPosition: 'left',
            headerShown: false,
        }}
        drawerContent={({navigation}) => (
            <DrawerContainer navigation={navigation} />
        )}>
        <Drawer.Screen name="Tab" component={TabNavigator} />
    </Drawer.Navigator>
);

// Manifest of possible screens
const RootNavigator = () => (
    <Stack.Navigator
        initialRouteName="LoginStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
);

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
    iconStyle: {tintColor: AppStyles.color.infochem, width: 30, height: 30},
});

export default AppNavigator;