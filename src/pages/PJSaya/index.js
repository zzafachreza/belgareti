import { Alert, StyleSheet, Text, View, Image, Modal, FlatList, ActivityIndicator, Dimensions, ImageBackground } from 'react-native'
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
import MyMenu from '../../components/MyMenu';

const MyListTarget = ({ onPress, kategori, logo, target = null, target_avg = null, judul, detail, point = null, uang = null, jenis = null }) => {

    let warnaTarget = colors.hijau;
    let persent = target

    if (persent >= 80 && persent <= 100) {
        warnaTarget = colors.hijau
    } else if (persent >= 50 && persent < 80) {
        warnaTarget = colors.kuning
    } else if (persent >= 0 && persent < 50) {
        warnaTarget = colors.merah
    }




    return (
        <>
            {/* RnV */}

            <TouchableOpacity onPress={onPress} style={{
                flexDirection: 'row', marginHorizontal: '7%', marginVertical: '1%', borderRadius: 10, backgroundColor: colors.white,
                borderWidth: 4,
                borderColor: colors.primary,
            }}>


                <View style={{
                    flex: 0.4,
                    padding: 7,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {target != null && <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 25,
                        color: warnaTarget
                    }}>{target}%</Text>}

                </View>
                <View style={{
                    flex: 1,
                    padding: 7,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        fontSize: 15,
                        color: colors.primary
                    }}>{judul}</Text>

                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                }}>
                    <Icon type='ionicon' name='chevron-forward' color={colors.primary} size={25} />
                </View>
            </TouchableOpacity>
        </>
    )
}

const MyListTargetAmanah = ({ onPress, kategori, tanggal, target = null, target_avg = null, judul, detail, point = null, uang = null, jenis = null }) => {

    let warnaTarget = colors.hijau;
    let persent = target

    if (persent >= 80 && persent <= 100) {
        warnaTarget = colors.hijau
    } else if (persent >= 50 && persent < 80) {
        warnaTarget = colors.kuning
    } else if (persent >= 0 && persent < 50) {
        warnaTarget = colors.merah
    }




    return (
        <>
            {/* RnV */}

            <TouchableOpacity onPress={onPress} style={{
                flexDirection: 'row', marginHorizontal: '7%', marginVertical: '1%', borderRadius: 10, backgroundColor: colors.white,
                borderWidth: 4,
                borderColor: colors.primary,
            }}>


                <View style={{
                    flex: 0.4,
                    padding: 7,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {target != null && <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: 25,
                        color: warnaTarget
                    }}>{target}%</Text>}

                </View>
                <View style={{
                    flex: 1,
                    padding: 7,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        fontSize: 15,
                        color: colors.primary
                    }}>{judul}</Text>
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        fontSize: 13,
                        color: colors.hijau
                    }}>{tanggal}</Text>

                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                }}>
                    <Icon type='ionicon' name='chevron-forward' color={colors.primary} size={25} />
                </View>
            </TouchableOpacity>
        </>
    )
}

const MyListTargetIkhlas = ({ onPress, kategori, tanggal, target = null, target_avg = null, judul, detail, point = null, uang = null, jenis = null }) => {

    let warnaTarget = colors.hijau;
    let persent = target

    if (persent >= 80 && persent <= 100) {
        warnaTarget = colors.hijau
    } else if (persent >= 50 && persent < 80) {
        warnaTarget = colors.kuning
    } else if (persent >= 0 && persent < 50) {
        warnaTarget = colors.merah
    }




    return (
        <>
            {/* RnV */}

            <TouchableOpacity onPress={onPress} style={{
                flexDirection: 'row', marginHorizontal: '7%', marginVertical: '1%', borderRadius: 10, backgroundColor: colors.white,
                borderWidth: 4,
                borderColor: colors.primary,
            }}>



                <View style={{
                    flex: 1,
                    padding: 7,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        fontSize: 15,
                        color: colors.primary
                    }}>{judul}</Text>
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        fontSize: 13,
                        color: colors.hijau
                    }}>{tanggal}</Text>

                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                }}>
                    <Icon type='ionicon' name='chevron-forward' color={colors.primary} size={25} />
                </View>
            </TouchableOpacity>
        </>
    )
}


