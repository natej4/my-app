import React from "react";
import ReactDOM from "react-dom/client";
const quoteDict = [
    ["Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"],["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],["Strive not to be a success, but rather to be of value.", "Albert Einstein"],["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost"],["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale"],["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],["I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "Michael Jordan"],["The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart"],["Every strike brings me closer to the next home run.", "Babe Ruth"],["Definiteness of purpose is the starting point of all achievement.", "W. Clement Stone"],["We must balance conspicuous consumption with conscious capitalism.", "Kevin Kruse"]
]
console.log("hello")
class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: Math.floor(Math.random()*10)
        }

        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            index: Math.floor(Math.random()*10)
        });
    }
    render() {
        return (
            
             <div id="quote-box" style={{width: 500, margin: "0 auto", background: "aquamarine", color: "#000"}}>
                <p id="text">"{quoteDict[this.state.index][0]}"</p>
                <p id="author">-{quoteDict[this.state.index][1]}</p>
                {/* <p>{this.state.index}</p> */}
                <button id="new-quote" onClick={this.handleClick}>New Quote</button>
                <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet Quote</a>
             </div>
        );
    }
}
// function wrapper(props){
//     return(<quoteBox/>)
    
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QuoteBox />);
