import Notification_stoke_item from "./Notification_stoke_item"

export default function Notifications() {
    var items = [
        {
            Name: 'Isabella Becker',
            description: 'Sales dashboard have been created',
            time: '9:30 am',
            src:'../assets/images/faces/face1.jpg'
        },
        {
            Name: 'Adam Warren',
            description: 'You have done a great job #TW111',
            time: '10:30 am',
            src:'../assets/images/faces/face2.jpg'
        },
        {
            Name: 'Leonard Thornton',
            description: 'Sales dashboard have been created',
            time: '11:30 am',
            src:'../assets/images/faces/face3.jpg'
        },
        {
            Name: 'George Morrison',
            description: 'Sales dashboard have been created',
            time: '8:50 am',
            src:'../assets/images/faces/face4.jpg'
        },
        {
            Name: 'Ryan Cortez',
            description: 'Herbs are fun and easy to grow.',
            time: '9:00 am',
            src:'../assets/images/faces/face5.jpg'
        },
    ]
    return <>
        <ul className="Notifications">
            {
                items.map(item => {
                    return <Notification_stoke_item info={item} />
                })
            }
            <Notification_stoke_item />
        </ul>
    </>
}