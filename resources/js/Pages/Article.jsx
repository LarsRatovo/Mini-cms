import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";

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
                                        <img src={"/assets/img/"+article.image} alt={article.title} class="img-fluid" width={750}/>
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
                                                <li><a href={"/category/"+cat.id}>{cat.name}<span>({cat.count})</span></a></li>
                                            )}
                                        </ul>
                                    </div>
                                    <div class="sidebar-item recent-posts">
                                        <h3 class="sidebar-title">Posts récents</h3>

                                        <div class="mt-3">
                                                {latest.map(last=>
                                                    <div class="post-item mt-3">
                                                    <img src={"/assets/img/blog/"+last.image} alt={last.title} width={80} />
                                                    <div>
                                                        <h4><a href={"/articles/"+last.id}>{last.title}</a></h4>
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
