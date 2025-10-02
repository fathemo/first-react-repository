export default function Notification_stoke_item({info}) {
    return info&&<>
        <li>
            <div className="d-flex">
                <img src={`${info.src}`} alt="user" />
                <div>
                    <p className="text-info mb-1">{info.Name}</p>
                    <p className="mb-0">{info.description}</p>
                    <small>{info.time}</small>
                </div>
            </div>
        </li>

    </>
}