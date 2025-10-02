import { data } from "react-router-dom";

export default function Top_product_table_stoke({ info }) {
    return info && <>
        <tr>
            <td>{info.product}</td>
            <td className="font-weight-bold">{info.price}</td>
            <td>{info.date}</td>
            <td className="font-weight-medium"><div className={`badge badge-${info.color}`}>{info.statuss}</div></td>
        </tr>
    </>
}