import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render () {
        return (
            <div key = {this.props.account} className="post">
                {/* <User 
                name = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pokemon-detective-pikachu-1-1552650378.jpg?crop=0.411xw:0.988xh;0.355xw,0.00833xh&resize=480:*"
                logoAlt = "pokemon"
                name = "Pikachu_the_pokemon"
                min/> */}
                <User
                    photo = {this.props.photo}
                    altname = {this.props.logoAlt}
                    name = {this.props.name}
                    min = {this.props.min}
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    {this.props.name}
                </div>
                <div className="post__descr">
                    {this.props.descr}
                </div>
            </div>
        )
    }
}