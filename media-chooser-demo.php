<?php
/**
 * The WordPress Plugin Boilerplate.
 *
 * A foundation off of which to build well-documented WordPress plugins that also follow
 * WordPress coding standards and PHP best practices.
 *
 * @package   MediaChooserDemo
 * @author    Gabe Shackle <gabe@hereswhatidid.com>
 * @license   GPL-2.0+
 * @link      http://hereswhatidid.com
 * @copyright 2013 Gabe Shackle or Company Name
 *
 * @wordpress-plugin
 * Plugin Name: Media Chooser Demo
 * Plugin URI:  http://hereswhatidid.com/plugins/media-chooser-demo/
 * Description: A sample plugin to demonstrate how to use the Media
 * Version:     1.0.0
 * Author:      Gabe Shackle
 * Author URI:  http://hereswhatidid.com/
 * Text Domain: media-chooser-demo
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /lang
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once( plugin_dir_path( __FILE__ ) . 'class-media-chooser-demo.php' );

// Register hooks that are fired when the plugin is activated, deactivated, and uninstalled, respectively.

register_activation_hook( __FILE__, array( 'MediaChooserDemo', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'MediaChooserDemo', 'deactivate' ) );

MediaChooserDemo::get_instance();