import React from 'react';
import { FaCalculator, FaMapMarkerAlt, FaLanguage } from 'react-icons/fa';
import './ClaimDetails.css';

function ClaimDetails() {
  return (
    <div className="claim-details-container">
      <h2 className="form-title">File your Claim. <span className='ko'>(Approx 5 Minutes)</span></h2>
      <div className="claim-details">
        <div className="section">
        <h3><FaCalculator className="icon" style={{ marginRight: "8px" }}/>
          Claim Value</h3>
            <div>
            <div className="form-group">
              <label>Contract Value</label>
              <div className="input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="text" placeholder="10,00,00" />
                <select className="currency-dropdown">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Claim Value</label>
              <div className="input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="text" placeholder="15,00,00" />
                <select className="currency-dropdown">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <p className="noti">150% of Contract Value</p>
          </div>
        </div>

        <div className="section">
        <h3><FaMapMarkerAlt className="icon" style={{ marginRight: "8px" }}/>
            Place</h3>
            <div>
            <div className="form-group">
              <label>Select the Place for proceedings</label>
              <input type="text" placeholder="Select Place" />
            </div>
            <div className="radio-group-container">
              <label>Is the place for the proceedings the one mentioned in the agreement?</label>
              <div className="radio-group">
                <input type="radio" id="place-yes" name="place" value="yes" />
                <label htmlFor="place-yes">Yes</label>
                <input type="radio" id="place-no" name="place" value="no" />
                <label htmlFor="place-no">No</label>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
        <h3><FaLanguage className="icon"style={{ marginRight: "8px" }} />
             Language</h3>
            <div>
            <div className="form-group">
              <label>Select the language for proceedings</label>
              <input type="text" placeholder="Select Language" />
            </div>
            <div className="radio-group-container">
              <label>Is the language for the proceedings the one mentioned in the agreement?</label>
              <div className="radio-group">
                <input type="radio" id="lang-yes" name="language" value="yes" />
                <label htmlFor="lang-yes">Yes</label>
                <input type="radio" id="lang-no" name="language" value="no" />
                <label htmlFor="lang-no">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClaimDetails;
