import React from 'react';

interface GiftBox {
  id: string;
  name: string;
  totalItems: number;
  mrp: number;
  discount: number;
  discountedPrice: number;
  keyFeatures: string;
  color: string;
  items: Array<{
    no: number;
    name: string;
    qty: string;
  }>;
}

const Inventory: React.FC = () => {
  const giftBoxData: GiftBox[] = [
    {
      id: 'twitter',
      name: 'Twitter Gift Box',
      totalItems: 25,
      mrp: 1500,
      discount: 50,
      discountedPrice: 750,
      keyFeatures: 'The Starter: Our most accessible pack, ideal for smaller celebrations, featuring key items like Electric Stone.',
      color: '#FF6347',
      items: [
        { no: 1, name: 'Lakshmi 3 1/2', qty: '1 pkt' }, { no: 15, name: 'Gee Boomba', qty: '1 box' },
        { no: 2, name: 'Kuruvui 2 3/4', qty: '1 pkt' }, { no: 16, name: 'Serpent', qty: '1 box' },
        { no: 3, name: 'Ashraffi Small', qty: '1 pc' }, { no: 17, name: '10 Chorsa Crackers', qty: '1 pkt' },
        { no: 4, name: 'Ashraffi Big', qty: '1 pc' }, { no: 18, name: 'Electric Stone', qty: '1 box' },
        { no: 5, name: '28 Chorsa Crackers', qty: '1 pkt' }, { no: 19, name: 'Photo Flash', qty: '1 pc' },
        { no: 6, name: '28 Goa Crackers', qty: '1 pkt' }, { no:20, name: 'Snake Cartoon', qty: '1 pc' },
        { no: 8, name: 'Fancy Wheel', qty: '1 pc' }, { no: 21, name: 'Cartoon (5 pcs)', qty: '1 box' },
        { no: 7, name: 'Bullet Bomb', qty: '1 box' }, { no: 22, name: 'Red Bijili (50 pcs)', qty: '1 pkt' },
        { no: 9, name: 'Butterfly', qty: '1 pc' }, { no: 23, name: '7cm Electric Sparklers', qty: '1 box' },
        { no: 10, name: 'Flowerpot Big (5 pcs)', qty: '1 box' }, { no: 24, name: '7cm Color Sparklers', qty: '1 box' },
        { no: 11, name: 'Zamin Chakkar Big', qty: '1 box' }, { no: 25, name: '7cm Green Sparklers', qty: '1 box' },
        { no: 12, name: 'Military Bomb', qty: '1 pc' }, { no: 13, name: 'Twinkiling Star(5 pcs)', qty: '1 box' }, { no: 14, name: 'Sky Shot', qty: '1 pc' }
   ]
    },
    {
      id: 'spiderman',
      name: 'Spiderman Gift Box',
      totalItems: 30,
      mrp: 1800,
      discount: 50,
      discountedPrice: 900,
      keyFeatures: 'The Action Pack: Focus on popular items like Bullet Bombs, Photo Flash, and a great mix of color effects.',
      color: '#FF0000',
      items: [
        { no: 1, name: 'Lakshmi 4"', qty: '1 pkt' }, { no: 16, name: 'Sky Shot', qty: '1 pc' },
        { no: 2, name: 'Laxmi 3 1/2"', qty: '1 pkt' }, { no: 17, name: 'Military Bomb', qty: '1 pc' },
        { no: 3, name: 'Laxmi 2 3/4"', qty: '1 pkt' }, { no: 18, name: 'Fancy Wheel', qty: '1 pc' },
        { no: 4, name: 'Parrot 2 3/4"', qty: '1 pkt' }, { no: 19, name: '7 Shot', qty: '1 pc' },
        { no: 5, name: 'Kuruvui 2 3/4"', qty: '1 pkt' }, { no: 20, name: 'Ashraffi Big', qty: '1 pc' },
        { no: 6, name: '10 Gaint Crackers', qty: '1 pkt' }, { no: 21, name: 'Ashraffi Small', qty: '1 pc' },
        { no: 7, name: '28 Chorsa Crackers', qty: '1 pkt' }, { no: 22, name: 'Cartoon (5 pcs.)', qty: '1 box' },
        { no: 8, name: '28 Goa Crackers', qty: '1 pkt' }, { no: 23, name: 'Snake Cartoon', qty: '1 pc' },
        { no: 9, name: 'Photo Flash', qty: '1 pc' }, { no: 24, name: 'Shower', qty: '1 pkt' },
        { no: 10, name: 'Bullet Bomb (5 pcs.)', qty: '1 box' }, { no: 25, name: 'Chorsa Crackers', qty: '1 pkt' },
        { no: 11, name: 'Flowerpot Big (5 pcs.)', qty: '1 box' }, { no: 26, name: 'Red Bijili (50 pcs)', qty: '1 pkt' },
        { no: 12, name: 'Zamin Chakar Big (5 Pcs)', qty: '1 box' }, { no: 27, name: '7cm Electric sparklers', qty: '1 box' },
        { no: 13, name: 'Twinkling Star (5 pcs.)', qty: '1 box' }, { no: 28, name: '7cm Color sparklers', qty: '1 box' },
        { no: 14, name: 'Stone', qty: '1 box' }, { no: 29, name: '7cm Green sparklers', qty: '1 box' },
        { no: 15, name: 'Gee Boomba', qty: '1 box' }, { no: 30, name: '7cm Red sparklers', qty: '1 box' }
      ]
    },
    {
      id: 'king',
      name: 'King Gift Box',
      totalItems: 35,
      mrp: 2200,
      discount: 50,
      discountedPrice: 1100,
      keyFeatures: 'The Classic: A robust selection of essential crackers, shells, and sparklers for a complete celebration.',
      color: '#800080',
      items: [
        { no: 1, name: 'Lakshmi 4"', qty: '1 pkt' }, { no: 19, name: '10 Gaint Crackers', qty: '1 pkt' },
        { no: 2, name: 'Laxmi 3 1/2"', qty: '1 pkt' }, { no: 20, name: 'Snake Cartoon', qty: '1 pc' },
        { no: 3, name: 'Kuruvui 3 3/4"', qty: '1 pkt' }, { no: 21, name: 'Stone', qty: '1 box' },
        { no: 4, name: 'Parrot 3 1/2"', qty: '1 pkt' }, { no: 22, name: 'Gee Boomba', qty: '1 box' },
        { no: 5, name: 'Kuruvui 2 3/4"', qty: '1 pkt' }, { no: 23, name: '7 Shot', qty: '1 pc' },
        { no: 6, name: 'Parrot 2 3/4"', qty: '1 pkt' }, { no: 24, name: 'Sky Shot', qty: '1 pc' },
        { no: 7, name: 'Chota Beem', qty: '1 pkt' }, { no: 25, name: 'Fancy Wheel', qty: '1 pc' },
        { no: 8, name: '10 Chorsa Crackers', qty: '1 pkt' }, { no: 26, name: 'Ashraffi Big', qty: '1 pc' },
        { no: 9, name: '28 Chorsa Crackers', qty: '1 pkt' }, { no: 27, name: 'Ashraffi Small', qty: '1 pc' },
        { no: 10, name: '28 Goa Crackers', qty: '1 pkt' }, { no: 28, name: 'Serpent', qty: '1 box' },
        { no: 11, name: '28 Gaint Crackers', qty: '1 pkt' }, { no: 29, name: 'Rocket (5 pcs)', qty: '1 box' },
        { no: 12, name: '100 Wala Lar', qty: '1 pkt' }, { no: 30, name: 'Red Bijili (50 pcs)', qty: '1 pkt' },
        { no: 13, name: 'Bullet Bomb (5 pcs)', qty: '1 box' }, { no: 31, name: '7cm Electric sparklers', qty: '1 box' },
        { no: 14, name: 'Flowerpot Big (5 pcs)', qty: '1 box' }, { no: 32, name: '7cm Color sparklers', qty: '1 box' },
        { no: 15, name: 'Zamin Chakar Big (5 pcs)', qty: '1 box' }, { no: 33, name: '7cm Green sparklers', qty: '1 box' },
        { no: 16, name: 'Twinkling Star (5 pcs)', qty: '1 box' }, { no: 34, name: '7cm Red sparklers', qty: '1 box' },
        { no: 17, name: 'Cartoon Pops', qty: '1 Pc' }, { no: 35, name: '10cm Electric sparklers', qty: '1 box' },
        { no: 18, name: 'Color Pops', qty: '1 pc' }
      ]
    },
    {
      id: 'fancy',
      name: 'Fancy Gift Box',
      totalItems: 40,
      mrp: 2800,
      discount: 50,
      discountedPrice: 1400,
      keyFeatures: 'The Elegance: A sophisticated collection featuring premium items like Serpent Big, Photo Flash, and an extensive variety of sparklers for a refined celebration.',
      color: '#4B0082',
      items: [
        { no: 1, name: 'Lakshmi 4"', qty: '1 pkt' }, { no: 21, name: '7 Shot', qty: '1 pc' },
        { no: 2, name: 'Laxmi 3 1/2"', qty: '1 pkt' }, { no: 22, name: 'Ashraffi Small', qty: '1 pc' },
        { no: 3, name: 'Parrot 3 1/2"', qty: '1 pkt' }, { no: 23, name: 'Ashraffi Big', qty: '1 pc' },
        { no: 4, name: 'Kuruvui 2 3/4"', qty: '1 pkt' }, { no: 24, name: 'Fancy Wheel', qty: '1 pc' },
        { no: 5, name: 'Parrot 2 3/4"', qty: '1 pkt' }, { no: 25, name: 'Butterfly', qty: '1 pc' },
        { no: 6, name: 'Laxmi 2 3/4"', qty: '1 pkt' }, { no: 26, name: 'Gee Boomba', qty: '1 box' },
        { no: 7, name: '10 Chorsa Crackers', qty: '1 pkt' }, { no: 27, name: 'Stone', qty: '1 box' },
        { no: 8, name: '28 Chorsa Crackers', qty: '1 pkt' }, { no: 28, name: 'Serpent Big', qty: '1 box' },
        { no: 9, name: '28 Goa Crackers', qty: '1 pkt' }, { no: 29, name: 'Serpent Small', qty: '1 box' },
        { no: 10, name: '28 Gaint Crackers', qty: '1 pkt' }, { no: 30, name: 'Photo Flash', qty: '1 pc' },
        { no: 11, name: '10 Gaint Crackers', qty: '1 pkt' }, { no: 31, name: 'Military Bomb', qty: '1 pc' },
        { no: 12, name: '100 Wala Lar', qty: '1 pkt' }, { no: 32, name: 'Rocket (5 pcs)', qty: '1 box' },
        { no: 13, name: 'Bullet Bomb (5 Pcs)', qty: '1 box' }, { no: 14, name: 'Flowerpot Big (5 Pcs)', qty: '1 box' },
        { no: 15, name: 'Zamin Chakar Big (5 Pcs)', qty: '1 box' }, { no: 34, name: 'Color Pops', qty: '1 pc' },
        { no: 16, name: 'Twinkling Star 1 1/2 (5 Pcs)', qty: '1 box' }, { no: 35, name: '7cm Electric sparklers', qty: '1 box' },
        { no: 17, name: 'Shower', qty: '1 pkt' }, { no: 36, name: '7cm Color sparklers', qty: '1 box' },
        { no: 18, name: 'Cartoon (5 Pcs)', qty: '1 box' }, { no: 37, name: '7cm Green sparklers', qty: '1 box' },
        { no: 19, name: 'Snake Cartoon', qty: '1 pc' }, { no: 38, name: '7cm Red sparklers', qty: '1 box' },
        { no: 20, name: 'Sky Shot', qty: '1 pc' }, { no: 39, name: '10cm Electric sparklers', qty: '1 box' },
        { no: 33, name: 'Red Bijili (50 Pcs)', qty: '1 pkt' }, { no: 40, name: '10cm Color sparklers', qty: '1 box' }
      ]
    },
    {
      id: 'champion',
      name: 'Champion Gift Box',
      totalItems: 45,
      mrp: 3400,
      discount: 50,
      discountedPrice: 1700,
      keyFeatures: 'The Powerhouse: Perfect balance of sound, color, and novelties like Ganga Yamuna and Selfy Stick.',
      color: '#006400',
      items: [
        { no: 1, name: "Laxmi 4'", qty: '1 Pkt' }, { no: 23, name: '7 Cm Cold Sparklers', qty: '1 Box' },
        { no: 2, name: "Laxmi 3.5'", qty: '1 Pkt' }, { no: 24, name: '10 Chorsa Crackers', qty: '1 pkt' },
        { no: 3, name: "Parrot 3.5'", qty: '1 Pkt' }, { no: 25, name: '10 Gaint Crackers', qty: '1 pkt' },
        { no: 4, name: "Jocker 3.5'", qty: '1 Pkt' }, { no: 26, name: '100 Wala Lar', qty: '1 pkt' },
        { no: 5, name: "Laxmi 2.75'", qty: '1 Pkt' }, { no: 27, name: 'Gee Boomba', qty: '1 Box' },
        { no: 6, name: "Kuruvui 2.75'", qty: '1 Pkt' }, { no: 28, name: 'Twinkling Star (5 pcs)', qty: '1 Box' },
        { no: 7, name: "Jocker 2.75'", qty: '1 Pkt' }, { no: 29, name: 'Snake Cartoon', qty: '1 pc' },
        { no: 8, name: "Parrot 2.75'", qty: '1 Pkt' }, { no: 30, name: 'Ashraffi Small', qty: '1 Pcs' },
        { no: 9, name: '28 Giant Crackers', qty: '1 Pkt' }, { no: 31, name: 'Ashraffi Big', qty: '1 Pcs' },
        { no: 10, name: '28 Chorsa Crackers', qty: '1 Pkt' }, { no: 32, name: 'Electric Stone', qty: '1 Box' },
        { no: 11, name: '28 Goa Crackers', qty: '1 Pkt' }, { no: 33, name: 'Fancy Wheel', qty: '1 Pcs' },
        { no: 12, name: 'Bullet Bomb (5 pcs)', qty: '1 Box' }, { no: 34, name: 'Military Bomb', qty: '1 Pcs' },
        { no: 13, name: 'Flower Pot Big (5 pcs)', qty: '1 Box' }, { no: 35, name: 'Sky Shot', qty: '1 Pcs' },
        { no: 14, name: 'Zamin Chakra (big) (5 pcs)', qty: '1 Box' }, { no: 36, name: '7 Shot', qty: '1 Pcs' },
        { no: 15, name: 'Ganga Yamuna', qty: '1 Pcs' }, { no: 37, name: 'Colour Pops', qty: '1 Pcs' },
        { no: 16, name: 'Rocket (5 Pcs)', qty: '1 Box' }, { no: 38, name: 'Shower', qty: '1 Pkt' },
        { no: 17, name: '7 Cm Electric Sparklers', qty: '1 Box' }, { no: 39, name: 'Butterfly', qty: '1 Pcs' },
        { no: 18, name: '7 Cm Colour Sparklers', qty: '1 Box' }, { no: 40, name: 'Serpent', qty: '1 Box' },
        { no: 19, name: '7 Cm Red Sparklers', qty: '1 Box' }, { no: 41, name: '555 Bomb', qty: '1 Pcs' },
        { no: 20, name: '7 Cm Green Sparklers', qty: '1 Box' }, { no: 42, name: 'Photo Flash', qty: '1 Pcs' },
        { no: 21, name: '10 Cm Colour Sparklers', qty: '1 Box' }, { no: 43, name: 'Cartoon (5 pcs)', qty: '1 box' },
        { no: 22, name: '10 Cm Electric Sparklers', qty: '1 Box' }, { no: 44, name: 'Bijili Red (50 Pcs)', qty: '1 Pkt' },
        { no: 45, name: 'Selfy Stick', qty: '1 Pcs' }
      ]
    },
    {
      id: 'golden',
      name: 'Golden Gift Box',
      totalItems: 50,
      mrp: 3800,
      discount: 50,
      discountedPrice: 1900,
      keyFeatures: 'The Zenith: Our premium collection featuring the exclusive Angry Bird 3½", Penta Ariel Out, Kit Kat, and the full spectrum of sparklers.',
      color: '#DAA520',
      items: [
        { no: 1, name: 'Lakshmi 4"', qty: '1 pkt' }, { no: 26, name: 'Snake Cartoon', qty: '1 pc' },
        { no: 2, name: 'Lakshmi 3½"', qty: '1 pkt' }, { no: 27, name: 'Military Bomb', qty: '1 pc' },
        { no: 3, name: 'Angry Bird 3½"', qty: '1 pkt' }, { no: 28, name: 'Serpent Big', qty: '1 box' },
        { no: 4, name: 'Parrot 3½"', qty: '1 pkt' }, { no: 29, name: 'Sky Shot', qty: '1 pc' },
        { no: 5, name: 'Kuruvi 3½"', qty: '1 pkt' }, { no: 30, name: 'Fancy Wheel', qty: '1 pc' },
        { no: 6, name: 'Chotta Been 2¾"', qty: '1 pkt' }, { no: 31, name: 'Stone', qty: '1 pc' },
        { no: 7, name: 'Laxmi 2¾"', qty: '1 pkt' }, { no: 32, name: 'Ashraffi Small', qty: '1 pc' },
        { no: 8, name: 'Parrot 2¾"', qty: '1 pkt' }, { no: 33, name: 'Ashraffi Big', qty: '1 pc' },
        { no: 9, name: '7 Shots', qty: '1 pkt' }, { no: 34, name: 'Butterfly', qty: '1 pc' },
        { no: 10, name: 'Gaint Crackers', qty: '1 pkt' }, { no: 35, name: 'Penta Ariel Out', qty: '1 pc' },
        { no: 11, name: '10 Chorsa Crackers', qty: '1 pkt' }, { no: 36, name: 'Kit Kat', qty: '1 box' },
        { no: 12, name: '28 Chorsa Crackers', qty: '1 pkt' }, { no: 37, name: 'Helicopter', qty: '1 pc' },
        { no: 13, name: '28 Goa Crackers', qty: '1 pkt' }, { no: 38, name: 'Photo Flash', qty: '1 pc' },
        { no: 14, name: '28 Gaint Crackers', qty: '1 pkt' }, { no: 39, name: 'Selfie Stick', qty: '1 pc' },
        { no: 15, name: '100 Wala Lar', qty: '1 pkt' }, { no: 40, name: 'Pambaram', qty: '1 pc' },
        { no: 16, name: 'Shower', qty: '1 pc' }, { no: 41, name: 'Lunik Express', qty: '1 pc' },
        { no: 17, name: 'Bullet Bomb', qty: '1 box' }, { no: 42, name: 'Rocket (5 pcs)', qty: '1 pkt' },
        { no: 18, name: 'Flowerpot Big', qty: '1 box' }, { no: 43, name: 'Red Bijili (50 pcs)', qty: '1 pkt' },
        { no: 19, name: 'Zamin Chakar Big', qty: '1 box' }, { no: 44, name: '7cm Electric Sparklers', qty: '1 box' },
        { no: 20, name: 'Twinkling Star', qty: '1 box' }, { no: 45, name: '7cm Color Sparklers', qty: '1 box' },
        { no: 21, name: 'Ganga Jamuna', qty: '1 pc' }, { no: 46, name: '7cm Green Sparklers', qty: '1 box' },
        { no: 22, name: 'Serpent Small', qty: '1 pc' }, { no: 47, name: '7cm Red Sparklers', qty: '1 box' },
        { no: 23, name: '555 Bomb', qty: '1 pc' }, { no: 48, name: '7cm Cold Sparklers', qty: '1 box' },
        { no: 24, name: 'Color Pops', qty: '1 pc' }, { no: 49, name: '10cm Electric Sparklers', qty: '1 box' },
        { no: 25, name: 'Gee Boomba', qty: '1 box' }, { no: 50, name: '10cm Color Sparklers', qty: '1 box' }
      ]
    },
    {
      id: 'golden-moments',
      name: 'Golden Moments Gift Box',
      totalItems: 60,
      mrp: 4500,
      discount: 50,
      discountedPrice: 2250,
      keyFeatures: '🌟 THE ULTIMATE COLLECTION: Our most comprehensive 60-item premium gift box featuring exclusive pieces like Angry Bird, Penta Ariel Out, Kit Kat, and the complete range of sparklers for the grandest celebrations! 🌟',
      color: '#FFD700',
      items: [
        { no: 1, name: 'Lakshmi 4"', qty: '1 pkt' }, { no: 31, name: 'Color Pops', qty: '1 pc' },
        { no: 2, name: 'Parrot 4"', qty: '1 pkt' }, { no: 32, name: 'Jee Boomba', qty: '1 box' },
        { no: 3, name: 'Laxmi 3 1/2"', qty: '1 pkt' }, { no: 33, name: '7 Shots', qty: '1 pc' },
        { no: 4, name: 'Parrot 3 1/2"', qty: '1 pkt' }, { no: 34, name: 'Penta Ariel out', qty: '1 pc' },
        { no: 5, name: 'Angry Bird 3 1/2"', qty: '1 pkt' }, { no: 35, name: 'Sky Shot', qty: '1 pc' },
        { no: 6, name: 'Kuruvi 2 3/4"', qty: '1 pkt' }, { no: 36, name: 'Military bomb', qty: '1 pc' },
        { no: 7, name: 'Parrot 2 3/4"', qty: '1 pkt' }, { no: 37, name: 'Serpent Big', qty: '1 box' },
        { no: 8, name: 'Laxmi 2 3/4"', qty: '1 pkt' }, { no: 38, name: 'Serpent Small', qty: '1 box' },
        { no: 9, name: 'Chotta Beem', qty: '1 pkt' }, { no: 39, name: 'Fancy Wheel', qty: '1 pc' },
        { no: 10, name: '555 Bomb', qty: '1 pc' }, { no: 40, name: 'Stone', qty: '1 box' },
        { no: 11, name: '10 Chorsa Crackers', qty: '1 pkt' }, { no: 41, name: 'Ashrafi big', qty: '1 pc' },
        { no: 12, name: '28 Chorsa Crackers', qty: '1 pkt' }, { no: 42, name: 'Ashrafi small', qty: '1 pc' },
        { no: 13, name: '28 Goa Crackers', qty: '1 pkt' }, { no: 43, name: 'Butterfly', qty: '1 pc' },
        { no: 14, name: '28 Giant Crackers', qty: '1 pkt' }, { no: 44, name: 'Photo Flash', qty: '1 pc' },
        { no: 15, name: '10 Giant Crackers', qty: '1 pkt' }, { no: 45, name: 'Kinderjoy', qty: '1 pc' },
        { no: 16, name: '100 Wala Lar', qty: '1 pkt' }, { no: 46, name: '10 Chorsa Crackers', qty: '1 pkt' },
        { no: 17, name: 'Helicopter', qty: '1 pc' }, { no: 47, name: '7cm sparklers', qty: '1 box' },
        { no: 18, name: 'Atom Bomb', qty: '1 box' }, { no: 48, name: 'Bijili Striped (50)', qty: '1 pkt' },
        { no: 19, name: 'Twinkling Star 1 1/2"', qty: '1 box' }, { no: 49, name: 'Hyd. Bomb (2 pc)', qty: '1 pkt' },
        { no: 20, name: 'Twinkling Star 4"', qty: '1 pkt' }, { no: 50, name: 'Magic Pop', qty: '1 box' },
        { no: 21, name: 'Flower Pot Big', qty: '1 box' }, { no: 51, name: 'Rocket (5 pcs)', qty: '1 box' },
        { no: 22, name: 'Lunik Express', qty: '1 pc' }, { no: 52, name: 'Bijili Red (50 pcs)', qty: '1 pkt' },
        { no: 23, name: 'Zamin Chakkar Big', qty: '1 box' }, { no: 53, name: '7cm Electric sparklers', qty: '1 box' },
        { no: 24, name: 'Selfie Stick', qty: '1 pc' }, { no: 54, name: '7cm Color sparklers', qty: '1 box' },
        { no: 25, name: 'Ganga Jamuna', qty: '1 pc' }, { no: 55, name: '7cm Green sparklers', qty: '1 box' },
        { no: 26, name: 'Shower Green', qty: '1 pc' }, { no: 56, name: '7cm Red sparklers', qty: '1 box' },
        { no: 27, name: 'Shower', qty: '1 pc' }, { no: 57, name: '10cm Electric sparklers', qty: '1 box' },
        { no: 28, name: 'Snake Cartoon', qty: '1 pc' }, { no: 58, name: '10cm Color sparklers', qty: '1 box' },
        { no: 29, name: 'Cartoon', qty: '1 box' }, { no: 59, name: '10cm Green sparklers', qty: '1 box' },
        { no: 30, name: 'Kit Kat', qty: '1 box' }, { no: 60, name: '10cm Red sparklers', qty: '1 box' }
      ]
    }
  ];

  const renderTableRows = (data: Array<{ no: number; name: string; qty: string }>) => {
    // Sort items by S.No to ensure proper ordering
    const sortedData = [...data].sort((a, b) => {
      const noA = a.no === null || a.no === undefined ? Infinity : a.no;
      const noB = b.no === null || b.no === undefined ? Infinity : b.no;
      return noA - noB;
    });
    
    return sortedData.map((item, index) => (
      <tr key={index} className="item-row hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-200">
        <td className="p-4 font-bold text-lg sno-cell">{item.no || ''}</td>
        <td className="p-4 text-gray-800 font-medium">{item.name || ''}</td>
        <td className="p-4 qty-cell">{item.qty || ''}</td>
      </tr>
    ));
  };

  return (
    <section id="fullInventory" className="mt-12">
      <div className="text-center mb-8">
        <div className="inline-block mb-6 relative">
          <h2 className="text-5xl font-cinzel font-bold mb-4 text-gray-900 title-glow">
            Gift Box Contents
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 mx-auto rounded-full"></div>
          {/* CSS sparkles around title */}
          <div className="sparkle" style={{ top: '-15px', left: '-25px', animationDelay: '0s' }}></div>
          <div className="sparkle" style={{ top: '-15px', right: '-25px', animationDelay: '1.5s' }}></div>
        </div>
        <p className="text-2xl text-gray-700 max-w-5xl mx-auto font-playfair leading-relaxed">
          A comprehensive, itemized list of contents for each of our premium gift boxes, organized in a split-column format for easy reference and professional presentation.
        </p>
      </div>
      
      <div id="inventoryContainer" className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-200">
        {giftBoxData.map((box, boxIndex) => {
          const mrpText = `MRP: ₹ ${box.mrp.toLocaleString('en-IN')}`;
          const discountedPriceText = `₹ ${box.discountedPrice.toLocaleString('en-IN')}`;
          const savingsText = `₹ ${(box.mrp - box.discountedPrice).toLocaleString('en-IN')}`;
          const items = box.items;
          const half = Math.ceil(items.length / 2);
          const col1 = items.slice(0, half);
          const col2 = items.slice(half);

          // Define color schemes for table headers
          const headerColors = [
            'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            'linear-gradient(135deg, #059669 0%, #10B981 100%)',
            'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
            'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
            'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
            'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)'
          ];

          return (
            <div 
              key={box.id}
              id={`${box.id}-table`}
              className="p-8 print:p-0 border-b-8 print:border-b-0 mb-8" 
              style={{ borderBottomColor: box.color }}
            >
              {/* Enhanced Header Section */}
              <div 
                className="p-4 print:p-2 rounded-t-2xl mb-4 border-b-2 print:border-b-1 relative overflow-hidden" 
                style={{ 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
                  borderBottomColor: box.color 
                }}
              >
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
                    <div>
                      <h3 className="text-4xl font-cinzel font-bold text-gray-900 mb-2 flex items-center">
                        <span className="mr-3 text-3xl">🎆</span>
                        {box.name}
                      </h3>
                      <div 
                        className="w-20 h-1 rounded-full mb-4" 
                        style={{ background: `linear-gradient(90deg, ${box.color} 0%, #FFD700 100%)` }}
                      ></div>
                    </div>
                    <div className="text-right">
                      {/* Professional Pricing Display */}
                      <div className="mb-3">
                        <div className="flex items-center justify-end gap-3 mb-2">
                          <div className="text-lg text-gray-500 line-through font-medium">
                            {mrpText}
                          </div>
                          <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                            {box.discount}% OFF
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                          <div 
                            className="text-2xl font-bold" 
                            style={{ color: box.color }}
                          >
                            {discountedPriceText}
                          </div>
                          <div className="text-sm text-green-600 font-semibold">
                            Save {savingsText}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-base text-gray-600 font-semibold">{box.totalItems} Items</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 font-playfair italic leading-relaxed">{box.keyFeatures}</p>
                </div>
              </div>

              {/* Enhanced Table Layout - Fixed Side by Side */}
              <div className="table-container" style={{ display: 'flex', flexDirection: 'row', gap: '15px', padding: '10px' }}>
                {/* Column 1 */}
                <div className="table-column" style={{ flex: 1, width: '50%' }}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full text-left font-inter inventory-table">
                      <thead>
                        <tr style={{ background: headerColors[boxIndex % headerColors.length] }}>
                          <th className="p-4 font-bold text-white text-lg uppercase tracking-wider">S. No.</th>
                          <th className="p-4 font-bold text-white text-lg uppercase tracking-wider">Item Name</th>
                          <th className="p-4 font-bold text-white text-lg uppercase tracking-wider text-right">Qty.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {renderTableRows(col1)}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Column 2 (only display if content exists) */}
                {col2.length > 0 && (
                  <div className="table-column" style={{ flex: 1, width: '50%' }}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <table className="w-full text-left font-inter inventory-table">
                        <thead>
                          <tr style={{ background: headerColors[boxIndex % headerColors.length] }}>
                            <th className="p-4 font-bold text-white text-lg uppercase tracking-wider">S. No.</th>
                            <th className="p-4 font-bold text-white text-lg uppercase tracking-wider">Item Name</th>
                            <th className="p-4 font-bold text-white text-lg uppercase tracking-wider text-right">Qty.</th>
                          </tr>
                        </thead>
                        <tbody>
                          {renderTableRows(col2)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Decorative Bottom Border */}
              <div className="h-2 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full mt-6"></div>
              <div className="print:mb-12"></div> {/* Spacer for print layout */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Inventory;
