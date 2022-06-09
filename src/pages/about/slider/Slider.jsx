import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import MemberGallery from './memberGallery/MemberGallery';
import { Action, Container } from './Slider.style';
import pause from './assets/bx-pause.svg';
import play from './assets/bx-play.svg';
import { useInView } from 'react-intersection-observer';

const Slider = () => {
    const [action, setAction] = useState({
        play: true,
        pauseOnHover: false,
    });

    const [showAction, setShowAction] = useState(false);

    const { ref, inView, entry } = useInView({
        threshold: [
            0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3,
            0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41,
            0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52,
            0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63,
            0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74,
            0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85,
            0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96,
            0.97, 0.98, 0.99,
        ],
    });

    useEffect(() => {
        if (!entry) return;
        const currentY = entry.target.getBoundingClientRect().y;

        if (inView) {
            setShowAction(true);
        } else {
            setShowAction(false);
        }

        // not to show when keep scrolling down
        if (currentY < 0) {
            setShowAction(false);
        }
    }, [entry, inView]);

    const handleAction = () => {
        setAction((prevAction) => ({
            play: !prevAction.play,
            pauseOnHover: !prevAction.pauseOnHover,
        }));
    };

    return (
        <Container ref={ref}>
            <Marquee
                speed='100'
                play={action.play}
                pauseOnHover={action.pauseOnHover}
                gradient={false}
                gradientWidth='0'
            >
                <MemberGallery />
            </Marquee>
            {showAction && (
                <Action
                    icon={action.play ? pause : play}
                    onClick={handleAction}
                />
            )}
        </Container>
    );
};

export default Slider;
