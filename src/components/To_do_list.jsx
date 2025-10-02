import { type } from "@testing-library/user-event/dist/type"
import To_do_list_stoke from "./To_do_list_stoke"

export default function To_do_list() {
    var items = [
        {
            type: 'Meeting with Urban Team'
        },
        {
            type: 'Duplicate a project for new customer'
        },
        {
            type: 'Project meeting with CEO'
        },
        {
            type: 'Follow up of team zilla'
        },
        {
            type: 'Level up for Antony'
        }
    ]
    return <>
        <div className="list-wrapper pt-2">
            <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                {
                    items.map(item => {
                        return <To_do_list_stoke info={item} />
                    })
                }
                <To_do_list_stoke />
            </ul>
            <div className="add-items d-flex mb-0 mt-2">
                <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="Add new task"
                />
                <button className="add btn btn-icon text-primary todo-list-add-btn bg-transparent">
                    <i className="icon-circle-plus" />
                </button>
            </div>

        </div>
    </>
}