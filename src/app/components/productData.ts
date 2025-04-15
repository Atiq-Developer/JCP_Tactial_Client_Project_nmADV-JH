//productData.ts

export interface Product {
    id: string;
    title: string;
    shortDescription: string;
    descriptionLong: string;
    price: string;
    image: string;
    soldOut: boolean;
  }
  
  export const products: Product[] = [
    {
      id: "1",
      title: "LOT OF (10) - Laptop Charger 90W USB-C",
      shortDescription: "Total SXS 13",
      descriptionLong: `• Compatible with multiple USB-C laptops
  • Efficient 90W fast charging
  • Built for business and school environments
  • Includes 10 units per lot`,
      price: "$250.00",
      image: "/images/1.jpg",
      soldOut: false,
    },
    {
      id: "2",
      title: "Dell KM5221W Wireless Combo Keyboard & Mouse - Black",
      shortDescription: "Black mouse – keyboard Kit",
      descriptionLong: `• Sleek wireless design with full-size keyboard
  • Quiet typing and smooth mouse tracking
  • Plug-and-play with 2.4GHz receiver
  • Battery life up to 36 months`,
      price: "$200.00",
      image: "/images/2.jpg",
      soldOut: true,
    },
    {
      id: "3",
      title: "LOT OF (30) - Dell Laptop Charger 100W USB-C",
      shortDescription: "With Type-C Protection",
      descriptionLong: `• 30 high-quality USB-C 100W chargers
  • Over-voltage and short circuit protection
  • Perfect for tech resellers and corporates
  • Supports PD fast charging`,
      price: "$0.00",
      image: "/images/3.jpg",
      soldOut: true,
    },
    {
      id: "4",
      title: "LOT OF (20) - Dell DA20 USB Type-C HDMI/USB Adapter",
      shortDescription: "SOLD OUT",
      descriptionLong: `• USB-C to HDMI and USB-A ports
  • Supports 4K display output
  • Pack of 20 for enterprise or schools
  • Portable plug-and-play design`,
      price: "$0.00",
      image: "/images/4.jpg",
      soldOut: true,
    },
    {
      id: "5",
      title: "BACKBONE One Mobile Game Controller for iPhone - PlayStation Edition",
      shortDescription: "",
      descriptionLong: `• Console-quality gaming on your iPhone
  • Lightning connection with low latency
  • PlayStation-themed design and layout
  • No charging needed – powered by phone`,
      price: "$145.99",
      image: "/images/5.jpg",
      soldOut: false,
    },
    {
      id: "6",
      title: "Dell 65W USB-C Laptop Charger",
      shortDescription: "For XPS & Latitude 9000",
      descriptionLong: `• Compact 65W USB-C charger
  • Built-in safety protections
  • Compatible with most Dell laptops
  • Ideal for travel or office use`,
      price: "$175.00",
      image: "/images/6.jpg",
      soldOut: false,
    },
    {
      id: "7",
      title: "Backbone USB-C Gen 1 Video Game Mobile Controller",
      shortDescription: "",
      descriptionLong: `• Universal fit for USB-C Android phones
  • Ergonomic design for long gaming sessions
  • No lag gameplay with pass-through charging
  • Perfect for Xbox Cloud & mobile games`,
      price: "$145.99",
      image: "/images/7.jpg",
      soldOut: false,
    },
    {
      id: "8",
      title: "Dell HA120PM170 120W USB-C Charger / Adapter",
      shortDescription: "",
      descriptionLong: `• 120W power output for heavy-duty laptops
  • Dell genuine adapter with quality assurance
  • USB-C with strong build and high speed
  • Travel-friendly compact adapter`,
      price: "$215.99",
      image: "/images/8.jpg",
      soldOut: false,
    },
    {
      id: "9",
      title: "LOT OF (17) - Dell Laptop Charger 130W USB-C",
      shortDescription: "",
      descriptionLong: `• 17-piece bundle of 130W chargers
  • Best for offices or bulk replacement
  • Strong cable and fast charge speed
  • USB-C powered`,
      price: "$240.00",
      image: "/images/9.jpg",
      soldOut: false,
    },
    {
      id: "10",
      title: "Razer Wolverine V2 Chroma Gaming Controller",
      shortDescription: "For Xbox / PC – RGB – Wired",
      descriptionLong: `• MECHA-TACTILE ACTION BUTTONS: With a shorter actuation distance
  • 8-WAY MICROSWITCH D-PAD: Precise and audible control
  • HYPERTRIGGER: Lightning-fast response time
  • 6 REMAPPABLE BUTTONS: Customize every control
  • INTERCHANGEABLE THUMBSTICKS: Ergonomic for all hand types
  • CHROMA RGB: 16.8 million lighting colors`,
      price: "$95.00",
      image: "/images/10.jpg",
      soldOut: true,
    },
    {
      id: "11",
      title: "Backbone USB-C Gen 1 Video Game Mobile Controller",
      shortDescription: "",
      descriptionLong: `• USB-C wired connection
  • Easy grip design for mobile gaming
  • Supports Android & cloud gaming
  • Durable buttons with tactile feedback`,
      price: "$100.00",
      image: "/images/11.jpg",
      soldOut: false,
    },
    {
      id: "12",
      title: "LOT OF (10) - Backbone USB-C Gen 1 Video Game Mobile Controller",
      shortDescription: "SOLD OUT",
      descriptionLong: `• 10 units in the lot – for business or resale
  • High performance USB-C controllers
  • Smooth controls for FPS or racing games
  • Long lifespan with sturdy design`,
      price: "$0.00",
      image: "/images/12.jpg",
      soldOut: true,
    },
    {
      id: "13",
      title: "Dell 130W Watt AC Adapter - USB-C Type-C Power Brick Cord",
      shortDescription: "",
      descriptionLong: `• Compact design with powerful charging
  • Works with Dell XPS and Latitude series
  • Comes with over-voltage protection and fast charging support`,
      price: "$250.00",
      image: "/images/13.jpg",
      soldOut: false,
    },
    {
      id: "14",
      title: "HP 970 Programmable Wireless Keyboard",
      shortDescription: "(Silver)",
      descriptionLong: `• Customizable macro keys
  • Bluetooth & Wireless 2.4GHz connectivity
  • Long battery life up to 6 months
  • Silent and ergonomic typing
  • Sleek silver metallic body`,
      price: "$150.00",
      image: "/images/14.png",
      soldOut: true,
    }
  ];
  