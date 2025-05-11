const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
	...defaultConfig,
	transformer: {
		...defaultConfig.transformer,
		assetPlugins: [
			...defaultConfig.transformer.assetPlugins,
			"expo-asset/tools/hashAssetFiles", // Add this line for asset support
		],
	},
	resolver: {
		...defaultConfig.resolver,
		assetExts: [
			...defaultConfig.resolver.assetExts,
			"png",
			"jpg",
			"jpeg",
			"gif",
			"svg",
		], // Add the image extensions here
	},
};
