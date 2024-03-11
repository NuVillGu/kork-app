const products = [
    {
        product_code: 'ZAP00001',
        name: 'PUMA 180 Felt Sneakers',
        description1: '<br><ul><li>Lace closure</li><li>Padded tongue and cuff</li><li>Exclusive PUMA product</li><li>IMEVA midsole provides lightweight cushioning</li><li>Durable rubber sole</li></ul>', 
        description2: '<br>Clean with a damp cloth or sponge.<br>Upper: 100% felt.',
        brand: 'Puma',
        category: 'ZAP',
        size: [{"value":"37","stock":"350"},{"value":"38","stock":"650"},{"value":"39","stock":"850"},{"value":"39.5","stock":"800"},{"value":"40","stock":"750"},{"value":"40.5","stock":"700"}],
        price: 120.00,
        color: '#b9e5fc',
        family_color: '#326ecd',
        images: ["/images/products/ZAP00001_b9e5fc_1.jpg","/images/products/ZAP00001_b9e5fc_2.jpg","/images/products/ZAP00001_b9e5fc_3.jpg","/images/products/ZAP00001_b9e5fc_4.jpg","/images/products/ZAP00001_b9e5fc_5.jpg"]
    },
    {
        product_code: 'ZAP00001',
        name: 'PUMA 180 Felt Sneakers',
        description1: '<br><ul><li>Lace closure</li><li>Padded tongue and cuff</li><li>Exclusive PUMA product</li><li>IMEVA midsole provides lightweight cushioning</li><li>Durable rubber sole</li></ul>', 
        description2: '<br>Clean with a damp cloth or sponge.<br>Upper: 100% felt.',
        brand: 'Puma',
        category: 'ZAP',
        size: [{"value":"37","stock":"350"},{"value":"38","stock":"650"},{"value":"39","stock":"850"},{"value":"39.5","stock":"800"},{"value":"40","stock":"750"},{"value":"40.5","stock":"700"}],
        price: 120.00,
        color: '#ffffff',
        family_color: 'white',
        images: ["/images/products/ZAP00001_ffffff_1.jpg","/images/products/ZAP00001_ffffff_2.jpg","/images/products/ZAP00001_ffffff_3.jpg","/images/products/ZAP00001_ffffff_4.jpg","/images/products/ZAP00001_ffffff_5.jpg"]
    },
    {
        product_code: 'ZAP00002',
        name: 'Reebok Club C 85 Vintage Sneakers',
        description1: '<br><ul><li>Lace closure</li><li>Padded tongue and cuff</li><li>Exclusive Reebok product</li><li>Perforated for ventilation</li><li>Durable rubber sole</li></ul>', 
        description2: '<br>Smooth synthetic leather upper<br>Lining: 100% textile, Sole: 100% rubber, Upper: 100% genuine leather.<br>Wipe clean with a soft dry cloth.',
        brand: 'Reebok',
        category: 'ZAP',
        size: [{"value":"37","stock":"450"},{"value":"38","stock":"750"},{"value":"39","stock":"950"},{"value":"39.5","stock":"900"},{"value":"40","stock":"850"},{"value":"40.5","stock":"800"}],
        price: 100.00,
        color: '#ffffff',
        family_color: 'white',
        images: ["/images/products/ZAP00002_ffffff_1.jpg","/images/products/ZAP00002_ffffff_2.jpg","/images/products/ZAP00002_ffffff_3.jpg","/images/products/ZAP00002_ffffff_4.jpg","/images/products/ZAP00002_ffffff_5.jpg"]
    },
    {
        product_code: 'ACC00001',
        name: 'The North Face Salty Dog beanie',
        description1: '<br><ul><li>Domed shape</li><li>Logo patch detail</li><li>Cuffed visor</li></ul>', 
        description2: '<br>Ribbed knit<br>Lining: 100% acrylic. Main: 100% polyester.<br>Machine wash according to care label instructions.',
        brand: 'The North Face',
        category: 'ACC',
        size: [{"value":"O/S","stock":"300"}],
        price: 28.00,
        color: '#ffd500',
        family_color: '#ffcb00',
        images: ["/images/products/ACC00001_ffd500_1.jpg","/images/products/ACC00001_ffd500_2.jpg"]
    },
    {
        product_code: 'ACC00001',
        name: 'The North Face Salty Dog beanie',
        description1: '<br><ul><li>Domed shape</li><li>Logo patch detail</li><li>Cuffed visor</li></ul>', 
        description2: '<br>Ribbed knit<br>Lining: 100% acrylic. Main: 100% polyester.<br>Machine wash according to care label instructions.',
        brand: 'The North Face',
        category: 'ACC',
        size: [{"value":"O/S","stock":"300"}],
        price: 28.00,
        onsale_price: 20.00,
        color: '#f4e6f7',
        family_color: '#f580a4',
        images: ["/images/products/ACC00001_f4e6f7_1.jpg","/images/products/ACC00001_f4e6f7_2.jpg"]
    },
    {
        product_code: 'ACC00001',
        name: 'The North Face Salty Dog beanie',
        description1: '<br><ul><li>Domed shape</li><li>Logo patch detail</li><li>Cuffed visor</li></ul>', 
        description2: '<br>Ribbed knit<br>Lining: 100% acrylic. Main: 100% polyester.<br>Machine wash according to care label instructions.',
        brand: 'The North Face',
        category: 'ACC',
        size: [{"value":"O/S","stock":"300"}],
        price: 28.00,
        onsale_price: 18.00,
        color: '#302101',
        family_color: '#a55f2a',
        images: ["/images/products/ACC00001_302101_1.jpg","/images/products/ACC00001_302101_2.jpg"]
    },
    {
        product_code: 'ACC00002',
        name: 'Adidas Originals Relaxed Strapback cap',
        description1: '<br><ul><li>Eyelets for ventilation</li><li>Embroidered adidas logo</li><li>Curved visor</li><li>Strap with adjustable buckle</li></ul>', 
        description2: '<br>Rib fabric<br>Main: 100% Cotton.<br>Machine wash according to care label instructions.',
        brand: 'Adidas Originals',
        category: 'ACC',
        size: [{"value":"O/S","stock":"500"}],
        price: 26.00,
        color: '#06ad53',
        family_color: '#00a04a',
        images: ["/images/products/ACC00002_06ad53_1.jpg","/images/products/ACC00002_06ad53_2.jpg"]
    },
    {
        product_code: 'SJC00001',
        name: 'Monki Long Sleeve Oversized Jumper',
        description1: '<br><ul><li>Round neckline</li><li>Dropped shoulders</li><li>Oversize fit</li></ul>', 
        description2: '<br>Fabric: soft and warm<br>Main: 80% Cotton, 20% Polyester.<br>Model height: 170.5 cm<br>Model is wearing: XS',
        brand: 'Monki',
        category: 'SJC',
        size: [{"value":"XS","stock":"450"},{"value":"S","stock":"800"},{"value":"M","stock":"900"},{"value":"L","stock":"600"},{"value":"XL","stock":"400"}],
        price: 36.99,
        color: '#cccccc',
        family_color: 'grey',
        images: ["/images/products/SJC00001_cccccc_1.jpg","/images/products/SJC00001_cccccc_2.jpg","/images/products/SJC00001_cccccc_3.jpg"]
    },
    {
        product_code: 'SJC00001',
        name: 'Monki Long Sleeve Oversized Jumper',
        description1: '<br><ul><li>Round neckline</li><li>Dropped shoulders</li><li>Oversize fit</li></ul>', 
        description2: '<br>Fabric: soft and warm<br>Main: 80% Cotton, 20% Polyester.<br>Model height: 170.5 cm<br>Model is wearing: XS',
        brand: 'Monki',
        category: 'SJC',
        size: [{"value":"XS","stock":"450"},{"value":"S","stock":"800"},{"value":"M","stock":"900"},{"value":"L","stock":"600"},{"value":"XL","stock":"400"}],
        price: 36.99,
        onsale_price: 29.99,
        color: '#00154f',
        family_color: '#326ecd',
        images: ["/images/products/SJC00001_00154f_1.jpg","/images/products/SJC00001_00154f_2.jpg","/images/products/SJC00001_00154f_3.jpg"]
    },
    {
        product_code: 'SJC00002',
        name: 'Dr Denim Terri Crewneck Hoodie',
        description1: '<br><ul><li>Crewneck</li><li>Dropped shoulders</li><li>Standard fit</li></ul>', 
        description2: '<br>Fabric: soft and warm<br>Main: 100% Cotton.<br>Model height: 175 cm<br>Model is wearing: S<br>Machine wash according to care label instructions.',
        brand: 'Dr Denim',
        category: 'SJC',
        size: [{"value":"XS","stock":"250"},{"value":"S","stock":"600"},{"value":"M","stock":"700"},{"value":"L","stock":"400"},{"value":"XL","stock":"200"}],
        price: 104.00,
        onsale_price: 95.00,
        color: '#0c4292',
        family_color: '#326ecd',
        images: ["/images/products/SJC00002_0c4292_1.jpg","/images/products/SJC00002_0c4292_2.jpg","/images/products/SJC00002_0c4292_3.jpg"]
    },
    {
        product_code: 'APC00001',
        name: 'Violet Romance Plus Long Coat',
        description1: '<ul><li>Faux fur trim</li><li>V-neckline</li><li>Bow at waist</li><li>Side pockets</li><li>Long cut</li><li>Regular fit</li></ul>', 
        description2: '<br>Smooth fabric<br>Main: 100% Cotton.<br>Model height: 175 cm<br>Model is wearing: S<br>Machine wash according to care label instructions.',
        brand: 'Violet Romance Curve',
        category: 'APC',
        size: [{"value":"XS","stock":"200"},{"value":"S","stock":"550"},{"value":"M","stock":"650"},{"value":"L","stock":"350"},{"value":"XL","stock":"150"}],
        price: 99.00,
        onsale_price: 89.99,
        color: '#000000',
        family_color: 'black',
        images: ["/images/products/APC00001_000000_1.jpg","/images/products/APC00001_000000_2.jpg","/images/products/APC00001_000000_3.jpg"]
    },
    {
        product_code: 'APC00001',
        name: 'Violet Romance Plus Long Coat',
        description1: '<ul><li>Faux fur trim</li><li>V-neckline</li><li>Bow at waist</li><li>Side pockets</li><li>Long cut</li><li>Regular fit</li></ul>', 
        description2: '<br>Smooth fabric<br>Main: 100% Cotton.<br>Model height: 175 cm<br>Model is wearing: S<br>Machine wash according to care label instructions.',
        brand: 'Violet Romance Curve',
        category: 'APC',
        size: [{"value":"XS","stock":"200"},{"value":"S","stock":"550"},{"value":"M","stock":"650"},{"value":"L","stock":"350"},{"value":"XL","stock":"150"}],
        price: 99.00,
        onsale_price: 89.99,
        color: '#ffffff',
        family_color: 'white',
        images: ["/images/products/APC00001_ffffff_1.jpg","/images/products/APC00001_ffffff_2.jpg","/images/products/APC00001_ffffff_3.jpg"]
    },
    {
        product_code: 'APC00002',
        name: 'Muubaa Leather Biker',
        description1: '<br><ul><li>Studded neck</li><li>Zipper closure</li><li>Functional pockets</li><li>Standard fit</li></ul>', 
        description2: '<br>Leather: matte finish.<br>Main: 100% genuine leather.<br>Model height: 176.5 cm<br>Model is wearing: S',
        brand: 'Muubaa',
        category: 'APC',
        size: [{"value":"XS","stock":"300"},{"value":"S","stock":"600"},{"value":"M","stock":"750"},{"value":"L","stock":"450"},{"value":"XL","stock":"250"}],
        price: 289.00,
        color: '#834212',
        family_color: '#a55f2a',
        images: ["/images/products/APC00002_834212_1.jpg","/images/products/APC00002_834212_2.jpg","/images/products/APC00002_834212_3.jpg"]
    },
    {
        product_code: 'VES00001',
        name: 'Public Desire Short Strapless Dress',
        description1: '<br><ul><li>Smooth fabric</li><li>Semi-transparent</li><li>Bandeau style</li><li>Skin-tight fit</li></ul>', 
        description2: '<br>Fabric: soft and elastic<br>Main: 95% polyester, 5% elastane.<br>Model height: 178 cm<br>Model is wearing: S',
        brand: 'Public Desire',
        category: 'VES',
        size: [{"value":"XS","stock":"200"},{"value":"S","stock":"500"},{"value":"M","stock":"600"},{"value":"L","stock":"400"},{"value":"XL","stock":"200"}],
        price: 46.00,
        color: '#000000',
        family_color: 'black',
        images: ["/images/products/VES00001_000000_1.jpg","/images/products/VES00001_000000_2.jpg","/images/products/VES00001_000000_3.jpg"]
    },
    {
        product_code: 'VES00002',
        name: 'Evangeline Strappy Maxi Dress',
        description1: '<ul><li>Adjustable straps</li><li>Open back</li><li>Slim fit</li></ul>', 
        description2: '<br>Fabric: soft and non-elastic<br>Main: 98% silk, 2% cotton<br>Model height: 173 cm<br>Model is wearing: S',
        brand: 'Evangeline',
        category: 'VES',
        size: [{"value":"XS","stock":"50"},{"value":"S","stock":"400"},{"value":"M","stock":"400"},{"value":"L","stock":"50"},{"value":"XL","stock":"30"}],
        price: 439.95,
        onsale_price: 351.95,
        color: '#b9b1a1',
        family_color: '#a55f2a',
        images: ["/images/products/VES00002_b9b1a1_1.jpg","/images/products/VES00002_b9b1a1_2.jpg","/images/products/VES00002_b9b1a1_3.jpg"]
    },
    {
        product_code: 'VES00003',
        name: 'ONLFOX Closed Neck and Open Back Dress',
        description1: '<br><ul><li>Closed neck</li><li>Slit detail on the back</li><li>Long sleeves</li><li>Slim fit</li></ul>', 
        description2: '<br>Fabric: soft and elastic<br>Main: 95% polyester, 5% elastane.<br>Model height: 168 cm<br>Model is wearing: XS',
        brand: 'Only',
        category: 'VES',
        size: [{"value":"XS","stock":"120"},{"value":"S","stock":"300"},{"value":"M","stock":"370"},{"value":"L","stock":"120"},{"value":"XL","stock":"100"}],
        price: 49.99,
        color: '#f30f0f',
        family_color: '#cb1313',
        images: ["/images/products/VES00003_f30f0f_1.jpg","/images/products/VES00003_f30f0f_2.jpg","/images/products/VES00003_f30f0f_3.jpg"]
    },
    {
        product_code: 'PVS00001',
        name: 'COLLUSION x015 Baggy Y2K Pink Jeans',
        description1: '<br><ul><li>Loose fit</li><li>Low rise</li><li>Belt straps</li><li>Five pockets</li></ul>', 
        description2: '<br>Non-stretch denim<br>Main: 100% cotton<br>Model height: 173 cm<br>Model is wearing: 36<br>Machine wash according to care label instructions.',
        brand: 'Collusion',
        category: 'PVS',
        size: [{"value":"34","stock":"200"},{"value":"36","stock":"300"},{"value":"38","stock":"400"},{"value":"40","stock":"400"}],
        price: 59.99,
        color: '#ce66f3',
        family_color: '#f580a4',
        images: ["/images/products/PVS00001_ce66f3_1.jpg","/images/products/PVS00001_ce66f3_2.jpg","/images/products/PVS00001_ce66f3_3.jpg"]
    },
    {
        product_code: 'PVS00002',
        name: 'NA-KD x Josefine HJ Tailored Pants',
        description1: '<br><ul><li>Collaboration with Josefine Haaning Jensen</li><li>Belt straps</li><li>Functional pockets</li><li>Straight cut</li></ul>', 
        description2: '<br>Stretch and smooth fabric<br>Main: 97% polyester, 3% elastane.<br>Model height: 170 cm<br>Model is wearing: 36<br>Machine wash according to care label instructions',
        brand: 'NA-KD',
        category: 'PVS',
        size: [{"value":"34","stock":"400"},{"value":"36","stock":"650"},{"value":"38","stock":"700"},{"value":"40","stock":"700"}],
        price: 69.00,
        color: '#000000',
        family_color: 'black',
        images: ["/images/products/PVS00002_000000_1.jpg","/images/products/PVS00002_000000_2.jpg","/images/products/PVS00002_000000_3.jpg"]
    },
    {
        product_code: 'PVS00002',
        name: 'NA-KD x Josefine HJ Tailored Pants',
        description1: '<br><ul><li>Collaboration with Josefine Haaning Jensen</li><li>Belt straps</li><li>Functional pockets</li><li>Straight cut</li></ul>', 
        description2: '<br>Stretch and smooth fabric<br>Main: 97% polyester, 3% elastane.<br>Model height: 170 cm<br>Model is wearing: 36<br>Machine wash according to care label instructions',
        brand: 'NA-KD',
        category: 'PVS',
        size: [{"value":"34","stock":"400"},{"value":"36","stock":"650"},{"value":"38","stock":"700"},{"value":"40","stock":"700"}],
        price: 69.00,
        color: '#d9ad7b',
        family_color: '#a55f2a',
        images: ["/images/products/PVS00002_d9ad7b_1.jpg","/images/products/PVS00002_d9ad7b_2.jpg","/images/products/PVS00002_d9ad7b_3.jpg"]
    },
    {
        product_code: 'FAL00001',
        name: 'Daisy Street Boho Retro Skirt',
        description1: '<br><ul><li>Stepped design</li><li>Low rise</li><li>Standard cut</li></ul>', 
        description2: '<br>Fabric: light, soft and drapey<br>Main: 100% Viscose<br>Model height: 170 cm.<br>Model is wearing: 36<br>Machine wash according to care label instructions',
        brand: 'Daisy Street',
        category: 'FAL',
        size: [{"value":"34","stock":"200"},{"value":"36","stock":"450"},{"value":"38","stock":"500"},{"value":"40","stock":"500"}],
        price: 56.00,
        color: '#000000',
        family_color: 'black',
        images: ["/images/products/FAL00001_000000_1.jpg","/images/products/FAL00001_000000_2.jpg","/images/products/FAL00001_000000_3.jpg"]
    },
    {
        product_code: 'FAL00002',
        name: 'Monki Pleated Miniskirt',
        description1: '<br><ul><li>Pleated design</li><li>High waist</li><li>Side zipper closure</li><li>Regular fit</li></ul>', 
        description2: '<br>Smooth fabric<br>Main: 80% polyester, 18% viscose, 2% elastane<br>Model height: 170.5 cm<br>Model is wearing: 34<br>Machine wash according to label care instructions',
        brand: 'Monki',
        category: 'FAL',
        size: [{"value":"34","stock":"300"},{"value":"36","stock":"550"},{"value":"38","stock":"600"},{"value":"40","stock":"600"}],
        price: 36.99,
        color: '#000000',
        family_color: 'black',
        images: ["/images/products/FAL00002_000000_1.jpg","/images/products/FAL00002_000000_2.jpg","/images/products/FAL00002_000000_3.jpg"]
    },
    {
        product_code: 'CCC00001',
        name: 'Wrangler Striped Neck T-Shirt',
        description1: '<br><ul><li>Round neck</li><li>Short sleeves</li><li>Logo printed on chest and back</li><li>Standard fit</li></ul>', 
        description2: '<br>Fabric: Soft and stretchy<br>Main: 100% cotton<br>Model height: 173 cm<br>Model is wearing: S<br>Machine wash according to care label instructions',
        brand: 'Wrangler',
        category: 'CCC',
        size: [{"value":"XS","stock":"600"},{"value":"S","stock":"1000"},{"value":"M","stock":"1000"},{"value":"L","stock":"800"},{"value":"XL","stock":"600"}],
        price: 44.00,
        color: '#ffffff',
        family_color: 'white',
        images: ["/images/products/CCC00001_ffffff_1.jpg","/images/products/CCC00001_ffffff_2.jpg","/images/products/CCC00001_ffffff_3.jpg"]
    },
    {
        product_code: 'CCC00002',
        name: 'Monki Basic Long Sleeve T-Shirt',
        description1: '<br><ul><li>Round neck</li><li>Long sleeves</li><li>Standard fit</li></ul>', 
        description2: '<br>Fabric: soft and stretchy<br>Main: 65% polyester, 34% viscose, 1% spandex<br>Model height: 168 cm<br>Model is wearing: S<br>Wash machine according to care label instructions',
        brand: 'Monki',
        category: 'CCC',
        size: [{"value":"XS","stock":"850"},{"value":"S","stock":"1800"},{"value":"M","stock":"1800"},{"value":"L","stock":"850"},{"value":"XL","stock":"650"}],
        price: 21.00,
        color: '#8b8b8b',
        family_color: 'grey',
        images: ["/images/products/CCC00002_8b8b8b_1.jpg","/images/products/CCC00002_8b8b8b_2.jpg","/images/products/CCC00002_8b8b8b_3.jpg"]
    },
    {
        product_code: 'CCC00002',
        name: 'Monki Basic Long Sleeve T-Shirt',
        description1: '<br><ul><li>Round neck</li><li>Long sleeves</li><li>Standard fit</li></ul>', 
        description2: '<br>Fabric: soft and stretchy<br>Main: 65% polyester, 34% viscose, 1% spandex<br>Model height: 168 cm<br>Model is wearing: S<br>Wash machine according to care label instructions',
        brand: 'Monki',
        category: 'CCC',
        size: [{"value":"XS","stock":"850"},{"value":"S","stock":"1800"},{"value":"M","stock":"1800"},{"value":"L","stock":"850"},{"value":"XL","stock":"650"}],
        price: 21.00,
        color: '#000000',
        family_color: 'black',
        images: ["/images/products/CCC00002_000000_1.jpg","/images/products/CCC00002_000000_2.jpg","/images/products/CCC00002_000000_3.jpg"]
    }
];

