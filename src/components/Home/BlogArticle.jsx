import React, { useState } from 'react';
import './blogarticle.css'

function BlogArticle() {

    const [cardContent, setCardContent] = useState([
        {
            thumbnail: "https://smakosh.com/static/e8dbd829bff5e2fd426674eee81d98cb/bc549/seo.png",
            title: "Handling SEO in React apps",
            content: "I have landed successfully in Bali, rented a scooter and been enjoying my ride from my place to Dojo Bali where I’m currently writing this article. SEO definition Search engine optimization (SEO) is the process of increasing"
        },
        {
            thumbnail: "https://smakosh.com/static/e6960ef7eace9ab85feadcdfc6a2b6e2/bc549/custom-hook.png",
            title: "How To add dark mode easily with a custom React hook",
            content: "In this quick article, I will be implementing dark mode to a quick React app with a custom React hook, Before we start, let’s see how is this supposed to work in three easy steps: We will check first if the chosen theme"
        },        
        {
            thumbnail: "https://smakosh.com/static/51d00c9f7ae97844492ca7737a6e139a/0a89a/flight.jpg",
            title: "My trip to Istanbul & why I hate traveling",
            content: "I wanted to visit Istanbul 3 years ago and even told my friends about it, but 2 years after that moment, I didn’t really want to travel anywhere anymore because in my opinion, the Internet (even if it’s not decentralized) saves"
        }
    ])


    return(
            <div>
                <div className="blogArticle__main">
                    <div className="main-component">
                        <div className="headings">
                            <h1>Popular Articles</h1>
                        </div>
                        <div className="cards">
                        {cardContent.map((content, index) => 
                            <div className="card-content">
                                <div className="thumbnail">
                                    <img src={content.thumbnail} alt=""/>
                                </div>
                                <div className="card__heading">
                                    <h1>{content.title}</h1>
                                </div>
                                <div className="card__intro">
                                    <p>{content.content}</p>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
    )



    // return (
        // <div>
        //     <div className="blogArticle__main">
        //         <div className="main-component">
        //             <div className="headings">
        //                 <h1>Popular Articles</h1>
        //             </div>
        //             <div className="cards">
        //                 <div className="thumbnail">
        //                     <img src="" alt=""/>
        //                 </div>
        //                 <div className="card__heading">
        //                     <h1>Card Heading</h1>
        //                 </div>
        //                 <div className="card__intro">
        //                     <p></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    // )
}

export default BlogArticle