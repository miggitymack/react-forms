import React from 'react';
import NewPlaylist from '../components/NewPlaylist'

class NewPlaylistContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt){
    const value = evt.target.value;
    console.log(value);
    this.setState({inputValue: value});
  }

  submitForm (evt) {
    evt.preventDefault();
    const value = evt.target.value;
    console.log(this.state.inputValue);
  }

  render(){
    return(
      <div>
        <NewPlaylist onSubmit={this.submitForm} handleChange={this.handleChange}  value={this.state.inputValue}/>
      </div>
    );
  }
}

export default NewPlaylistContainer;
