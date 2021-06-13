import React, {Component} from 'react';
import 'tachyons';

export default class Card extends Component {
    render() {
        return (
            <div className='bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5'>
                <div>
                <img alt='robots' src= {`https://robohash.org/${this.props.id}?200x200`} ></img>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}