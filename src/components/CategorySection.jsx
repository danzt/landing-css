import IndonesiaFood from '../assets/indonesiafood.png';
import JaponeseFood from '../assets/japonesefood.png';
import KoreanFood from '../assets/koreanfood.png';

const productsCategory = [
    {
        id: 1,
        imageSrc: IndonesiaFood,
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        title: 'indonesia food',

    },
    {
        id: 1,
        imageSrc: JaponeseFood,
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        title: 'japonese food',
    },
    {
        id: 1,
        imageSrc: KoreanFood,
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        title: 'korean food',
    },
    // More products...
]
function CategorySection () {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 lg:py-0">
                <span className="font-semibold text-xl">Categories</span>
                <div
                    className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:gap-x-3">
                    {productsCategory.map((product) => (
                        <div key={product.id}>
                            <div className="relative">
                                <div className="relative h-28 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div
                                    className="absolute inset-x-0 top-0 flex h-28 items-end justify-start overflow-hidden rounded-lg p-4">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                    />
                                    <p className="relative text-[12px] font-semibold text-white capitalize">{product.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CategorySection;
