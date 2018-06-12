import React, { Component } from 'react'

import Article from './Article'
import Add from './Add'
import SubArticle1 from './SubArticle1'
import SubArticle2 from './SubArticle2'
import SubArticle3 from './SubArticle3'
import SubArticle4 from './SubArticle4'
import All4Ads from './All4Ads'

class Main extends Component {
    constructor(){
        super();
        this.state = {
            ads: [
                {name: "Single Orcs in Indianapolis", source: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", alt: "orc"},
                {name: "You won't believe what's under this mountain", source: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", alt: "mountain"},
                {name: "Mine 20% more gold with One Weird Trick", source: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg", alt: "gold"},
                {name: "Surprise for Indiana Hobbits born before 1999", source: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", alt: "hobbit"},
            ]
        }
    }
    render() {
        return(
            <main className="expanded row">
                <Article />
                <Add />

                <div className="small-12 columns other-articles">
                    <h2>From around the Realm</h2>
                    {this.state.ads.map(Ad => <All4Ads name={Ad.name} source= {Ad.source} alt= {Ad.alt} />)}
                </div>
            </main>
        )
    }
}

export default Main