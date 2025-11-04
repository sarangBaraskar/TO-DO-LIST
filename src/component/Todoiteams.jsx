

export default function Todoiteams({ list, filtered, isonFiltered, filter, setIsfilteron, Delete, Complete, Undo }) {
    return (
        <>
            <div className="overflow-x-auto">
                <div className="p-2 flex justify-between items-center bg-blue-300">
                    <h1 className="text-white">Table</h1>
                    <form className="flex justify-center gap-3">
                        <input type="date" className="bg-white px-2 py-2" onChange={filter} />
                        {isonFiltered && <button
                            type="reset"
                            className="px-5 py-2 border cursor-pointer transition bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500"
                            onClick={() => setIsfilteron(false)}
                        >
                            Reset
                        </button>}
                    </form>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs bg-indigo-600 uppercase text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr.No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 divide-y divide-gray-200">
                        {(isonFiltered ? filtered : list).map((ele, index) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-white">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {ele.task}
                                </td>
                                <td className="px-6 py-4">
                                    {ele.status ? "Completed" : "Not Completed"}
                                </td>
                                <td className="px-6 py-4">
                                    {(new Date(ele.date)).toDateString()}
                                </td>
                                <td className="px-6 py-3 text-center">
                                    <button onClick={() => Delete(ele.id)} className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 ml-2" >
                                        Delete
                                    </button>
                                    {ele.status ?

                                        <button onClick={() => Undo(ele.id)} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700" >
                                            Undo
                                        </button> :
                                        <button onClick={() => Complete(ele.id)} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700" >
                                            Done
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





        </>
    )
}
