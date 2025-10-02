export default function To_do_list_stoke({ info }) {
    return info&& <>
        <li>
            <div className="form-check form-check-flat">
                <label className="form-check-label">
                    <input className="checkbox" type="checkbox" />
                    {info.type}
                </label>
            </div>
            <i className="remove ti-close" />
        </li>

    </>
}