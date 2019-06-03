import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
    
    InstaService = new InstaService();

    state = {
       posts: [],
       error: false 
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }
    
    renderItems(arr) {
        return arr.map((item) => {
            const {name, altname, photo, src, alt, descr, id} = item;
            
            return (
                <Post 
                    altname = {altname}
                    photo = {photo}
                    name = {name}
                    min
                    src = {src}
                    alt = {alt}
                    account = {id}
                    descr = {descr} />
            )
        })
    }

    render () {

        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);

        return (
            <div className="left">
                {items}
            </div>
            // <div className="left">
            //     <Post alt="pokemon" src="https://www.indiewire.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-12-at-12.05.31-PM.png?w=780" />
            //     <Post alt="duck" src="https://i.ytimg.com/vi/oCzGwDSaVTg/maxresdefault.jpg" />
            //     <Post alt="mister_mime" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/05/pokemon_detective_pikachu_mr._mime.jpg" />
            // </div>
        )
    }
}