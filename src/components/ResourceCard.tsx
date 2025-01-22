import { motion } from "framer-motion";
import { useState } from "react";

interface ResourceCardProps {
  title: string;
  url: string;
  image: string;
  index: number;
  description?: string; // Making description optional
}

export const ResourceCard = ({ title, url, image, index, description }: ResourceCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Overlay with description on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <div className="text-white text-center">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {description && (
              <p className="text-sm text-gray-200">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Title shown when not hovering */}
      <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
          {title}
        </h3>
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
            View Resource
          </span>
        </div>
      </div>
    </motion.a>
  );
};