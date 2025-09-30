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

const GiftBoxes: React.FC = () => {
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

  // Sort all items within each box by S. No.
  giftBoxData.forEach(box => {
    box.items.sort((a, b) => {
      const noA = a.no === null || a.no === undefined ? Infinity : a.no;
      const noB = b.no === null || b.no === undefined ? Infinity : b.no;
      return noA - noB;
    });
  });

  const scrollToInventory = (boxId: string) => {
    const element = document.getElementById(`${boxId}-table`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="mb-12 gift-box-section">
      <div className="text-center mb-8">
        <div className="inline-block mb-6 relative">
          <h2 className="text-5xl font-cinzel font-bold mb-4 text-accent-red title-glow">
            Experience the Grandeur
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 mx-auto rounded-full"></div>
          {/* CSS sparkles around title */}
          <div className="sparkle" style={{ top: '-10px', left: '-20px', animationDelay: '0s' }}></div>
          <div className="sparkle" style={{ top: '-10px', right: '-20px', animationDelay: '1s' }}></div>
        </div>
        <p className="text-2xl text-gray-700 max-w-5xl mx-auto font-playfair leading-relaxed">
          Each Tara Pataka gift box is a perfectly curated experience, balancing quality, variety, and spectacular effects for a truly memorable celebration.
        </p>
      </div>
      
      <div id="giftBoxGrid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {giftBoxData.map((box, index) => {
          const mrpText = `₹ ${box.mrp.toLocaleString('en-IN')}`;
          const discountedPriceText = `₹ ${box.discountedPrice.toLocaleString('en-IN')}`;
          const savingsText = `₹ ${(box.mrp - box.discountedPrice).toLocaleString('en-IN')}`;
          
          // Define vibrant color schemes for each card
          const colorSchemes = [
            { primary: '#FFD700', secondary: '#FFA500', accent: '#FF6B35', bg: 'linear-gradient(135deg, #FFF8DC 0%, #F4E4BC 100%)' },
            { primary: '#059669', secondary: '#10B981', accent: '#34D399', bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)' },
            { primary: '#7C3AED', secondary: '#8B5CF6', accent: '#A78BFA', bg: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)' },
            { primary: '#DC2626', secondary: '#EF4444', accent: '#F87171', bg: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)' },
            { primary: '#1E40AF', secondary: '#3B82F6', accent: '#60A5FA', bg: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)' },
            { primary: '#EC4899', secondary: '#F472B6', accent: '#F9A8D4', bg: 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)' },
            { primary: '#FFD700', secondary: '#FFA500', accent: '#FF6B35', bg: 'linear-gradient(135deg, #FFF8DC 0%, #F4E4BC 100%)', special: true }
          ];
          
          const scheme = colorSchemes[index % colorSchemes.length];
          
          return (
            <div
              key={box.id}
              className={`premium-card relative overflow-hidden ${scheme.special ? 'ring-4 ring-yellow-400 ring-opacity-75 shadow-2xl transform scale-105' : ''}`}
              style={{
                '--card-color': scheme.primary,
                '--card-color-light': scheme.secondary,
                background: scheme.bg
              } as React.CSSProperties}
            >
              <div className="relative overflow-hidden">
                {/* Decorative Top Border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2" 
                  style={{ background: `linear-gradient(90deg, ${scheme.primary} 0%, ${scheme.secondary} 50%, ${scheme.accent} 100%)` }}
                ></div>
                
                {/* Card Content */}
                <div className="p-5">
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-cinzel text-2xl font-bold text-gray-900">{box.name}</h3>
                    <div className="flex items-center gap-2">
                      {scheme.special && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                          ⭐ PREMIUM ⭐
                        </div>
                      )}
                      <div className="text-2xl">🎆</div>
                    </div>
                  </div>
                  
                  {/* Professional Price Display */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-lg text-gray-500 line-through font-medium">
                        {mrpText}
                      </div>
                      <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {box.discount}% OFF
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div 
                        className={`text-3xl font-bold ${scheme.special ? 'text-red-600' : ''}`}
                        style={{ color: scheme.special ? '#DC2626' : scheme.primary }}
                      >
                        {discountedPriceText}
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        Save {savingsText}
                      </div>
                    </div>
                  </div>
                  
                  {/* Items Count and Features */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base text-gray-600 font-medium">📦 {box.totalItems} Items</span>
                      <span className="text-sm text-gray-500">Premium Quality</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{box.keyFeatures}</p>
                  </div>
                  
                  {/* Professional Button */}
                  <button 
                    onClick={() => scrollToInventory(box.id)}
                    className="w-full py-3 px-6 text-base font-bold rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg print:hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${scheme.primary} 0%, ${scheme.secondary} 100%)`, 
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)' 
                    }}
                  >
                    View Details ↓
                  </button>
                </div>
                
                {/* Decorative Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GiftBoxes;
