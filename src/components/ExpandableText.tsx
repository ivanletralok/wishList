import React, { useState } from 'react';

interface ExpandableTextProps {
    text: string;
    maxLength: number;
    show: boolean;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength, show }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    if (text.length <= maxLength) {
        return <p className='text-xs'>{text}</p>;
    }

    const shortText = text.slice(0, maxLength);
    const displayText = isExpanded ? text : `${shortText}...`;

    return (
      <div>
      <p>{displayText}</p>
      {show && text.length > maxLength && (
          <button
              className="text-blue-500 text-xs"
              onClick={() => setIsExpanded(!isExpanded)}
          >
              {isExpanded ? 'Show less' : 'Show more'}
          </button>
      )}
  </div>
    );
};

export default ExpandableText;
