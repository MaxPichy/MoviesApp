import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Teste Menu */}
      <View style={styles.main}>
            <Menu active="home" />
        <Text style={styles.title}>MoviesApp</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        {/* Teste Button */}
        <Button title='Teste' variant='primary'></Button>
        <Button title='Teste' variant='secondary'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  main: {
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  }
});
