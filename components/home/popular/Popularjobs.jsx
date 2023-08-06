import { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native"
import styles from "./popularjobs.style"
import { COLORS, icons, SIZES } from "../../../constants"
import { useRouter } from "expo-router"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from "../../../hook/useFetch"

const Popularjobs = () => {
  const router = useRouter() // useRouter is a hook which is used to navigate between screens
  const [selectedJob, setSelectedJob] = useState(null)
  const { data, loading, error } = useFetch("search", {
    query: "game developer",
    num_pages: 1,
  })
  const handleCardPress = item => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
