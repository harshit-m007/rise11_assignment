import React, { useRef } from 'react';
import { FaFileAlt, FaCloudUploadAlt } from 'react-icons/fa';
import './DocumentationDetails.css';

function DocumentationDetails() {
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null); 
  const fileInputRef3 = useRef(null); 

  const handleFileUpload = (ref) => {
    ref.current.click(); 
  };

  return (
    <div className="documentation-details">
      <div className="section">
        <div className="section-header">
          <FaFileAlt className="icon" />
          <h3>Statement</h3>
        </div>
        <div className="upload-box yolo">
          <p>Write your Statement Here</p>
          <p>or</p>
          <button
            className="upload-btn"
            onClick={() => handleFileUpload(fileInputRef1)}
          >
            <FaCloudUploadAlt className="cloud-icon" /> Upload a PDF
          </button>
          <input
            type="file"
            ref={fileInputRef1}
            style={{ display: 'none' }} 
            accept=".pdf"
          />
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <FaFileAlt className="icon" />
          <h3>Agreement under Disputes</h3>
        </div>
        <div className="upload-box-container">
          <div className="upload-box">
            <button
              className="upload-btn"
              onClick={() => handleFileUpload(fileInputRef2)}
            >
              <FaCloudUploadAlt className="cloud-icon" /> Upload the Contract
            </button>
            <input
              type="file"
              ref={fileInputRef2}
              style={{ display: 'none' }} 
              accept=".pdf"
            />
            <p className="note">Max 2MB, PDF</p>
          </div>
          <div className="upload-box">
            <button
              className="upload-btn"
              onClick={() => handleFileUpload(fileInputRef3)}
            >
              <FaCloudUploadAlt className="cloud-icon" /> Arbitration Agreement
            </button>
            <input
              type="file"
              ref={fileInputRef3}
              style={{ display: 'none' }} 
              accept=".pdf"
            />
            <p className="note">Max 2MB, PDF</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <FaFileAlt className="icon" />
          <h3>Additional Documentation</h3>
        </div>
        <div className="upload-box">
          <button
            className="upload-btn"
            onClick={() => handleFileUpload(fileInputRef1)}
          >
            <FaCloudUploadAlt className="cloud-icon" /> Upload the Contract
          </button>
          <input
            type="file"
            ref={fileInputRef1}
            style={{ display: 'none' }}
            accept=".pdf"
          />
          <p className="note">Max 2MB, PDF</p>
        </div>
        <button className="add-more">
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default DocumentationDetails;
