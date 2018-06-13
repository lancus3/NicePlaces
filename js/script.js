
var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
//Mustache.parse(templateItem);

for (var i = 0; i < dataCarousel.length; i++) {
  //console.log(dataCarousel[i]);
  listItems += Mustache.render(templateItem, dataCarousel[i]);
};

//var fullList = Mustache.render(listItems);

results.insertAdjacentHTML('beforeend', listItems);


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true

});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
  // options
});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});

// Initialize and add the map
window.initMap = function () {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: dataCarousel[0].coords });
  // The marker, positioned at Uluru
  
  function makeSizer(j) {
    return function() {
      flkty.selectCell(j);  
    };
  }
  var marker =[];
  for (var j = 0; j < dataCarousel.length; j++) {
    marker[j] = new google.maps.Marker({ 
      position: dataCarousel[j].coords,
      map: map 
    });
  marker[j].addListener( 'click', makeSizer(j));
    

  };
  
  flkty.on( 'change', function( index ) {
      map.panTo(dataCarousel[index].coords),
      map.setZoom(10)
  });

};
