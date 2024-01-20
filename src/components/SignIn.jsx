import { Text, TextInput, Pressable, View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";

import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  button: {
    backgroundColor: theme.colors.primary,
    margin: 12,
    padding: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username"   />
      <FormikTextInput name="password" placeholder="password" secureTextEntry/>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("🚀 ~ onSubmit ~ values:", values);
    const username = values.username;
    const password = values.password;

    if ( username && password ) {
      console.log("🚀 ~ onSubmit ~ password:", password)
      console.log("🚀 ~ onSubmit ~ username:", username)
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
