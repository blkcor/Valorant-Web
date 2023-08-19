import React from 'react';

type SkillsProps = {
  c: string,
  q: string,
  e: string,
  x: string,
};

const Skills: React.FC<SkillsProps> = ({ c, q, e, x }) => {

  return (
    <div className='flex gap-6 px-5'>
      <img src={c} className='w-10 h-10 object-cover' alt="" />
      <img src={q} className='w-10 h-10 object-cover' alt="" />
      <img src={e} className='w-10 h-10 object-cover' alt="" />
      <img src={x} className='w-10 h-10 object-cover' alt="" />
    </div>
  )
}
export default Skills;
