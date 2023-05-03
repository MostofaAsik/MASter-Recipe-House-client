import React from 'react';


const HomeSection1 = () => {
    return (
        <section className="flex flex-col items-center mb-4 bg-gradient-to-r from-violet-500 to-green-500">
            <h2 className="text-2xl font-bold mt-4 mb-6">Our Best Menu Right Now.Stock Limited!!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMza5JlDHDhAtblDZ12GSOzGlULZ-rAXIM4V44eM1GHg&s'
                        alt="Menu Item 1"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <h3 className="text-lg font-medium mt-4">Chicken tikka masala</h3>
                    <p className="mt-2">Rating: 5.0</p>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWKGOA56ApkAH0lHPLl7SQ-act2ElIZPV3lvSF_J7&s"
                        alt="Menu Item 2"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <h3 className="text-lg font-medium mt-4">Beef Wellington</h3>
                    <p className="mt-2">Rating: 4.9</p>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4somEJtIbbUF-lzQZPN5zC6FU8XCCIwbNoYV_-gj&s"
                        alt="Menu Item 3"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <h3 className="text-lg font-medium mt-4">Bangers and mash</h3>
                    <p className="mt-2">Rating: 4.9</p>
                </div>
            </div>
        </section>
    );
};

export default HomeSection1;