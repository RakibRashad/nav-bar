
  $(function(){
  let span = $('nav span')
  let Sidebar = $('.Sidebar')

     span.click(function(){

      Sidebar.toggleClass("active")
       if(Sidebar.hasClass('active')){
          span.text('X')
       }else{
          span.text('=')
       }
     })



    let img = $(".img")
   
    img.hover (
       function(){
         $(this).attr("src","./img/shows1.jpg")
        },
       function(){
         $(this).attr("src","./img/shows.jpg", ) 
          //.animate({
         //   left: '250px',
          //  height: '150px',
           //  width: '150px'
        //  });
      

       })

  });

 $(function(){

    let nav = $('nav')

    $(window).scroll(function(){

       let scrTop = $(window).scrollTop();
       if('scrTop'> 400){
        nav.addClass('navFixed')

       } else 
       {
        nav.removeClass('navFixed')  
      }

   });
 });