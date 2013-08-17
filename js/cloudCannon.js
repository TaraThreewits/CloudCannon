

function CloudCannon(usr_options) {
  var self = this;
  
  self.options = {
    maxClouds: 10,        // Max number of clouds on screen at one time
    minDuration: 5000,    // Min amount of time (ms) for cloud to cross screen
    maxDuration: 10000,   // Max amount of time (ms) for cloud to cross screen
    fireDelay: 500,      // Time to wait after a cloud leaves the screen before shooting out a new one
    sky: $('#sky'),       // JQuery object that is the sky
    cloudImg: 'img/cloud.gif', // Cloud image
    direction: 1, // 1 = right to left, -1 = left to right
    cloudScales: [1, 0.8, 0.5, 0.3],
    minAltitude: 600,     // Horizontal line from top of sky where clouds cannot go below (-1 is to edge)
    maxAltitude: -1,      // Horizontal line from top of sky where clouds cannot go above (-1 is to edge)
    
    cloudWidth: 500,       // DO NOT CHANGE: This value is recalculated on first run
    cloudHeight: 500       // DO NOT CHANGE: This value is recalculated on first run
  };
  
  // TODO: let user override these options by passing them in
  // usr_options
  
  // Number of clouds in the sky
  self.clouds = 0;
  
  // Starts the cannon
  self.start = function() {  
    if(self.clouds == 0) {
      $('<img src="'+self.options.cloudImg+'" />').load(function(){
        // get the width and height of the cloud
        self.options.cloudWidth = this.width;
        self.options.cloudHeight = this.height;
        // Start the cannon
        self.cloudLoop();
      });
    }   
  };
  
  // This is the main loop for generating clouds
  self.cloudLoop = function(){
    // Keep firing if we don't have all the initial clouds out
    if(self.clouds < self.options.maxClouds) {
      self.shootCloud();
      setTimeout(function(){self.cloudLoop();}, self.options.fireDelay);
    }
  };
  
  // Creates a new cloud and sends it on its way
  self.shootCloud = function() {
    self.clouds += 1;    
    console.log('newCloud!', self.clouds);
    
    var cloud = $('<img src="'+self.options.cloudImg+'" />');
    cloud.css({
      position: absolute;
      left: (self.options.cloudWidth * -1) + 5,
      top: (self.options.maxAltitude == -1) ? 0= : self.options.maxAltitude
    });
    
  }
}