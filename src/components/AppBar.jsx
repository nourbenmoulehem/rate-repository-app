import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundApp,
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    justifyContent: "space-between",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Link to="/">
          <Text color="primary" fontWeight="bold">
            Repositories
          </Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/sign-in">
          <Text color="primary" fontWeight="bold">
            Sign In
          </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBar;
