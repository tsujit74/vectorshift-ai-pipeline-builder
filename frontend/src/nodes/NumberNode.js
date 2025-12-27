import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || 0);

  return (
    <BaseNode
      id={id}
      title="Number Node"
      outputs={[{ id: 'output', top: 50 }]}
    >
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: '100%' }}
      />
    </BaseNode>
  );
};
