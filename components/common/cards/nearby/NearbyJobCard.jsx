import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./nearbyjobcard.style"

const NearbyJobCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri:
              item.employer_logo ||
              "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard
