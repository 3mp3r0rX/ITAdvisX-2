'use client'

import { useState } from "react";
import PluseIcom from "../assets/icons/plus.svg"
import MinusIcon from "../assets/icons/minus.svg"
import clsx from "clsx";
import { motion , AnimatePresence } from "framer-motion";

const items = [
  {
    question: "How does ITAdvisX structure its pricing?",
    answer:
      "Our pricing is customized based on the specific needs of each client. We offer flexible pricing models, including hourly rates, project-based pricing, and retainer agreements for ongoing support.",
  },
  {
    question: " What is the typical process for starting a project with ITAdvisX?",
    answer:
      "The process begins with an initial consultation to understand your needs. We then conduct an assessment, develop a proposal, and upon agreement, proceed with the project planning and execution phases. Regular updates are provided throughout the project.",
  },
  {
    question: "What payment methods does ITAdvisX accept?",
    answer:
      "We accept various payment methods, including bank transfers, credit cards, and PayPal. We can discuss the most convenient payment option during our initial consultation.",
  },
  {
    question: "How does ITAdvisX ensure data security and compliance?",
    answer:
      "We adhere to industry best practices for data security and compliance, including GDPR, HIPAA, and other relevant regulations. We conduct regular audits and implement robust security measures to protect your data.",
  },
  {
    question: "What if I have a question that isn't covered here?",
    answer:"If you have any additional questions, please don't hesitate to reach out to us. We're here to help and provide the information you need."
  }
];

const AccordionItem = ({ question, answer } : { question: string; answer: string;}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon/> : <PluseIcom/> }
      </div>
      <AnimatePresence>
        {isOpen && (
    <motion.div 
    initial={{
      opacity:0,
      height:0,
      marginTop:0,
    }}
    animate={{
      opacity:1,
      height: "auto",
      marginTop: '16px'
    }}
    exit={{
      opacity:0,
      height: 0,
      marginTop: 0
    }}
    >
      {answer}
    </motion.div>
    )}
    </AnimatePresence>
  </div>
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
      <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">Frequently Asked Questions</h2>
      <div className="mt-12 max-w-[648px] mx-auto">
        {items.map(({question, answer}) => (
        <AccordionItem question={question} answer={answer} key={question}/>
        ))}
      </div>
      </div>
    </div>
  )
};
