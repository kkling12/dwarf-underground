import React, { Component } from 'react'

class All4Ads extends Component {
    render() {
        return(
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.source} alt={this.props.alt} />
                    <p>{this.props.name}</p>
                </a>  
            </div>
        )
    }
}
export default All4Ads