if ( $.fn.fileupload ) {
  $( '#fileupload' )
  .change( function(e) {
    var fileName = $(this).val();
    if ( !(/\.(gif|jpe?g|png|tiff|eps|psd|cdr|pdf)$/i).test( fileName )) {
      $( '.b-fileupload__ext' ).addClass( 'i-warning' );
    } else {
      $( '.b-fileupload__ext' ).removeClass( 'i-warning' );
    }
  })
  .fileupload({
      url: $( '#fileupload' ).closest( '.b-fileupload' ).data( 'url' ),
      dataType: 'json',
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png|tiff|eps|psd|cdr|pdf)$/i,
      done: function (e, data) {
          $( '.b-fileupload__button-text' ).hide();
          $.each( data.result.files, function ( index, file ) {
              $('<div></div>').text(file.name).appendTo('#fileuploadFiles');
          });
          $( '.b-fileupload input[name="fileupload"]' ).remove();
          $( '.b-fileupload' ).append( '<input name="fileupload" type="hidden" value=\'' + JSON.stringify( data.result ) + '\'>' );
      },
      progressall: function (e, data) {
          var progress = parseInt(data.loaded / data.total * 100, 10);
          $( '#fileUploadProgress .progress-bar' ).css(
              'width',
              progress + '%'
          );
          setTimeout( function() {
            $( '#fileUploadProgress' ).addClass( 'i-hide' );
          }, 300);
      }
  })
  .parent().addClass($.support.fileInput ? undefined : 'disabled')
  .prop('disabled', !$.support.fileInput);
}