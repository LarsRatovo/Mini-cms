import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import slugify from "slugify";

export default function Home({ global, categories, cats }) {
    return (
        <>
            <Head>
                <title>{global.title}</title>
                <meta name="description" content={global.snippet} />
            </Head>
            <Navbar global={global} categories={categories}>
                <section id="hero" className="hero">
                    <div className="container position-relative">
                    <div className="row gy-5" data-aos="fade-in">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <h2>{global.snippet}</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                        <img loading="lazy" src="assets/img/ai.png" className="img-fluid" alt="" width={546} height={364}/>
                        </div>
                    </div>
                    </div>
                </section>
                <div class="container">
                    {cats.map((cat) => {
                        return (
                            <>
                                <div class="section-header">
                                    <h2><a href={"/category/"+cat.id+"-"+slugify(cat.name)}>{cat.name}</a></h2>
                                </div>
                                <div class="row">
                                    {cat.articles.map(article=>
                                        <div class="col-lg-4">
                                            <a href={"/articles/"+article.id+"-"+slugify(article.title)}>
                                            <h3>{article.title}</h3>
                                            <img src={"assets/img/"+article.image} loading="lazy" className="img-fluid rounded-4 mb-4" width={356} height={237.33} alt={article.title} />
                                            <strong>{article.snippet}</strong>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </>
                        );
                    })}
                </div>
            </Navbar>
        </>
    );
}
