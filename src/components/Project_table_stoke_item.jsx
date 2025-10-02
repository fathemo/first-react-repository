export default function Project_table_stoke_item({info}) {
    return info&& <>
        <tr>
            <td className="pl-0">{info.places}</td>
            <td><p className="mb-0"><span class="font-weight-bold mr-2">{info.orders}</span>{info.order_percent}</p></td>
            <td className="text-muted">{info.users}</td>
        </tr>
    </>
}