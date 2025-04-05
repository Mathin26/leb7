import React, { useState, useEffect } from 'react';
import { Home, MapPin, Bed, Bath, Square, Phone, Mail, X, ChevronLeft, ChevronRight, Instagram, Facebook, Landmark, Play, Pause, Clock } from 'lucide-react';

// Featured properties data
const properties = [
  {
    id: 1,
    title: "Villa",
    location: "Saligramam",
    price: "3 Crores",
    beds: 5,
    baths: 6,
    sqft: "6,200",
    landmarks: [
      "Vadapalani Temple - 1.2 km",
      "Forum Vijaya Mall - 2 km",
      "Vadapalani Metro Station - 1.5 km",
      "PSBB School - 0.8 km"
    ],
    previewVideo: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761",
    tourVideo: "https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ecd2a5b8&profile_id=164&oauth2_token_id=57447761",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
    ],
    isReady: true
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    location: "Anna nagar",
    price: "2.9 Crores",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    landmarks: [
      "Anna Nagar Tower Park - 0.5 km",
      "VR Chennai Mall - 1.8 km",
      "Anna Nagar Metro - 1 km",
      "DAV School - 0.6 km"
    ],
    previewVideo: "https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ecd2a5b8&profile_id=164&oauth2_token_id=57447761",
    tourVideo: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1600&q=80"
    ],
    isReady: false
  },
  {
    id: 3,
    title: "Luxury Garden House",
    location: "Adyar",
    price: "4.5 Crores",
    beds: 4,
    baths: 4,
    sqft: "4,800",
    landmarks: [
      "Adyar Beach - 1 km",
      "IIT Madras - 2.5 km",
      "Theosophical Society - 1.2 km",
      "Adyar Ananda Bhavan - 0.3 km"
    ],
    previewVideo: "https://player.vimeo.com/external/394678700.sd.mp4?s=6dc0c14c4bfda373d8fa8c7ff6d22bd4746e5f78&profile_id=164&oauth2_token_id=57447761",
    tourVideo: "https://player.vimeo.com/external/403231829.sd.mp4?s=04f2e5b12c6c4d99a95d6c4cee8b21c6e0c58be6&profile_id=164&oauth2_token_id=57447761",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b0e0745e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80"
    ],
    isReady: false
  },
  {
    id: 4,
    title: "Seaside Apartment Complex",
    location: "Besant Nagar",
    price: "2.2 Crores",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    landmarks: [
      "Elliot's Beach - 0.5 km",
      "Ashtalakshmi Temple - 1 km",
      "Velankanni Church - 0.8 km",
      "Bessie Beach Cafe - 0.2 km"
    ],
    previewVideo: "https://player.vimeo.com/external/370467553.sd.mp4?s=f7f43ea8ea4ce4fcb62ea44b79e3b5b50a4d18b5&profile_id=164&oauth2_token_id=57447761",
    tourVideo: "https://player.vimeo.com/external/370467167.sd.mp4?s=f3fb34b8e9a83531c6f68889c1a5bb3bb5e7f39f&profile_id=164&oauth2_token_id=57447761",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
    ],
    isReady: false
  }
];

function VideoPlayer({ video, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full"
            autoPlay
            controls
            src={video}
          />
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
}

function ImageViewer({ images, currentIndex, onClose, onPrevious, onNext }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="w-8 h-8" />
      </button>
      <button 
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-gray-300"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button 
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
      <img 
        src={images[currentIndex]} 
        alt={`Image ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onNext()}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-600' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function PropertyCard({ property }) {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const handleImageClick = (index) => {
    if (!property.isReady) return;
    setCurrentImageIndex(index);
    setShowImageViewer(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
      {!property.isReady && (
        <div className="absolute inset-0 bg-black bg-opacity-75 z-10 flex flex-col items-center justify-center text-white">
          <Clock className="w-16 h-16 mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
          <p className="text-gray-300">This property will be available shortly</p>
        </div>
      )}
      <div className="relative h-[400px]">
        {!videoError ? (
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            onError={handleVideoError}
          >
            <source src={property.previewVideo} type="video/mp4" />
          </video>
        ) : null}
        <img 
          src={property.images[0]} 
          alt={property.title}
          className={`w-full h-full object-cover ${!videoError ? 'hidden' : ''}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{property.title}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <p className="text-3xl font-bold text-blue-600 mt-4">{property.price}</p>
        <div className="flex justify-between mt-4 text-gray-600">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 mr-2" />
            <span>{property.sqft} sq.ft</span>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Landmark className="w-5 h-5 mr-2" />
            Nearby Landmarks
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {property.landmarks.map((landmark, index) => (
              <li key={index}>{landmark}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-gray-800">Photo Gallery</h4>
          {property.isReady && (
            <button
              onClick={() => setShowVideoPlayer(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Play className="w-4 h-4" />
              Watch Video Tour
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {property.images.slice(0, 3).map((image, index) => (
            <div key={index} className="relative group">
              <img 
                src={image} 
                alt={`Property ${index + 1}`}
                className={`w-full h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                  property.isReady ? 'group-hover:brightness-75' : 'opacity-50'
                }`}
                onClick={() => handleImageClick(index)}
              />
              {index === 2 && property.images.length > 3 && property.isReady && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer transition-all duration-300 group-hover:bg-opacity-75"
                  onClick={() => handleImageClick(2)}
                >
                  <span className="text-white font-semibold">+{property.images.length - 3}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showImageViewer && property.isReady && (
        <ImageViewer 
          images={property.images}
          currentIndex={currentImageIndex}
          onClose={() => setShowImageViewer(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {showVideoPlayer && property.isReady && (
        <VideoPlayer
          video={property.tourVideo}
          onClose={() => setShowVideoPlayer(false)}
        />
      )}
    </div>
  );
}

function EntryAnimation() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <Home className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold text-gray-900 animate-pulse">Leblesy</h1>
      </div>
    </div>
  );
}

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {showAnimation && <EntryAnimation />}
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Leblesy</h1>
            </div>
            <div className="flex space-x-6">
              <a href="#contact" className="flex items-center text-gray-600 hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                <span>8825494280</span>
              </a>
              <a href="mailto:Leblesy@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Leblesy</h3>
              <p className="text-gray-400">
                Discover extraordinary properties in the most desirable locations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Chennai<br />
                Tamilnadu<br />
                8825494280<br />
                Leblesy@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://instagram.com/leblesy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://facebook.com/leblesy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Leblesy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;