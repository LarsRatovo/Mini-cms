import { Head } from "@inertiajs/react";
import slugify from "slugify";

export default function Navbar({global,categories,children}){
    return (
        <>
            <Head>
                <link href="/assets/img/favicon.png" rel="icon"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
                <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
                <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
                <link href="/assets/css/main.css" rel="stylesheet"/>
            </Head>
            <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="/" className="logo d-flex align-items-center">
        <h1>{global.title}<span>.</span></h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li id="0" style={{color:'white'}}><a href="/">Accueil</a></li>
          {categories.map(category=>
              <li><a href={"/category/"+category.id+"-"+slugify(category.name)}>{category.name}</a></li>
            )}
        </ul>
      </nav>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
  <main id="main">
  {children}
  </main>
      <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="/assets/js/main.js"></script>
        </>
    );
}
