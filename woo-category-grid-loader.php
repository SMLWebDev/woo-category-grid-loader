<?php
/**
 * Plugin Name: Woo Category Grid Loader
 * Description: Displays WooCommerce product categories in a grid with a Load More button. Includes a shortcode and admin settings.
 * Version: 0.1.0-beta.2-beta.1-beta.0-beta-beta
 * Author: Simon Lowe
 * Author URI: https://smlwebdevelopment.co.uk
 * Plugin URI: https://github.com/SMLWebDev/woo-category-grid-loader
 * Licence: MIT
 * Licence URI: https://opensource.org/licences/MIT
 * Text Domain: woo-category-grid-loader
 */

 if ( ! defined( 'ABSPATH' ) ) {
    exit;
 }

 define( 'WCGL_VERSION', '0.1.0-beta' );
 define( 'WCGL_PLUGIN_FILE', __FILE__ );
 define( 'WCGL_PLUGIN_DIR', plugin_dir_path( __FILE__ )  );
 define( 'WCGL_PLUGIN_URL', plugin_dir_url( __FILE__ ) );


 require_once WCGL_PLUGIN_DIR . 'vendor/autoload.php';

 $plugin = new WCGL\Plugin();
 $plugin->run();