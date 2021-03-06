import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import { Feather, AntDesign } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { COLORS, SIZES, colour } from '../../assets/colors/theme';

import AuthLayout from '../../components/auth/AuthLayout';
import AuthformInput from '../../components/auth/AuthformInput';
import TextButton from '../../components/auth/TextButton';
import { passwordRecoverySchema } from '../../validation/PwdResetValidation'





Feather.loadFont();

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [isLoading, setLoading] = React.useState(false)

    function isEnabledEmail() {
        return email != "" && emailError == ""
    }





    React.useEffect(() => {
        bootstrapAsync()
    }, [])

    const bootstrapAsync = async () => {
        let userTokens;
        try {
            userTokens = await AsyncStorage.getItem('signedIn')
            if (userTokens !== null) {
                var obj = JSON.parse(userTokens);
                //console.log(obj)
                //setUserData(obj)
            } else {
                console.log('no data found')
            }
        }
        catch {
            console.log('Couldnt get token')
        }
    }

    const forgotPassword = (Email) => {
        //console.log(id, date)
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
                    navigation.replace('Otp', {
                        code: json.otp,
                        email: Email,
                        userId: json.user._id
                    })
                } else {
                    Alert.alert('', 'Incorrect email address')
                }

            })
            .catch(error => {
                setLoading(false)
                console.log("response error ===>", error)
            })
    }

    React.useEffect(() => {

    }, [email])

    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please Enter your email adress to recover your password"
            titleContainerStyle={{
                // marginTop: SIZES.padding * 2,

            }} >
            {/*  Form Input */}
            <View style={{
                flex: 1,
                marginTop: SIZES.padding * 2,
                marginHorizontal: 10,
            }}>
                <AuthformInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChangeText={(value) => {
                        // Utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View style={{
                            justifyContent: 'center'
                        }}>
                            {email == "" || (email != "" && emailError == "") ? <Feather name="check-circle" color={COLORS.green}
                                size={20} /> : <Feather name="x-circle" color={COLORS.red} size={20} />}
                        </View>
                    }
                />
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
            </View>
            {/* Button */}
            <TextButton
                label="Send Email"
                disabled={isEnabledEmail() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding * 1.5,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnabledEmail() ? COLORS.pink : COLORS.lightpink,
                    marginHorizontal: 10,
                }}
                onPress={() => {

                    //console.log('===>',email)
                    forgotPassword(email)
                }}
            />
            <TextButton
                label="Cancel"
                //disabled = {isEnabledEmail() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: 20,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.pink,
                    marginHorizontal: 10,
                }}
                onPress={() => navigation.goBack()}
            />

        </AuthLayout>
    );
}

const styles = StyleSheet.create({})

export default ForgotPassword;
