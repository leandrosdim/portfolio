"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useDarkMode } from "@/lib/useDarkMode";

interface Slide {
  id: string;
  title: string;
  description: string;
}

interface SlideshowProps {
  projectId: string;
  slides: Slide[];
}

export default function Slideshow({ projectId, slides }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useDarkMode();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsLoading(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsLoading(true);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
        <p className="text-gray-500">No slides available for this project</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Slideshow container */}
      <div 
        className={`relative w-full rounded-xl overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100' }`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Slides */}
        <div className="relative w-full pt-[100%] md:pt-[75%] "> {/* 1:1 on mobile, 4:3 on desktop */}
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
              <Image
                src={`/${projectId}/${slide.id}.jpg`}
                alt={slide.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => setIsLoading(false)}
                priority={index === 0} // Priority for first image
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slide information */}
      {slides[currentSlide] && (
        <div className={`mt-6 p-6 rounded-xl shadow-sm ${
          isDarkMode ? 'bg-slate-800' : 'bg-white'
        }`}>
          <h3 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h3>
          <p className={`${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>{slides[currentSlide].description}</p>
        </div>
      )}

      {/* Slide indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsLoading(true);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? (isDarkMode ? "bg-blue-400 w-6" : "bg-blue-600 w-6")
                : (isDarkMode ? "bg-slate-600" : "bg-gray-300")
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}