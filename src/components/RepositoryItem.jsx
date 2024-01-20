import { View, StyleSheet } from "react-native";
import AvatarImage from "./AvatarImage";
import Text from "./Text";
import LanguageComponent from "./LanguageComponent";
import Count from "./Count";
import { NativeRouter } from 'react-router-native';


const repositoryItemStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    gap: 30
  },
  infoContainer: {
    flexDirection: "row",
  },
  textContainer: {
    paddingLeft: 25,
    gap: 10
  },
  countsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
const RepositoryItem = ({
  fullName,
  description,
  forksCount,
  avatar,
  language,
  stars,
  reviews,
  rating
}) => {
  return (
    <View style={repositoryItemStyles.container}>
      <View style={repositoryItemStyles.infoContainer}>
        <AvatarImage avatar={avatar} />
        <View style={repositoryItemStyles.textContainer}>
          <Text fontWeight = "bold" fontSize = "subheading">{fullName}</Text>
          <Text color = "textSecondary" fontSize = "subheading">{description}</Text>
          <LanguageComponent language={language} style = {{flex: 0}} />
        </View>
      </View>
      <View style={repositoryItemStyles.countsContainer}>
        <Count name = "Stars" count = {stars}></Count>
        <Count name = "Forks" count = {forksCount}></Count>
        <Count name = "Reviews" count = {reviews}></Count>
        <Count name = "Rating" count = {rating}></Count>

      </View>
    </View>
  );
};

export default RepositoryItem;
