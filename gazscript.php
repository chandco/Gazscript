<?php

/**
 * Plugin Name: GazScript
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
		wp_enqueue_script('load_gazscript', plugins_url('gazscript.js',__FILE__), 'jquery', "0.1", true );
		wp_enqueue_style( 'gz_nathan_style', plugins_url('nathan.css',__FILE__) );
		wp_enqueue_style( 'gz_gaz_style', plugins_url('gaz.css',__FILE__) );
		wp_enqueue_style( 'gz_amanda_style', plugins_url('amanda.css',__FILE__) );
		//wp_enqueue_script('vfe_the_js', 'javascript.js' );
}

add_action( 'wp_enqueue_scripts', 'load_gazscript' );

function quizinit( ) {

	wp_enqueue_script('qz_js_add', plugins_url('jQuiz.js',__FILE__), 'jquery', "0.1", true );
	wp_enqueue_style( 'qz_css_add', plugins_url('jQuiz.css',__FILE__) );

}

add_shortcode('quizinit', 'quizinit');

function jslideinit( ) {

	wp_enqueue_script('jslide_js_add', plugins_url('jSlides.js',__FILE__), 'jquery', "0.1", true );

	wp_enqueue_style( 'jslide_css_add', plugins_url('jSlides.css',__FILE__) );

}
add_shortcode('jslideinit', 'jslideinit');

 
?>