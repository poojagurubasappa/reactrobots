import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import {Scroll} from '../components/Scroll';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            robots,
            searchField: ''
        };
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({searchField: event.target.value});
    }

    componentDidMount() {
        console.log('component mounted');
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchField));
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}