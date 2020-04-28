import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {Helmet} from 'react-helmet';
import './index.css';
import './fonts/Bangers/Bangers-Regular.ttf';
import $ from 'jquery';

const colors = [

  {
    value: 'linear-gradient(to bottom right, blue, yellow)',
    label: 'Blue/Yellow gradient'
  },

  {
    value: 'linear-gradient(to bottom right, red, yellow)',
    label: 'Red/Yellow gradient'
  },

  {
    value: 'linear-gradient(to bottom right, purple, gold)',
    label: 'Purple/Gold gradient'
  }

];

const handleChange = (event) =>{

  document.body.style.background = event.target.value;

};



class Features extends React.Component{

  constructor(props){

    super(props);
    this.state = {

    }
  }

  render(){

    return (

      <div className="features">

        <TextField
          select
          style={{width: 200}}
          label="Select Background"
          onChange={handleChange}
          >
          {colors.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
          ))}

        </TextField>



      </div>

    );
  }
}

export default Features;
