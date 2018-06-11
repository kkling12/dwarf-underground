import React, { Component } from 'react'

import Article from './Article'
import Add from './Add'
import SubArticle1 from './SubArticle1'
import SubArticle2 from './SubArticle2'

class Main extends Component {
    render() {
        return(
            <main className="expanded row">
                <Article />
                <Add />

                <div className="small-12 columns other-articles">
                    <h2>From around the Realm</h2>
                    <SubArticle1 />
                    <SubArticle2 />
                    <div className="small-6 medium-3 columns other-article">
                    <a href="#">
                        <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold" />
                        <p>Mine 20% more gold with One Weird Trick</p>
                    </a> 
                    </div>
                    <div className="small-6 medium-3 columns other-article">
                    <a href="#">
                        <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit" />
                        <p>Surprise for Indiana Hobbits born before 1999</p>
                    </a> 
                    </div>
                </div>
            </main>
        )
    }
}

export default Main