import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import styles from "./nearbyjobs.style"
import { COLORS, icons, SIZES } from "../../../constants"
import { useRouter } from "expo-router"
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"
import useFetch from "../../../hook/useFetch"

const Nearbyjobs = () => {
  const router = useRouter() // useRouter is a hook which is used to navigate between screens
  const { data, loading, error } = useFetch("search", {
    query: "game developer",
    num_pages: 1,
  })
  const handleCardPress = item => {
    router.push(`/job-details/${item.job_id}`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((item, index) => (
            <NearbyJobCard
              item={item}
              key={`nearby-job-${item?.job_id}`}
              handleCardPress={handleCardPress}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs
