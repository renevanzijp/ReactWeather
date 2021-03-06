var React = require("react");


var WeatherForm = React.createClass({

    onFormSubmit: function(e){
        e.preventDefault();
        var city = this.refs.city.value;

        var updates ={};

        if (city.length > 0 ){
            this.refs.city.value = "";
            updates.city=city;
        }

        this.props.handleUpdates(updates);
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="search" placeholder="Search weather by city" ref="city"/>
                    </div>
                    <div>
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});
module.exports=WeatherForm;
