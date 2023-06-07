import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { windowWidth, fonts } from '../../utils/fonts';
import { apiURL, getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ZavalabsScanner from 'react-native-zavalabs-scanner'
import MyFooter from '../../components/MyFooter';
import DatePicker from 'react-native-datepicker'
export default function Waktu({ navigation, route }) {


    const __getWaktu = () => {

        axios.post(apiURL + 'waktu').then(res => {
            console.log(res.data);
            setKirim(res.data)
        })

    }

    useEffect(() => {
        __getWaktu();
    }, [])


    const [kirim, setKirim] = useState({
        tanggal_awal: '',
        tanggal_akhir: ''
    });
    const [loading, setLoading] = useState(false);
    const sendServer = () => {
        setLoading(true);
        console.log(kirim);
        axios.post(apiURL + 'waktu_update', kirim).then(res => {

            console.log(res.data)
            setLoading(false);


            Alert.alert(MYAPP, 'Countdown Berhasil diupdate !');
            __getWaktu();
            console.log(res.data);


        })
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
        }}>
            <MyHeader />
            <View style={{
                flex: 1,
            }}>
                <ScrollView showsVerticalScrollIndicator={false} >


                    <View style={{
                        padding: 20,
                        backgroundColor: colors.white,

                    }}>


                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',


                        }}>
                            <Text style={{
                                fontFamily: fonts.primary.normal,
                                fontSize: 16,
                                flex: 0.5,
                            }}>Tanggal Mulai</Text>
                            <View style={{
                                flex: 1,
                            }}>
                                <DatePicker
                                    style={{ width: '100%' }}
                                    date={kirim.tanggal_awal}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0,

                                        },
                                        dateInput: {
                                            marginLeft: 36,
                                            borderWidth: 2,
                                            borderRadius: 5,
                                            borderColor: colors.primary
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {
                                        setKirim({
                                            ...kirim,
                                            tanggal_awal: date
                                        })
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            alignItems: 'center',


                        }}>
                            <Text style={{
                                fontFamily: fonts.primary.normal,
                                fontSize: 16,
                                flex: 0.5,
                            }}>Tanggal Berakhir</Text>
                            <View style={{
                                flex: 1,
                            }}>
                                <DatePicker
                                    style={{ width: '100%' }}
                                    date={kirim.tanggal_akhir}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0,

                                        },
                                        dateInput: {
                                            marginLeft: 36,
                                            borderWidth: 2,
                                            borderRadius: 5,
                                            borderColor: colors.primary
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {
                                        setKirim({
                                            ...kirim,
                                            tanggal_akhir: date
                                        })
                                    }}
                                />
                            </View>
                        </View>

                        <MyGap jarak={20} />
                        {loading && <ActivityIndicator color={colors.primary} size="large" />}

                        {!loading && <MyButton warna={colors.primary} onPress={sendServer} title="Update Countdown" Icons="refresh-outline" />}


                    </View>




                </ScrollView>
            </View>
            <MyFooter />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})