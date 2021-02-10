import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import sanityClient from "../client.js";

export default function Post(){
    const [postData, setPost]=useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[ _type == "post" ]{
            title,
            slug, 
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
        )
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);
    return( <main>
            <section className="uk-section uk-section-muted">
                <h1></h1>
                <h2></h2>
                <div className="uk-container">
                <div className="uk-grid-small uk-child-width-auto" uk-grid>
                    {postData && postData.map((post, index) => (
                    <article class="uk-article">
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={post.mainImage.asset.url} 
                                 alt={post.mainImage.alt} uk-img/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">{post.title}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    
                        </Link> 
                    </article>
                   )) }
                    </div>
                </div>
            </section>
        </main>
    )
}