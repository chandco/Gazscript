<?php



/**

 * Plugin Name: Gazscript
 * Plugin URI: http://blog.chandco.net
 * Description: Let's Gaz & Nathan & Amanda add gravitas to any wordpress site
 * Version: 1.0
 * Author: Nathan Edwards
 * Author URI: mailto:nathan.edwards@chandco.net
 * License: GPL2

 */

 







// load our JS



function load_gazscript()

{
		wp_enqueue_script('load_gazscript', plugins_url('nathan.js',__FILE__), 'jquery', "0.1", true );
		wp_enqueue_script('load_gazscript', plugins_url('gazscript.js',__FILE__), 'jquery', "0.1", true );
		wp_enqueue_style( 'gz_nathan_style', plugins_url('nathan.css',__FILE__) );
		wp_enqueue_style( 'gz_gaz_style', plugins_url('gaz.css',__FILE__) );
		wp_enqueue_style( 'gz_amanda_style', plugins_url('amanda.css',__FILE__) );
		global $post;
		$categories = get_the_category( $post->ID );
		if (in_array("my-category",$categories))
		{
			wp_enqueue_style( 'gz_gaz_style_specific_page', plugins_url('page-id-myid.css',__FILE__) );
		}
}







add_action( 'wp_enqueue_scripts', 'load_gazscript' );





 

?>