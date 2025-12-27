import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const CheckboxNode = ({ id, data }) => {
  const [checked, setChecked] = useState(data?.checked || false);

  return (
    <BaseNode
      id={id}
      title="Checkbox Node"
      outputs={[{ id: 'output', top: 50 }]}
    >
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        /> Check me
      </label>
    </BaseNode>
  );
};
