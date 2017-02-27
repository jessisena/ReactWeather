var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render: function(){
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <p>WeatherMessage Component</p>
//         <p>Temp {temp} a {location}</p>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (
      <p>Temp {temp} a {location}</p>
  );
};

module.exports = WeatherMessage;
