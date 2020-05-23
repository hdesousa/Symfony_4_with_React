import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component {
    constructor() {
        super();
        this.state = { users: [], loading: true};
    }
    
    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
       axios.get(`/api/users`).then(users => {
           this.setState({ users: users.data, loading: false})
       })
    }

    render() {
        const loading = this.state.loading;
        return(
            <div>
                {loading ? (
                    <div>
                        loading...
                    </div>
                ) : (
                    <div>
                        { this.state.users.map(user =>
                            <ul>
                                <li>
                                    <h4>{user.name}</h4>
                                    <p>{user.description}</p>
                                </li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        )
    }
}
export default Users;
