import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AvatarImage = ({avatar}) => {
  return (
    <>
      <Image
        style={styles.tinyLogo}
        source={{uri: avatar}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default AvatarImage;
