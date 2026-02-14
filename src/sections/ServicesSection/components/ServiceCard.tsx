import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export type ServiceCardProps = {
  iconSrc: string;
  title: string;
  description: React.ReactNode;
  buttonText: string;
  delay?: number;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: props.delay || 0 }}
      whileHover={{ y: -5 }}
      className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent flex flex-col p-8 rounded-lg transition-all"
    >
      <div className="box-border caret-transparent grow">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="text-teal-500 box-border caret-transparent h-10 w-10"
        />
        <h3 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8 mt-4">
          {props.title}
        </h3>
        <p className="text-gray-600 box-border caret-transparent mt-2">
          {props.description}
        </p>
      </div>
      <div className="box-border caret-transparent mt-6">
        <Link to="/contact">
          <button className="text-white font-bold bg-teal-500 caret-transparent text-center w-full px-4 py-2 rounded-full hover:bg-teal-600 transition-colors active:scale-95 transform">
            {props.buttonText}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
