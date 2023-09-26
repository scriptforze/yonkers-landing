export default function handler(req, res) {
    res.status(200).json([
        {
          "id": 1,
          "name": "Brake Pad Set",
          "price": 127000,
          "stock": 100,
          "sku": "65651SFDFSFD",
          "brand": "ACME AUTO PARTS",
          "description": "High-quality brake pad set for improved stopping power.",
          "image_url":[
            "http://localhost:3000/img/brakepad1.jpg",
            "http://localhost:3000/img/brakepad2.jpg",
            "http://localhost:3000/img/brakepad3.jpg"
          ],
          "features": [
            "High-quality ceramic material",
            "Improved stopping power",
            "Long-lasting durability"
          ],
          "specifications": {
            "Dimension": "10x5x2 inches",
            "Weight": "2.5 lbs",
            "Material": "Ceramic"
          }
        },
        {
          "id": 2,
          "name": "Oil Filter",
          "price": 47500,
          "stock": 250,
          "sku": "3456756DFGHJK",
          "brand": "AUTOPRO",
          "description": "Premium oil filter for better engine performance.",
          "image_url": [
            "http://localhost:3000/img/oilfilter1.jpg",
            "http://localhost:3000/img/oilfilter2.jpg",
            "http://localhost:3000/img/oilfilter3.jpg"
          ],
          "features": ["Feature 1", "Feature 2", "Feature 3"],
          "specifications": {
            "Type": "Spin-on",
            "Filtration Rating": "10 microns",
            "Thread Size": "M20x1.5"
          }
        },
        {
          "id": 3,
          "name": "Spark Plug Set",
          "price": 98650,
          "stock": 150,
          "sku": "5456XCVBN",
          "brand": "CARTECH",
          "description": "High-performance spark plug set for improved ignition.",
          "image_url": [
            "http://localhost:3000/img/sparkplugset1.jpg",
            "http://localhost:3000/img/sparkplugset2.jpg",
            "http://localhost:3000/img/sparkplugset3.jpg"
          ],
          "features": ["Feature 1", "Feature 2", "Feature 3"],
          "specifications": {
            "Plug Type": "Iridium",
            "Gap Size": "0.032 inches",
            "Heat Range": "6"
          }
        },
        {
          "id": 4,
          "name": "Air Filter",
          "price": 53400,
          "stock": 200,
          "sku": "345675456",
          "brand": "SCRIPTFORZE",
          "description": "Quality air filter for cleaner engine air intake.",
          "image_url":[
            "http://localhost:3000/img/filter1.jpg",
            "http://localhost:3000/img/filter2.jpg",
            "http://localhost:3000/img/filter3.jpg"
          ],
          "features": [
            "High-quality ceramic material",
            "Improved stopping power",
            "Long-lasting durability"
          ],
          "specifications": {
            "Filter Type": "Panel",
            "Filtration Efficiency": "95%",
            "Dimensions": "12x8x1 inches"
          }
        },
        {
          "id": 5,
          "name": "Tire",
          "price": 91200,
          "stock": 230,
          "sku": "345SODL456",
          "brand": "MICHELIN",
          "description": "Funny Tires coming out of your hips..",
          "image_url": [
            "http://localhost:3000/img/tire1.jpg",
            "http://localhost:3000/img/tire2.jpg",
            "http://localhost:3000/img/tire3.jpg"
          ],
          "features": ["Feature 1", "Feature 2", "Feature 3"],
          "specifications": {
            "Tire Size": "225/45R17",
            "Speed Rating": "H",
            "Load Index": "94"
          }
        }
    ]);
}
