import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: theme.colors.lightGrey,
  },

  container: {
    alignItems: "baseline"
  },

  inputError: {
    borderColor: "#d73a4a", // Red color for error
  },

  errorText: {
    marginTop: 5,
    color: "#d73a4a",
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  console.log("🚀 ~ FormikTextInput ~ meta:", meta);

  const showError = meta.touched && meta.error;
  console.log("🚀 ~ FormikTextInput ~ showError:", showError);

  return (
    <>
      <View>
        <TextInput
          style={[styles.input, showError && styles.inputError]}
          onChangeText={(value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
        {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      </View>
    </>
  );
};

export default FormikTextInput;
