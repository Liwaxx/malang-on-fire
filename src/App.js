import React, { Component } from 'react';
import { database } from './firebase.js';
import List from './List.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newQuestion: ''
    }
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    
    this.dbRef = database.ref("/question");

    this.dbRef.on("value", (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    });
  }
  handleChange = (event) =>{
      this.setState({
        newQuestion: event.target.value
      });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //saveFireBase
    const newQuestion = this.state.newQuestion
    //.set untuk replace
    // database.ref("/question").set(newQuestion);
    //.push buat baru
    this.dbRef.push( {
      title : newQuestion,
      upvote : 0,
      downvote : 0
      });
  }
  handleUpvote = (id, question) => {
    const {title, upvote, downvote} = question;
    this.dbRef.child(id).set({
      title,
      upvote : upvote + 1,
      downvote
    })
  }
  render() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Workshop List</h1>
        {/* {
          this.state.data ?
        <div>
        <p>Name : {this.state.data.name}</p>
        <p>Age : {this.state.data.age}</p>
        </div> : <p>Loading...</p>
        } */}
        <form onSubmit={this.handleSubmit}>
          <input
           type="text"
           onChange={this.handleChange}
           className="my-6 mx-3 font-sans text-2xl text-grey-darker"
            />
          <button
           type="submit"
           className="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
           >  💾 Save </button>
        </form>
        {
          this.state.data ?
        
        <div>
          <List 
          data={this.state.data}
          handleUpvote = {this.handleUpvote}/>
        </div>
        : <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
