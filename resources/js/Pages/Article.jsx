import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import slugify from "slugify";

export default function Article({ global,categories,article,count,latest}) {
    return (
            <>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.snippet} />
            </Head>
            <Navbar global={global} categories={categories}>
            <main id="main">
                <section id="blog" class="blog">
                    <div class="container" data-aos="fade-up">

                        <div class="row g-5">

                            <div class="col-lg-8">

                                <article class="blog-details">

                                    <div class="post-img">
                                        <img src={"/assets/img/"+article.image} loading="lazy" alt={article.title} class="img-fluid" width={728} height={485.33}/>
                                    </div>

                                    <h2 class="title">{article.title}</h2>

                                    <div class="meta-top">
                                        <ul>
                                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <time dateTime={article.date}>{article.date}</time></li>
                                        </ul>
                                    </div>
                                    <div class="content">
                                        <strong>
                                            {article.snippet}
                                        </strong>
                                        {article.paragraphs.map(paragraph=>
                                            <>
                                                <h3>{paragraph.title}</h3>
                                                <p>{paragraph.text}</p>
                                            </>
                                        )}
                                    </div>
                                </article>
                            </div>

                            <div class="col-lg-4">

                                <div class="sidebar">

                                    <div class="sidebar-item search-form">
                                        <h3 class="sidebar-title">Rechercher</h3>
                                        <form action="/search" class="mt-3">
                                            <input type="text" name="q" />
                                            <button type="submit"><i class="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                    <div class="sidebar-item categories">
                                        <h3 class="sidebar-title">Catégories</h3>
                                        <ul class="mt-3">
                                            {count.map(cat=>
                                                <li><a href={"/category/"+cat.id+"-"+slugify(cat.name)}>{cat.name}<span>({cat.count})</span></a></li>
                                            )}
                                        </ul>
                                    </div>
                                    <div class="sidebar-item recent-posts">
                                        <h3 class="sidebar-title">Posts récents</h3>

                                        <div class="mt-3">
                                                {latest.map(last=>
                                                    <div class="post-item mt-3">
                                                    <img src={"/assets/img/"+last.image} loading="lazy" alt={last.title} width={80} height={53.33} />
                                                    <div>
                                                        <h4><a href={"/articles/"+last.id+"-"+slugify(last.title)}>{last.title}</a></h4>
                                                            <time datetime={last.date}>{last.date}</time>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </Navbar>
            </>
            );
}
