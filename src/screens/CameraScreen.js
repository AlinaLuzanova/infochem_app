import React, {useState, useEffect, useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { AppStyles } from '../AppStyles';

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: ' ',
        });
    }, []);

    return (
        <View style={styles.container}>
            {hasPermission ? (
                <Camera style={styles.camera}>
                    <Text style={styles.comment}>Поместите формулу в прямоугольник</Text>
                    <View style={styles.formula}></View>
                    <TouchableOpacity onPress={() => {}} style={styles.snapContainerBig}>
                        <TouchableOpacity onPress={() => {}} style={styles.snapContainer}></TouchableOpacity>
                    </TouchableOpacity>
                </Camera>
            ) : (
                <Text>No access to camera</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    snap: {
        color: '#fff'
    },
    comment: {
        alignItems: "center",
        color: "white",
        marginBottom: '10%'
    },
    formula: {
        align: "center",
        width: '90%',
        height: 270,
        borderWidth: 2,
        borderColor: "white",
        marginBottom: '40%'
    },
    camera:{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",

    },
    snapContainer: {
        borderColor: AppStyles.color.red,
        width: 75,
        height: 75,
        borderRadius: 50,
        justifyContent: "center",
        margin: '5%',
        backgroundColor: AppStyles.color.red

    },
    snapContainerBig: {
        borderWidth: 3,
        borderColor: AppStyles.color.red,
        width: 90,
        height: 90,
        borderRadius: 50,
        justifyContent: "center",
        marginBottom: '5%',


    },
    }

);
const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(CameraScreen);