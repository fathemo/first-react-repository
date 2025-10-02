export default function Chart_stoke({ info }) {
    return info && <>
        <div className="mt-3">
            <p className="mb-0">{info.title}</p>
            <div className="d-flex justify-content-between align-items-center">
                <div className="progress progress-md flex-grow-1 mr-4">
                    <div
                        className="progress-bar bg-inf0"
                        role="progressbar"
                        style={{ width: `${info.width}%` }}
                        aria-valuenow={info.valuenow}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                </div>
                <p className="mb-0">{info.value}</p>
            </div>
        </div>

    </>
}