import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking } from 'react-native';
import { fonts, windowWidth, colors, windowHeight } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';


export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});





  const masuk = () => {


    if (kirim.username == null && kirim.password == null) {
      Alert.alert(MYAPP, 'Username dan Password tidak boleh kosong !');
    } else if (kirim.username == null) {
      Alert.alert(MYAPP, 'Username tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('Home')
          }

        });



    }




  }

  useEffect(() => {

    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, [])

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.primary, position: 'relative' }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: colors.white
        }}>
          <Image
            source={require('../../assets/farm.png')}
            style={
              {
                width: 120,
                height: 120,
                resizeMode: 'contain'
              }
            }
          />

          <Image
            source={require('../../assets/rv.png')}
            style={
              {
                width: 120,
                height: 120,
                resizeMode: 'contain'
              }
            }
          />
          <Image
            source={require('../../assets/jayagiri.png')}
            style={
              {
                width: 120,
                height: 120,
                resizeMode: 'contain'
              }
            }
          />


        </View>

        {/* ajaib */}

        <View style={{
          flex: 1,
          backgroundColor: colors.white,
          paddingVertical: 30,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 18,
              color: colors.secondary
            }}>JUJUR</Text>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 18,
              color: colors.secondary
            }}>IKHLAS</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 60,
              textAlign: 'center',
              color: colors.tertiary
            }}>A</Text>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 60,
              textAlign: 'center',
              color: colors.tertiary
            }}>J</Text>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 60,
              textAlign: 'center',
              color: colors.tertiary
            }}>A</Text>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 60,
              textAlign: 'center',
              color: colors.tertiary
            }}>I</Text>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 60,
              textAlign: 'center',
              color: colors.tertiary
            }}>B</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 18,
              color: colors.secondary,
              textAlign: 'center'
            }}>AKHLAK{'\n'}MULIA</Text>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 18,
              color: colors.secondary,
            }}>AMANAH</Text>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 18,
              color: colors.secondary,
              textAlign: 'center'
            }}>BERTANGGUNG{'\n'}JAWAB</Text>
          </View>
        </View>


        <View style={{ padding: 20, borderTopLeftRadius: 30, flex: 1, backgroundColor: colors.primary }}>
          <MyInput textColor={colors.white} colorIcon={colors.white} label="Username" onChangeText={val => setKirim({
            ...kirim,
            username: val
          })}
            iconname="at" placeholder="Masukan username" />
          <MyGap jarak={20} />
          <MyInput textColor={colors.white} colorIcon={colors.white}
            onChangeText={val => setKirim({
              ...kirim,
              password: val
            })}
            secureTextEntry={true}
            label="Password"
            iconname="lock-closed"
            placeholder="Masukan kata sandi"
          />
          <MyGap jarak={40} />
          {!loading &&


            <MyButton
              onPress={masuk}
              title="Log in"
              warna={colors.secondary}
              Icons="log-in-outline"
            />

          }

        </View>
        {loading && <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator color={colors.secondary} size="large" />
        </View>}
      </ScrollView>
      <View style={{
        backgroundColor: colors.primary,
      }}>
        <Image
          source={require('../../assets/logo.png')}
          style={
            {
              width: 130,
              height: 100,
              alignSelf: 'center',
              resizeMode: 'contain'
            }
          }
        />
      </View>
      {/* <TouchableOpacity onPress={() => {

        navigation.navigate('LupaPassword', comp)
      }} style={{
        padding: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
      }}><Text style={{
        fontSize: windowWidth / 28,
        marginTop: 10,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
        color: colors.white
      }}>Lupa Password ?</Text></TouchableOpacity> */}
    </>
  );
}

const styles = StyleSheet.create({});
