import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
export default function Category({ global, categories, category }) {
    const format=(date)=>{
        let str=new Date(date);
        return str.toLocaleDateString();
    }
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    return (
        <>
            <Head>
                <title>{category.name}</title>
                <meta name="description" content={global.title+"-"+category.name} />
            </Head>
            <Navbar global={global} categories={categories}>
                <div className="breadcrumbs">
                    <div className="page-header d-flex align-items-center">
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h2>{category.name}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div className="container">
                            <ol>
                                <li><a href="/">Accueil</a></li>
                                <li>{category.name}</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up">
                        <div className="row gy-4 posts-list">
                            {category.articles.data.map(article=>
                                <div className="col-xl-4 col-md-6">
                                    <article>
                                        <div className="post-img">
                                            <img src={"/assets/img/blog/"+article.image} alt={article.title} className="img-fluid" width={356} height={237.33}/>
                                        </div>
                                        <h3 className="title"><a href={"/articles/"+article.id}>{article.title}</a></h3>
                                        <p>
                                            {article.snippet}
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <div className="post-meta">
                                                <p className="post-date">
                                                    <time datetime={article.date}>{format(article.date)}</time>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            )}
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group me-2" role="group">
                                    {category.articles.links.map(link=>
                                        <button type="button" className="btn btn-info"><a href={link.url}>{decodeHtml(link.label)}</a></button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Navbar>
        </>
    );
}
