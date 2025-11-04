
export default function Todoform({handlesubmit}) {

    function getData(e){
        e.preventDefault()
        let form=new FormData(e.target)
        form=Object.fromEntries(form.entries())
        form.status=false
        form.id=Date.now()
        handlesubmit(form)
        e.target.reset()
        

    }

    return (
        <>
            <div className="w-full p-5">
                <div className="bg-gray-200 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-white-800 mb-6 text-center">
                        Add New Task
                    </h2>
                    <form id="taskForm" className="space-y-5" onSubmit={getData}>
                        {/* Task Input */}
                       
                        <div>
                            <label
                                htmlFor="task"
                                className="block text-sm font-medium text-white-700 mb-2"
                            >
                                Task
                            </label>
                            <input
                                type="text"
                                id="task"
                                name="task"
                                placeholder="Enter your task here"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                required=""
                            />
                        </div>
                        {/* Date Input */}
                        <div>
                            <label
                                htmlFor="date"
                                className="block text-sm font-medium text-white-700 mb-2"
                            >
                                Due Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                required=""
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                            >
                                Submit Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
