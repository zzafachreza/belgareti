import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { color } from 'react-native-elements/dist/helpers';
import MyCarouser from '../../components/MyCarouser';

const MyListTarget = ({ kategori, logo, target = null, judul, detail, point = null, uang = null }) => {

    let warnaTarget = colors.hijau;
    if (target >= 80 && target <= 100) {
        warnaTarget = colors.hijau
    } else if (target >= 50 && target < 80) {
        warnaTarget = colors.kuning
    } else if (target >= 0 && target < 50) {
        warnaTarget = colors.merah
    }




    return (
        <>
            {/* RnV */}

            <View style={{
                flexDirection: 'row', marginHorizontal: '7%', marginVertical: '1%', borderRadius: 10, backgroundColor: colors.white,
                borderWidth: 2,
            }}>


                <View style={{
                    flex: 0.5,
                    padding: 7,
                    justifyContent: 'center',


                }}>
                    {target != null && <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 35,
                        color: warnaTarget
                    }}>{target}%</Text>}
                    {point != null && <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 35,
                        color: warnaTarget
                    }}>{point}</Text>}
                    {uang != null && <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 35,
                        color: warnaTarget
                    }}>{uang}JT</Text>}
                </View>
                <View style={{
                    flex: 1,
                    padding: 7,
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 15,
                        color: colors.primary
                    }}>{judul}</Text>
                    <Text style={{
                        fontFamily: fonts.primary[400],
                        fontSize: 15,
                        color: colors.primary
                    }}>{detail}</Text>
                </View>
            </View>
        </>
    )
}


export default function Belgareti({ navigation }) {

    const [user, setUser] = useState({});
    const isFocused = useIsFocused();
    useEffect(() => {

        if (isFocused) {
            __getTransaction();
        }

    }, [isFocused]);

    const __getTransaction = () => {
        getData('user').then(res => {
            setUser(res);
        });
    }







    return (






        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            position: 'relative'
        }}>

            <View style={{
                top: windowHeight / 2.5,
                position: 'absolute',
                backgroundColor: colors.primary,
                width: 20,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10
            }}>
                <Text style={{ fontFamily: fonts.primary.normal, color: colors.kuning, fontSize: 30, textAlign: 'center' }}>A</Text>
                <Text style={{ fontFamily: fonts.primary.normal, color: colors.kuning, fontSize: 30, textAlign: 'center' }}>J</Text>
                <Text style={{ fontFamily: fonts.primary.normal, color: colors.kuning, fontSize: 30, textAlign: 'center' }}>A</Text>
                <Text style={{ fontFamily: fonts.primary.normal, color: colors.kuning, fontSize: 30, textAlign: 'center' }}>I</Text>
                <Text style={{ fontFamily: fonts.primary.normal, color: colors.kuning, fontSize: 30, textAlign: 'center' }}>B</Text>
            </View>
            {/* header */}
            <View style={{

                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 1,
                    paddingLeft: '7%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View>
                        <Image style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40
                        }} source={{
                            uri: user.foto_user
                        }} />
                    </View>
                    <View style={{
                        left: 10,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary
                        }}>{user.nama_lengkap}</Text>

                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: colors.secondary,
                    height: 70,
                    width: 70,
                    borderBottomLeftRadius: 100,
                    alignItems: 'flex-end',
                    padding: 5
                }}>
                    <Icon type='ionicon' name='menu-outline' size={35} color={colors.white} />
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        color: colors.white,
                        fontSize: 15,
                    }}>MENU</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginHorizontal: '7%'
            }}>
                <Text style={{

                    fontFamily: fonts.primary.normal,
                    color: colors.primary,
                    fontSize: 40,
                    marginBottom: 10,
                }}>Belgareti</Text>

                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: colors.primary,
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: 30,
                        height: 30,
                        backgroundColor: colors.secondary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15,
                    }}>
                        <Icon type='ionicon' name='add' color={colors.white} />
                    </View>
                    <Text style={{
                        left: 20,
                        fontFamily: fonts.primary[400],
                        color: colors.primary,
                        fontSize: 25,
                    }}>Tambah Target</Text>
                </TouchableOpacity>
            </View>




            <View style={{
                flex: 1,
                marginTop: 10,
            }}>
                <Text style={{
                    marginHorizontal: '7%',
                    marginTop: '1%',
                    fontFamily: fonts.primary.normal,
                    fontSize: 20,
                }}>Jayagiri</Text>
                <MyListTarget target={100} judul="Jayafiri Guesthouse Hunian Kamar" detail="(Min 70%)" />
                <MyListTarget point={1} judul="Jayafiri Guesthouse Complaint" detail="(Point Min 0)" />
                <MyListTarget uang={0.23} judul="Jayafiri Guesthouse Rata rata Harga Kamar" detail="Rp. 280.000" />


                <Text style={{
                    marginHorizontal: '7%',
                    marginTop: '1%',
                    fontFamily: fonts.primary.normal,
                    fontSize: 20,
                }}>Villa</Text>
                <MyListTarget target={70} judul="Bosca" detail="Perbaikan Villa (Max 70%)" />
                <MyListTarget point={0} judul="Bosca" detail="Complain (Point Min 0)" />
                <MyListTarget uang={15} judul="Bosca" detail="Total Pendapatan (Rp. 20.000.000)" />

            </View>



        </SafeAreaView >


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: windowHeight,
        height: windowWidth / 2,
    },
    imageContainer: {
        flex: 1,
        marginBottom: 1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});