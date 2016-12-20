var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function () {
//         var temp = this.props.temp;
//         var city = this.props.city;
//         return (
//             <div>
//                 {temp} in {city}
//             </div>
//         );
//     }
// });

var WeatherMessage = ({temp, city}) => {
//    var {temp, city} = props;
    return (
        <div>
            {temp} in {city}
        </div>
    );
};

module.exports=WeatherMessage;