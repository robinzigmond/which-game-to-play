import React, { Component } from 'react';
import RecommendationList from './RecommendationList.js';

class Preferences extends Component {
    constructor(props) {
        super(props);
        this.handlePlayerCountChange = this.handlePlayerCountChange.bind(this);
        this.handleAvailableTimeChange = this.handleAvailableTimeChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {playerCount: 4, availableTime: 30, gameOrder: `rating${Object.keys(this.props.data[0].ratings)[0]}`, recommendations: [], given: false};
    }

    handlePlayerCountChange(event) {
        this.setState({playerCount: +event.target.value});
    }

    handleAvailableTimeChange(event) {
        this.setState({availableTime: +event.target.value});
    }

    handleOrderChange(event) {
        this.setState({gameOrder: event.target.value}, this.handleSubmit);
    }

    handleSubmit() {
        var foundGames = this.props.data.filter(game =>
            game.minplayers <= this.state.playerCount
            && game.maxplayers >= this.state.playerCount
            && game.minplaytime <= this.state.availableTime
            && game.maxplaytime >= this.state.availableTime);
        var sortFunction;
        switch(this.state.gameOrder) {
            case "bggRating":
                sortFunction = (a,b) => (b.stats.average - a.stats.average);
                break;
            case "geekRating":
                sortFunction = (a,b) => (b.stats.bayesaverage - a.stats.bayesaverage);
                break;
            default:
                let userToRate = this.state.gameOrder.slice(6);
                sortFunction = (a,b) => ((b.ratings[userToRate] || 0) - (a.ratings[userToRate] || 0));
                break;
        }
        foundGames.sort(sortFunction);
        this.setState({
            given: true,
            recommendations: foundGames
        });
    }

    render() {
        var ratingOrders;
        var users = Object.keys(this.props.data[0].ratings);
        if (users.length > 1){
            ratingOrders = users.map(user => ({value: `rating${user}`, text: `${user}'s rating`}));
        }
        else {
            ratingOrders = [{value: `${users[0]}'s rating`, text: "My Rating"}];
        }
        return (
            <div>
                <div className="form-section">
                    <label htmlFor="playerCount">Number of Players</label>
                    <input type="number" name="playerCount" value={this.state.playerCount} onChange={this.handlePlayerCountChange}/>
                    <label htmlFor="availableTime">Desired Playing Time (minutes)</label>
                    <input type="text" name="availableTime" value={this.state.availableTime} onChange={this.handleAvailableTimeChange}/>
                    <label htmlFor="order">Order results by:</label>
                    <select name="order" value={this.state.gameOrder} onChange={this.handleOrderChange}>
                        {ratingOrders.map(order => (
                            <option key={order.value} value={order.value}>{order.text}</option>  
                        ))}
                        <option value="bggRating">Overall BGG Rating</option>
                        <option value="geekRating">BGG "Geek Rating"</option>
                    </select>
                    <button type="button" onClick={this.handleSubmit}>Get recommendations!</button>
                </div>
                {this.state.given ?
                <RecommendationList games={this.state.recommendations}
                key={this.state.recommendations.map(game => game.id).join(",")} users={users}/>
                : null}
            </div>
        );
    }
}

export default Preferences;