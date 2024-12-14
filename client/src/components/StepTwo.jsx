// src/components/StepTwoForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepTwo.css';

const StepTwo = () => {
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
            <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 text-gray-800 space-y-6">
                {/* Progress Bar */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                        <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: '66%' }}>
                            <span className="text-white text-sm"></span>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mb-4">
                        <div className="text-gray-600 font-semibold">Step 1</div>
                        <div className="text-purple-600 font-semibold">Step 2</div>
                        <div className="text-gray-400">Step 3</div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Video Section */}
                    <div className="relative aspect-w-16 aspect-h-9 mb-6">
                        {language === 'hindi' ? (
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/9LBLy3-tMN4"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="Hindi Video"
                            ></iframe>
                        ) : (
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/e1i7A6FJo30"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="English Video"
                            ></iframe>
                        )}
                    </div>

                    {/* Language Buttons */}
                    <div className="flex space-x-4 mb-6">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-lg font-semibold focus:outline-none ${language === 'hindi' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                            onClick={() => setLanguage('hindi')}
                        >
                            Hindi
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-lg font-semibold focus:outline-none ${language === 'english' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                            onClick={() => setLanguage('english')}
                        >
                            English
                        </button>
                    </div>

                    {/* Broker Options */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="text-gray-700 font-semibold">Hentec Market</div>
                            <a
                                href="https://hmarkets.com/live-account-pre-registration/?cmp=6f6y5y2k&refid=13741&ent=hm"
                                className="bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click Here
                            </a>
                        </div>
                        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="text-gray-700 font-semibold">Exness</div>
                            <a
                                href="https://one.exnesstrack.org/a/721ebw05k3"
                                className="bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click Here
                            </a>
                        </div>
                    </div>

                    {/* Exness IB Code Section */}
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-gray-700 font-semibold">Exness IB Code:</span>
                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg">721ebw05k3</span>
                        <button
                            type="button"
                            className="bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            onClick={copyCode}
                        >
                            Copy
                        </button>
                    </div>

                    {/* Terms and Conditions Form */}
                    <div className="space-y-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-purple-600 focus:ring-purple-500"
                                checked={termsChecked}
                                onChange={(e) => setTermsChecked(e.target.checked)}
                            />
                            <span className="ml-2 text-gray-700">I have read the terms and conditions.</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-purple-600 focus:ring-purple-500"
                                checked={conditionsChecked}
                                onChange={(e) => setConditionsChecked(e.target.checked)}
                            />
                            <span className="ml-2 text-gray-700">I accept the conditions.</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
                        disabled={!(termsChecked && conditionsChecked)}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepTwo;
