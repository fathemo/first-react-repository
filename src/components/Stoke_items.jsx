export default function Stoke_items({info}){
    return info&& <>
        <div className="col-md-6 mb-4 stretch-card transparent">
            <div className={`card ${info.color}`}>
                <div className="card-body">
                    <p className="mb-4">{info.title}</p>
                    <p className="fs-30 mb-2">{info.value}</p>
                    <p>{info.changePercent}</p>
                </div>
            </div>
        </div>
    </>
}