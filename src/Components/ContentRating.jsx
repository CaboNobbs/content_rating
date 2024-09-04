
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislakes: 0,
        handleLike:() => {
            this.setState((prevState) => ({
                    likes:prevState.likes + 1
                })
            )
        },

        handleDislike:() => {
            this.setState((prevState) => ({
                    dislakes:prevState.dislakes + 1
                })
            )
        }
    };    
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
            //Add text here
            Sports
        </p>
        <div className='rating-buttons'> 
            <button className='like-button' onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                Dislike ({this.state.dislakes})
            </button>
        </div>
     </div>
    );
  }
}

export default ContentRating;
