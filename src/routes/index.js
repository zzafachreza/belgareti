import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  GetStarted,
  Account,
  AccountEdit,
  Pengguna,
  PenggunaAdd,
  PenggunaEdit,
  AAAtur,
  LupaPassword,
  PenggunaDetail,
  Produk,
  ProdukAdd,
  ProdukDetail,
  ProdukEdit,
  Transaksi,
  Laporan,
  Minimal,
  Success,
  Belgareti,
  TargetAdd,
  TargetDetail,
  TargetDetailAdd,
  PJSaya,
  PJList,
  PJListAdd,
  PJListEdit,
  Waktu,
  PJsayaDetail,
  PJSayaAdd,
  PJSayaDetail,
  PJSayaIkhlasAdd,
  PJSayaDetailIkhlas,
  PJSayaAddAmanah,
  PJSayaDetailAmanah,
  PJKategori,
  PJKategori1,
  PJKategori2,
  PJKategori3,
  PJKategori4,
} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AAAtur"
        component={AAAtur}
        options={{
          headerShown: false,
        }}
      />

      {/* BELGARETI */}

      <Stack.Screen
        name="Belgareti"
        component={Belgareti}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TargetAdd"
        component={TargetAdd}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TargetDetail"
        component={TargetDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TargetDetailAdd"
        component={TargetDetailAdd}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="LupaPassword"
        component={LupaPassword}
        options={{
          // headerShown: false,
          headerTitle: 'LUPA PIN',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />

      <Stack.Screen
        name="Pengguna"
        component={Pengguna}
        options={{
          headerShown: true,
          headerTitle: 'Kelola Pengguna',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />



      <Stack.Screen
        name="PenggunaAdd"
        component={PenggunaAdd}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Pengguna',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />

      <Stack.Screen
        name="PenggunaDetail"
        component={PenggunaDetail}
        options={{
          headerShown: true,
          headerTitle: 'Detail Pengguna',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />





      <Stack.Screen
        name="PenggunaEdit"
        component={PenggunaEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Pengguna',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />




      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />








      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Transaksi"
        component={Transaksi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Laporan"
        component={Laporan}
        options={{
          headerShown: true,
          title: 'Laporan Transaksi'
        }}
      />

      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Minimal"
        component={Minimal}
        options={{
          headerShown: true,
          headerTitle: 'Minimal Stok Produk',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />

      {/* PRODUK */}

      <Stack.Screen
        name="Produk"
        component={Produk}
        options={{
          headerShown: true,
          headerTitle: 'Kelola Produk',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />

      <Stack.Screen
        name="ProdukAdd"
        component={ProdukAdd}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Produk',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />

      <Stack.Screen
        name="ProdukDetail"
        component={ProdukDetail}
        options={{
          headerShown: true,
          headerTitle: 'Detail Produk',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />


      <Stack.Screen
        name="ProdukEdit"
        component={ProdukEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Produk',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
        }}
      />


      {/* NEW BELGARETI */}


      <Stack.Screen
        name="PJSaya"
        component={PJSaya}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="PJList"
        component={PJList}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PJListAdd"
        component={PJListAdd}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="PJListEdit"
        component={PJListEdit}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Waktu"
        component={Waktu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PJSayaDetail"
        component={PJSayaDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PJSayaAdd"
        component={PJSayaAdd}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PJSayaIkhlasAdd"
        component={PJSayaIkhlasAdd}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PJSayaDetailIkhlas"
        component={PJSayaDetailIkhlas}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PJSayaAddAmanah"
        component={PJSayaAddAmanah}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PJSayaDetailAmanah"
        component={PJSayaDetailAmanah}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="PJKategori"
        component={PJKategori}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="PJKategori1"
        component={PJKategori1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PJKategori2"
        component={PJKategori2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PJKategori3"
        component={PJKategori3}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PJKategori4"
        component={PJKategori4}
        options={{
          headerShown: false,
        }}
      />



    </Stack.Navigator>
  );
}
