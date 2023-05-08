import {Head} from "@inertiajs/react";
export default function Sidebar({children}){
    return (
        <>
            <Head>
                <title>Forms / Elements - NiceAdmin Bootstrap Template</title>
                <link href="/admin/assets/img/favicon.png" rel="icon"/>
                <link href="/admin/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
                <link href="https://fonts.gstatic.com" rel="preconnect"/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
                <link href="/admin/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
                <link href="/admin/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                <link href="/admin/assets/vendor/quill/quill.snow.css" rel="stylesheet"/>
                <link href="/admin/assets/vendor/quill/quill.bubble.css" rel="stylesheet"/>
                <link href="/admin/assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
                <link href="/admin/assets/vendor/simple-datatables/style.css" rel="stylesheet"/>
                <link href="/admin/assets/css/style.css" rel="stylesheet"/>
            </Head>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <img src="/admin/assets/img/logo.png" alt=""/>
                            <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/">
                            <i className="bi bi-file-earmark"></i>
                            <span>Site Global</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/back/category">
                            <i className="bi bi-file-earmark"></i>
                            <span>Ajouter une categorie</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/back/categories">
                            <i className="bi bi-file-earmark"></i>
                            <span>Lister les categories</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/back/articles">
                            <i className="bi bi-file-earmark"></i>
                            <span>Ajouter un article</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/admin/articles">
                            <i className="bi bi-file-earmark"></i>
                            <span>Lister des articles</span>
                        </a>
                    </li>
                </ul>
            </aside>
            <main id="main" className="main">
                {children}
            </main>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            <script src="/admin/assets/vendor/apexcharts/apexcharts.min.js"></script>
            <script src="/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="/admin/assets/vendor/chart.js/chart.umd.js"></script>
            <script src="/admin/assets/vendor/echarts/echarts.min.js"></script>
            <script src="/admin/assets/vendor/quill/quill.min.js"></script>
            <script src="/admin/assets/vendor/simple-datatables/simple-datatables.js"></script>
            <script src="/admin/assets/vendor/tinymce/tinymce.min.js"></script>
            <script src="/admin/assets/vendor/php-email-form/validate.js"></script>
            <script src="/admin/assets/js/main.js"></script>
        </>
    );
}
