/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Rating = ({value}) => {
  const stars = Array(value).fill(0);
  return (
    <>
      {
        stars.map((star, index) => (
          <img
               key={index}
               src="/assets/star.svg"
               width='14'
               height='14'
               alt='star' />
        ))
      }
    </>
  )
}

export default Rating