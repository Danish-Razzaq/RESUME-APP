
import React from 'react';

const ExperienceTitle = () => {
  return (
    <div className="p-8 text-4xl font-bold">
      Experience
    </div>
  );
};

const Experience = () => {
  return (
    <div className="space-y-2 pb-2">
      <div className="flex justify-center mx-8 w-fit h-fit md:w-4/8 pt-4 bg-emerald-500 p-4 rounded-[2rem] border-t-8 border-b-8 border-gray-700 font-serif">
        Throughout my career as a software engineer, I have been fortunate enough to work on a diverse range of projects. This has given me exposure to a variety of small-scale and large-scale systems, allowing me to develop expertise in multiple programming languages, databases, and development tools.
      </div>
      <div className="flex justify-center mx-8 w-fit h-fit md:w-4/8 bg-pink-400 p-4 rounded-[2rem] border-t-8 border-b-8 border-yellow-400 font-serif">
        My experience includes collaborating with cross-functional teams, implementing agile methodologies, and adhering to software development best practices.
      </div>
    </div>
  );
};


export { Experience, ExperienceTitle };
