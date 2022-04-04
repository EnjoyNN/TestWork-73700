jQuery(function($){
	$('.upload_image_button').click(function( event ){
		event.preventDefault();
		const button = $(this);
		const customUploader = wp.media({
			title: 'Select image',
			library : {
				type : 'image'
			},
			button: {
				text: 'Use this image'
			},
			multiple: false
		});
 
		//select event
		customUploader.on('select', function() {
			const image = customUploader.state().get('selection').first().toJSON();
			button.parent().prev().attr( 'src', image.url );
			button.prev().val( image.id );
 
		});
		customUploader.open();
	});

	
	$('.remove_image_button').click(function( event){
		event.preventDefault();
		if ( true == confirm( "Are you sure?" ) ) {
			const src = $(this).parent().prev().data('src');
			$(this).parent().prev().attr('src', src);
			$(this).prev().prev().val('');
		}
	});
	
	
	$('#clear_customf').click(function(event) {
		event.preventDefault();
		let id_post_for_custom = jQuery('#post_ID').attr('value');
		let formData = [id_post_for_custom]; // prepare the form data as an array
	
		jQuery.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    action: 'clear_custom_fields_product',
					dataForPHP: formData
                },
                success: function(response) {
					//clear on frontend too
					
					let srcimg = $('.remove_image_button').parent().prev().data('src');
					$('.remove_image_button').parent().prev().attr('src', srcimg);
					$('.remove_image_button').prev().prev().val('');
					
					$("#custom_skilltest_select_field").val($("#custom_skilltest_select_field option:first").val());
					
					$("#custom_skilltest_date_field").val("");
					
					//alert(response);
                },
                error: function(error) {
					alert(error);
                }
        });
	})
});