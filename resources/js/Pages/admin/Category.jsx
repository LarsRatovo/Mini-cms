import Sidebar from "@/Layouts/Sidebar";

export default function Category(){
    return (
        <Sidebar>
        <section className="section">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ajout categorie</h5>
                            <form action={'/category'} method={'post'}>
                                <div className="row mb-3">
                                    <label htmlFor="inputText" className="col-sm-2 col-form-label">Nom</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name={'name'}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Submit Button</label>
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary">Submit Form</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Sidebar>
    );
}
