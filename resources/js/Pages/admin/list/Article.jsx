import Sidebar from "@/Layouts/Sidebar";

export default function Article({articles}){
    return (
    <Sidebar>
        <section className="section">
            <div className="row">
                {articles.data.map(article=>
                    <div className="card col-lg-12">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={"/assets/img/"+article.image} className="img-fluid rounded-start" alt={article.snippet}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><a href={"/admin/articles/"+article.id+"/update"}>{article.title}</a></h5>
                                    <p className="card-text">{article.snippet}</p>
                                    <button type="button" className="btn btn-outline-danger">Supprimer l'article</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {articles.links.map(link=> {
                        if (link.url !== null) {
                            return <li className="page-item"><a className="page-link" href={link.url}>{link.label}</a></li>
                        }
                    })}
                </ul>
            </nav>
        </section>
    </Sidebar>
    );
}
