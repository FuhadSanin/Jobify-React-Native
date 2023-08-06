import React, { useState } from "react"
import { TouchableOpacity, FlatList, Text, View } from "react-native"

import styles from "./tabs.style"
import { SIZES } from "../../../constants"

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeTab={activeTab}
            onPress={() => setActiveTab(item)}
            style={styles.btn(item, activeTab)}
          >
            <Text style={styles.btnText(item, activeTab)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        horizontal
      />
    </View>
  )
}

export default Tabs
