import React from 'react';

const Platform = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 py-20">
            <div className="max-w-[1240px] mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Platform</h2>
                <p className="text-center text-lg text-gray-600 mb-10">
                    Our platform leverages the latest in AI technology to create engaging, age-appropriate short stories for young readers. Designed with their reading levels and interests in mind, our stories are both educational and entertaining.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-center">Personalized Story Recommendations</h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Our AI analyzes your child's reading habits and preferences to recommend stories they will love. Whether it's adventure, fantasy, or science fiction, we have a story for every interest.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-center">Adaptive Reading Levels</h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Stories are tailored to fit your child's current reading level, ensuring they are both challenged and encouraged. As their reading skills improve, the complexity of the stories evolves to match.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-center">Interactive Story Elements</h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Our platform includes interactive elements that make reading more engaging. Children can choose their own adventure paths, interact with characters, and more, making reading a truly immersive experience.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-center">Parent Dashboard</h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Keep track of your child's reading progress with our parent dashboard. Get insights into their reading habits, see recommendations, and encourage their development with tailored content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;
