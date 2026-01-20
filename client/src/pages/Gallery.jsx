import { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Import all images from the Gallery folder (only JPG files work in browsers)
    const images = [
        '/images/Gallery/PXL_20251010_012321171.MP.jpg',
        '/images/Gallery/IMG_4764.JPG',
        '/images/Gallery/PXL_20251024_021800915.MP.jpg',
        '/images/Gallery/IMG_4757.JPG',
        '/images/Gallery/PXL_20251010_011558599.jpg',
        '/images/Gallery/PXL_20251024_022420312.MP.jpg',
        '/images/Gallery/IMG_4762.JPG',
        '/images/Gallery/PXL_20251010_010641995.jpg',
        '/images/Gallery/IMG_4771.JPG',
        '/images/Gallery/PXL_20251024_020245255.jpg',
        '/images/Gallery/IMG_4753.JPG',
        '/images/Gallery/PXL_20251010_013816914.jpg',
        '/images/Gallery/PXL_20251024_022421550.jpg',
        '/images/Gallery/IMG_4768.JPG',
        '/images/Gallery/PXL_20251009_223721899.jpg',
        '/images/Gallery/PXL_20251024_021759318.MP.jpg',
        '/images/Gallery/IMG_4759.JPG',
        '/images/Gallery/editedwin.png',
        '/images/Gallery/PXL_20251010_012437369.jpg',
        '/images/Gallery/IMG_4754.JPG',
        '/images/Gallery/PXL_20251024_020208105.jpg',
        '/images/Gallery/PXL_20251010_011727853.MP.jpg',
        '/images/Gallery/IMG_4761.JPG',
        '/images/Gallery/PXL_20251024_022345138.MP.jpg',
        '/images/Gallery/PXL_20251010_010440092.jpg',
        '/images/Gallery/IMG_4766.JPG',
        '/images/Gallery/PXL_20251024_012055063.jpg',
        '/images/Gallery/PXL_20251010_012525658.jpg',
        '/images/Gallery/IMG_4752.JPG',
        '/images/Gallery/PXL_20251024_020202385.jpg',
        '/images/Gallery/PXL_20251010_013824326.jpg',
        '/images/Gallery/IMG_4770.JPG',
        '/images/Gallery/PXL_20251009_223646729.jpg',
        '/images/Gallery/PXL_20251024_021802691.MP.jpg',
        '/images/Gallery/IMG_4758.JPG',
        '/images/Gallery/PXL_20251010_010435193.jpg',
        '/images/Gallery/PXL_20251024_022426823.jpg',
        '/images/Gallery/IMG_4756.JPG',
        '/images/Gallery/PXL_20251010_011551395.jpg',
        '/images/Gallery/PXL_20251024_020251549.jpg',
        '/images/Gallery/IMG_4751.JPG',
        '/images/Gallery/PXL_20251010_014202167.jpg',
        '/images/Gallery/PXL_20251024_020205147.MP.jpg',
        '/images/Gallery/PXL_20251010_013814793.jpg',
        '/images/Gallery/PXL_20251010_000106916.jpg',
        '/images/Gallery/PXL_20251024_022348019.jpg',
        '/images/Gallery/PXL_20251010_012322982.jpg',
        '/images/Gallery/PXL_20251010_010643092.jpg'
    ];

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <div className="page">
            <div className="page-container">
                <div className="gallery-header">
                    <h1 className="page-title">
                        Our <span className="text-purple">Gallery</span>
                    </h1>
                    <p className="gallery-subtitle">
                        Moments from our poker nights, tournaments, and social events.
                        See what makes UWOPC an amazing community!
                    </p>
                </div>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image}
                                alt={`UWOPC Gallery ${index + 1}`}
                                loading="lazy"
                            />
                            <div className="gallery-overlay">
                                <span className="gallery-icon">🔍</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="lightbox-close" onClick={closeLightbox}>
                                ✕
                            </button>
                            <img src={selectedImage} alt="Full size" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
