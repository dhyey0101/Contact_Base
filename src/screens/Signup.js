import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';


export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                {/* <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.linearGradient}>
                    <Text>Hello</Text>
                </LinearGradient> */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0, 79, 109, 1)', 'rgba(27, 117, 187, 1)']}
                    style={styles.linearGradient}
                />

                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 30 }} >
                    <Text style={{ fontSize: 24 }}>
                        Sign Up
                    </Text>
                </View>
                <View style={{ paddingHorizontal: "5%" }}>
                    <View>
                        <Text>Username</Text>
                    </View>
                    <View>
                        <TextInput
                            style={{ 
                                ...Platform.select({
                                    ios:{
                                        borderRadius: 10, padding: 5, backgroundColor:'#F9F9F9' ,color: "#C9C7C7", paddingVertical: 10
                                    },
                                    android:{
                                        borderRadius: 10, padding: 5, backgroundColor:'#F9F9F9' ,color: "#C9C7C7"
                                    }
                                })
                                
                            }}
                            placeholder={"Username"}
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text>Email</Text>
                    </View>
                    <View style={{flexDirection:'row', backgroundColor:'#F9F9F9', borderRadius: 10, padding: 5,}}>
                        {/* <View> */}
                        <TextInput
                            style={{ 
                                ...Platform.select({
                                    ios:{
                                        width:"90%",borderRadius: 10, padding: 5, backgroundColor:'#F9F9F9' ,color: "#C9C7C7", paddingVertical: 10
                                    },
                                    android:{
                                        width:"90%",borderRadius: 10, padding: 5, backgroundColor:'#F9F9F9' ,color: "#C9C7C7"
                                    }
                                })
                                
                            }}
                            placeholder={"Email"}
                        />
                        {/* </View> */}
                        <View style={{justifyContent:'center'}}>
                            <Image source={require("../../assets/eyes.png")} style={{width:25, height:15}} />
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text>Password</Text>
                    </View>
                    <View style={{flexDirection:'row', backgroundColor:'#F9F9F9', borderRadius: 10, padding: 5, justifyContent:'space-between'}}>
                        {/* <View> */}
                        <TextInput
                            style={{ 
                                ...Platform.select({
                                    ios:{
                                        borderRadius: 10, padding: 5, backgroundColor:'#F9F9F9' ,color: "#C9C7C7", paddingVertical: 10
                                    },
                                    android:{
                                        borderRadius: 10, padding: 5, backgroundColor:'#F9F9F9' ,color: "#C9C7C7"
                                    }
                                })
                                
                            }}
                            secureTextEntry
                            placeholder={"Password"}
                        />
                        {/* </View> */}
                        <View style={{justifyContent:'center', marginRight:10}}>
                            <Image source={require("../../assets/eyes.png")} style={{width:25, height:15}} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>

                    <View style={{backgroundColor:'#1B75BB', borderRadius: 10, alignItems:'center', padding:15, marginTop: 25 }}>
                        <Text style={{color: "#fff"}}>SIGN UP</Text>
                    </View>
                    </TouchableOpacity>
                   
                    <View style={{marginTop: 15, alignItems:'center'}}>
                        <Text style={{fontSize: 16}}>OR</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:'25%', padding: 20, alignItems:'center'}}>
                        <View>
                            <Image source={require("../../assets/Google.png")} style={{width:25, height:25}} />
                        </View>
                        <View>
                            <Image source={require("../../assets/facebook.png")} style={{width:25, height:25}} />
                        </View>
                        <View>
                            <Image source={require("../../assets/apple.png")} style={{width:23, height:25}} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                    <View style={{alignItems:'center', marginTop: "60%"}}>
                        <Text>Have an account! <Text style={{color:'#F6921E'}}>Log In</Text></Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        // flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        // borderRadius: 5
        height: 60
    },
    container: {
        flex: 1,
        backgroundColor:'#fff',


        // justifyContent: 'space-between',
        // alignItems: 'center'
    },
    heading: {
        textAlign: "center",
        padding: 12,
    },
    title: {
        fontWeight: "bold",
    },
});