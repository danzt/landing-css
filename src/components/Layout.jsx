import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {MagnifyingGlassIcon, MinusIcon, PlusIcon, StarIcon} from '@heroicons/react/20/solid'
import ImagenHeader from '../assets/menu-header.svg'

const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Team', href: '#', icon: UsersIcon, current: false},
    {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
    {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]
const teams = [
    {id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false},
    {id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false},
    {id: 3, name: 'Workcation', href: '#', initial: 'W', current: false},
]
const userNavigation = [
    {name: 'Your profile', href: '#'},
    {name: 'Sign out', href: '#'},
]

const products = [

    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
]

const stats = [
    {name: 'Total Subscribers', stat: '71,897'},
    {name: 'Avg. Open Rate', stat: '58.16%'},
    {name: 'Avg. Click Rate', stat: '24.57%'},
    {name: 'Avg. Click Rate', stat: '24.57%'},
]
const benefits = [
    'Competitive salaries',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div className="h-full">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80"/>
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5"
                                                    onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div
                    className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col absolute h-screen my-auto mt-4 mb-4 px-6">
                    <div
                        className="flex grow flex-col gap-y-5 overflow-y-auto bg-orange-400 px-6 pb-4 rounded-2xl py-7 my-3">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                alt="Your Company"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col">
                                <li>
                                    <ul role="list" className="mx-auto space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white">
                                                    <item.icon
                                                        className='text-white h-6 w-6 shrink-0'
                                                        aria-hidden="true"
                                                    />

                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-32">
                    <div
                        className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 pt-10">
                        <div className="flex-1 flex justify-between items-center">
                            <div className="mr-20">
                                <h1 className="text-lg font-semibold text-gray-900">Food Menu</h1>
                                <span className="hidden lg:block">What do you want to eat today?</span>
                            </div>
                            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                                    onClick={() => setSidebarOpen(true)}>
                                <span className="sr-only">Open sidebar</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                            <div className="hidden lg:flex flex-1 gap-x-4 self-stretch lg:gap-x-2">
                                <form className="relative flex flex-1" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 mx-2"
                                        aria-hidden="true"
                                    />
                                    <input
                                        id="search-field"
                                        className="block h-full w-full py-1 pl-8 pr-0 placeholder:text-gray-400 sm:text-sm bg-white border-none rounded-2xl"
                                        placeholder="Search..."
                                        type="search"
                                        name="search"
                                    />
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <main className="lg:col-span-3">
                            <div className="xl:pr-96">
                                {/*Header Section*/}
                                <div className="px-0 py-10 lg:px-8 lg:py-0">
                                    <div className="relative">
                                        <div className="bg-orange-400 my-10 xl:rounded-2xl">
                                            <div
                                                className="mx-auto grid grid-cols-1 gap-x-8 sm:gap-y-1 lg:mx-0 lg:grid-cols-2">
                                                <div className="lg:pr-1 lg:pt-4 lg:px-8">
                                                    <div className="">
                                                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Discount</h2>
                                                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">New
                                                            menu</h2>
                                                        <p className="mt-6 text-lg leading-8 text-white">
                                                            Get free shipping every $30 with minimum Purchase.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <img
                                                        src={ImagenHeader}
                                                        alt="Product screenshot"
                                                        className="w-[120px] lg:w-[18rem] max-w-none rounded-xl"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*  Category Section  */}
                                <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">

                                </div>
                            </div>
                        </main>

                        <aside
                            className="lg:fixed inset-y-0 right-0 lg:w-96 overflow-y-auto px-4 py-2 lg:py-16 sm:px-6 lg:px-8">
                            <div>
                                <dl className="lg:my-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    {stats.map((item) => (
                                        <div key={item.name}
                                             className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                                            <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div className="mt-8">
                                <div className="flow-root">
                                    <div className="flex justify-between items-center w-full">
                                        <div>
                                            <span>My Cart</span> <br/>
                                            <span>Shopping Cart</span>
                                        </div>
                                        <div className="flex justify-end">
                                            <BellIcon className="h-6 w-6 text-gray-700" aria-hidden="true"/>
                                        </div>
                                    </div>
                                    <ul role="list" className="my-6 divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <li key={product.id} className="flex py-6 mx-3 bg-white mt-5 rounded-2xl">
                                                <div
                                                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200 mx-4">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="object-cover object-center"
                                                    />
                                                </div>

                                                <div
                                                    className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                                                    <div className="sm:col-span-8 lg:col-span-7">
                                                        <h2 className="text-md font-medium text-gray-900 sm:pr-12">{product.name}</h2>
                                                        <section aria-labelledby="information-heading" className="mt-1">
                                                            {/* Reviews */}
                                                            <div className="mt-0">
                                                                <h4 className="sr-only">Reviews</h4>
                                                                <div className="flex items-center">
                                                                    <p className="text-sm text-gray-700">
                                                                        3.9
                                                                        <span className="sr-only"> out of 5 stars</span>
                                                                    </p>
                                                                    <div className="ml-1 flex items-center">
                                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                                            <StarIcon
                                                                                key={rating}
                                                                                className={classNames(
                                                                                    3.9 > rating ? 'text-yellow-400' : 'text-gray-200',
                                                                                    'h-5 w-5 flex-shrink-0'
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <p className="font-medium text-gray-900">{product.price}</p>
                                                                <div className="flex items-center space-x-2">
                                                                    <button
                                                                        type="button"
                                                                        className="rounded-full bg-gray-400 p-0.5 text-white shadow-sm hover:bg-grey-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                    >
                                                                        <MinusIcon className="h-5 w-5"
                                                                                   aria-hidden="true"/>
                                                                    </button>
                                                                    <span>{product.quantity}</span>
                                                                    <button
                                                                        type="button"
                                                                        className="rounded-full bg-orange-500 p-0.5 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                    >
                                                                        <PlusIcon className="h-5 w-5"
                                                                                  aria-hidden="true"/>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </section>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}
