import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedProductCard } from "@/components/ThemedCard";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

export default function HomeScreen() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<ThemedView style={styles.container}>
			{/* Fixed Searchbar */}
			<Searchbar
				value={searchQuery}
				onChangeText={setSearchQuery}
				style={styles.searchbar}
			/>

			<ParallaxScrollView
				headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}>
				<ThemedProductCard
					title="Wireless Headphones"
					price="59.99"
					imageUrl="https://picsum.photos/200"
				/>
				<ThemedProductCard
					title="Wireless Headphones"
					price="59.99"
					imageUrl="https://picsum.photos/200"
				/>
				<ThemedProductCard
					title="Wireless Headphones"
					price="59.99"
					imageUrl="https://picsum.photos/200"
				/>
				<ThemedProductCard
					title="Wireless Headphones"
					price="59.99"
					imageUrl="https://picsum.photos/200"
				/>
				<ThemedProductCard
					title="Wireless Headphones"
					price="59.99"
					imageUrl="https://picsum.photos/200"
				/>
				<ThemedProductCard
					title="Wireless Headphones"
					price="59.99"
					imageUrl="https://picsum.photos/200"
				/>
				<ThemedProductCard
					title="Wireless Headphones"
					price="59.99"
					imageUrl="https://picsum.photos/200"
				/>
			</ParallaxScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 48,
	},
	searchbar: {
		margin: 8,
	},
	content: {
		padding: 16,
		flexDirection: "row", // add this
		flexWrap: "wrap", // allow wrapping to next line if overflow
		justifyContent: "space-between", // spacing between cards
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	card: {
		marginBottom: 16,
		width: "100%",
	},
});
