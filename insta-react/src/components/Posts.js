import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render () {
        return (
            <div className="left">
                <Post alt="pokemon" src="https://www.indiewire.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-12-at-12.05.31-PM.png?w=780" />
                <Post alt="duck" src="https://i.ytimg.com/vi/oCzGwDSaVTg/maxresdefault.jpg" />
                <Post alt="mister_mime" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/05/pokemon_detective_pikachu_mr._mime.jpg" />
            </div>
        )
    }
}