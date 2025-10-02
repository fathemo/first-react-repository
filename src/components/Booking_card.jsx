import Stoke_items from "./Stoke_items"

export default function Booking_card() {
    var items = [
        {
            title: 'Today’s Bookings',
            value: '4006',
            changePercent: '10.00% (30 days)',
            color: 'card-tale'
        },
        {
            title: 'Total Bookings',
            value: '61344',
            changePercent: '22.00% (30 days)',
            color: 'card-dark-blue'
        },
        {
            title: 'Number of Meetings',
            value: '34040',
            changePercent: '2.00% (30 days)',
            color: 'card-light-blue'
        },
        {
            title: 'Number of Clients',
            value: '47033',
            changePercent: '0.22% (30 days)',
            color: 'card-light-danger'
        }
    ]
    return <>
        <div className='row'>
            {
                items.map(item => {
                    return <Stoke_items info={item} />
                })
            }
            <Stoke_items />
        </div>

    </>
}