import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { colors, fonts, windowWidth } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getData } from '../../utils/localStorage';
import MyMenu from '../MyMenu';
export default function MyHeader({ onPress }) {
  const [user, setUser] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  useState(() => {
    getData('user').then(res => {
      setUser(res)
    })
  }, [])

  const navigation = useNavigation();
  return (

    <>

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
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{
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
    </>
  );
}

const styles = StyleSheet.create({});
