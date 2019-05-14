import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';
import CelebrityDetails from './CelebrityDetails'
import './App.css';

export default class Celebrities extends Component {
  constructor(props){
    super(props)
    this.state={
      celebrities: null,
      query: '',
      data: []}
    }

    handleInputChange = event => {
      // const query = event.target.value;
  
      // this.setState(prevState => {
      //   const celebrities = prevState.data.filter(element => {
      //     return element.name.toLowerCase().includes(query.toLowerCase());
      //   });
  
      //   return {
      //     query,
      //     celebrities
      //   };
      // });
    };

    // getData = () => {
    //   fetch(`http://localhost:4000/restaurants`)
    //     .then(response => response.json())
    //     .then(data => {
    //       const { query } = this.state;
    //       const celebrities = data.filter(element => {
    //         return element.name.toLowerCase().includes(query.toLowerCase());
    //       });
  
    //       this.setState({
    //         data,
    //         celebrities
    //       });
    //     });
    // };

    
    render() {      
      return (
        <div>
        <h1 align="center" className="title">Movies Celebrities</h1>
        <div className="searchForm">
        <form align="center" className="search">
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
        {/* If `this.state.celebrities` is falsy (null) */}
        {!this.state.celebrities && <div>Loading...</div>}
        {/* If `this.state.celebrities` is truthy (an array) */}
        {this.state.celebrities && <table>
          <tbody className="celebritiesDisplay">
            {/* Loop through `this.state.celebrities` */}
            {this.state.celebrities.filter(celebrity => true).map(celebritie => <tr key={celebritie.url}>
              <td>{celebritie.url}</td>
              <td><img src={`https://image.tmdb.org/t/p/w185/${celebritie.profile_path}`}/></td>
              <td className="Bold">{celebritie.name}</td>
            </tr>)}
          </tbody>
        </table>}
        <div className="col-7">
              <Route path="/:id" component={CelebrityDetails}  />
        </div>
      </div>
    )
  }

  componentDidMount() {
    // this.getData();
    axios.get('https://api.themoviedb.org/3/person/popular?page=20&api_key=7f3f8ad51cdbc7abc8f12c81b6b1c224')
      .then(response => {
        console.log(response.data.results)
        this.setState({
          celebrities: response.data.results
        })
      })
  } 
}
