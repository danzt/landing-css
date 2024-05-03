const stats = [
    {name: 'Total Visitors', stat: '300k'},
    {name: 'Viewed', stat: '1k'},
    {name: 'Order', stat: '25k'},
    {name: 'Cancelled', stat: '20k'},
]
function CardsStats () {
    return(
        <>
            <div className="mx-5 lg:mx-0">
                <dl className="lg:my-10 grid grid-cols-2 gap-2 sm:grid-cols-2">
                    {stats.map((item) => (
                        <div key={item.name}
                             className="rounded-lg bg-white px-4 py-5 shadow sm:p-3 text-center">
                            <dt className="truncate text-sm font-medium text-gray-400">{item.name}</dt>
                            <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    )
}

export default CardsStats;
