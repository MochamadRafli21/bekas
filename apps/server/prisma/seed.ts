import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
import { customAlphabet } from "nanoid";

config();

const prisma = new PrismaClient();
const nanoid = customAlphabet("1234567890abcdef", 6);

const products = [
  {
    name: "Used iPhone 11 Pro Max 64GB",
    slug: "used-iphone-11-pro-max-" + nanoid(),
    sku: "IP11PM-001",
    description:
      "Refurbished iPhone 11 Pro Max with slight signs of use, factory unlocked.",
    price: 329.99,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H5b8fa300dbef44f0ad9f9889dac857b4K.jpg_720x720q50.jpg",
    stockQuantity: 45,
    minimumOrderQuantity: 5,
  },
  {
    name: "Samsung Galaxy S20 Ultra",
    slug: "samsung-galaxy-s20-ultra-" + nanoid(),
    sku: "SGS20U-002",
    description:
      "Used Galaxy S20 Ultra 128GB, grade A, minimal wear, 100% functional.",
    price: 289.5,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H1ffbc661a08c4b278b9ad48e79f1d112R.jpg_720x720q50.jpg",
    stockQuantity: 30,
    minimumOrderQuantity: 3,
  },
  {
    name: "Huawei P30 Pro",
    slug: "huawei-p30-pro-" + nanoid(),
    sku: "HWP30-003",
    description: "Used Huawei P30 Pro with Leica quad camera, clean IMEI.",
    price: 199.99,
    imageUrl: "https://i.ibb.co/T1QdFyf/p30-pro.jpg",
    stockQuantity: 25,
    minimumOrderQuantity: 2,
  },
  {
    name: "Google Pixel 5",
    slug: "google-pixel-5-" + nanoid(),
    sku: "GPX5-004",
    description:
      "Refurbished Google Pixel 5 128GB, in great condition, green color.",
    price: 209.0,
    imageUrl: "https://i.ibb.co/K5pVXDB/pixel5.jpg",
    stockQuantity: 18,
    minimumOrderQuantity: 4,
  },
  {
    name: "Used iPhone XR 64GB",
    slug: "used-iphone-xr-64gb-" + nanoid(),
    sku: "IPXR-005",
    description: "iPhone XR, factory reset, minor scratches on back glass.",
    price: 189.95,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H5b8fa300dbef44f0ad9f9889dac857b4K.jpg_720x720q50.jpg",
    stockQuantity: 40,
    minimumOrderQuantity: 5,
  },
  {
    name: "Samsung Galaxy Note 10",
    slug: "samsung-galaxy-note-10-" + nanoid(),
    sku: "SGN10-006",
    description: "Used Galaxy Note 10 with S Pen, fully functional.",
    price: 249.9,
    imageUrl: "https://i.ibb.co/JybwdND/note10.jpg",
    stockQuantity: 22,
    minimumOrderQuantity: 2,
  },
  {
    name: "Used OnePlus 8T",
    slug: "used-oneplus-8t-" + nanoid(),
    sku: "OP8T-007",
    description: "Refurbished OnePlus 8T with 120Hz display, silver color.",
    price: 225.5,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H15921d4720794cc0bfe5343f68568797B.jpg_720x720q50.jpg",
    stockQuantity: 15,
    minimumOrderQuantity: 2,
  },
  {
    name: "Used Xiaomi Mi 10T Pro",
    slug: "used-xiaomi-mi-10t-pro-" + nanoid(),
    sku: "XM10TP-008",
    description: "Used Mi 10T Pro 256GB, 5G model, fast shipping available.",
    price: 179.95,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H7c4f9b3f46664cb3b24f46870dba12caO.jpg_720x720q50.jpg",
    stockQuantity: 27,
    minimumOrderQuantity: 3,
  },
  {
    name: "Used iPhone SE 2020",
    slug: "used-iphone-se-2020-" + nanoid(),
    sku: "IPSE20-009",
    description: "iPhone SE (2nd gen), budget-friendly and compact.",
    price: 149.99,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H5b8fa300dbef44f0ad9f9889dac857b4K.jpg_720x720q50.jpg",
    stockQuantity: 50,
    minimumOrderQuantity: 5,
  },
  {
    name: "Used Motorola Edge+",
    slug: "used-motorola-edge-plus-" + nanoid(),
    sku: "MOTEDG-010",
    description: "Motorola Edge+ with OLED display, light scratches.",
    price: 179.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H26a9b2593348497d89b7bfc079d1e9a44.jpg?avif=close",
    stockQuantity: 12,
    minimumOrderQuantity: 1,
  },
  {
    name: "Used LG Velvet",
    slug: "used-lg-velvet-" + nanoid(),
    sku: "LGVLVT-011",
    description: "Stylish LG Velvet 5G, white edition, pre-owned.",
    price: 159.99,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H7a0904629fba41b1b523a37ba0f73a6c7.jpg_720x720q50.jpg",
    stockQuantity: 10,
    minimumOrderQuantity: 1,
  },
  {
    name: "Sony Xperia 5 II",
    slug: "sony-xperia-5-ii-" + nanoid(),
    sku: "SXP5II-012",
    description: "Used Xperia 5 II with HDR OLED screen, low stock.",
    price: 239.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H65f62ec619b74c819a1da574556e38405.png_720x720q50.jpg",
    stockQuantity: 8,
    minimumOrderQuantity: 1,
  },
  {
    name: "Used Realme X7 Pro",
    slug: "used-realme-x7-pro-" + nanoid(),
    sku: "RMX7P-013",
    description: "Refurb Realme X7 Pro, 120Hz AMOLED, gradient color.",
    price: 169.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H18d102156f3c4b0d9acc87445ab2a1abm.jpg_720x720q50.jpg",
    stockQuantity: 20,
    minimumOrderQuantity: 2,
  },
  {
    name: "Used Oppo Reno 5",
    slug: "used-oppo-reno-5-" + nanoid(),
    sku: "OPR5-014",
    description: "Used Oppo Reno 5, quad camera, Chinese ROM.",
    price: 159.5,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hfee4e02dc12f4d1d96a75fc49539e0e4Z.jpg_720x720q50.jpg",
    stockQuantity: 17,
    minimumOrderQuantity: 3,
  },
  {
    name: "Used Vivo V21 5G",
    slug: "used-vivo-v21-5g-" + nanoid(),
    sku: "VV21-015",
    description: "Lightweight Vivo phone, good selfie cam, decent battery.",
    price: 139.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H1423050378a1454cb306ee7b7ee444e4V.jpg_720x720q50.jpg",
    stockQuantity: 25,
    minimumOrderQuantity: 2,
  },
  {
    name: "Used Redmi Note 10 Pro",
    slug: "used-redmi-note-10-pro-" + nanoid(),
    sku: "RN10P-016",
    description: "Used Note 10 Pro, 108MP camera, AMOLED display.",
    price: 149.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H7c4f9b3f46664cb3b24f46870dba12caO.jpg_720x720q50.jpg",
    stockQuantity: 35,
    minimumOrderQuantity: 3,
  },
  {
    name: "Used iPhone 12 Mini",
    slug: "used-iphone-12-mini-" + nanoid(),
    sku: "IP12MN-017",
    description: "iPhone 12 Mini, small and fast, minor frame scuffs.",
    price: 319.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H5b8fa300dbef44f0ad9f9889dac857b4K.jpg_720x720q50.jpg",
    stockQuantity: 10,
    minimumOrderQuantity: 2,
  },
  {
    name: "Used Samsung Galaxy A52",
    slug: "used-samsung-galaxy-a52-" + nanoid(),
    sku: "SGA52-018",
    description: "Affordable A52 with AMOLED screen, slightly used.",
    price: 149.99,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H1ffbc661a08c4b278b9ad48e79f1d112R.jpg_720x720q50.jpg",
    stockQuantity: 40,
    minimumOrderQuantity: 4,
  },
  {
    name: "Used Nokia 5.4",
    slug: "used-nokia-5-4-" + nanoid(),
    sku: "NK54-019",
    description: "Pre-owned Nokia 5.4, clean, budget-friendly.",
    price: 89.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Ad886bf3236584cbcb7b2d1ec81971e5aQ.jpg_720x720q50.jpg",
    stockQuantity: 20,
    minimumOrderQuantity: 5,
  },
  {
    name: "Used Asus ROG Phone 3",
    slug: "used-asus-rog-phone-3-" + nanoid(),
    sku: "ASUSRP3-020",
    description: "Gaming-focused ROG Phone 3, slightly used.",
    price: 299.0,
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hb84707b2ac524404997eec568c23f5565.jpg_300x300.jpg",
    stockQuantity: 7,
    minimumOrderQuantity: 1,
  },
];

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: products });
  console.log("✅ Seeded products successfully");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
