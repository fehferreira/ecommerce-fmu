import clothingShoes from '../model/NavBarIcons/clothingShoes';
import entertainment from '../model/NavBarIcons/entertainment';
import music from '../model/NavBarIcons/music';
import sportLifestyle from '../model/NavBarIcons/sportLifestyle';
import pets from '../model/NavBarIcons/pets';
import kitchenAccessories from '../model/NavBarIcons/kitchenAccessories';
import travelEquipment from '../model/NavBarIcons/travelEquipment';
import growingGarden from '../model/NavBarIcons/growingGarden';
import eletricalTools from '../model/NavBarIcons/eletricalTools';
import motherCare from '../model/NavBarIcons/motherCare';
import toysEntertainment from '../model/NavBarIcons/toysEntertainment';
import vintage from '../model/NavBarIcons/vintage';

interface CardNavBar {
    id: number,
    name: string,
    img: React.FC<React.SVGAttributes<SVGElement>>,
};

const NavBarValue: CardNavBar[] = [
    {
        id: 1,
        name: 'Clothing & Shoes',
        img: clothingShoes,
    },
    {
        id: 2,
        name: 'Entertainment',
        img: entertainment,
    },
    {
        id: 3,
        name: 'Music',
        img: music,
    },
    {
        id: 4,
        name: 'Sport & Lifestyle',
        img: sportLifestyle,
    },
    {
        id: 5,
        name: 'Pets',
        img: pets,
    },
    {
        id: 6,
        name: 'Kitchen Accessories',
        img: kitchenAccessories,
    },
    {
        id: 7,
        name: 'Travel Equipment',
        img: travelEquipment,
    },
    {
        id: 8,
        name: 'Growing & Garden',
        img: growingGarden,
    },
    {
        id: 9,
        name: 'Eletrical Tools',
        img: eletricalTools,
    },
    {
        id: 10,
        name: 'Mother Care',
        img: motherCare,
    },
    {
        id: 11,
        name: 'Toys & Entertainment',
        img: toysEntertainment,
    },
    {
        id: 12,
        name: 'Vintage',
        img: vintage,
    },
];

export default NavBarValue;
