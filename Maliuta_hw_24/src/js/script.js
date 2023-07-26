import React, {Component, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import {VoteSection} from './components/index.js';

import '../styles/style.scss';

class App extends Component{
        constructor() {
        super()
        this.state  = {
            resVote: ''  
        }
        this.calcVote = this.calcVote.bind(this);     
    } 
    
    render() {
        return (
        <Fragment>
        <div className='vote-holder'>
            <VoteSection elNum={'Smile-1'} numSmile={<h3>Smile 1</h3>}/>
                
         <VoteSection elNum={'Smile-2'} numSmile={<h3>Smile 2</h3>}/>
                
         <VoteSection elNum={'Smile-3'} numSmile={<h3>Smile 3</h3>} />
                
        </div>
            <button onClick={this.calcVote} className='btn-res'>Show Results</button>

            <p className='winner'> Winner is: {this.state.resVote}</p>  
        </Fragment>        
        )
    }

    calcVote() {
        const smileOne = document.getElementById('Smile-1');
        const smileTwo = document.getElementById('Smile-2');
        const smileThree = document.getElementById('Smile-3');

        let one = +(smileOne.children[1].children[0].innerHTML);
        let two = +(smileTwo.children[1].children[0].innerHTML);
        let three = +(smileThree.children[1].children[0].innerHTML);

        const winner = Math.max(
            one,
            two,
            three,
        );
            
        let count = 0;
        if (one === two) {
          count++;
        }
        if (one === three) {
          count++;
        }
        if (two === three) {
            count++;
        } 

        console.log(count);
        if (count === 3) {
         return this.setState({
              resVote: "Haven't winners"
        }) 
        } else if (count >= 1) {

           if (one == winner) {
                  if (one == two) {
                   return this.setState({
                     resVote: `${smileOne.children[0].innerHTML} and ${smileTwo.children[0].innerHTML}`
                   })
                } else if (one == three) {
                   return this.setState({
                     resVote: `${smileOne.children[0].innerHTML} and ${smileThree.children[0].innerHTML}`
                    })
                  } else {
                    return this.setState({
                     resVote: smileOne.children[0].innerHTML
                    })
                }
            }
            if (two == winner) {
                if (two == three) {
                    return this.setState({
                     resVote: `${smileTwo.children[0].innerHTML} and ${smileThree.children[0].innerHTML}`
                    })
                } else if (one == three) {
                    return this.setState({
                     resVote: smileTwo.children[0].innerHTML
                    })
                } 
            }
            if (three == winner) {
                    return this.setState({
                     resVote: smileThree.children[0].innerHTML
                    })
            }

        }
    }

}

const root = createRoot(document.getElementById('app'));
root.render(<App />);