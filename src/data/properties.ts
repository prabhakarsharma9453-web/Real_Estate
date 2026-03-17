import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: "land" | "residential" | "commercial" | "industrial";
  images: string[];
  amenities: string[];
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  createdAt: string;
}

export const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Modern Villa with Pool",
    description: "A stunning modern villa featuring open-plan living, infinity pool, and panoramic garden views. Perfect for luxury family living.",
    price: 850000,
    location: "Beverly Hills, CA",
    type: "residential",
    images: [property1, property3],
    amenities: ["Swimming Pool", "Garden", "Garage", "Smart Home", "Security"],
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    createdAt: "2026-03-01",
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    description: "Elegant city apartment with floor-to-ceiling windows offering breathtaking skyline views. Modern finishes throughout.",
    price: 425000,
    location: "Manhattan, NY",
    type: "residential",
    images: [property2, property5],
    amenities: ["Gym", "Concierge", "Rooftop Terrace", "Parking"],
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    createdAt: "2026-02-15",
  },
  {
    id: "3",
    title: "Beachfront Paradise Villa",
    description: "Tropical beachfront property with private pool and direct ocean access. An exclusive island retreat.",
    price: 1200000,
    location: "Malibu, CA",
    type: "residential",
    images: [property3, property1],
    amenities: ["Beach Access", "Pool", "Garden", "BBQ Area", "Guest House"],
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    createdAt: "2026-02-20",
  },
  {
    id: "4",
    title: "Premium Office Tower",
    description: "Grade A commercial office space in the heart of the financial district. High-speed connectivity and modern amenities.",
    price: 2500000,
    location: "Chicago, IL",
    type: "commercial",
    images: [property4, property6],
    amenities: ["Conference Rooms", "Parking", "24/7 Security", "Cafeteria"],
    area: 12000,
    createdAt: "2026-01-10",
  },
  {
    id: "5",
    title: "Gourmet Kitchen Penthouse",
    description: "Exquisite penthouse featuring a chef's kitchen with premium appliances, marble countertops, and stunning city views.",
    price: 675000,
    location: "San Francisco, CA",
    type: "residential",
    images: [property5, property2],
    amenities: ["Chef Kitchen", "Wine Cellar", "Terrace", "Gym"],
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    createdAt: "2026-03-05",
  },
  {
    id: "6",
    title: "Skyline Terrace Suite",
    description: "Luxury suite with expansive terrace overlooking the city skyline. Perfect blend of indoor and outdoor living.",
    price: 950000,
    location: "Miami, FL",
    type: "residential",
    images: [property6, property5],
    amenities: ["Terrace", "Pool", "Spa", "Valet Parking", "Lounge"],
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    createdAt: "2026-03-10",
  },
];
