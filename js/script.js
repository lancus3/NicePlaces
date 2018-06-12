
var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
//Mustache.parse(templateItem);

for(var i = 0; i < dataCarousel.length; i++){
		//console.log(dataCarousel[i]);
		listItems += Mustache.render(templateItem, dataCarousel[i]);
  };

//var fullList = Mustache.render(listItems);

results.insertAdjacentHTML('beforeend', listItems);


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
  
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});






var button = document.querySelector('.button');

button.addEventListener( 'click', function( event ) {
  flkty.selectCell(0);
  });

  var progressBar = document.querySelector('.progress-bar')

  flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });
