import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render () {
        return (
            <div className="post">
                <User 
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pokemon-detective-pikachu-1-1552650378.jpg?crop=0.411xw:0.988xh;0.355xw,0.00833xh&resize=480:*"
                alt="pokemon"
                name="Pikachu_the_pokemon"
                min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some_acount
                </div>
                <div className="post__descr">
                    lfjbldfhj;jh;otjhi dfhlfh; lsjglsh;hrg h'hr
                </div>
            </div>
        )
    }
}