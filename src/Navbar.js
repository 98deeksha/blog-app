import React from "react"
import {Link, Route} from "react-router-dom"
import Home from "./Home";
import Users from "./Users";
import Posts from "./Posts";
import UserDisplay from "./UserDisplay";
import PostDisplay from "./PostDisplay";

const Navbar = (props) => {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>

        <Route path="/" component={Home} exact={true}/>
        <Route path="/users" component={Users} exact={true}/>
        <Route path="/posts" component={Posts} exact={true} />
        <Route path="/users/:id" component={UserDisplay} />
        <Route path="/posts/:id" component={PostDisplay} />
        

      </div>
    );
}
 
export default Navbar;