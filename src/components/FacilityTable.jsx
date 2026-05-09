const FacilityTable = () => {
    const data = [
        { account: "1017167980", solid: "0056", name: "GILBERTIGWEKA GLOBAL CONCEPT NIG LTD(2)", date: "3/25/2025 9:20:43 AM" }
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-uba-red">Filed Facilities</h2>
                <button className="bg-uba-red text-white px-3 py-1 text-sm rounded shadow-sm">View Report</button>
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Search</label>
                <div className="flex max-w-md">
                    <input type="text" className="border flex-1 p-2 h-10 outline-none" />
                    <button className="bg-gray-200 border border-l-0 px-4 flex items-center justify-center">
                        🔍
                    </button>
                </div>
            </div>

            <div className="mt-10">
                <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-uba-red text-white">
                        <tr>
                            <th className="p-2 font-normal">Account Number</th>
                            <th className="p-2 font-normal">SOLID</th>
                            <th className="p-2 font-normal">Customer Name</th>
                            <th className="p-2 font-normal">Date Added</th>
                            <th className="p-2 font-normal"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                        {data.map((row, i) => (
                            <tr key={i} className="border-b">
                                <td className="p-2 text-gray-700">{row.account}</td>
                                <td className="p-2 text-gray-700">{row.solid}</td>
                                <td className="p-2 text-gray-700">{row.name}</td>
                                <td className="p-2 text-gray-700">{row.date}</td>
                                <td className="p-2 text-uba-red cursor-pointer hover:underline">Review |</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs text-gray-500">Page 1 of 1</span>
                    <button className="bg-uba-red text-white w-6 h-6 text-xs">1</button>
                </div>
            </div>
        </div>
    );
}

export default FacilityTable;