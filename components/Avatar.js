//next image
import Image from 'next/image';

const Avatar = () => {
  return (
  <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src={'/efti.png'}
    width={737}
    height={678}
    alt='profile image'
    className='translate-z-0 w-full h-full'
    />
  </div>
  );
};

export default Avatar;
