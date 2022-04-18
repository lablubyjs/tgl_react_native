module.exports = function (api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@screens': './src/screens/index',
						'@components': './src/components/index',
						'@styles': './src/shared/styles/index',
						'@types': './src/shared/types/index',
					},
				},
			],
		],
	};
};
