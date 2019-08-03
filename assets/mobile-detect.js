
    
    
          var md = new MobileDetect(window.navigator.userAgent);
          if(document.getElementById('per') === null){
          var ind = document.getElementById("ind");
          }
          var per = '';
          if(document.getElementById('ind') === null){
          per = document.getElementById("per");
          }
          var mobileWidth = document.getElementsByTagName('html')[0];
          var viewport = mobileWidth.getAttribute('mobileWidth');
          
         (function(doc) {
          var md = new MobileDetect(window.navigator.userAgent);
          if(md.phone() != null){
              
           doc.getElementById("viewport").setAttribute("content", "width="+viewport);
          }
           if(md.tablet() != null){
              
           doc.getElementById("viewport").setAttribute("content", "width=777");
          }
         }
         (document));
          
  if(md.phone() != null){
              
    mobileWidth.className += " mobile-version this-mobile paginate-it ";
    mobileWidth.classList.remove('not-mobile');
    mobileWidth.classList.remove('load-more');
    mobileWidth.classList.remove('infinite');
    
          }
           if(md.tablet() != null){
               
    mobileWidth.className += " tablet-version this-mobile paginate-it ";
    mobileWidth.classList.remove('not-mobile');
    mobileWidth.classList.remove('load-more');
    mobileWidth.classList.remove('infinite');
    
          }
              
           
          
           if(window.location.href.indexOf("post") > -1) {
    per.className += " this-is-permalink ";
    }
    else{
    per.className += " this-is-page ";
    } 
       
    if(window.location.href.indexOf("tagged") > -1) {
    ind.className += " this-is-tag ";
    }
    
    if(window.location.href.indexOf('/page/') !== -1){
        ind.className += ' this-is-pagination ';
    }
          
          
    if(window.location.href.indexOf("/submit") > -1) {
        window.location = '/#submit-trigger'
    }
    
    if(window.location.href.indexOf("/ask") > -1) {
        window.location = '/#ask-trigger'
		}
		
		
		/** portrait & landscape listener **/
		            
    window.addEventListener("DOMContentLoaded", function() {
        
        
    if(root.className.indexOf('mobile-version') !== -1){
            if(window.innerHeight > window.innerWidth){
           document.getElementById("viewport").setAttribute("content", "width="+viewport);
           document.getElementsByTagName('html')[0].className += ' portrait-mobile ';
}else{
    
           document.getElementById("viewport").setAttribute("content", "width=600");
           document.getElementsByTagName('html')[0].className += ' landscape-mobile ';
}

            /** mobile portrait **/
            window.addEventListener("orientationchange", function() {
  if(window.orientation == 0) // Portrait
  {
           document.getElementById("viewport").setAttribute("content", "width="+viewport);
           document.getElementsByTagName('html')[0].className += ' portrait-mobile ';
           location.reload();
  }
  else // Landscape
  {
      
           document.getElementById("viewport").setAttribute("content", "width=600");
           document.getElementsByTagName('html')[0].className += ' landscape-mobile ';
           location.reload();
  }
  
});

}

});
/** portrait & landscape listener **/