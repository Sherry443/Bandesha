'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const BeforeAfterSlider = ({
    beforeImage,
    afterImage,
}: {
    beforeImage: string;
    afterImage: string;
}) => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const updateSlider = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const pos = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 0), 100);
        setSliderPos(pos);
    }, []);

    const onMouseDown = () => {
        isDragging.current = true;
    };
    const onMouseUp = () => {
        isDragging.current = false;
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) updateSlider(e.clientX);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        updateSlider(e.touches[0].clientX);
    };

    return (
        <div className="ba-section" data-aos="fade-up">
            <h2 className="heading text-36 ba-heading">Before &amp; After Transformation</h2>
            <p className="text text-18 ba-subtext">Drag the slider to see the transformation we delivered.</p>
            <div
                className="ba-container radius18"
                ref={containerRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
                onTouchStart={onMouseDown}
                onTouchEnd={onMouseUp}
            >
                {/* After image (full, behind) */}
                <div className="ba-after">
                    <Image
                        src={afterImage}
                        fill
                        alt="After"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        draggable={false}
                    />
                    <span className="ba-label ba-label-after">After</span>
                </div>

                {/* Before image (clipped to slider) */}
                <div className="ba-before" style={{ width: `${sliderPos}%` }}>
                    <Image
                        src={beforeImage}
                        fill
                        alt="Before"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        draggable={false}
                    />
                    <span className="ba-label ba-label-before">Before</span>
                </div>

                {/* Drag handle */}
                <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
                    <div className="ba-handle-line" />
                    <div className="ba-handle-circle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 6L22 12L16 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="ba-handle-line" />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
