export default function Category({category}){
    return (
        <>
            <h1>{category.name}</h1>
            {category.articles.data.map(article=>{
                return (
                    <div>
                        <h2><a href={"/article/"+article.id}>{article.title}</a></h2>
                        <h3>{article.snippet}</h3>
                    </div>
                );
            }
            )}
            <ul>
                {category.articles.links.map(link=>
                    <li><a href={link.url}>{link.label}</a></li>
                )}
            </ul>
        </>
    );
}