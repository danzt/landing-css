import {Tab} from "@headlessui/react";
import {Fragment} from "react";
import SoulCurry from "../assets/soulcurry.png"
import SoulEgg from "../assets/sourcurryEgg.png";
import SoulRise from "../assets/sourcurryfish.png"
const productsOrder = [
    {
        id: 1,
        name: 'Sambal Fried Fish with Fresh Vegetables',
        imageSrc: SoulCurry,
        imageAlt: 'Sambal Fried Fish with Fresh Vegetables',
    },
    {
        id: 2,
        name: 'Archipelago Noodles with Chicken Katsu',
        imageSrc: SoulRise,
        imageAlt: 'Archipelago Noodles with Chicken Katsu',
    },
    {
        id: 3,
        name: 'Salted Egg Chicken With Mayonnaise',
        imageSrc: SoulEgg,
        imageAlt: 'Salted Egg Chicken With Mayonnaise',
    },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function TabsSection () {
    return (
        <>
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-5">
                <div
                    className="mx-auto w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
                    <Tab.Group as="div">
                        <div className="">
                            <div className="flex justify-center lg:justify-between items-center relative">
                                <Tab.List className="flex space-x-8 ">
                                    <Tab
                                        className={({selected}) =>
                                            classNames(
                                                selected
                                                    ? 'border-gray-600 text-gray-600'
                                                    : 'border-transparent text-bgray font-medium hover:border-gray-300 hover:text-gray-800 ',
                                                'whitespace-nowrap py-2 text-sm font-medium border-b-2 border-bgray'
                                            )
                                        }
                                    >
                                        Order
                                    </Tab>
                                    <Tab
                                        className={({selected}) =>
                                            classNames(
                                                selected
                                                    ? 'border-gray-500 text-gray-400'
                                                    : 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-800',
                                                'whitespace-nowrap py-1 text-sm font-medium'
                                            )
                                        }
                                    >
                                        Delivered
                                    </Tab>
                                    <Tab
                                        className={({selected}) =>
                                            classNames(
                                                selected
                                                    ? 'text-indigo-400'
                                                    : 'border-transparent text-gray-400',
                                                'whitespace-nowrap py-1 text-sm font-medium'
                                            )
                                        }
                                    >
                                        Finished
                                    </Tab>
                                    <Tab
                                        className="hidden justify-end top-0 lg:flex items-end font-medium absolute bottom-3 right-0 text-primary">

                                        See all
                                    </Tab>
                                </Tab.List>
                            </div>
                        </div>
                        <Tab.Panels as={Fragment}>
                            <Tab.Panel className="mt-5">
                                <h3 className="sr-only">Order</h3>
                                <div>
                                    <ul role="list">
                                        {productsOrder.map((product) => (
                                            <li key={product.id}
                                                className="flex lg:py-3 sm:py-0 bg-white rounded-2xl space-y-3 my-2">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="h-20 w-20 rounded-lg object-cover object-center lg:h-20 lg:w-20 m-3"
                                                    />
                                                </div>

                                                <div
                                                    className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                    <div
                                                        className="flex justify-between items-center sm:grid sm:grid-cols-2 relative">
                                                        <div className="lg:pr-6">
                                                            <h3 className="text-xs my-2">
                                                                <a href={product.href}
                                                                   className="font-medium text-gray-700 hover:text-gray-800">
                                                                    {product.name}
                                                                </a>
                                                            </h3>
                                                            <p className="text-xs font-medium text-gray-300">
                                                                7 Dec, 16:10
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 lg:mb-0 mx-auto xl:absolute xl:right-5 xl:bottom-4">
                                                        <div className="flex items-center justify-center gap-x-6">
                                                            <a
                                                                href="#"
                                                                className="rounded-2xl bg-primary -ml-6 xl:ml-0 px-10 lg:px-5 py-1.5 lg:py-2 text-[8px] lg:text-[12px] font-medium text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                                            >
                                                                Order Again
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Tab.Panel>

                            <Tab.Panel className="text-sm text-gray-500">
                                <h3 className="sr-only">Delivered</h3>

                            </Tab.Panel>

                            <Tab.Panel className="pt-10">
                                <h3 className="sr-only">Finished</h3>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </>
    )
}

export default TabsSection;
