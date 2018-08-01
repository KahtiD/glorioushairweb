<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_demo');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'GzO.;fQ&I4f_(Wtlaoyfq{{b|B]g>QI,ifR!D7cR0,2s`Uk2.Z<Z:jut#AU%BP|o');
define('SECURE_AUTH_KEY',  'cFS^%:tQPZjHN7tutD#XV]5.B*WD3sJPm:6{sT7zNjv#J[>nPF1h<%$cKG ;KDq|');
define('LOGGED_IN_KEY',    'z5+8LI+I@08,l+SfH~k6O{M$!.jL,1:mw(=Rt8zK !}2c{N>}58D;rp{461/,R!v');
define('NONCE_KEY',        'b#S0Y!Ka} DS+8Vv16.0H*XwxE!3aRQ8r@^>e/_t~t vIw.AV<?3=vwgHGE)/1pT');
define('AUTH_SALT',        'dVcG+}i<h[LiLo^c:QmnF]$-t6mnH{f{Z.&90cf~YsT~6hiQ.H0ATSs9Zhd=K?^O');
define('SECURE_AUTH_SALT', 'Y.F%1K@nPo|mkiM?eq5r]3-V5s{fQ{v5-IPtGfP`?L{7|pm@h`j_}D) xe8o?Sz&');
define('LOGGED_IN_SALT',   '*csU{{B5tdWs5@PbyIXrHZ#l2|d:S_[$d%n5XA2F8,Yn[?&NNUiR~lawreUJOe*2');
define('NONCE_SALT',       'DXOW(}LzKls s&Eo=OWD Ri=5D3N3WTBT=(CB wk7s:q2MP8]!l)ZIr6AbJ{e_/e');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
