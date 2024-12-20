import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './FileClaim.css';
import ClaimDetails from './ClaimDetails';
import DocumentationDetails from './DocumentationDetails';

function FileClaim() {
  const steps = [
    { id: 1, label: '01 Preliminary', completed: false, bold: true},
    { id: 2, label: '02 Your Details', completed: false, bold: true },
    { id: 3, label: '03 KYC', completed: false, bold: true },
    { id: 4, label: '04 Parties', completed: true, active: true },
    { id: 5, label: '05 Claim', completed: true },
    { id: 6, label: '06 Review', completed: true },
    { id: 7, label: '07 Payment', completed: true },
  ];

  return (
    <div className="file-claim">
      {/* Step Progress */}
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-wrapper" key={step.id}>
            {index > 0 && (
              <div
                className={`line ${steps[index - 1].completed ? 'dotted-line' : 'solid-line'}`}
              ></div>
            )}
            <div className="step">
              <FaCheckCircle
                className={`icon ${step.completed ? 'completed' : ''} ${
                  step.active ? 'active' : ''
                }`}
              />
              <div
                className={`label ${step.completed ? 'completed' : ''} ${
                  step.active ? 'active' : ''
                }`}
              >
                {step.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inner Components */}
      <div className="form-sections">
        <ClaimDetails />
        <DocumentationDetails />
      </div>
    </div>
  );
}

export default FileClaim;