export default function PJSaya({ navigation }) {


    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState({});
    const [data, setData] = useState([]);
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
        axios.post(apiURL + 'target').then(res => {
            console.log('target', res.data);
            setData(res.data);


        })
    }



    return (






        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            position: 'relative'
        }}>





            {/* header */}
            <MyHeader img={user.foto_user} user={user.nama_lengkap} onPress={() => setModalVisible(true)} />
            <View style={{
                marginHorizontal: '7%'
            }}>
                <Text style={{

                    fontFamily: fonts.primary.normal,
                    color: colors.primary,
                    fontSize: 40,
                    marginBottom: 10,
                }}>PJ Saya</Text>

                <View style={{
                    backgroundColor: colors.border,
                    // padding: 10,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    borderRadius: 10,
                }}>
                    <View style={{
                        flex: 1,
                        borderRightWidth: 5,
                        borderRightColor: colors.primary,
                        padding: 10,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary.normal,
                            fontSize: 15,
                            color: colors.primary
                        }}>Pertanggung Jawaban</Text>
                        <Text style={{
                            fontFamily: fonts.primary.normal,
                            fontSize: 15,
                            color: colors.primary
                        }}><Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 35,
                            color: colors.hijau
                        }}>5%</Text></Text>
                    </View>
                    <View style={{
                        flex: 0.4,
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary.normal,
                            fontSize: 15,
                            color: colors.primary
                        }}>Sisa Hari</Text>
                        <Text style={{
                            fontFamily: fonts.primary.normal,
                            fontSize: 15,
                            color: colors.primary
                        }}><Text style={{
                            fontFamily: fonts.primary[800],
                            fontSize: 35,
                            color: colors.primary
                        }}>20</Text></Text>
                    </View>
                </View>
            </View>




            <ScrollView>
                <View style={{
                    flex: 1,
                    marginTop: 10,
                }}>
                    <Text style={{
                        marginHorizontal: '7%',
                        marginTop: '1%',
                        fontFamily: fonts.primary.normal,
                        fontSize: 20,
                    }}>Daftar Tanggung Jawab</Text>



                    <MyListTarget judul="Membersihkan Kamar" target={85} />
                    <MyListTarget judul="Mencuci Piring" target={50} />
                    <MyListTarget judul="Mengantarkan Breakfast" target={5} />

                    <Text style={{
                        marginHorizontal: '7%',
                        marginTop: '1%',
                        fontFamily: fonts.primary.normal,
                        fontSize: 20,
                    }}>Penyelesaian Amanah</Text>



                    <MyListTargetAmanah judul="Pemasangan TV" target={85} tanggal={moment().format('DD/MM/YYYY')} />

                    <Text style={{
                        marginHorizontal: '7%',
                        marginTop: '1%',
                        fontFamily: fonts.primary.normal,
                        fontSize: 20,
                    }}>Penyelesaian Ikhlas</Text>



                    <MyListTargetIkhlas judul="Pemasangan Antena" tanggal={moment().format('DD/MM/YYYY')} />

                    <TouchableOpacity onPress={() => navigation.navigate('TargetAdd')} style={{

                        borderColor: colors.primary,
                        backgroundColor: colors.primary,
                        padding: 10,
                        marginHorizontal: '7%',
                        alignItems: 'center',
                        marginTop: '1%',
                        borderRadius: 10,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: 30,
                            height: 30,
                            backgroundColor: colors.white,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                        }}>
                            <Icon type='ionicon' name='add' color={colors.primary} />
                        </View>
                        <Text style={{
                            left: 20,
                            fontFamily: fonts.primary.normal,
                            color: colors.white,
                            fontSize: 18,
                        }}>Tambah Ikhlas</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>


            <Modal
                animationInTiming={1000}
                animationIn="slideInRight"
                animationOut="SlideOitRight"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <MyMenu />
            </Modal>
            {/* menu */}

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