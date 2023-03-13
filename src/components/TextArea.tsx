import React from 'react';

const TextArea: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="mx-4 mt-8 w-4/6 text-center">
          <p className="text-gray-800 leading-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id purus id mauris
            congue volutpat. Aliquam porttitor erat sit amet turpis eleifend, sit amet faucibus
            magna auctor. Integer vel metus vel sem bibendum sodales eu ac turpis. Sed blandit ipsum
            in augue dignissim, non gravida sapien feugiat. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Aliquam sit amet tortor eu tellus laoreet
            pulvinar. Donec sed placerat nisi, sed hendrerit felis. Aenean iaculis neque enim, at
            auctor odio hendrerit eget. Sed tristique sollicitudin euismod. In hac habitasse platea
            dictumst. Suspendisse potenti.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default TextArea;
