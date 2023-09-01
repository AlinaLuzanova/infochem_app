import React from 'react';
import { StyleSheet, View} from 'react-native';
import MenuButton from '../components/MenuButton';
import {AppIcon} from '../AppStyles';
//import auther from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {logout} from '../reducers';

export default function DrawerContainer({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="Выйти"
          source={AppIcon.images.logout}
          onPress={() => {
                navigation.navigate('LoginStack');
              }
          }
        />
        <MenuButton
            title="Нарисовать молекулу"
            source={AppIcon.images.logout}
            onPress={() => {
              navigation.navigate('DrawerStack');
            }
            }
        />
          <MenuButton
              title="Сканировать молекулу"
              source={AppIcon.images.logout}
              onPress={() => {
                  navigation.navigate('CameraStack');
              }
              }
          />
          <MenuButton
              title="История поиска"
              source={AppIcon.images.logout}
              onPress={() => {
                  navigation.navigate('HistoryStack');
              }
              }
          />
          <MenuButton
              title="Справки"
              source={AppIcon.images.logout}
              onPress={() => {
                  navigation.navigate('MendeleevStack');
              }
              }
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
});
