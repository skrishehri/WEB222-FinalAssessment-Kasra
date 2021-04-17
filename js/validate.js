function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // console.log('TODO - validate the longitude, latitude values before submitting');
  var lat = document.getElementById("latitude").value;
  var lon = document.getElementById("lon").value;
  var lonError = document.getElementById("longtitudeError");
  var latError = document.getElementById("latitudeError");

  if(lat>90||lat<-90||lat.trim().length==0||isNaN(lat)==true)
  {
      latError.innerHTML=" must be a valid latitude (-90 to 90)"
      return false;
  }

  if(lon>180||lon<-180||lon.trim().length==0||isNaN(lon)==true)
  {
      lonError.innerHTML=" must be a valid longtitude (-180 to 180)";
      return false;
  }

  return true;
};

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
