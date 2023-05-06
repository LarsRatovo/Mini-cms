import { useEffect } from "react";

export default function Article({article}){
    return (
            <>
            <Head title={article.title}/>
            <Head>
                <meta name="description" content={article.snippet}/>
            </Head>
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
