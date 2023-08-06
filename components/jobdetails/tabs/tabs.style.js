import { StyleSheet } from "react-native"

import { COLORS, SHADOWS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (item, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: item === activeTab ? COLORS.primary : "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (item, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: item === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
})

export default styles
