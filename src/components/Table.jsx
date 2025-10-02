export default function Table({item}) {
    return item&& <>
        <table classname="table table-borderless report-table">
            <tbody>
                <tr>
                    <td className="text-muted">{item.city}</td>
                    <td className="w-100 px-0">
                        <div className="progress progress-md mx-4">
                            <div
                                className={`progress-bar ${item.color}`}
                                role="progressbar"
                                style={{ width: `${item.bar_width}` }}
                                aria-valuenow={`${item.aria_valuenow}`}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                        </div>
                    </td>
                    <td>
                        <h5 className="font-weight-bold mb-0">{item.number}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
}