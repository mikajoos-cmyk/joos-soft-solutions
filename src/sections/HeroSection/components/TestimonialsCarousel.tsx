import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Mika hat hervorragende Arbeit geleistet! Ich hatte eine Excel-Tabelle als Grundlage und eine klare Vorstellung davon, wie mein Python-Programm aussehen sollte – und Mika hat meine Erwartungen mehr als nur erfüllt. Er hat meine Anforderungen perfekt umgesetzt, professionell gearbeitet und das Projekt mit großem Fachwissen realisiert. Die Kommunikation war reibungslos, die Umsetzung präzise, und das Endergebnis ist genau das, was ich mir gewünscht habe. Dank Mika weiß ich jetzt, dass meine Ideen tatsächlich in Programme umgesetzt werden können – eine Erkenntnis, die für mich unglaublich wertvoll ist! In Zukunft werde ich definitiv wieder mit ihm zusammenarbeiten. Absolut empfehlenswert – jederzeit wieder! Vielen Dank, Mika! 💯",
    author: "nickel_15",
    project: ""
  },
  {
    quote: "He does his work absolutely great! A great professional who immediately understood the task we needed and nailed it with the first delivery to 100%. The code is working as expected and he's done a great job. We would hire him again any time!",
    author: "cwbsl",
    project: ""
  },
  {
    quote: "Super Service! Auch nach der Lieferung 1A Service mit Video erklärungen, und immer wieder weiteren Hilfen. Code war einwandfrei. immer wieder empfehlbar👍🏼",
    author: "dstore4you",
    project: ""
  },
  {
    quote: "Working with Mika was fantastic. He quickly and reliably met my requirements. Considering the short timeframe, I am very grateful that Mika took on the task and executed it very well.",
    author: "kalirobot",
    project: ""
  },
  {
    quote: "Mika Exceeded Expectation! it was so pleasant to work with such a Proactive and skilled personen. There were numerous times where Mika could take the short route, but he never did, he was always seeking for the best solution for this project. I did several projects in several countries, but the way of communicating and the level of skills was so pleasant to work with, I could really count on Mika, knowing he delivers the highest standard, always seeking to exceed expectations. I will not seek further in the future, he's my one stop problem solver! Thanks Mike, I enjoyed this huge project the most of all projects I did in the past 17years!",
    author: "excel758",
    project: "Data Migration Tool"
  },
  {
    quote: "He exceeded everything i asked for. The program is working like a charm and no issues. I will be using him in other program projects.",
    author: "howrangi",
    project: ""
  },
  {
    quote: "I couldn't have imagined anyone better for this job. He finished faster than expected, great work and highly recommended! :)",
    author: "danihegan",
    project: ""
  },
  {
    quote: "Amazing. I would recommend him to anyone. He is kind, respectful, and courteous. He helped me with several of my projects in a really good time frame. I appreciate all his work and if you're thinking of him, you won't regret his service.",
    author: "jaymi234",
    project: ""
  },
  {
    quote: "Working with Mika is very relaxed, he understands in no-time what the goal of the program is and works accordingly. He also tests his program against the example output, which results in an almost flawless program.",
    author: "gerardjanssen",
    project: ""
  },
  {
    quote: "Habe genau das bekommen, was ich wollte. Besonders hervorzuheben ist die schnelle, lösungsorientierte Kommunikation.",
    author: "websail",
    project: ""
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative box-border caret-transparent w-full overflow-hidden px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex flex-col h-full justify-between p-8 rounded-lg max-w-4xl mx-auto">
            <div className="box-border caret-transparent">
              <img
                src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-5.svg"
                alt="Icon"
                className="text-teal-500 box-border caret-transparent h-8 opacity-50 w-8"
              />
              <p className="text-gray-700 italic box-border caret-transparent mt-4">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
            </div>
            <div className="box-border caret-transparent mt-6">
              <div className="items-center box-border caret-transparent flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-6.svg"
                    alt="Star"
                    className="text-yellow-400 box-border caret-transparent h-5 w-5"
                  />
                ))}
              </div>
              <p className="text-blue-950 font-bold box-border caret-transparent mt-2">
                {testimonials[currentIndex].author}
              </p>
              {testimonials[currentIndex].project && (
                <p className="text-gray-500 text-sm box-border caret-transparent leading-5">
                  {testimonials[currentIndex].project}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute text-blue-950 items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px_0px] box-border caret-transparent flex h-11 justify-center mt-[-22px] w-11 z-10 rounded-full left-1 top-2/4 hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute text-blue-950 items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px_0px] box-border caret-transparent flex h-11 justify-center mt-[-22px] w-11 z-10 rounded-full right-1 top-2/4 hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};
