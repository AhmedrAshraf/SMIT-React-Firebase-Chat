export default function Card(params) {
    console.log("🚀 ~ Card ~ params:", params)
    return (
        <div className="mt-20 ml-[2.5vw] w-[22vw] bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src={params.img}
                alt={params.title}
            />
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{params.title}</h2>
                <p className="text-gray-600 text-xl mt-2">{params.category}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring">
                    Learn More
                </button>
            </div>
        </div>
    )
}