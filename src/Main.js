import React, { Component } from 'react'

import Article from './Article'
import Add from './Add'
import SubArticle1 from './SubArticle1'
import SubArticle2 from './SubArticle2'
import SubArticle3 from './SubArticle3'
import SubArticle4 from './SubArticle4'

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
                    <SubArticle3 />
                    <SubArticle4 />
                </div>
            </main>
        )
    }
}

export default Main