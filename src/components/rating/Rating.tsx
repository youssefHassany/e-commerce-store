"use client";

import { useEffect, useState } from "react";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

const Rating = ({ rating }: { rating: { rate: number; count: number } }) => {
  const [ratings, setRatings] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getRatings = (rate: number) => {
      const fullStar = Math.floor(rate);
      const halfStar = Math.ceil(rate - fullStar);
      let starsArray: JSX.Element[] = [];

      // add full star icon in the capacity of full star
      for (let i = 0; i < fullStar; i++) {
        starsArray.push(<BiSolidStar key={i} />);
      }

      // add half star icon in the capacity of half star
      for (let i = 0; i < halfStar; i++) {
        starsArray.push(<BiSolidStarHalf key={i + fullStar} />);
      }

      setRatings(starsArray);
    };

    getRatings(rating.rate);
  }, [rating.rate]);

  return (
    <div>
      <span>Rating: </span>
      {ratings.map((icon, index) => (
        <span className="inline-block" key={index}>
          {icon}
        </span>
      ))}
      <span> ({rating.count})</span>
    </div>
  );
};

export default Rating;
