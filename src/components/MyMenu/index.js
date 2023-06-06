import { Image, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

import { colors, fonts, windowHeight } from '../../utils'
import { useNavigation } from '@react-navigation/native';

export default function MyMenu() {

    const navigation = useNavigation();


    return (
        <View style={{
            width: 100,
            zIndex: 99,
            paddingTop: 10,
            alignItems: 'center',
            // justifyContent: 'center',
            height: windowHeight,
            backgroundColor: colors.foourty,
            position: 'absolute',
            right: 0,
            paddingBottom: 10
        }}>


            <ScrollView showsVerticalScrollIndicator={false} style={{
                marginBottom: 20,
            }}>
                <TouchableNativeFeedback onPress={() => navigation.replace('Home')} style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon type='ionicon' name='home' size={30} color={colors.white} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>Beranda</Text>

                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => alert('tes')} style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontFamily: fonts.primary[800],
                                color: colors.white,
                                fontSize: 10
                            }}>BELGARETI</Text>
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>Belgareti</Text>
                    </View>

                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => alert('tes')} style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/jayagiri.png')} style={{
                                width: 40,
                                height: 40
                            }} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>Jayagiri</Text></View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/logo.png')} style={{
                                width: 40,
                                height: 40
                            }} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>Villa</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/rv.png')} style={{
                                width: 40,
                                height: 40
                            }} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>RnV</Text>
                    </View>
                </TouchableNativeFeedback>








                <TouchableNativeFeedback style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/farm.png')} style={{
                                width: 40,
                                height: 40
                            }} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>Kebun</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => navigation.replace('PJSaya')} style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon type='ionicon' name='briefcase' size={30} color={colors.white} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>PJ Saya</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => navigation.replace('AAAtur')} style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon type='ionicon' name='person' size={30} color={colors.white} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>Admin</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginVertical: 5,
                    }}>
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon type='ionicon' name='log-out' size={30} color={colors.white} />
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            textAlign: 'center'
                        }}>Logout</Text>
                    </View>
                </TouchableNativeFeedback>

            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({})