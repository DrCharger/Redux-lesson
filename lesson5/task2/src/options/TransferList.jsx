import React from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available Options" />
      <SelectedOptions title="Selected Options" />
    </div>
  );
};

export default TransferList;