const family_colors = [
    { name: "RED", color: '#cb1313' },
    { name: "PINK", color: '#f580a4' },
    { name: "BLUE", color: '#326ecd' },
    { name: "BLACK", color: 'black' },
    { name: "WHITE", color: 'white' },
    { name: "GREY", color: 'grey' },
    { name: "BROWN", color: '#a55f2a' },
    { name: "GREEN", color: '#00a04a' },
    { name: "YELLOW", color: '#ffcb00' }
];


const categories = [
    {   
        name: "Shoes",
        category: 'ZAP', 
        size: ["37","38","39","39.5","40","40.5"]
    },
    { 
        name: "Accesories",
        category: 'ACC', 
        size: ["O/S"]
    },
    { 
        name: "Hoodies & Jumpers",
        category: 'SJC', 
        size: ["XS","S","M","L","XL"]
    },
    { 
        name: "Coats & Jackets",
        category: 'APC', 
        size: ["XS","S","M","L","XL"]
    },
    { 
        name: "Dresses",
        category: 'VES', 
        size: ["XS","S","M","L","XL"]
    },
    { 
        name: "T-Shirts & Shirts",
        category: 'CCC', 
        size: ["XS","S","M","L","XL"]
    },
    { 
        name: "Trousers & Jeans",
        category: 'PVS', 
        size: ["34","36","38","40"]
    },
    { 
        name: "Skirts",
        category: 'FAL', 
        size: ["34","36","38","40"]
    }  
];

module.exports = {
    products,
    family_colors,
    categories
};