import React, {Component} from 'react';
import Card from './Card';

export default class CardList extends Component {
    render() {
        return (
        <div>
            {this.props.robots.map((robot, i) => {
            return <Card key={i} id={robot.id} name={robot.name} email={robot.email}/>
        })}
        </div>)
    };
}
