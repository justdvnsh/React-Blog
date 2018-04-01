import React , {Component} from 'react';

import axios from 'axios';
import './Posts.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost'

class Posts extends Component {

  state = {
    posts: [],
    selectedId: null
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        let posts = res.data.slice(0,4)
        console.log(res)
        this.setState({posts: posts})
      }).catch((e) => {
        console.log(e)
        return e
      })
  }

  postSelectedHandler = (id) => {
    this.setState({selectedId: id})
  }

  render () {
    let posts = this.state.posts.map((post) => {
      return <Post title={post.title} key={post.id} clicked={() => {
        this.postSelectedHandler(post.id)
      }}/>
    })


    return (
      <div>
        <section className="Posts">
            {posts}
        </section>
        <section>
            <FullPost id={this.state.selectedId}/>
        </section>
      </div>
    )
  }
};

export default Posts;
