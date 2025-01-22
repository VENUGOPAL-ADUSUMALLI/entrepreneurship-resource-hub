import { ResourceCard } from "@/components/ResourceCard";
import { motion } from "framer-motion";
import { entrepreneurshipResources, scholarlyGroups } from "@/data/resources";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Entrepreneurship Resources Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-full inline-block mb-4">
              Resources
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entrepreneurship Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover valuable resources to support your entrepreneurial journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entrepreneurshipResources.map((resource, index) => (
              <ResourceCard
                key={resource.title}
                {...resource}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Scholarly Groups Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-full inline-block mb-4">
              Academic
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scholarly Groups
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with academic communities and research initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarlyGroups.map((group, index) => (
              <ResourceCard
                key={group.title}
                {...group}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;