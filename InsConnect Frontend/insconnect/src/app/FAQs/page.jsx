"use client"
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';


const FAQs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqs = [
    { question: 'Where to send the queries related to portal and approval related issues for the approval process 2022-23?', answer: 'A: Institutes are requested to raise queries only through online Grievance Redressal mechanism available on AICTE website under Approval Process 2022-23 quick links. No queries through email will be entertained.' },
    { question: 'Does AICTE allow Arts and Science Courses in an Institution offering Engineering Courses?', answer: 'A: Conduct of any other Academic Courses (Technical/Non-Technical)... (full answer)' },
    { question: 'Is it mandatory for an Institution offering Courses in Architecture and Pharmacy to obtain Approval from AICTE?', answer: 'A: In compliance of the order dated 08.11.2019... (full answer)' },
    // Add more FAQs as needed
  ];

  return (
    <div>
        <Navbar/>
    
    <div className='bg-cover' style={{ backgroundImage: 'url("/wallp1.jpg")', color: 'white', paddingTop: '8rem', paddingBottom: '8rem' }}>
    <div className="container mx-auto" ><br/>
      <h1 className="text-4xl font-bold mb-4 text-white-500" style={{ fontSize: 48 }}>Frequently Asked Questions (FAQs)</h1><br />

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`backdrop-blur-sm bg-black/30 p-6 mb-4 rounded-md shadow cursor-pointer ${expandedQuestion === index ? 'border border-0F6FFF' : ''}`}
          onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
        >
          <div className="flex justify-between items-center">
            <div className="text-xl">{faq.question}</div>
            <button
              className="text-white-500 font-bold text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedQuestion(expandedQuestion === index ? null : index);
              }}
            >
              {expandedQuestion === index ? '-' : '+'}
            </button>
          </div>
          {expandedQuestion === index && (
            <div className="mt-4 text-white-700 font-bold">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default FAQs;
