import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const inputRef = useRef(null);

  // Extract unique variables from text like {{variable}}
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = Array.from(currText.matchAll(regex)).map(m => m[1]);
    setVariables([...new Set(matches)]);
  }, [currText]);

  // Auto resize input height based on content
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((v, i) => ({ id: v, top: 20 + i * 20 }))}
      outputs={[{ id: 'output', top: 50 }]}
      style={{ minHeight: 80, width: 220 }}
    >
      <textarea
        ref={inputRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Type text with {{variables}}"
        style={{
          width: '97%',
          minHeight: '40px',
          resize: 'none',
          fontSize: '14px',
          padding: '5px',
        }}
      />
    </BaseNode>
  );
};
