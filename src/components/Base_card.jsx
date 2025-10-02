export default function Base_card({ title, subtitle , children }) {
    return <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-wrap mb-5">
                        <p className="card-title">{title}</p>
                        <p className="font-weight-500">
                            {subtitle}
                        </p>
                        {children}
                    </div>
                </div>
            </div>
        </div>


    </>
}