import React from 'react';

const Support = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Support</h1>
            
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">How Can We Help?</h2>
                <p>
                    At Malleable Stories, we are committed to providing excellent support to our users. If you have any questions, issues, or feedback regarding our AI-generated short stories, please feel free to reach out to us using the contact information below. Our team is here to assist you and ensure that your experience with our stories is enjoyable and enriching.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
                <p>
                    Email: support@malleablestories.com<br />
                    Phone: 1-800-123-4567<br />
                    Address: 123 Story Lane, Storyville, USA
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">FAQs</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Q: Can I request specific story themes or topics?</h3>
                    <p>
                        A: Yes, we welcome suggestions for story themes or topics. Please email us at suggestions@malleablestories.com with your ideas, and we will do our best to incorporate them into our future stories.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Q: How do I access the stories?</h3>
                    <p>
                        A: Our stories are accessible through our website and mobile app. Simply log in to your account to start reading. If you encounter any difficulties, please contact our support team for assistance.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Support;
