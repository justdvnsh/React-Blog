import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                  <nav>
                    <ul>
                      {/*
                        * We must not use a href while using react -router, because it refrehs the complete page instead of re-renderng the the components
                        * we must use link instead.
                        * we can also use different properties with link tag, like hash and search
                        * This does nothing in this app, but can be useful when building a robust app.
                        * Now if we want to add some styling to the navLinks , we would need to use NavLink tag instead of Link tag.
                        * activeClassname lets u assign a unqiue classname for your tag.
                        * activeStyle lets you define a unique style.
                        */}
                      <li><NavLink to="/" exact activeClassName='my-active-class' activeStyle={{color: '#fff'}}>Home</NavLink></li>
                      <li><NavLink to={{
                        pathname: '/new-posts',
                        hash: '#submit',
                        search: '?quick-submit=true'
                      }}>New Post</NavLink></li>
                    </ul>
                  </nav>
                </header>
                {/*<Route path="/" exact render={() => (
                        <Posts />
                  )} />
                <Route path="/new-posts" render={() => (
                    <NewPost />
                  )} />
                  we can use this method but we alos have a handy method to do so.
                  */ }
                  <Switch>{/*
                      * Swtich tag is used to tell the react-router to load only one path at a time.
                    */}
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-posts" exact component={NewPost} />
                    <Route render={() => (
                        <div className="NotFound">
                          {/*
                            * a <Route /> without path is used to handle 404
                            */}
                            <h1> Page Not Found </h1>
                        </div>
                    )} />
                  </Switch>
            </div>
        );
    }
};

// exact is a boolean parameter used to specify the exct route.
// because the react router checks wether the route starts from the given route. i.e. like path="/" cheks wether the route contains
// '/' in the path or not.
// exact helps solve the problem and make the route exact.
/*
* now alose, we can render the full post component inside this file. by passing <Route path="/:id"> as the path.
* and then we would need to change the posts.js file and wrap all the JSX code inside Link tag and pass the id from there.
* <Link to={"/" + this.post.id} key={post.id}> and then changing the,
* this.props.id inside fullpost.js to this.props.match.params.id
* we can also use redirects to redirect to a path .
* if we use redirect inside switch we can specify from="/" to="/posts" attribute,
* but outside switch we can only specify to attr.
*/

export default Blog;
