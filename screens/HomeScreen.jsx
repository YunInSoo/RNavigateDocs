import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onPressScreen = (e) => {
    navigation.push(`Details`, { param: "test" });
  };
  const onPressTab = (e) => {
    navigation.push(`Details2`, { param: "test" });
  };
  const onPressDrawer = (e) => {
    navigation.push(`Feed`, { param: "Feed" });
  };
  const onPressStack = (e) => {
    navigation.push(`StackDetail`, { param: "Feed" });
  };
  const onPressStack2 = (e) => {
    navigation.push(`StackDetail2`, { param: "Feed" });
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.containerTop}>
        <Text style={styles.fontTitle}>RN navigation For Native-stack</Text>
      </View>
      <View style={styles.containerBottom}>
        <TouchableOpacity style={styles.subBtnView} onPress={onPressScreen}>
          <Text style={styles.fontContainer}> 기본 효과 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subBtnView} onPress={onPressTab}>
          <Text style={styles.fontContainer}>Fade 효과 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subBtnView} onPress={onPressDrawer}>
          <Text style={styles.fontContainer}> 상위 컴포넌트 screen 전환 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subBtnView} onPress={onPressStack}>
          <Text style={styles.fontContainer}>Stack 기본 효과 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subBtnView} onPress={onPressStack2}>
          <Text style={styles.fontContainer}> Stack 느리게 screen 전환 </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.startFloationButton}
        onPress={onPressDrawer}
      >
        <Text style={styles.startFloationButtonFont}> Run Start </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#c5c5c5",
    flex: 1,
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 3,
  },
  subBtnView: {
    backgroundColor: "black",
    height: 70,
    marginVertical: 10,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  fontContainer: {
    color: "white",
  },
  startFloationButtonFont: {
    color: "white",
    fontSize: 16,
    fontWeight: 400,
  },
  fontTitle: {
    fontSize: 26,
  },
  startFloationButton: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#444444",
    paddingHorizontal: 47,
    paddingVertical: 20,
    borderRadius: 24,
    bottom: 44,
  },
});
export default HomeScreen;
