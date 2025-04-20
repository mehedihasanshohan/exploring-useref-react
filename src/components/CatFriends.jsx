// import { useRef } from 'react';

// export default function CatFriends() {
//   const firstCatRef = useRef(null);
//   const secondCatRef = useRef(null);
//   const thirdCatRef = useRef(null);

//   function handleScrollToFirstCat() {
//     firstCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function handleScrollToSecondCat() {
//     secondCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function handleScrollToThirdCat() {
//     thirdCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   return (
//     <>
//       <nav className='flex gap-6 justify-center mt-4 ml-2 mb-2 '>
//         <button
//               className='bg-violet-600 text-white p-1 rounded-sm'
//               onClick={handleScrollToFirstCat}>
//           Neo
//         </button>
//         <button
//               className='bg-pink-600 text-white p-1 rounded-sm'
//               onClick={handleScrollToSecondCat}>
//           Millie
//         </button>
//         <button
//               className='bg-amber-600 text-white p-1 rounded-sm'
//               onClick={handleScrollToThirdCat}>
//           Bella
//         </button>
//       </nav>
//       <div>
//         <ul className='flex flex-row justify-between'>
//           <li className='w-full'>
//             <img
//               src="https://placecats.com/neo/300/200"
//               alt="Neo"
//               ref={firstCatRef}
//             />
//           </li>
//           <li className='w-full'>
//             <img
//               src="https://placecats.com/millie/200/200"
//               alt="Millie"
//               ref={secondCatRef}
//             />
//           </li>
//           <li className='w-full'>
//             <img
//               src="https://placecats.com/bella/199/200"
//               alt="Bella"
//               ref={thirdCatRef}
//             />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }


import { useRef } from 'react';

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  return (
    <>
      <nav className='flex gap-6 justify-center mt-4'>
        <button
          className='bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700'
          onClick={handleScrollToFirstCat}>
          Neo
        </button>
        <button
          className='bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700'
          onClick={handleScrollToSecondCat}>
          Millie
        </button>
        <button
          className='bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700'
          onClick={handleScrollToThirdCat}>
          Bella
        </button>
      </nav>

      {/* Fullscreen image list */}
      <div className="h-screen snap-y snap-mandatory">
        <ul className='h-full'>
          <li className='h-screen flex items-center justify-center snap-center'>
            <img
              src="https://placecats.com/neo/1200/800"
              alt="Neo"
              ref={firstCatRef}
              className='max-h-full w-auto rounded-xl shadow-lg'
            />
          </li>
          <li className='h-screen flex items-center justify-center snap-center'>
            <img
              src="https://placecats.com/millie/1200/800"
              alt="Millie"
              ref={secondCatRef}
              className='max-h-full w-auto rounded-xl shadow-lg'
            />
          </li>
          <li className='h-screen flex items-center justify-center snap-center'>
            <img
              src="https://placecats.com/bella/1200/800"
              alt="Bella"
              ref={thirdCatRef}
              className='max-h-full w-auto rounded-xl shadow-lg'
            />
          </li>
        </ul>
      </div>
    </>
  );
}
