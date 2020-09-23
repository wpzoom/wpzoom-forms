const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );
const path = require( 'path' );

function recursiveIssuer( m ) {
	return m.issuer ? recursiveIssuer( m.issuer ) : ( m.name ? m.name : false );
}

module.exports = {
	...defaultConfig,
	entry: {
		'main/backend/script':        path.resolve( __dirname, 'src', 'main', 'backend', 'script.js' ),
		'main/backend/style':         path.resolve( __dirname, 'src', 'main', 'backend', 'style.scss' ),
		'submissions/backend/style':  path.resolve( __dirname, 'src', 'submissions', 'backend', 'style.scss' ),
		'form-block/backend/script':  path.resolve( __dirname, 'src', 'form-block', 'backend', 'script.js' ),
		'form-block/backend/style':   path.resolve( __dirname, 'src', 'form-block', 'backend', 'style.scss' ),
		'form-block/frontend/script': path.resolve( __dirname, 'src', 'form-block', 'frontend', 'script.js' ),
		'form-block/frontend/style':  path.resolve( __dirname, 'src', 'form-block', 'frontend', 'style.scss' )
	},
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			cacheGroups: {
				mainBackendStyle: {
					name:   'main/backend/style',
					test:   ( m, c, entry = 'main/backend/style' ) => m.constructor.name === 'CssModule' && recursiveIssuer( m ) === entry,
					chunks: 'all',
					enforce: true
				},
				submissionsBackendStyle: {
					name:   'submissions/backend/style',
					test:   ( m, c, entry = 'submissions/backend/style' ) => m.constructor.name === 'CssModule' && recursiveIssuer( m ) === entry,
					chunks: 'all',
					enforce: true
				},
				formBlockBackendStyle: {
					name:   'form-block/backend/style',
					test:   ( m, c, entry = 'form-block/backend/style' ) => m.constructor.name === 'CssModule' && recursiveIssuer( m ) === entry,
					chunks: 'all',
					enforce: true
				},
				formBlockFrontendStyle: {
					name:   'form-block/frontend/style',
					test:   ( m, c, entry = 'form-block/frontend/style' ) => m.constructor.name === 'CssModule' && recursiveIssuer( m ) === entry,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	plugins: [
		...defaultConfig.plugins,
		new IgnoreEmitPlugin( [ 'editor.js', 'style.js' ] )
	]
};