import { X } from 'lucide-react';
import { useEffect } from 'react';

/**
 * Story Modal Component - Displays full story content on mobile
 * Design: Full-screen modal with close button and scrollable content
 * Animation: Smooth fade-in and scale animation
 */

interface StoryModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  image: string;
  onClose: () => void;
}

const StoryModal = ({ isOpen, title, content, image, onClose }: StoryModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <div className="sticky top-0 flex justify-end p-4 bg-gradient-to-b from-white to-transparent z-10">
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-100/50 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-8">
          {/* Image */}
          <div className="mb-8 rounded-2xl overflow-hidden h-64 sm:h-80">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl text-textdark mb-6">
            {title}
          </h2>

          {/* Content */}
          <div className="font-body text-textgray/80 leading-relaxed space-y-4 text-base sm:text-lg">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Decorative element */}
          <div className="mt-8 pt-6 border-t border-orange-200/50 flex justify-center">
            <div className="text-orange-400/60">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
