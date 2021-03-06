import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = (props) => {

    const [products, setProducts] = useState[

        {
            "_id": "1",
            "title": "Car Product 01",
            "images": [
                "https://i.postimg.cc/BQ10Wrgs/car-img.png",
                "https://i.postimg.cc/vZFdG0qn/car-img2.png",
                "https://i.postimg.cc/y6GHb10v/car-img3.png",
                "https://i.postimg.cc/YC6B0QZs/car-img4.png",
                "https://i.postimg.cc/xCdw6hCw/car-img5.png",
                "https://i.postimg.cc/7hGpkzSX/car-img6.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "In a recent update, the Ministry of Road Transport and Highways announced that individuals do not need to carry around the hardcopy of their vehicular documents. They can alternatively digitally save those in DigiLockers.As per such mandate, details saved in DigiLockers shall be recognised as legitimate",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1010
        },
        {
            "_id": "2",
            "title": "Car Product 02",
            "images": [
                "https://i.postimg.cc/vZFdG0qn/car-img2.png",
                "https://i.postimg.cc/BQ10Wrgs/car-img.png",
                "https://i.postimg.cc/y6GHb10v/car-img3.png",
                "https://i.postimg.cc/YC6B0QZs/car-img4.png",
                "https://i.postimg.cc/7hGpkzSX/car-img6.png",
                "https://i.postimg.cc/xCdw6hCw/car-img5.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "In a recent update, the Ministry of Road Transport and Highways announced that individuals do not need to carry around the hardcopy of their vehicular documents. They can alternatively digitally save those in DigiLockers.As per such mandate, details saved in DigiLockers shall be recognised as legitimate",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1020
        },
        {
            "_id": "3",
            "title": "Car Product 03",
            "images": [
                "https://i.postimg.cc/y6GHb10v/car-img3.png",
                "https://i.postimg.cc/7hGpkzSX/car-img6.png",
                "https://i.postimg.cc/vZFdG0qn/car-img2.png",
                "https://i.postimg.cc/YC6B0QZs/car-img4.png",
                "https://i.postimg.cc/xCdw6hCw/car-img5.png",
                "https://i.postimg.cc/BQ10Wrgs/car-img.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "In a recent update, the Ministry of Road Transport and Highways announced that individuals do not need to carry around the hardcopy of their vehicular documents. They can alternatively digitally save those in DigiLockers.As per such mandate, details saved in DigiLockers shall be recognised as legitimate",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1030
        },
        {
            "_id": "4",
            "title": "Car Product 04",
            "images": [
                "https://i.postimg.cc/y6GHb10v/car-img3.png",
                "https://i.postimg.cc/7hGpkzSX/car-img6.png",
                "https://i.postimg.cc/vZFdG0qn/car-img2.png",
                "https://i.postimg.cc/YC6B0QZs/car-img4.png",
                "https://i.postimg.cc/xCdw6hCw/car-img5.png",
                "https://i.postimg.cc/BQ10Wrgs/car-img.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "In a recent update, the Ministry of Road Transport and Highways announced that individuals do not need to carry around the hardcopy of their vehicular documents. They can alternatively digitally save those in DigiLockers.As per such mandate, details saved in DigiLockers shall be recognised as legitimate",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1040
        },
        {
            "_id": "5",
            "title": "Car Product 05",
            "images": [
                "https://i.postimg.cc/y6GHb10v/car-img3.png",
                "https://i.postimg.cc/7hGpkzSX/car-img6.png",
                "https://i.postimg.cc/vZFdG0qn/car-img2.png",
                "https://i.postimg.cc/YC6B0QZs/car-img4.png",
                "https://i.postimg.cc/xCdw6hCw/car-img5.png",
                "https://i.postimg.cc/BQ10Wrgs/car-img.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "In a recent update, the Ministry of Road Transport and Highways announced that individuals do not need to carry around the hardcopy of their vehicular documents. They can alternatively digitally save those in DigiLockers.As per such mandate, details saved in DigiLockers shall be recognised as legitimate",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1050
        },
        {
            "_id": "6",
            "title": "Car Product 06",
            "images": [
                "https://i.postimg.cc/y6GHb10v/car-img3.png",
                "https://i.postimg.cc/7hGpkzSX/car-img6.png",
                "https://i.postimg.cc/vZFdG0qn/car-img2.png",
                "https://i.postimg.cc/YC6B0QZs/car-img4.png",
                "https://i.postimg.cc/xCdw6hCw/car-img5.png",
                "https://i.postimg.cc/BQ10Wrgs/car-img.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "In a recent update, the Ministry of Road Transport and Highways announced that individuals do not need to carry around the hardcopy of their vehicular documents. They can alternatively digitally save those in DigiLockers.As per such mandate, details saved in DigiLockers shall be recognised as legitimate",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1060
        }]

    return (
        <DataContext.Provider values={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataProvider;