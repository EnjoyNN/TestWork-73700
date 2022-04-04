<?php
add_action('wp_enqueue_scripts', 'enqueue_parent_styles');

function enqueue_parent_styles() {
	wp_enqueue_style('parent-style', get_template_directory_uri().'/style.css');
}



add_action( 'woocommerce_product_options_general_product_data', 'woocommerce_product_custom_fields' ); 

add_action( 'admin_enqueue_scripts', 'include_myuploadscript' );
 
function include_myuploadscript( $hook ) {
	if ( ! did_action( 'wp_enqueue_media' ) ) {
		wp_enqueue_media();
	}

 	wp_enqueue_script( 'myuploadscript', get_stylesheet_directory_uri() . '/admin.js', array('jquery'), null, false );
}



function image_uploader_field(  ) {
	$value = get_post_meta( get_the_ID(), '_custom_image', true );
	
	$default = wc_placeholder_img_src();
 
	if( $value && ( $image_attributes = wp_get_attachment_image_src( $value, array( 150, 110 ) ) ) ) {
		$src = $image_attributes[0];
	} else {
		$src = $default;
	}
	echo '
	<div class="form-field" style="padding: 5px 20px 5px 162px!important; margin: 9px 0px;">
		<div>
			<label for="_custom_image" style="font-size: 12px;">Custom image</label>
		</div>
		<div>
			<img data-src="' . $default . '" src="' . $src . '" width="150" />
			<div>
				<input type="hidden" name="_custom_image" id="_custom_image" value="' . $value . '" />
				<button type="submit" class="upload_image_button button">Upload</button>
				<button type="submit" class="remove_image_button button">×</button>
			</div>
		</div>
	</div>
	';
}


function woocommerce_product_custom_fields () {
    global $woocommerce, $post;
    echo '<div class="product_custom_field">';

	image_uploader_field();
	
    woocommerce_wp_text_input(
        array(
            'id' => 'custom_skilltest_date_field',
            'label' => __('Custom Date', 'woocommerce'),
            'type' => 'date'
        )
    );

    woocommerce_wp_select(
        array(
            'id' => 'custom_skilltest_select_field',
            'label' => __('Custom Select', 'woocommerce'),
			'options' => array(
				'rare' => 'rare',
				'freq' => 'frequent',
				'unus' => 'unusual'
			)
        )
    );
	

	
	//button to clear all fields from backend(meta fields) and frontend too. works with AJAX WP
	echo '
		<p class="form-field">
			<form> 
				<label for="clear_customf" style="font-size: 12px;">Clear custom fields</label>
				<input type="submit" style="margin-left: 0px" name="clear_customf" id="clear_customf" class="button button-primary button-large" value="Clear all"/>
			</form>
		</p>
		';
	
	
	//button with update all product form
	echo '
		<p class="form-field">
			<input type="submit" style="float: right" name="save" id="publish" class="button button-primary button-large" value="Update"/>
		</p>
		';
    echo '</div>';
	
}


add_action( 'woocommerce_process_product_meta', 'woocommerce_product_custom_fields_save' );

function woocommerce_product_custom_fields_save($post_id)
{

	$woocommerce_custom_product_text_field = $_POST['custom_skilltest_select_field'];
    if (!empty($woocommerce_custom_product_text_field))
        update_post_meta($post_id, 'custom_skilltest_select_field', esc_attr($woocommerce_custom_product_text_field));
	
	//
	$woocommerce_custom_product_text_field = $_POST['custom_skilltest_date_field'];
    if (!empty($woocommerce_custom_product_text_field))
        update_post_meta($post_id, 'custom_skilltest_date_field', esc_attr($woocommerce_custom_product_text_field));
	
	if( isset( $_POST[ '_custom_image' ] ) ) {
		update_post_meta( $post_id, '_custom_image', absint( $_POST[ '_custom_image' ] ) );
	}

}


add_action('wp_ajax_clear_custom_fields_product', 'clear_custom_fields_product'); 
add_action('wp_ajax_nopriv_clear_custom_fields_product', 'clear_custom_fields_product');

