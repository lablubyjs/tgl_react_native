module.exports = function (api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@components': './src/components',
						'@screens': './src/screens',
						'@store': './src/store',
						'@store/bets-slice': './src/store/bets-slice',
						'@store/cart-slice': './src/store/cart-slice',
						'@store/games-slice': './src/store/games-slice',
						'@store/user-slice': './src/store/user-slice',
						'@hooks': './src/hooks',
						'@navigation': './src/navigation/index.tsx',
						'@shared/interfaces': './src/shared/interfaces',
						'@shared/services': './src/shared/services',
						'@shared/styles': './src/shared/styles',
						'@shared/types': './src/shared/types',
						'@shared/utils': './src/shared/utils',
					},
				},
			],
		],
	};
};
