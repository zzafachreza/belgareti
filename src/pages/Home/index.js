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
import 'moment/locale/id';
import { color } from 'react-native-elements/dist/helpers';
import MyCarouser from '../../components/MyCarouser';

const MyListTarget = ({ kategori, logo, target, pj, onPress }) => {

  let warnaTarget = colors.hijau;
  if (target >= 80 && target <= 100) {
    warnaTarget = colors.hijau
  } else if (target >= 50 && target < 80) {
    warnaTarget = colors.kuning
  } else if (target >= 0 && target < 50) {
    warnaTarget = colors.merah
  }


  let warnaPJ = colors.hijau;
  if (pj >= 80 && pj <= 100) {
    warnaPJ = colors.hijau
  } else if (pj >= 50 && pj < 80) {
    warnaPJ = colors.kuning
  } else if (pj >= 0 && pj < 50) {
    warnaPJ = colors.merah
  }

  return (
    <TouchableOpacity onPress={onPress}>
      {/* RnV */}
      <Text style={{
        marginHorizontal: '7%',
        marginTop: '1%',
        fontFamily: fonts.primary.normal,
        fontSize: 15,
      }}>{kategori}</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: '7%', marginVertical: '1%', borderRadius: 5, backgroundColor: colors.border }}>
        <View style={{
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',

        }}>

          <Image source={logo} style={{
            width: 40,
            height: 40,
            borderRadius: 30,
          }} />

        </View>

        <View style={{
          flex: 1,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 13,
            color: colors.primary
          }}>TARGET</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 20,
            color: warnaTarget
          }}>{target}%</Text>
        </View>
        <View style={{
          flex: 1,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 13,
            color: colors.primary
          }}>PJ</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 22,
            color: warnaPJ
          }}>{pj}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


export default function Home({ navigation }) {

  const [user, setUser] = useState({});
  const [data, setData] = useState([{ "kategori": "Jayagiri", "target": 0, "pj": 0 }, { "kategori": "Villa", "target": 0, "pj": 0 }, { "kategori": "RnV", "target": 0, "pj": 0 }, { "kategori": "Kebun", "target": 0, "pj": 0 }]);

  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [waktu, setWaktu] = useState({
    tanggal_awal: moment().format('YYYY-MM-DD'),
    tanggal_akhir: moment().format('YYYY-MM-DD'),
  });

  const [sisaHari, setSisaHari] = useState(moment(waktu.tanggal_akhir).fromNow(true));
  const [warnaHari, setWarnaHari] = useState(colors.hijau);

  const __getWaktu = () => {

    axios.post(apiURL + 'waktu').then(res => {
      console.log(res.data);
      setWaktu(res.data);
      setSisaHari(moment(res.data.tanggal_akhir).fromNow(true));
      let hari = parseInt(moment(res.data.tanggal_akhir).fromNow(true).split(" ")[0]);

      if (hari >= res.data.hijau_min && hari <= res.data.hijau_max) {
        setWarnaHari(colors.hijau);
      } else if (hari >= res.data.kuning_min && hari <= res.data.kuning_max) {
        setWarnaHari(colors.kuning);
      } else if (hari >= res.data.merah_min && hari <= res.data.merah_max) {
        setWarnaHari(colors.merah);
      }


      setLoading(false);

    })

  }


  useEffect(() => {

    if (isFocused) {
      __getTransaction();
      __getWaktu();
    }

  }, [isFocused]);

  const __getTransaction = () => {
    getData('user').then(res => {
      setUser(res);
    });

    axios.post(apiURL + 'get_target_all').then(res => {
      console.log(res.data);
      setData(res.data)
    })
  }

  const btnKeluar = () => {
    Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
      {
        text: 'Batal',
        style: "cancel"
      },
      {
        text: 'Keluar',
        onPress: () => {
          storeData('user', null);

          navigation.reset({
            index: 0,
            routes: [{ name: 'Splash' }],
          });
        }
      }
    ])
  };





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


      <MyHeader />


      {/* coundown hari */}
      <View style={{ flexDirection: 'row', paddingHorizontal: '7%', marginTop: '4%', marginBottom: '4%' }}>
        <View style={{
          flex: 1,
          marginRight: 2,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: colors.border
        }}>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 16,
            color: colors.primary
          }}>Berjalan</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 25,
            color: colors.hijau
          }}>{loading ? '0 Hari' : moment(waktu.tanggal_awal).toNow(true)}</Text>
        </View>
        <View style={{
          marginLeft: 2,
          flex: 1,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: colors.border
        }}>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 16,
            color: colors.primary
          }}>Sisa Hari</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 25,
            color: warnaHari
          }}>{loading ? '0 Hari' : sisaHari}</Text>
        </View>
      </View>

      {/* coundown hari */}




      <View style={{
        flex: 1,
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MyListTarget onPress={() => navigation.navigate('PJKategori', {
            kategori: 'Jayagiri'
          })} kategori="Jayagiri" logo={require('../../assets/jayagiri.png')} target={parseFloat(data[0].target)} pj={parseFloat(data[0].pj)} />
          <MyListTarget onPress={() => navigation.navigate('PJKategori', {
            kategori: 'Villa'
          })} kategori="Villa" logo={require('../../assets/logo.png')} target={parseFloat(data[1].target)} pj={parseFloat(data[1].pj)} />
          <MyListTarget onPress={() => navigation.navigate('PJKategori', {
            kategori: 'RnV'
          })} kategori="RnV" logo={require('../../assets/rv.png')} target={parseFloat(data[2].target)} pj={parseFloat(data[1].pj)} />
          <MyListTarget onPress={() => navigation.navigate('PJKategori', {
            kategori: 'Kebun'
          })} kategori="Kebun" logo={require('../../assets/farm.png')} target={parseFloat(data[3].target)} pj={parseFloat(data[1].pj)} />
        </ScrollView>
      </View>

      <View style={{
        marginHorizontal: '7%',
        marginBottom: 10,

        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>

        {user.level == 'Admin' &&
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Belgareti')} style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              borderRadius: 30,
              height: 60,
              backgroundColor: colors.primary,
            }}>
              <Text style={{
                textAlign: 'center',
                fontFamily: fonts.primary[600],
                color: colors.white,
                fontSize: 10,
              }}>BELGARETI</Text>
            </TouchableOpacity>
            <Text style={{
              textAlign: 'center',
              fontFamily: fonts.primary[600],
              color: colors.primary
            }}>Belgareti</Text>
          </View>
        }
        {user.level == 'Admin' &&
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('AAAtur')} style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              borderRadius: 30,
              height: 60,
              backgroundColor: colors.primary,
            }}>
              <Icon type='ionicon' name='person' size={25} color={colors.white} />
            </TouchableOpacity>
            <Text style={{
              textAlign: 'center',
              fontFamily: fonts.primary[600],
              color: colors.primary
            }}>Admin</Text>
          </View>
        }
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('PJSaya')} style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            borderRadius: 30,
            height: 60,
            backgroundColor: colors.primary,
          }}>
            <Icon type='ionicon' name='briefcase' size={25} color={colors.white} />
          </TouchableOpacity>
          <Text style={{
            textAlign: 'center',
            fontFamily: fonts.primary[600],
            color: colors.primary
          }}>PJ Saya</Text>
        </View>

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