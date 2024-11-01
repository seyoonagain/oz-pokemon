import { useState } from 'react';
import styled from 'styled-components';

const FlipImageContainer = styled.div`
  transform-style: preserve-3d;
  width: 300px;
  height: 300px;
  position: relative;
  transition: 0.5s;
  transform: ${({ $flipped }) =>
    $flipped === 'flipped' ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const FrontImage = styled.img`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BackImage = styled.img`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default function FlipCard({ frontImage, backImage }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className='relative'>
      <FlipImageContainer $flipped={flipped ? 'flipped' : 'notFlipped'}>
        <FrontImage src={frontImage} />
        <BackImage src={backImage} />
      </FlipImageContainer>
      <button
        className='font-galmuri7 absolute top-7 right-10 bg-zinc-900 text-zinc-200 px-1'
        onClick={() => setFlipped(!flipped)}
      >
        flip!
      </button>
    </div>
  );
}
