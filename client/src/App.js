import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getPlogPost();
  };

  getPlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        console.log("error error!!!!")
        // alert('Error retrieving data');//TO-DO:remove this later and deal with error
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getPlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  displayBlogPost = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} className="blog-post_display">
        <h3 className="">{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  render() {

    console.log('State', this.state);

    return(
      <div className="app">
        <h2>Welcome to the seer app</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea 
              placeholder="body" 
              name="body" 
              cols="30" 
              rows="10" 
              value={this.state.body} 
              onChange={this.handleChange} 
            >   
            </textarea>
          </div>
          <button>Submit</button>
        </form>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;