import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Text from '../../components/Text/Text';
import { color } from '../../theme/color';
import { spacing } from '../../theme/spacing';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Home = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({ label: 'Apple', value: 'apple' });
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

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
                <View style={[styles.rows, { marginTop: spacing[8], alignItems: 'center' }]} >
                    <Text preset='h2' style={{ fontWeight: '700', color: 'white' }}>Covid-29</Text>
                    {/* <View style={styles.dropDownContainer}> */}
                    <TouchableOpacity
                        style={[styles.buttonDesign, { backgroundColor: color.white, width: '35%', paddingHorizontal: spacing[1] }]}
                        onPress={() => { }}
                    >
                        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image source={require('../../images/usa.png')}></Image>
                            <Text preset='small' style={[styles.buttonText, { paddingLeft: spacing[1], color: color.text, }]}>USA</Text>
                            <Icon name="chevron-down" size={20} color='#61688B' />
                        </View>

                    </TouchableOpacity>
                    {/* </View> */}
                    {/* <View style={styles.dropDownContainer}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            itemSeparator={true}
                        >
                            <Text preset='small'>Hello</Text>
                        </DropDownPicker>
                    </View> */}

                </View>
                <View style={{ marginTop: spacing[8] }}>
                    <Text preset='h4' style={{ color: 'white', fontWeight: 'bold' }}>Are you feeling sick?</Text>
                    <Text preset='small' style={{ color: 'white', marginTop: spacing[2] }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.buttonDesign, { backgroundColor: color.red }]}
                    // onPress={() => {    }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="phone-call" size={20} color='white' />
                            <Text preset='small' style={[styles.buttonText, { paddingLeft: spacing[1] }]}>Call Now</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonDesign, { backgroundColor: color.blue }]}
                    // onPress={() => {    }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="message-circle" size={20} color='white' />
                            <Text preset='small' style={[styles.buttonText, { paddingLeft: spacing[1] }]}>Send SMS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
            <View style={styles.lowerSection}>
                <Text preset='h3' style={{ color: color.text, marginBottom: spacing[6] }}>Prevention</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.item}>
                        <Image source={require('../../../src/images/distance.png')} />
                        <Text preset='small' style={styles.itemText}>Avoid close contact</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../../src/images/hand.png')} />
                        <Text preset='small' style={styles.itemText}>Clean your hands often</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../../src/images/mask.png')} />
                        <Text preset='small' style={styles.itemText}> Wear a facemask</Text>
                    </View>
                </View>
                <View style={{ marginTop: 50 }}>
                    <View >
                        <AnimatedLinearGradient
                            colors={["#56549E", "#AEA1E5"]}
                            start={[1, 1]}
                            end={[0, 0]}
                            location={[0.25, 0.4, 1]}
                            style={styles.gradientBox} >
                            <View style={{ flex: 0.42 }}></View>
                            <Image source={require('../../../src/images/female.png')} style={{ position: 'absolute', bottom: 0, left: 25 }} />
                            <View style={{ flex: 0.50 }}>
                                <Text preset='small' style={{ marginTop: spacing[3], color: 'white', fontWeight: 'bold' }}>Do your own Test</Text>
                                <Text preset='small' style={{ marginTop: spacing[1], color: 'white', lineHeight: 22 }} >Follow the instructions to do your own test.</Text>
                            </View>

                        </AnimatedLinearGradient>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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
    dropDownContainer: {

        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    buttonContainer: {
        marginVertical: spacing[7],
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonDesign: {
        paddingVertical: spacing[3],
        // backgroundColor: color.green,
        alignItems: 'center',
        width: '45%',
        borderRadius: spacing[5]
    },
    buttonText: {
        color: color.white,
        // textTransform: 'capitalize',
        fontWeight: '700',
        letterSpacing: 1
    },
    lowerSection: {
        marginVertical: spacing[7],
        paddingHorizontal: spacing[5],
    },
    item: {
        flex: 0.33,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: spacing[1]
    },
    itemText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: color.text
    },
    gradientBox: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        borderRadius: spacing[4]
    }
});
export default Home;