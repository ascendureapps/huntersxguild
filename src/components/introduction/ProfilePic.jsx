import { useState } from 'react';
import profileImageFront from '../../wwwroot/images/WathantaAung_1.png';
import profileImageBack from '../../wwwroot/images/WathantaAung.png';

const ProfilePic = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  const currentImage = flipped ? profileImageBack : profileImageFront;

  return (
    <div className="profile-pic-wrapper">
      <img
        src={currentImage}
        alt="Wathanta Aung"
        className={`profile-pic ${flipped ? 'profile-pic-flipped' : ''}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default ProfilePic;

