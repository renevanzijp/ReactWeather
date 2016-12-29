var  React = require("react");
var WeatherMessage = require("WeatherMessage");
var WeatherForm = require("WeatherForm");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({
   handleUpdates: function (updates) {

        var that = this;

        this.setState({
            isLoading: true,
            errorMessage : undefined
        });

        openWeatherMap.getTemp(updates.city).then(function (temp) {
            that.setState({
                city: updates.city,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            console.log("set state");

            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    getInitialState: function () {
        return {
            isLoading : false
        };
    },


    render: function () {
        var { isLoading, temp, city, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if( temp && city){
                return <WeatherMessage temp={temp} city={city}/>;
            }
        }

        function renderError () {
            if (typeof errorMessage === "string"){
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return(
           <div>
               <h1 className="text-center page-title">Get weather</h1>
               <WeatherForm handleUpdates={this.handleUpdates}/>
               {renderMessage()}
               {renderError()}
           </div>
       )
   }
});

module.exports = Weather;