"use client"
import React, { useEffect, useState } from 'react';

const ContactPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate a 5-second delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate an error
        throw new Error('Error page.');
      } catch (err) {
        // Handle the error by checking if it's an instance of Error
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }

        // Set a timeout to hide the error after 5 seconds and show the contact page
        setTimeout(() => {
          setError(null); // Clear the error
          setShowContent(true); // Show the content
        }, 5000); // Display error for 5 seconds
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
