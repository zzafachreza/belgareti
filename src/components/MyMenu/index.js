import { Image, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'

import { colors, fonts, windowHeight } from '../../utils'
import { useNavigation } from '@react-navigation/native';
import { MYAPP, getData, storeData } from '../../utils/localStorage';

export default function MyMenu() {

    const navigation = useNavigation();

    const [user, setUser] = useState({});

    useEffect(() => {
        getData('user').then(uu => {
            setUser(uu)
        })
    }, [])


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
                <TouchableNativeFeedback onPress={() => navigation.navigate('Home')} style={{
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
                {user.level == 'Admin' &&
                    <TouchableNativeFeedback onPress={() => navigation.navigate('Belgareti')} style={{
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
                }

                {(user.level == 'Admin' || user.kategori == 'Jayagiri') &&

                    < TouchableNativeFeedback onPress={() => navigation.navigate('PJKategori1', {
                        kategori: 'Jayagiri'
                    })} style={{
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

                }


                {(user.level == 'Admin' || user.kategori == 'Villa') &&
                    <TouchableNativeFeedback onPress={() => navigation.navigate('PJKategori2', {
                        kategori: 'Villa'
                    })} style={{
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

                }

                {(user.level == 'Admin' || user.kategori == 'RnV') &&

                    <TouchableNativeFeedback onPress={() => navigation.navigate('PJKategori3', {
                        kategori: 'RnV'
                    })} style={{
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

                }






                {(user.level == 'Admin' || user.kategori == 'Kebun') &&

                    <TouchableNativeFeedback onPress={() => navigation.navigate('PJKategori4', {
                        kategori: 'Kebun'
                    })} style={{
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

                }

                <TouchableNativeFeedback onPress={() => navigation.navigate('PJSaya')} style={{
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

                {user.level == 'Admin' && <TouchableNativeFeedback onPress={() => navigation.navigate('AAAtur')} style={{
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
                </TouchableNativeFeedback>}

                <TouchableNativeFeedback onPress={() => {

                    Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
                        {
                            text: 'Batal',
                            style: "cancel"
                        },
                        {
                            text: 'IYA',
                            onPress: () => {
                                storeData('user', null);

                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Splash' }],
                                });
                            }
                        }
                    ])
                }} style={{
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


        </View >
    )
}

const styles = StyleSheet.create({})