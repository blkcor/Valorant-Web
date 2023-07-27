import React from 'react';

type SkillsProps = {

};

const Skills: React.FC<SkillsProps> = () => {

  return (
    <div className='flex gap-6 px-5'>
      <img src="/skill/star/1.webp" className='w-10 h-10 object-cover' alt="" />
      <img src="/skill/star/2.webp" className='w-10 h-10 object-cover' alt="" />
      <img src="/skill/star/3.webp" className='w-10 h-10 object-cover' alt="" />
      <img src="/skill/star/4.webp" className='w-10 h-10 object-cover' alt="" />
    </div>
  )
}
export default Skills;
