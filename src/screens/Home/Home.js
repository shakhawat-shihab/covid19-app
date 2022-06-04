import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Text from '../../components/Text/Text';
import { color } from '../../theme/color';
import { spacing } from '../../theme/spacing';
import Icon from 'react-native-vector-icons/AntDesign';
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperSection}>
                {/* <Text preset='h2' >Open up App.js to start working on your app!</Text> */}
                <View style={[styles.rows, {}]} >
                    <TouchableOpacity
                    // onPress={() => {   }}
                    >
                        <Image source={require('../../images/menu.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    // onPress={() => {   }}
                    >
                        <Image source={require('../../images/bell.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.rows, { marginTop: spacing[8] }]} >

                    <Text preset='h3' style={{ fontWeight: '600', color: 'white' }}>Covid-19</Text>

                    <TouchableOpacity
                    // onPress={() => {   }}
                    >
                        <Image source={require('../../images/bell.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: spacing[8] }}>
                    <Text preset='h4' style={{ color: 'white', fontWeight: 'bold' }}> Are you feeling sick?</Text>
                    <Text preset='small' style={{ color: 'white', marginTop: spacing[2] }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonDesign}
                        backgroundColor={color.red}
                    // onPress={() => {    }}
                    >
                        <Text preset='small' style={styles.buttonText}>Call Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonDesign}
                        backgroundColor={color.blue}
                    // onPress={() => {    }}
                    >
                        <Icon name="arrowsalt" size={30} color="blue" />
                        <Text preset='small' style={styles.buttonText}>Call Now</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
        // backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    upperSection: {
        height: '45%',
        width: '100%',
        paddingHorizontal: spacing[5],
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: color.purple
    },
    rows: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: spacing[12],
    },
    buttonContainer: {
        marginVertical: spacing[7],
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    buttonDesign: {
        paddingVertical: spacing[4],
        // backgroundColor: color.green,
        alignItems: 'center',
        borderRadius: spacing[2]
    },
    buttonText: {
        color: color.white,
        textTransform: 'capitalize',
        fontWeight: '700',
        letterSpacing: 1
    }
});
export default Home;