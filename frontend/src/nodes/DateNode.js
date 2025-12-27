import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || '');

  return (
    <BaseNode
      id={id}
      title="Date Node"
      outputs={[{ id: 'output', top: 50 }]}
    >
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ width: '100%' }}
      />
    </BaseNode>
  );
};
