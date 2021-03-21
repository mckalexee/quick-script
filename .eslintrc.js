module.exports = {
	plugins: ['prettier'],
	extends: ['eslint:recommended', 'standard-with-typescript'],
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab']
	},
	parserOptions: {
		project: './tsconfig.json'
	}
}
