
var p = 400001;
var data = [];
var counter = 0;

function getCodeAddress(pincode) {
  var address = pincode;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
          return results[0].geometry.location
data[counter].pincode=results[0].address_components[0].long_name;
data[counter].lat= results[0].geometry.location.lat;
data[counter].lng=results[0].geometry.location.lng;
counter++;
pincode++;	

   } else {
console.log("error");

    }


  });

}
setInterval(getCodeAddress(),300);
