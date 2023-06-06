import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import { Linking } from 'react-native';
import { Icon } from 'react-native-elements';



export default function PJList({ navigation }) {


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader />

            <View style={{
                flex: 1,
                padding: 20,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
                    flexDirection: 'row',
                    padding: 20,
                    marginVertical: 2
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black
                    }}>Profil Saya</Text>
                    <Icon type='ionicon' name='chevron-forward' color={colors.black} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PJList')} style={{
                    flexDirection: 'row',
                    padding: 20,
                    marginVertical: 2
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black
                    }}>Daftar PJ</Text>
                    <Icon type='ionicon' name='chevron-forward' color={colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Minimal')} style={{
                    flexDirection: 'row',
                    padding: 20,
                    marginVertical: 2
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black
                    }}>Minimal Stok</Text>
                    <Icon type='ionicon' name='chevron-forward' color={colors.black} />
                </TouchableOpacity>

            </View>

            <View style={{
                padding: 20,
            }}>
                <MyButton onPress={() => navigation.navigate('PJListAdd')} warna={colors.black} title="Tambah PJ List" Icons="duplicate" iconColor={colors.white} colorText={colors.white} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})