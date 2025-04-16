import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import img1 from "./assets/img1.jpeg"
import img2 from "./assets/img2.jpeg"
import img3 from "./assets/img3.jpeg"
const MixedImageAnimation = ({className}) => {
    const containerRef = useRef(null);
    const cubeRef = useRef(null);
    const imageRefs = useRef([]);

    // Add images to the ref array
    const addToRefs = (el) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Store our timeline so we can kill it when component unmounts
        let mainTimeline;

        const setupAnimation = () => {
            // Make sure the refs are populated
            if (imageRefs.current.length === 3 && containerRef.current && cubeRef.current) {
                // Kill any existing animation
                if (mainTimeline) {
                    mainTimeline.kill();
                }

                // Reset initial states
                gsap.set(imageRefs.current[0], { opacity: 1, scale: 1 });
                gsap.set(imageRefs.current[1], { opacity: 0, scale: 0.7 });
                gsap.set(imageRefs.current[2], { opacity: 0, scale: 0.7 });
                gsap.set(cubeRef.current, { rotationY: 0 });

                // Create main timeline that will repeat indefinitely
                mainTimeline = gsap.timeline({
                    repeat: -1, // Infinite repetition
                    repeatDelay: 0.5,
                });

                // First animation: Zoom transition from image 1 to image 2
                mainTimeline.to(imageRefs.current[0], {
                    scale: 1.5,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.inOut"
                });

                mainTimeline.fromTo(imageRefs.current[1],
                    { scale: 0.7, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
                    "-=0.8"
                );

                // Small pause between animations
                mainTimeline.to({}, { duration: 1 });

                // Cube rotation to image 3
                mainTimeline.to(cubeRef.current, {
                    rotationY: 180,
                    duration: 1.5,
                    ease: "power3.inOut",
                    onStart: () => {
                        // Prepare for cube rotation by making image 3 visible on back face
                        gsap.set(imageRefs.current[2], { opacity: 1, scale: 1 });
                    },
                    onComplete: () => {
                        // Hide image 2 after cube rotation
                        gsap.set(imageRefs.current[1], { opacity: 0 });
                    }
                });

                // Small pause 
                mainTimeline.to({}, { duration: 1 });

                // Back to image 1 with zoom effect
                mainTimeline.to(cubeRef.current, {
                    rotationY: 360,
                    duration: 1.5,
                    ease: "power3.inOut",
                    onStart: () => {
                        // Prepare image 1 on the next face
                        gsap.set(imageRefs.current[0], { opacity: 1, scale: 0.7 });
                    },
                    onComplete: () => {
                        // Hide image 3 and reset rotation to 0
                        gsap.set(imageRefs.current[2], { opacity: 0 });
                        gsap.set(cubeRef.current, { rotationY: 0, duration: 0 });
                    }
                });

                // Zoom in on image 1
                mainTimeline.to(imageRefs.current[0], {
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        };

        // Set up the animation once components are mounted
        setupAnimation();

        // Cleanup
        return () => {
            if (mainTimeline) {
                mainTimeline.kill();
            }
        };
    }, []);

    return (
        <div className={`animation-wrapper ${className || ' '} `}>
            <div
                ref={containerRef}
                className="animation-container"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
            >
                <div
                    ref={cubeRef}
                    className="cube"
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                    }}
                >
                    {/* First Image */}
                    <div
                        className="image-wrapper"
                        ref={addToRefs}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <img
                            src={img1}
                            alt="Image 1"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Second Image */}
                    <div
                        className="image-wrapper"
                        ref={addToRefs}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            transformStyle: 'preserve-3d',
                            opacity: 0
                        }}
                    >
                        <img
                            src={img2}
                            alt="Image 2"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Third Image */}
                    <div
                        className="image-wrapper"
                        ref={addToRefs}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            transformStyle: 'preserve-3d',
                            opacity: 0
                        }}
                    >
                        <img
                            src={img3}
                            alt="Image 3"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MixedImageAnimation;