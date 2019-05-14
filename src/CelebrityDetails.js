import React, { Component } from 'react'

export default class CelebrityDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      details: []
    }
  }

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/person/popular?page=20&api_key=7f3f8ad51cdbc7abc8f12c81b6b1c224http://localhost:4000/restaurants')
      .then(results => results.json())
      .then(data => {
        const { query } = this.state;
        const celebrities = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          // details: details
        });
      });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
