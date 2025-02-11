import { useState } from 'react'
import styles from './Content.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

export default function Content({ onPowerOff }) {
    const [isPowerOn, setIsPowerOn] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseMove = (e) => {
        if (!isPowerOn) return;
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const rotateX = (clientY - centerY) / centerY * 10;
        const rotateY = -(clientX - centerX) / centerX * 10;
        
        const content = document.querySelector('.content-container');
        if (content) {
            content.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            content.style.transition = 'transform 0.1s ease-out';
        }
    };

    const createStar = (e) => {
        if (!isPowerOn) return;
        const star = document.createElement('div');
        star.className = styles.star;
        star.style.left = (e.clientX - 7.5) + 'px';
        star.style.top = (e.clientY - 7.5) + 'px';
        document.body.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 1000);
    };

    const handlePowerClick = () => {
        if (!isPowerOn || isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setIsPowerOn(false);
            onPowerOff();
        }, 1000);
    };

    if (!isPowerOn) {
        return null;
    }

    return (
        <div onClick={createStar} onMouseMove={handleMouseMove} className="w-screen h-screen">
            <div className={`${styles.shapesBackground} ${isAnimating ? styles.flyToCamera : ''}`}>
                <div className={styles.shape1} style={{ animationDelay: '0s' }}></div>
                <div className={styles.shape1} style={{ animationDelay: '-4s' }}></div>
                <div className={styles.shape2} style={{ animationDelay: '-1s' }}></div>
                <div className={styles.shape2} style={{ animationDelay: '-5s' }}></div>
                <div className={styles.shape3} style={{ animationDelay: '-2s' }}></div>
                <div className={styles.shape3} style={{ animationDelay: '-6s' }}></div>
                <div className={styles.shape4} style={{ animationDelay: '-3s' }}></div>
                <div className={styles.shape4} style={{ animationDelay: '-7s' }}></div>
                <div className={styles.shape5} style={{ animationDelay: '-1.5s' }}></div>
                <div className={styles.shape5} style={{ animationDelay: '-5.5s' }}></div>
                <div className={styles.shape6} style={{ animationDelay: '-2.5s' }}></div>
                <div className={styles.shape6} style={{ animationDelay: '-6.5s' }}></div>
            </div>
            <div className={`w-screen h-screen flex flex-col items-center justify-center relative content-container ${isAnimating ? styles.flyToCamera : ''}`}>
                <div className='text-9xl animate-bounce font-mono'>
                    HI I AM HAN
                </div>
                <div className='text-3xl animate-pulse font-mono'>
                    Inspired by Miside
                </div>
                <div className='mt-4 text-violet-500 animate-pulse cursor-pointer' onClick={(e) => {
                    e.stopPropagation();
                    handlePowerClick();
                }}>
                    <FontAwesomeIcon icon={faPowerOff} size="2x" />
                </div>
            </div>
        </div>
    )
}