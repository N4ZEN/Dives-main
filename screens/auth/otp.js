import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Platform, ActivityIndicator, Alert } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { COLORS, SIZES, colour } from '../../assets/colors/theme';

import AuthLayout from '../../components/auth/AuthLayout';
import TextButton from '../../components/auth/TextButton';


const otp = ({ navigation, route }) => {

    const [timer, setTimer] = useState(60)
    const { code, email, userId } = route.params
    const [isLoading, setLoading] = React.useState(false)
    const [otpCode, setCode] = React.useState(code)
    const pinRef1 = useRef(null);
    const pinRef2 = useRef(null);
    const pinRef3 = useRef(null);
    const pinRef4 = useRef(null);
    const pinRef5 = useRef(null);
    const pinRef6 = useRef(null);


    const [pin1, setpin1] = useState("");
    const [pin2, setpin2] = useState("");
    const [pin3, setpin3] = useState("");
    const [pin4, setpin4] = useState("");
    const [pin5, setpin5] = useState("");
    const [pin6, setpin6] = useState("");

    function isValid() {
        return pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== '' && pin5 !== '' && pin6 !== ''
    }

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== '' && pin5 !== '' && pin6 !== '') {

            const code = `${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`
            console.log(code)
        }

    }, [pin1, pin2, pin3, pin4, pin5, pin6])

    const resendEmilFunc = (Email) => {
        setLoading(true)
        fetch(`http://45.32.125.99/dives/public/api/forgot-password`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: Email,
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log('response ==>', json)
                setLoading(false)
                if (json.status == 200) {
                    Alert.alert('', 'Link to reset email has been sent to ' + Email)
                    setCode(json.otp)
                } else {
                    Alert.alert('', 'Incorrect email address')
                }

            })
            .catch(error => {
                setLoading(false)
                console.log("response error ===>", error)
            })
    }

    const checkOtpCode = () => {
        const code = `${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`
        if (otpCode == code) {
            navigation.replace("ResetPassword", {
                userId: userId
            })
        } else {
            Alert.alert('', 'OTP didn\'t match')
        }
    }

    return (
        <AuthLayout
            title="OTP Authentication"
            subtitle="An authentication code has been sent to your email."
            titleContainerStyle={{
                //marginTop: SIZES.padding *2
            }}>
            {/**OTP Input */}
            <View
                style={{
                    flex: 1,
                    marginVertical: SIZES.padding * 2,
                    marginHorizontal: 10
                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10, }}>
                    <View >
                        <TextInput
                            ref={pinRef1}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            onChangeText={(pin1) => {
                                setpin1(pin1)
                                if (pin1 !== "") {
                                    pinRef2.current.focus();
                                }
                            }}
                            style={styles.textinput}
                        />
                    </View>
                    <View >
                        <TextInput
                            ref={pinRef2}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            onChangeText={(pin2) => {
                                setpin2(pin2)
                                if (pin2 !== '') {
                                    pinRef3.current.focus();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    pinRef1.current.focus()
                                }
                            }}
                            style={styles.textinput}
                        />
                    </View>
                    <View >
                        <TextInput
                            ref={pinRef3}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            onChangeText={(pin3) => {
                                setpin3(pin3)
                                if (pin3 !== "") {
                                    pinRef4.current.focus();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    pinRef2.current.focus()
                                }
                            }}
                            style={styles.textinput}
                        />
                    </View>
                    <View >
                        <TextInput
                            ref={pinRef4}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            onChangeText={(pin4) => {
                                setpin4(pin4)
                                if (pin4 !== "") {
                                    pinRef5.current.focus();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    pinRef3.current.focus()
                                }
                            }}
                            style={styles.textinput}
                        />
                    </View>
                    <View >
                        <TextInput
                            ref={pinRef5}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            onChangeText={(pin5) => {
                                setpin5(pin5)
                                if (pin5 !== "") {
                                    pinRef6.current.focus();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    pinRef4.current.focus()
                                }
                                // if(Platform.OS === 'android') {
                                //    setpin4('')
                                // }
                            }}
                            style={styles.textinput}
                        />
                    </View>
                    <View >
                        <TextInput
                            ref={pinRef6}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            onChangeText={(pin6) => {
                                setpin6(pin6)
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    pinRef5.current.focus()
                                }
                            }}
                            style={styles.textinput}
                        />
                    </View>
                </View>

                {/* Countdown Timer */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: SIZES.padding
                }}>
                    <Text style={{
                        color: COLORS.darkGray,
                        fontFamily: 'PoppinsRegular',
                        fontSize: 14,
                    }}>
                        Didn't recieve code?
                    </Text>
                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null,
                        }}
                        labelStyle={{
                            color: COLORS.darkpink1,
                            fontFamily: timer == 0 ? 'PoppinsBold' : 'PoppinsRegular',
                            fontSize: 14,

                        }}
                        onPress={() => {
                            setTimer(60);
                            resendEmilFunc(email)
                        }} />
                </View>
            </View>

            {/*Footer */}
            <View style={{
                marginTop: 230,
                marginHorizontal: 10,
                marginBottom: 10,
            }}>
                <TextButton
                    label="Continue"
                    disabled={!isValid()}
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: isValid() ? COLORS.pink : COLORS.lightpink,
                    }}
                    onPress={() => {
                        checkOtpCode()
                    }}
                />

            </View>
            {isLoading &&
                <ActivityIndicator
                    size='large'
                    color='#000'
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                />
            }
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    textinput: {
        width: 50,
        height: 60,
        textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        fontSize: 25,
        // padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        margin: 3,
        borderColor: COLORS.darkGray1,
    },
})

export default otp;
