import React, { Component } from "react";

class AddBook extends Component {
  state = {
    title: "",
    author: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddItem(this.state);
    this.setState({
      title: "",
      author: "",
    });
  };

  render() {
    return (
      <div>
        <form className="center" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autocomplete="off"
            name="title"
            placeholder="Book name"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            autocomplete="off"
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={this.handleChange}
          ></input>
          <button>Add book</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
