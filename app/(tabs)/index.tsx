import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Pathselector from '@/components/pathselector'
import { NewsDataType } from "@/types";

type Props = {
  slideItem: NewsDataType;
};

const Page = ({slideItem}: Props) => {
  const {top: safeTop} = useSafeAreaInsets();

  return (
     <Pathselector/>
 )
}

export default Page

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tiptext: {
    fontFamily: Platform.select({
      ios: 'Poppins-SemiBold',
      android: 'Poppins_600SemiBold'
    }),
    fontSize: 16,
    color: 'white',
    marginTop: 490,
    textAlign: 'center',
  },
})