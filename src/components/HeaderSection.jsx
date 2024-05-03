import SearchIcon from "../assets/icons/search.svg";
import DashboardColor from "../assets/icons/dashboardColor.svg";

function HeaderSection ({setSidebarOpen}) {
    return (
        <>
            <div
                className="lg:fixed top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 pt-10"
                style={{ position: 'sticky', zIndex: 1000 }}
            >
                <div className="flex-1 flex justify-between items-center">
                    <div className="mr-20">
                        <h1 className="text-2xl font-bold">
                            <span className="text-yellowFood">
                                Food
                            </span>
                            <span className="text-primary">Menu</span>
                        </h1>
                        <span className="text-[10px] md:text-[20px]">What do you want to eat today?</span>
                    </div>
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <img src={DashboardColor} className="h-6 w-6" aria-hidden="true" alt="dashboard icon"/>
                    </button>
                    <div className="hidden lg:flex flex-1 gap-x-4 self-stretch lg:gap-x-2">
                        <form className="relative flex flex-1">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <img
                                src={SearchIcon}
                                className="pointer-events-none absolute inset-y-0 right-4 h-full w-5 text-gray-400 mx-2"
                                aria-hidden="true"
                                alt="Search icon"
                            />
                            <input
                                id="search-field"
                                className="block w-full -py-1 pl-6 pr-8 placeholder:text-gray-400 sm:text-sm bg-white border-none rounded-3xl"
                                placeholder="Search"
                                type="search"
                                name="search"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSection;
