"use client"
import React, { useEffect, useState } from 'react';

const ContactPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        //an error
        throw new Error('Error page.');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setTimeout(() => {
          setError(null); 
          setShowContent(true); 
        }, 5000); 
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {error && (
        <div className="bg-red-500 text-white p-4">
          <p>{error}</p>
        </div>
      )}

      {showContent && !error && (
        <div>
          <h1>This is the contact page</h1>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
