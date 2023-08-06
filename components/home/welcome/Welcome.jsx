import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native"
import styles from "./welcome.style"
import { useRouter } from "expo-router"
import { icons, SIZES } from "../../../constants"

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("Full-Time")
  const jobTabs = [
    "Full-Time",
    "Part-Time",
    "Contractor",
    "Freelance",
    "Internship",
  ]
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Nikhila</Text>
        <Text style={styles.welcomeMessage}>Jobs you are looking for</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChange={text => setSearchTerm(text)}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
            onPress={handleClick}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          //Flatlist is same as map function in react which contains data, renderItem, keyExtractor
          data={jobTabs}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeTab, item)} // activeTab is the current active tab and item is the current item in the list
              onPress={() => {
                setActiveTab(item)
                router.push(`/search/${item}`)
              }} // onPress is a function which is called when the tab is pressed
            >
              <Text style={styles.tabText(activeTab, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item} // keyExtractor expects a string used as a key
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