function clear_custom_fields_product() {
	
	$id_post_for_custom = $_POST['dataForPHP'][0];
	$meta_keys_custom = array("custom_skilltest_select_field", "custom_skilltest_date_field", "_custom_image");
	
		foreach( $meta_keys_custom as $key ) {
			delete_post_meta( $id_post_for_custom, $key );
		}
	
        die();
}


function remove_sections_homepage() {
    remove_action('homepage', 'storefront_product_categories', 20 );
    remove_action('homepage', 'storefront_recent_products', 30 );
    remove_action('homepage', 'storefront_featured_products', 40 );
    remove_action('homepage', 'storefront_popular_products', 50 );
    remove_action('homepage', 'storefront_on_sale_products', 60 );
	remove_action('homepage', 'storefront_best_selling_products', 70 );
};

add_action( 'init', 'remove_sections_homepage', 1);



/*function my_custom_img_function($attachment_id, $main_image = false)
{
    $flexslider        = (bool) apply_filters('woocommerce_single_product_flexslider_enabled', get_theme_support('wc-product-gallery-slider'));
    $gallery_thumbnail = wc_get_image_size('gallery_thumbnail');
    $thumbnail_size    = apply_filters('woocommerce_gallery_thumbnail_size', array($gallery_thumbnail['width'], $gallery_thumbnail['height']));
    $image_size        = apply_filters('woocommerce_gallery_image_size', $flexslider || $main_image ? 'woocommerce_single' : $thumbnail_size);
    $full_size         = apply_filters('woocommerce_gallery_full_size', apply_filters('woocommerce_product_thumbnails_large_size', 'full'));
    $thumbnail_src     = wp_get_attachment_image_src($attachment_id, $thumbnail_size);
    $full_src          = wp_get_attachment_image_src($attachment_id, $full_size);
    $alt_text          = trim(wp_strip_all_tags(get_post_meta($attachment_id, '_wp_attachment_image_alt', true)));
    $image             = wp_get_attachment_image(
        $attachment_id,
        $image_size,
        false,
        apply_filters(
            'woocommerce_gallery_image_html_attachment_image_params',
            array(
                'title'                   => _wp_specialchars(get_post_field('post_title', $attachment_id), ENT_QUOTES, 'UTF-8', true),
                'data-caption'            => _wp_specialchars(get_post_field('post_excerpt', $attachment_id), ENT_QUOTES, 'UTF-8', true),
                'data-src'                => esc_url($full_src[0]),
                'data-large_image'        => esc_url($full_src[0]),
                'data-large_image_width'  => esc_attr($full_src[1]),
                'data-large_image_height' => esc_attr($full_src[2]),
                'class'                   => esc_attr($main_image ? 'wp-post-image' : ''),
            ),
            $attachment_id,
            $image_size,
            $main_image
        )
    );

    return '<div data-thumb="' . esc_url( $thumbnail_src[0] ) . '" data-thumb-alt="' . esc_attr( $alt_text ) . '" class="woocommerce-product-gallery__image"><a data-lightbox="Gallery" href="' . esc_url($full_src[0]) . '">' . $image . '</a></div>';
}*/


add_action('wp', 'change_thumbnail_to_image_from_meta', 60);

function change_thumbnail_to_image_from_meta() {
	
	if (is_admin() && is_archive() && is_blog_admin() && is_post_type_archive() &&  get_post_type() == "product") {
		global $posts;
		for($i = 0; $i < count($posts); $i++) {
			$image_meta_product = get_post_meta( $posts[$i]->ID, '_custom_image', true );
			$image_tag = wp_get_attachment_image_src($image_meta_product, 'thumbnail');
			if (is_array($image_tag)) {
					echo '
						<style>
							table.wp-list-table.table-view-list.posts tbody > tr:nth-child(' . ($i + 1) . ') td.thumb.column-thumb img {
								content:url("' . $image_tag[0] . '");
							}
						</style>
					';
			}
			else {
					echo '
						<style>
							table.wp-list-table.table-view-list.posts tbody > tr:nth-child(' . ($i + 1) . ') td.thumb.column-thumb img {
								content:url("' . wc_placeholder_img_src('thumbnail') . '");
							}
						</style>
					';
			}
		}
	}
}
?>