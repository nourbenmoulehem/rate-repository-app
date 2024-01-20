import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Text from "./Text";

const CardHeader = () => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.iconContainer}>
        <Image
          style={cardHeaderStyles.icon}
          source={require("../../assets/icon.png")}
        />
      </View>

      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">
          Jhon Doe
        </Text>
        <Text color="textSecondary">Thursday 16.4. at 10:08</Text>
      </View>
    </View>
  );
};

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },

  infoContainer: {
    flexGrow: 1,
  },

  iconContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
});

const CardBody = () => {
  return (
    <View>
      <View>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          recusandae cum amet, harum libero ullam dolorem officia illo modi
          tempore deserunt optio in voluptate, fuga sint quisquam vero nulla
          animi.
        </Text>
      </View>
    </View>
  );
};

const cardBodyStyles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    flexGrow: 1
  },
});

const CardFooterAction = ({ children }) => {
  return (
    <TouchableWithoutFeedback>
      <Text color="textSecondary">{children}</Text>
    </TouchableWithoutFeedback>
  );
};

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1
  }

}) 

const CardFooter = () => {
  return (
    <View style = {cardFooterStyles.container}>
      <CardFooterAction>Like</CardFooterAction>
      <CardFooterAction>Comment</CardFooterAction>
      <CardFooterAction>Share</CardFooterAction>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
});

const Card = () => {
  return (
    <View style = {cardStyles.container}>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </View>
  );
};

export default Card;
