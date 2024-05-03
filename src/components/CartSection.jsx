
import {MinusIcon, PlusIcon, StarIcon} from "@heroicons/react/20/solid/index.js";
import NotificationIcon from "../assets/icons/notificationColor.svg";
import BoiledImage from "../assets/higharrangement.png";
import AyamImage from "../assets/ayamgeprek.png";
import BerryImage from "../assets/berryblast.png";
import WatermelonImage from "../assets/watermelon.png";

const products = [

    {
        id: 1,
        name: 'Boiled Dumplings',
        price: '$320',
        quantity: 1,
        imageSrc: BoiledImage,
        imageAlt: 'Boiled.',
    },
    {
        id: 2,
        name: 'Ayam Geprek Popular',
        price: '$320',
        quantity: 1,
        imageSrc: AyamImage,
        imageAlt: 'Ayam Geprek Popular.',
    },
    {
        id: 3,
        name: 'Berry Blast Smoothie',
        price: '$320',
        quantity: 1,
        imageSrc: BerryImage,
        imageAlt: 'Berry Blast Smoothie.',
    },
    {
        id: 4,
        name: 'Watermelon Smoothie',
        price: '$320',
        quantity: 1,
        imageSrc: WatermelonImage,
        imageAlt: 'Watermelon Smoothie',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CartSection() {
  return (
      <>
          <div className="mx-5 lg:mx-0">
              <div className="flex justify-between items-center">
                  <div>
                      <span className="text-lg text-black font-bold ml-2">My Cart</span> <br/>
                      <span className="text-sm text-black font-normal ml-2">Shopping is happy</span>
                  </div>
                  <div className="flex justify-end">
                      <img src={NotificationIcon} className="h-6 w-6" aria-hidden="true" alt="notification icon"/>
                  </div>
              </div>
              <ul role="list" className="divide-y divide-gray-200">
                  {products.map((product) => (
                      <li key={product.id} className="flex py-2 bg-white mt-2 rounded-2xl">
                          <div
                              className="h-24 w-24 flex-shrink-0 rounded-2xl mx-3">
                              <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="object-cover object-center rounded-2xl mt-3"
                              />
                          </div>

                          <div
                              className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8 lg:ml-3">
                              <div className="sm:col-span-8 lg:col-span-7">
                                  <h2 className="text-sm font-medium text-gray-900 sm:pr-1">{product.name}</h2>
                                  <section aria-labelledby="information-heading" className="mt-1">
                                      {/* Reviews */}
                                      <div className="mt-0">
                                          <h4 className="sr-only">Reviews</h4>
                                          <div className="flex items-center">
                                              <p className="text-xs text-gray-700">
                                                  4.8
                                              </p>
                                              <div className="ml-1 flex items-center">
                                                  {[0].map((rating) => (
                                                      <StarIcon
                                                          key={rating}
                                                          className={classNames(
                                                              3.9 > rating ? 'text-yellow-400' : 'text-gray-200',
                                                              'h-3 w-3 flex-shrink-0'
                                                          )}
                                                          aria-hidden="true"
                                                      />
                                                  ))}
                                                  <span className="text-bgray mt-1 lg:mt-0 text-[9px]">(1k + reviews)</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="flex justify-between mt-6">
                                          <p className="font-bold text-gray-900">{product.price}</p>
                                          <div className="flex items-center space-x-2 mr-5">
                                              <button
                                                  type="button"
                                                  className="rounded-full bg-gray-400 p-0.5 text-white shadow-sm hover:bg-grey-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                              >
                                                  <MinusIcon className="h-5 w-5"
                                                             aria-hidden="true"/>
                                              </button>
                                              <span className="font-bold">{product.quantity}</span>
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
      </>
  );
}

export default CartSection;
