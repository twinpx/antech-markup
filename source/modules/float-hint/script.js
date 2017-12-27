function FloatHint( elem ) {

    function c() {
        d();
        e();
    }
    
    function d() {
        self.$elem = $( elem );
        self.$elem.data( "FloatPhone", self );
        self.$close = self.$elem.find( '.b-float-hint__close' );
        self.scrollEvent = undefined;
        self.scrollIntervalEvent = undefined;
        self.scrollIntervalId = undefined;
        self.showTimeoutId = undefined;
        self.showTime = 200;
        self.cookName = 'AJSCOCK_'+$( elem ).prop('id');
        
    }
    
    function e() {
        f();
        $(window).bind("scroll", g);
        self.$close.click( function() {
          Cookies.set( self.cookName, true, { expires: 1, path: window.location.hostname });
          i();
        });
    }
    
    function f() {
        self.showTimeoutId = setTimeout(function() {
            h();
        }, self.showTime);
    }
    
    function g(a) {
        self.scrollEvent = a;
        if ( !self.scrollIntervalEvent ) {
          self.scrollIntervalEvent = a;
          clearTimeout(self.showTimeoutId);
          i();
          self.scrollIntervalId = setInterval(function() {
              return self.scrollIntervalEvent !== self.scrollEvent ? void(self.scrollIntervalEvent = self.scrollEvent) : (clearInterval(self.scrollIntervalId),
                  self.scrollIntervalEvent = void 0,
                  void f());
          }, 100);
        }
    }
    
    function h() {
      if ( !Cookies.get( self.cookName )) {
        self.$elem.addClass("i-visible");
      }
    }
    
    function i() {
        self.$elem.removeClass("i-visible");
    }
    var self = this;
    c();
}

if ( !Cookies.get( 'AJSCOCK_b-float-hint' )) {
  new FloatHint("#b-float-hint");
}