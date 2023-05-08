import Sidebar from "@/Layouts/Sidebar";

export default function Global({global}){
    return (
        <Sidebar>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Global du site</h5>
                                <form action={'/back'} method={'POST'}>
                                    <div className="row mb-3">
                                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Titre</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" name={'title'} defaultValue={global.title}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputPassword"
                                               className="col-sm-2 col-form-label">Snippet</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" style={{height:'100px'}} name={'snippet'} defaultValue={global.snippet}></textarea>
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
