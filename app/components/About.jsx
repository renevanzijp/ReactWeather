var  React = require("react");


var About = (props) => {
    return(
        <div>
            <h1 className="text-center page-title">About</h1>
            <p> from the course:</p>
            <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">The Complete React Web App Developer Course</a>
            <br/>
            <br/>
            <p>Some tools used</p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - a Javascript framework.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - a service for weather information.
                </li>
                <li>
                    <a href="https://github.com/renevanzijp/ReactWeather">Github</a> - a  Git repository hosting servic.
                </li>

            </ol>
        </div>
    )
};

module.exports = About;