import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {AppIcon, AppStyles} from '../AppStyles';


function WelcomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    tryToLoginFirst();
  }, []);

  async function tryToLoginFirst() {
    setIsLoading(false);
  }

  if (isLoading === true) {
    return (
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={AppStyles.color.infochem}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.IMGlogo} source={assets/assets/images/ITMOlogoRUS.png}></Image>
      <Text style={styles.title}>Thotex</Text>
      <Text style={styles.description}>распознавание молекул по фото</Text>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => navigation.navigate('Войти')}>
        <Text style={styles.loginText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupContainer}
        onPress={() => navigation.navigate('Зарегистрироваться')}>
        <Text style={styles.signupText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 170,
  },
  logo: {
    width: 200,
    height: 200,
  },
  IMGlogo:{
    width:20,
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: AppStyles.color.infochem,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  description: {
    fontSize: 19,
    fontWeight: 'normal',
    color: AppStyles.color.infochem,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.infochem,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  signupContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.infochem,
    marginTop: 15,
  },
  signupText: {
    color: AppStyles.color.infochem,
  },
  spinner: {
    marginTop: 200,
  },
});

export default WelcomeScreen;
