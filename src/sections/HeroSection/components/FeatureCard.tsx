import { motion } from 'framer-motion';

export type FeatureCardProps = {
  iconUrl: string;
  iconAlt: string;
  title: string;
  description: string;
  delay?: number;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: props.delay || 0 }}
      className="box-border caret-transparent"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="bg-teal-500 box-border caret-transparent inline-block p-4 rounded-full"
      >
        <img
          src={props.iconUrl}
          alt={props.iconAlt}
          className="text-white box-border caret-transparent h-6 w-6"
        />
      </motion.div>
      <h3 className="text-blue-950 text-xl font-bold box-border caret-transparent leading-7 mt-4">
        {props.title}
      </h3>
      <p className="text-gray-600 box-border caret-transparent mt-2">
        {props.description}
      </p>
    </motion.div>
  );
};
