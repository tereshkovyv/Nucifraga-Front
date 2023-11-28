import React, { Component } from 'react';
// import {FetchData} from "../FetchData";
import authService from "../api-authorization/AuthorizeService";

export class UserTable extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.getFetchDataa();
    }

    static renderTable(data) {
        console.log(data)
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>PasswordHash</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (<tr>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.passwordhash}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td><button>del</button></td>
                </tr>))}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : UserTable.renderTable(this.state.data);

        return (
            <div>
                <h2>Users</h2>
                {contents}
            </div>
        );
    }

    async getFetchDataa() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/user', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ data: data});
    }
}
