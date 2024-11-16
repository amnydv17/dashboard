import React from 'react';
import ProgressBar from './ProgressBar';

const SyllabusAnalysis = () => {
  const topics = [
    { label: 'HTML Tools, Forms, History', percentage: 80, color: 'bg-blue-500 text-blue-500' },
    { label: 'Tags & References in HTML', percentage: 60, color: 'bg-orange-500 text-orange-500' },
    { label: 'Tables & References in HTML', percentage: 24, color: 'bg-red-500 text-red-500' },
    { label: 'Tables & CSS Basics', percentage: 96, color: 'bg-green-500 text-green-500' },
  ];

  return (
    <div className="pt-8 pl-6 pr-4 mb-8 rounded-lg border h-[480px] mr-4 ml-0">
      <h3 className="text-lg font-bold mb-10">Syllabus Wise Analysis</h3>
      {topics.map((topic, index) => (
        <ProgressBar
          key={index}
          label={topic.label}
          percentage={topic.percentage}
          color={topic.color}
        />
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
