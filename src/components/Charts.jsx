import { redirect } from "react-router-dom";
import Chart_stoke from "./Chart_stok";

export default function Charts() {
    var items = [
        {
            title: 'Data 1',
            width: '95',
            valuenow: '95',
            value: '5k'
        },
        {
            title: 'Data 2',
            width: '35',
            valuenow: '35',
            value: '1k'
        },
        {
            title: 'Data 3',
            width: '48',
            valuenow: '48',
            value: '992'
        },
        {
            title: 'Data 4',
            width: '25',
            valuenow: '25',
            value: '687'
        },
    ]
    return <>
        <div className="charts-data">
            {
                items.map(item => {
                    return <Chart_stoke info={item} />
                })
            }
            <Chart_stoke />
        </div>
    </>
}