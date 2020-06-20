import React, { Component } from "react";
import './App.css';
import ImageCard from "./components/ImageCard/ImageCard.js";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import images from "./images.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: images,
      score: 0,
      topScore: 0

    }
  }
  handleSubmit = id => {
    let newCard = this.state.images.map(image => {
      if (id === image.id) {
        if (image.clicked === undefined) {
          this.setState({
            score: this.state.score + 1
          })

          image.clicked = true;
          if (this.state.score >= this.state.topScore) {
            this.setState({
              topScore: this.state.topScore + 1
            })
          }
        }
        else {
          this.setState({
            score: 0
          })
        }

      }


      return image;
    })
    newCard = newCard.sort(() => (
      Math.random() - 0.5
    ))
    if (this.state.score === 0) {
      newCard = newCard.map(image => {
        image.clicked = undefined
        return image
      })
    }


    this.setState({
      images: newCard
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game | Score: {this.state.score} | TopScore: {this.state.topScore} </Title>
        <div className="row">
          {this.state.images.map(image => {
            return (

              <div className="col-sm-3">
                <ImageCard handleSubmit={this.handleSubmit}
                  image={image.image} id={image.id} />
              </div>
            )

          })}
        </div>

      </Wrapper>
    )
  }

}


export default App;
