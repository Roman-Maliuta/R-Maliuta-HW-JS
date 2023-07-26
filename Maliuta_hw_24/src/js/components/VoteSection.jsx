import React, { Component } from 'react';

export class VoteSection extends Component {
    constructor() {
        super()

        this.state = {
            smile: 0
        }

        this.onBtnClick = this.onBtnClick.bind(this);
    }
    
    onBtnClick() {
        this.setState({
            smile: ++this.state.smile
        })
    }

    render() {
        return (
            <div className='vote-section'id={`${this.props.elNum}`}>
                {this.props.numSmile}
                <p>Total voice:<span>{this.state.smile}</span></p>
                <button onClick={this.onBtnClick}>Vote</button>
            </div>
        )
    }
}
