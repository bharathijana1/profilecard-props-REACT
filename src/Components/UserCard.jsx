import React from 'react';
import User from './User';
import UserData from './UserData';

export default function UserCard() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 mx-auto">
      {UserData.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md w-full  md:w-1/2 lg:w-1/4 flex justify-center items-center"
        >
          <User
            uname={item.uname}
            place={item.place}
            uimg={item.uimg}
            alt={item.imgalt}
            destination={item.destination}
            online={item.online}
            skills={item.skills}
          />
        </div>
      ))}
    </div>
  );
}
