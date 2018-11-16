        $('select').each(function(){
          var $this = $(this), numberOfOptions = $(this).children('option').length;
        
          $this.addClass('select-hidden'); 
          $this.wrap('<div class="select"></div>');
          $this.after('<div class="select-styled"></div>');

          var $styledSelect = $this.next('div.select-styled');
          $styledSelect.text($this.children('option').eq(0).text());
        
          var $list = $('<ul />', {
              'class': 'select-options'
          }).insertAfter($styledSelect);
        
          for (var i = 0; i < numberOfOptions; i++) {
              $('<li />', {
                  text: $this.children('option').eq(i).text(),
                  rel: $this.children('option').eq(i).val()
              }).appendTo($list);
          }
        
          var $listItems = $list.children('li');
        
          $styledSelect.click(function(e) {
              e.stopPropagation();
              $('div.select-styled.active').not(this).each(function(){
                  $(this).removeClass('active').next('ul.select-options').hide();
              });
              // $('.select').toggleClass('slider');
              $(this).toggleClass('active').next('ul.select-options').slideToggle();
          });
        
          $listItems.click(function(e) {
              e.stopPropagation();
              $styledSelect.text($(this).text()).removeClass('active');
              $this.val($(this).attr('rel'));
              $list.hide();
              //console.log($this.val());
          });
        
          $(document).click(function() {
              $styledSelect.removeClass('active');
              $list.hide();
          });

      });
        jQuery(window).scroll(function() {
            //--header--///
            var scroll = jQuery(window).scrollTop();
              if (scroll > 0) {
                  jQuery("#header").addClass("fixed");
                  jQuery(".banner").css('background','rgba(29, 35, 41, 0.97)');
              } else {
                  jQuery("#header").removeClass("fixed");
              }

             // go top//    
              if (jQuery(this).scrollTop() > 100) {
                jQuery('.go-to-top').fadeIn(200);
              } else {
                jQuery('.go-to-top').fadeOut(200);
              }

            });   
         jQuery(document).ready(function(){

              $( ".select-options" ).each(function() {
                var id = $(this).height();
                  if (id > 245){
                    $(this).css('overflow-y' , 'scroll');
                  }
                  else{
                      $(this).css('overflow-y' , 'hidden');
                  }
              });

              $('.btn-fav').click(function() {
                $(this).toggleClass('fav_btn_active');
              });

             // Animate the scroll to top //
             jQuery('.go-to-top').click(function(event) {
                  event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, 500);
             })
             wow = new WOW({}).init();
          });


        function initParallax() {
            $('#banner').parallax("100%", 0.2);
          }
        initParallax();
        
        


     
     
      