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
import CurrencyInput from 'react-native-currency-input';
export default function TargetAdd({ navigation, route }) {




    const [kirim, setKirim] = useState({
        kategori: 'Jayagiri',
        judul: '',
        keterangan: '',
        target: '',
        jenis: 'Rp',
    });
    const [loading, setLoading] = useState(false);
    const sendServer = () => {
        setLoading(true);
        console.log(kirim);
        axios.post(apiURL + 'target_add', kirim).then(res => {

            setLoading(false);

            if (res.data.status == 200) {
                Alert.alert(MYAPP, res.data.message);
                console.log(res.data);

                navigation.goBack();
            } else {
                showMessage({
                    type: 'danger',
                    message: res.data.message
                })
            }
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

                        <MyPicker value={kirim.kategori} onValueChange={x => setKirim({
                            ...kirim,
                            kategori: x
                        })} iconname='grid' label="Kategori" data={[
                            { label: 'Jayagiri', value: 'Jayagiri' },
                            { label: 'Villa', value: 'Villa' },
                            { label: 'RnV', value: 'RnV' },
                            { label: 'Kebun', value: 'Kebun' },
                        ]} />
                        <MyGap jarak={10} />
                        <MyInput textColor={colors.primary} colorIcon={colors.primary} label="Judul Target" iconname="ribbon" placeholder="Masukan judul target" value={kirim.judul} onChangeText={x => setKirim({ ...kirim, judul: x })} />
                        <MyGap jarak={10} />
                        <MyInput textColor={colors.primary} colorIcon={colors.primary} label="Detail Target" iconname="list" placeholder="Masukan detail target" value={kirim.keterangan} onChangeText={x => setKirim({ ...kirim, keterangan: x })} />


                        <MyGap jarak={10} />
                        <MyPicker value={kirim.jenis} onValueChange={x => setKirim({
                            ...kirim,
                            jenis: x
                        })} iconname='options' label="Range" data={[
                            { label: 'Rp', value: 'Rp' },
                            { label: '%', value: '%' },
                            { label: 'Point', value: 'Point' },

                        ]} />
                        <MyGap jarak={10} />

                        {kirim.jenis == 'Rp' &&
                            <>
                                <View
                                    style={{

                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 5,
                                    }}>
                                    <Icon type="ionicon" name="create" color={colors.primary} size={16} />


                                    <Text style={{
                                        left: 10,

                                        color: colors.primary,
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 12
                                    }}>{`Nilai Target (Berupa ${kirim.jenis} )`}</Text>

                                </View>

                                <CurrencyInput

                                    style={{
                                        backgroundColor: colors.zavalabs,
                                        borderRadius: 10,
                                        paddingLeft: 10,
                                        color: colors.black,
                                        fontSize: 12,
                                        fontFamily: fonts.primary[400],
                                    }}
                                    placeholder="Masukan nilai target rupiah"
                                    value={kirim.target}
                                    // onChangeValue={setValue}

                                    delimiter=","
                                    separator="."
                                    precision={0}
                                    minValue={0}

                                    onChangeValue={x => setKirim({
                                        ...kirim,
                                        target: x
                                    })}
                                />
                            </>}

                        {kirim.jenis != 'Rp' && <MyInput textColor={colors.primary} colorIcon={colors.primary} label={`Nilai Target (Berupa ${kirim.jenis} )`} iconname="create" keyboardType='number-pad' placeholder="Masukan nilai target" value={kirim.target} onChangeText={x => setKirim({ ...kirim, target: x })} />}

                        <MyGap jarak={20} />
                        {loading && <ActivityIndicator color={colors.primary} size="large" />}

                        {!loading && <MyButton warna={colors.primary} onPress={sendServer} title="Simpan" Icons="download-outline" />}


                    </View>


                </ScrollView>
            </View>
            <MyFooter />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})