var  React = require("react");

// var About = React.createClass({
//    render: function () {
//        return(
//             <h3>About component</h3>
//        )
//    }
// });

var About = (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p>Some tools used</p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - a Javascript framework.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - a service for weather information.
                </li>

            </ol>
        </div>
    )
};

module.exports = About;