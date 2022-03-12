import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Formik} from 'formik';

import { COLORS, SIZES, colour } from '../../assets/colors/theme';
import AuthLayout from '../../components/auth/AuthLayout';
import TextButton from '../../components/auth/TextButton';
import AuthformInput from '../../components/auth/AuthformInput';
import { PwdResetSchema } from '../../validation/PwdResetValidation'



const ResetPassword = ({navigation}) => {

    const [password, setPassword] = React.useState("")
    const [isLoading, setLoading] = React.useState(false)
    const [showpassword, setShowPassword] = React.useState(false)
    const [showconfpassword, setShowconfPassword] = React.useState(false)


    const handleResetPassword = () => {
        Alert.alert('Password has been reset')
        navigation.goBack();
       
    }

  
    const formRef = React.useRef();

    const addPwd = () => {
        let curpass = formRef.current.values.password
        setPassword(curpass)
    }

    React.useEffect(() => {
        if ( password === '') {
            return;
        } else {
            handleResetPassword();
        }
    }, [password])


    

    return (
        <AuthLayout
            title = "Reset Password"
            subtitle = "Enter a new password of your choice. Password must be 8-16 characters."
            titleContainerStyle = {{
                marginHorizontal: 5
            }}>
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding,
                    paddingHorizontal: 10,
                }}>
                <Formik
                    initialValues={{
                        confpassword: '',
                        password: '',
                    }}
                    innerRef={formRef}
                    validationSchema={PwdResetSchema}
                    onSubmit={(values, actions) => {
                        addPwd();
                        actions.resetForm();
                        actions.setErrors({});
                        
                    }}
                >
                    {({ handleChange, handleBlur, touched, errors, isValid, handleSubmit, values }) => (
                        <View>
                            {/*Form Input */}
                            <AuthformInput
                                label='Password'
                                autoCompleteType='password'
                                secureTextEntry={!showpassword}
                                containerStyle={{
                                    marginTop: 5,
                                }}
                                errorMsg={touched.password && errors.password}
                                value={values.password}
                                onChangeText={
                                    handleChange('password')
                                }
                                // onSubmitEditing={() => setPassword(values.password)}
                                onBlur={handleBlur('password')}
                                appendComponent={
                                    <TouchableOpacity style={{ justifyContent: 'center', }}
                                        onPress={() => setShowPassword(!showpassword)} >
                                        <View>
                                            {showpassword ? <Feather name="eye-off" color={COLORS.gray}
                                                size={20} style={{ marginVertical: 15, }} /> :
                                                <Feather name='eye' color={COLORS.gray} size={20} style={{ marginVertical: 15, }} />}
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                            <AuthformInput
                                label='Confirm Password'
                                autoCompleteType='password'
                                secureTextEntry={!showconfpassword}
                                containerStyle={{
                                    marginTop: 5,
                                }}
                                value={values.confirmPassword}
                                errorMsg={touched.confirmPassword && errors.confirmPassword}
                                onChangeText={
                                    handleChange('confirmPassword')
                                }
                                onBlur={handleBlur('confirmPassword')}
                                appendComponent={
                                    <TouchableOpacity style={{

                                        justifyContent: 'center',
                                    }}
                                        onPress={() => setShowconfPassword(!showconfpassword)}
                                    >
                                        <View>
                                            {showconfpassword ? <Feather name="eye-off" color={COLORS.gray}
                                                size={20} style={{ marginVertical: 15, }} /> : <Feather name='eye' color={COLORS.gray} size={20} style={{ marginVertical: 15, }} />}

                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                            {/*Submit */}
                            <TextButton
                                label="Submit"
                                disabled={!isValid}
                                buttonContainerStyle={{
                                    height: 55,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    borderRadius: SIZES.radius,
                                    backgroundColor: touched.password && isValid ? COLORS.pink
                                        : COLORS.lightpink
                                }}
                                onPress={handleSubmit}
                            />

                        </View>
                    )}

                </Formik>

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
            
        </AuthLayout>
  )
}

export default ResetPassword

const styles = StyleSheet.create({})