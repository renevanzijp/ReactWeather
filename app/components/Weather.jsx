var  React = require("react");
var WeatherMessage = require("WeatherMessage");
var WeatherForm = require("WeatherForm");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
   handleUpdates: function (updates) {

        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(updates.city).then(function (temp) {
            that.setState({
                city: updates.city,
                temp: temp,
                isLoading: false
            });

        }, function (erro) {
            alert(erro);
            that.setState({
                isLoading: false
            });
        });

    },
    getInitialState: function () {
        return {
            isLoading : false
        };
    },


    render: function () {
        var { isLoading, temp, city} = this.state;

        function renderMessage() {
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            } else if( temp && city){
                return <WeatherMessage temp={temp} city={city}/>;
            }
        }

        return(
           <div>
               <WeatherForm handleUpdates={this.handleUpdates}/>
               {renderMessage()}
           </div>
       )
   }
});

module.exports = Weather;