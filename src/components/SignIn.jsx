import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';


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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Username must be alphanumeric')
    .min(7, 'Username must have at least 7 character')
    .required('Username is required'),
  password: yup
    .string()
    .min(1, 'Password must have at least 1 character')
    .required('Password is required')
});

const SignIn = () => {
  const onSubmit = (values) => {
    // console.log("🚀 ~ onSubmit ~ values:", values);
    const username = values.username;
    const password = values.password;

    if ( username && password ) {
      // console.log("🚀 ~ onSubmit ~ password:", password)
      // console.log("🚀 ~ onSubmit ~ username:", username)
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
