import React from 'react';

class ChapterContent extends React.Component {
 render(content){
  return (
   <div className='chapter-content' dangerouslySetInnerHTML={{__html:content}} />
  )
 }
}

export default ChapterContent;