import Project_table_stoke_item from "./Project_table_stoke_item"

export default function Project_table() {
    var items = [
        {
            places: 'Kentucky',
            orders: '65',
            order_percent: '2.15%)',
            users: '65'
        },
        {
            places: 'Ohio',
            orders: '54',
            order_percent: '(3.25%)',
            users: '51'
        },
        {
            places: 'Nevada',
            orders: '22',
            order_percent: '(2.22%)',
            users: '32'
        },
        {
            places: 'North Carolina',
            orders: '46',
            order_percent: '(3.27%)',
            users: '15'
        },
        {
            places: 'Montana',
            orders: '17',
            order_percent: '(1.25%)',
            users: '25'
        },
        {
            places: 'Nevada',
            orders: '52',
            order_percent: '(3.11%)',
            users: '71'
        },
        {
            places: 'Louisiana',
            orders: '25',
            order_percent: '(1.32%)',
            users: '14'
        },
    ]
    return <>
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="pl-0  pb-2 border-bottom">Places</th>
                    <th className="border-bottom pb-2">Orders</th>
                    <th className="border-bottom pb-2">Users</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => {
                        return <Project_table_stoke_item info={item} />
                    })
                }
                <Project_table_stoke_item/>
            </tbody>
        </table>
    </>
}