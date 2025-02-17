import {useState} from 'react'
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText.tsx";
import DecryptedText from '@/blocks/TextAnimations/DecryptedText/DecryptedText.tsx';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SplitText
        text="Hello, Peeps!"
        className="text-5xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing={"easeOutCubic"}
        threshold={0.2}
        rootMargin="-50px"
      />
      <DecryptedText
        text="Welcome to Web Builder"
        className="text-2xl font-semibold text-center"
        delay={150}
        animateOn="view"
        revealDirection="center"
      />
    </div>
  )
}

export default Home