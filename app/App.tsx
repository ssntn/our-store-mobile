import { StyleSheet, View } from "react-native";
import HomeScreen from "./(tabs)/index";

const App = () => {
	return (
		<View style={styles.container}>
			<HomeScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default App;
