import React from 'react';

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: '', month:'', color:'', isSubmitted: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({isSubmitted: true});
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <h1>Hello {this.state.isSubmitted && this.state.name} & {this.state.isSubmitted &&this.state.month} & {this.state.isSubmitted &&this.state.color}</h1>
      <p>Enter your name:</p>
      <input type="text" name="name" onChange={this.handleChange} />
      <p>Enter your birth month:</p>
      <input type="text" name="month" onChange={this.handleChange} />
      <p>Enter favourite color:</p>
      <input type="text" name="color" onChange={this.handleChange} />
      <br/>
      <br/>
      <input type ="submit"/>
      </form>
    );
  }

}

export default MyForm;
