import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepTwoForm.css';

const StepTwoForm = () => {
    const [language, setLanguage] = useState('hindi');
    const [termsChecked, setTermsChecked] = useState(false);
    const [conditionsChecked, setConditionsChecked] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (termsChecked && conditionsChecked) {
            navigate('/step-three');
        } else {
            alert('Please accept the terms and conditions.');
        }
    };

    const copyCode = () => {
        navigator.clipboard.writeText('721ebw05k3');
        alert('Code copied to clipboard!');
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleFormSubmit} className="form-container">
                {/* Progress Bar */}
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: '66%' }}>
                            <span className="progress-text">66%</span> {/* Progress Text */}
                        </div>
                    </div>
                    <div className="step-labels">
                        <div className="step-label">Step 1</div>
                        <div className="step-label active">Step 2</div>
                        <div className="step-label">Step 3</div>
                    </div>
                </div>

                <div className="form-content">
                    {/* Video Section */}
                    <div className="video-section">
                        {language === 'hindi' ? (
                            <iframe
                                className="video"
                                src="https://www.youtube.com/embed/9LBLy3-tMN4"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="Hindi Video"
                            ></iframe>
                        ) : (
                            <iframe
                                className="video"
                                src="https://www.youtube.com/embed/e1i7A6FJo30"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="English Video"
                            ></iframe>
                        )}
                    </div>

                    {/* Language Buttons */}
                    <div className="language-buttons">
                        <button
                            type="button"
                            className={`language-btn ${language === 'hindi' ? 'active' : ''}`}
                            onClick={() => setLanguage('hindi')}
                        >
                            Hindi
                        </button>
                        <button
                            type="button"
                            className={`language-btn ${language === 'english' ? 'active' : ''}`}
                            onClick={() => setLanguage('english')}
                        >
                            English
                        </button>
                    </div>

                    {/* Broker Options */}
                    <div className="broker-options">
                        <div className="broker">
                            <div className="broker-title">Hentec Market</div>
                            <a
                                href="https://hmarkets.com/live-account-pre-registration/?cmp=6f6y5y2k&refid=13741&ent=hm"
                                className="broker-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click Here
                            </a>
                        </div>
                        <div className="broker">
                            <div className="broker-title">Exness</div>
                            <a
                                href="https://one.exnesstrack.org/a/721ebw05k3"
                                className="broker-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click Here
                            </a>
                        </div>
                    </div>

                    {/* Exness IB Code Section */}
                    <div className="copy-code">
                        <span>Exness IB Code :</span>
                        <span className="code">721ebw05k3</span>
                        <button type="button" onClick={copyCode}>Copy</button>
                    </div>

                    {/* Terms and Conditions Form */}
                    <div className="terms-container">
                        <label>
                            <input
                                type="checkbox"
                                checked={termsChecked}
                                onChange={(e) => setTermsChecked(e.target.checked)}
                            />
                            I have read the terms and conditions.
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={conditionsChecked}
                                onChange={(e) => setConditionsChecked(e.target.checked)}
                            />
                            I accept the conditions.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={!(termsChecked && conditionsChecked)}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepTwoForm;
