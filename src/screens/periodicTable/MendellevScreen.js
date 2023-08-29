import React, {Component, Fragment, useLayoutEffect} from "react"

import { StyleSheet, Text, View } from 'react-native';
import {connect} from "react-redux";

const MendellevScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Table',
        });
    }, []);
    
    return(
        <View></View>

        );
}
const styles = StyleSheet.create({});
const mapStateToProps = (state) => ({
    user: state.auth.user,
});
export default connect(mapStateToProps)(MendellevScreen);