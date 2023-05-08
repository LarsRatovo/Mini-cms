import Sidebar from "@/Layouts/Sidebar";

export default function Category({categories}){
    return (
        <Sidebar>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Default Table</h5>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nom du catégorie</th>
                                        <th scope="col">Article</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {categories.map(category=>
                                        <tr>
                                            <th scope="row">{category.id}</th>
                                            <td>{category.name}</td>
                                            <td>{category.count}</td>
                                            <td><a href={'/back/categories/'+category.id+'/update'}><i className="bi bi-wrench"></i></a></td>
                                            <td><a href={'/back/categories/'+category.id+'/delete'}><i className="bi bi-trash-fill"></i></a></td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Sidebar>
    );
}
