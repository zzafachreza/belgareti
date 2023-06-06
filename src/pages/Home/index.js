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

const MyListTarget = ({ kategori, logo, target, pj }) => {

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
    <>
      {/* RnV */}
      <Text style={{
        marginHorizontal: '7%',
        marginTop: '1%',
        fontFamily: fonts.primary.normal,
        fontSize: 20,
      }}>{kategori}</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: '7%', marginVertical: '1%', borderRadius: 5, backgroundColor: colors.border }}>
        <View style={{
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',

        }}>

          <Image source={logo} style={{
            width: 50,
            height: 50,
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
            fontSize: 14,
            color: colors.primary
          }}>TARGET</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 30,
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
            fontSize: 14,
            color: colors.primary
          }}>PJ</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 30,
            color: warnaPJ
          }}>{pj}%</Text>
        </View>
      </View>
    </>
  )
}


export default function Home({ navigation }) {

  const [user, setUser] = useState({});
  const [data, setData] = useState([{ "kategori": "Jayagiri", "target": 0 }, { "kategori": "Villa", "target": 0 }, { "kategori": "RnV", "target": 0 }, { "kategori": "Kebun", "target": 0 }]);
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
      {/* header */}
      <View style={{

        flexDirection: 'row',
      }}>
        <View style={{
          flex: 1,
          paddingLeft: '7%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Text style={{
            fontFamily: fonts.primary.normal,
            color: colors.primary,
            fontWeight: '600',
            fontSize: 35,
            marginRight: 10,
          }}>Beranda</Text>
          <Icon type='ionicon' name='home' size={20} color={colors.primary} />
        </View>
        <TouchableOpacity onPress={btnKeluar} style={{
          backgroundColor: colors.secondary,
          height: 70,
          width: 70,
          borderBottomLeftRadius: 100,
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          padding: 5
        }}>
          <Icon type='ionicon' name='log-out-outline' size={25} color={colors.white} />
          <Text style={{
            fontFamily: fonts.primary.normal,
            color: colors.white,
            fontSize: 15,
          }}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* user pengguna */}
      <View style={{
        marginHorizontal: '7%',
        padding: 10,
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: colors.secondary,
        borderRadius: 20,
        marginBottom: 10,
        flexDirection: 'row'
      }}>
        <View>
          <Image style={{
            width: 60,
            height: 60,
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
            color: colors.white
          }}>{user.nama_lengkap}</Text>
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 15,
            color: colors.white
          }}>Jabatan : {'Direktur'}</Text>
        </View>
      </View>


      {/* coundown hari */}
      <View style={{ flexDirection: 'row', paddingHorizontal: '7%', }}>
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
            fontSize: 20,
            color: colors.primary
          }}>Berjalan</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 35,
            color: colors.hijau
          }}>30 Hari</Text>
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
            fontSize: 20,
            color: colors.primary
          }}>Sisa Hari</Text>
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 35,
            color: colors.merah
          }}>10 Hari</Text>
        </View>
      </View>
      <View style={{
        flex: 1,
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MyListTarget kategori="Jayagiri" logo={require('../../assets/jayagiri.png')} target={data[0].target} pj={90} />
          <MyListTarget kategori="Villa" logo={require('../../assets/logo.png')} target={data[1].target} pj={100} />
          <MyListTarget kategori="RnV" logo={require('../../assets/rv.png')} target={data[2].target} pj={90} />
          <MyListTarget kategori="Keun" logo={require('../../assets/farm.png')} target={data[3].target} pj={90} />
        </ScrollView>
      </View>

      <View style={{
        marginHorizontal: '7%',
        marginBottom: 10,

        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>

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