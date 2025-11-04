import { useState } from 'react';
import Todoform from '../component/Todoform';
import { toast } from 'react-toastify';
import Todoiteams from '../component/Todoiteams';


export default function Todopage() {
    const [list, setlist] = useState([]);
    const [filtered, setfiltered] = useState([]);
    const [isonFiltered, setIsfilteron] = useState(false)


    function handlesubmit(data) {
        setlist(prev => [...prev, data])
        toast.success("Task ADD")
    }

    function Delete(id) {
        let com = window.confirm("Are you sure ?");
        if (!com) return;
        setlist(prev => prev.filter(ele => ele.id !== id))
        toast.success("Delete Task")
    }

    function Complete(id) {
        setlist(prev => prev.map(ele => ele.id === id ? { ...ele, status: true } : ele))
        toast.success("Task Completed")
    }

    function Undo(id) {
        setlist(prev => prev.map(ele => ele.id === id ? { ...ele, status: false } : ele))
        toast.success("Undo Done")
    }

    function filter(e) {
        setIsfilteron(true)
        let data = list.filter(ele => ele.data === e.target.value);
        if (!data.length) {
            toast.warning("No Data Found")
            setfiltered([])
            return;
        }
        setfiltered(data)
    }
    return (
        <>
            <div className="w-full mt-4 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-0">
                        <Todoform handlesubmit={handlesubmit} />
                    </div>
                    <div className="border border-slate-500">
                        <Todoiteams
                            list={list}
                            filter={filter}
                            filtered={filtered}
                            isonFiltered={isonFiltered}
                            Delete={Delete}
                            Undo={Undo}
                            Complete={Complete}
                            setIsfilteron={setIsfilteron} />
                    </div>
                </div>
            </div>
        </>
    )
}
