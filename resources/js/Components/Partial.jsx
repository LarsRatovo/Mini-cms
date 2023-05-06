export default function Partial({article}){
    return (
        <>
            <h3>{article.title+' '+article.date}</h3>
            <p>{article.snippet}</p>
        </>
    );
}
