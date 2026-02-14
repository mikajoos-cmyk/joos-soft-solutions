import { motion } from 'framer-motion';

export const CompanyLogos = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-8 grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-4 mt-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ scale: 1.05, filter: "grayscale(0)" }}
        href="https://vip-haustechnik.de/"
        className="box-border caret-transparent block"
      >
        <img
          src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/vip_haustechnik.png"
          alt="Logo von V. i. P. Haustechnik"
          className="box-border caret-transparent grayscale-[1] max-w-full mx-auto transition-all"
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.05, filter: "grayscale(0)" }}
        href="http://pixelgipfel.ch/"
        className="box-border caret-transparent block"
      >
        <img
          src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/pixelgipfel.png"
          alt="Logo von Pixelgipfel"
          className="box-border caret-transparent grayscale-[1] max-w-full mx-auto transition-all"
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.05, filter: "grayscale(0)" }}
        href="http://horstmann-orthoschuh.de/"
        className="box-border caret-transparent block"
      >
        <img
          src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/horstmann.png"
          alt="Logo von Horstmann Orthopädie-Schuhtechnik"
          className="box-border caret-transparent grayscale-[1] max-w-full mx-auto transition-all"
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{ scale: 1.05, filter: "grayscale(0)" }}
        href="https://schneider-bodenbeschichtungen.de/"
        className="box-border caret-transparent block"
      >
        <img
          src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/schneider_bodenbeschichtungen.jpg"
          alt="Logo von Schneider Bodenbeschichtungen"
          className="box-border caret-transparent grayscale-[1] max-w-full mx-auto transition-all"
        />
      </motion.a>
    </div>
  );
};
