export default function Base_frame({ coleClass , title, children }) {
    return <>
        <div className={`${coleClass} grid-margin stretch-card`}>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        {title}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </>
}