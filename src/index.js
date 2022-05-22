import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

//import { Planets } from "../src/planet";
//import { Mortality } from "../src/mortality";

$(document).ready(function() {
  $('#user-input-form').submit(function(event) {
    event.preventDefault();
    // const userAge = $('#user-age').val();
    

    // $("#mercAge") = userAge.ageOnMercury;

    

    $('#newAge').show();

  });

});