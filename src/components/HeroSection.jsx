import ImageHeader from "../assets/menu-header.svg";
import MenuMobileImage from "../assets/menu-mobile.svg";
function HeroSection() {
    return (
        <>
            <div className="px-0 py-10 lg:px-8 lg:py-0">
                <div className="relative">
                    <div className="bg-secondary my-10 xl:rounded-2xl">
                        <div
                            className="mx-auto grid grid-cols-3 lg:gap-x-8 sm:gap-y-1 lg:mx-0 lg:grid-cols-3">
                            <div className="lg:pr-1 lg:pt-0 lg:px-8 flex col-span-2">
                                <div className="ml-2 lg:mx-0 lg:items-center">
                                    <h2 className="hidden lg:block text-md font-medium tracking-tight text-white lg:text-4xl lg:mt-4">Discount</h2>
                                    <h2 className="text-3xl font-medium tracking-tight text-white lg:text-4xl mt-12 lg:mt-0">New
                                        Menu!</h2>
                                    <p className="font-light text-md text-white capitalize">
                                        Get free shipping every $30 with no <br/> minimum Purchase.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end col-span-1 ml-4">
                                <img
                                    src={ImageHeader}
                                    alt="Product screenshot"
                                    className="w-[11rem] lg:w-[19rem] max-w-none rounded-xl hidden lg:block"
                                />
                                <img
                                    src={MenuMobileImage}
                                    alt="Product screenshot"
                                    className="w-[11rem] lg:w-[18rem] max-w-none rounded-xl lg:hidden block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
