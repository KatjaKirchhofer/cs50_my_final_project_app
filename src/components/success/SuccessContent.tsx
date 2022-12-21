import React from "react";
import {Text,} from "../Themed";
import {FlatList, ListRenderItem} from "react-native";

interface Interface {
  successArray: string[]
}
const SuccessContent = ({
                          successArray
}: Interface) => {

  const renderSuccess: ListRenderItem<string> = ({item}) => {
    return (
      <Text style={{marginVertical: 10}}>{item}</Text>
    )
  }

  return (
      <FlatList data={successArray} renderItem={renderSuccess}/>
  )
}
export default SuccessContent;