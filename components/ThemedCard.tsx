import { StyleSheet, ViewStyle } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";

type ProductCardProps = {
	title: string;
	price: string;
	imageUrl: string;
	onPress?: () => void;
	style?: ViewStyle;
};

export function ThemedProductCard({
	title,
	price,
	imageUrl,
	onPress,
	style,
}: ProductCardProps) {
	const { colors } = useTheme();

	return (
		<Card
			onPress={onPress}
			style={[{ backgroundColor: colors.surface }, styles.card, style]}
			mode="elevated"
			elevation={4}>
			<Card.Cover source={{ uri: imageUrl }} />
			<Card.Content>
				<Text
					variant="titleMedium"
					numberOfLines={1}
					style={{
						color: colors.onSurface,
						fontWeight: "bold",
						marginTop: 8,
					}}>
					{title}
				</Text>
				<Text
					variant="titleLarge"
					style={{ color: colors.primary, marginTop: 0 }}>
					${price}
				</Text>
			</Card.Content>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		width: 180,
		margin: 8,
		borderRadius: 16,
		overflow: "hidden",
	},
});
