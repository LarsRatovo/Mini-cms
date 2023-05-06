import { useEffect } from "react";

export default function Article({article}){
    return (
            <>
            <h1>{article.title}</h1>
            <h2>{article.snippet}</h2>
            {article.paragraphs.map(paragraph=>{
                return (
                    <>
                    <h3>{paragraph.title}</h3>
                    <p>{paragraph.text}</p>
                    </>
                );
            })}
            </>
        );
}
