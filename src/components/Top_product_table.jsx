import Top_product_table_stoke from "./Top_product_table_stoke";

export default function Top_product_table() {
    var items = [
        {
            product: 'Search Engine Marketing',
            price: '$362',
            date: '21 Sep 2018',
            statuss: 'Completed',
            color: 'success'
        },
        {
            product: 'Search Engine Optimization	',
            price: '$116',
            date: '13 Jun 2018',
            statuss: 'Completed',
            color: 'success'
        },
        {
            product: 'Display Advertising',
            price: '$551',
            date: '28 Sep 2018',
            statuss: 'Pending',
            color: 'warning'
        },
        {
            product: 'Pay Per Click Advertising',
            price: '$523',
            date: '30 Jun 2018',
            statuss: 'Pending',
            color: 'warning'
        },
        {
            product: 'E-Mail Marketing',
            price: '$781',
            date: '01 Nov 2018',
            statuss: 'Cancelled',
            color: 'danger'
        },
        {
            product: 'Referral Marketing',
            price: '$283',
            date: '20 Mar 2018',
            statuss: 'Pending',
            color: 'warning'
        },
        {
            product: 'Social media marketing',
            price: '$897',
            date: '26 Oct 2018',
            statuss: 'Completed',
            color: 'success'
        }
    ]
    return <>
        <div className="table table-striped table-borderless">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => {
                        return <Top_product_table_stoke info={item} />
                    })
                }
                <Top_product_table_stoke/>
            </tbody>
        </div>
    </>
}