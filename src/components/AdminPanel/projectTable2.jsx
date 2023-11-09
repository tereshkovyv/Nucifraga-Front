import React, { Component } from 'react';
import {FetchData} from "../FetchData";
import authService from "../api-authorization/AuthorizeService";

export class ProjectTable2 extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.getFetchDataa();
    }

    static renderTable(data) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>description</th>
                    <th>owner</th>
                    <th>contractors</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (<tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.owner}</td>
                    <td>{item.contractors}</td>
                    <td><button onClick={() => this.deleteProject(item.id)}>del</button>
                    <button onClick={() => this.editProject(item.id)}>edit</button></td>
                </tr>))}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ProjectTable2.renderTable(this.state.data);

        return (
            <div>
                <h2>Projects     <button onClick={this.createProject}>+create</button></h2>
                {contents}
            </div>
        );
    }

    async getFetchDataa() {
        const token = await authService.getAccessToken();
        const response = await fetch('api/projects', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ data: data});
    }

    static async deleteProject(id) {
        const token = await authService.getAccessToken();
        const response = await fetch(`api/projects/${id}`, {
            method : 'DELETE',
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        alert(response.status)
    }

    static async editProject(id){
        let name = prompt("Input name");
        let description = prompt("Input description");
        let dataToSend = {
            name : name,
            description : description
        }

        const token = await authService.getAccessToken();
        const response = await fetch(`api/projects/${id}`, {
            method: 'PUT',
            headers: !token ? {} : {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(dataToSend)
        });
        const data = await response.json();
        alert("Project edited at id: " + data.id)
    }

    async createProject() {
        let name = prompt("Input name");
        let description = prompt("Input description");
        let dataToSend = {
            Name : name,
            Description : description
        }
        console.log(dataToSend)
        
        const token = await authService.getAccessToken();
        const response = await fetch('api/projects/', {
            method: 'POST',
            headers: !token ? {} : { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8',

            },
            body : JSON.stringify(dataToSend)
        });
        const data = await response.json();
        alert("Project created with id: " + data.id)
    }
}
