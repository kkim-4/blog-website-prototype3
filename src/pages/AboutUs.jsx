import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
                <p>
                    At Malleable Stories, our mission is to ignite the imaginations of young readers by creating captivating and accessible AI-generated short stories. We believe that every child deserves to embark on magical journeys and adventures through reading, regardless of their reading level or interests.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Who We Are</h2>
                <p>
                    Malleable Stories is a team of passionate writers, educators, and technologists dedicated to harnessing the power of artificial intelligence to craft stories that resonate with children. Our diverse backgrounds allow us to combine creativity with cutting-edge technology to produce engaging content that captivates young minds.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">What We Do</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Accessible</strong>: Designed to match the reading levels of children, ensuring that every story is easy to understand and enjoyable.</li>
                    <li><strong>Engaging</strong>: Tailored to the interests of young readers, featuring exciting plots, relatable characters, and vibrant settings.</li>
                    <li><strong>Educational</strong>: Carefully crafted to include subtle educational elements, helping children learn and grow as they read.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Why We Do It</h2>
                <p>
                    We understand that reading is a fundamental skill that shapes a child's future. However, finding stories that are both entertaining and appropriate for different reading levels can be challenging. Our AI technology enables us to create a wide variety of stories that are not only fun but also help improve literacy skills. By making reading more accessible and enjoyable, we aim to foster a lifelong love of reading in children.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Our Approach</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Personalization</strong>: Our AI algorithms analyze each reader’s preferences and reading abilities to generate stories that are uniquely suited to them.</li>
                    <li><strong>Quality</strong>: We collaborate with experienced writers and educators to ensure that every story meets our high standards of quality and educational value.</li>
                    <li><strong>Innovation</strong>: We continuously explore new ways to leverage AI in storytelling, staying at the forefront of technological advancements to bring the best possible experiences to our readers.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Join Us on Our Journey</h2>
                <p>
                    We invite parents, educators, and young readers to join us on our journey to make reading a delightful and enriching experience for children everywhere. Together, we can create a world where every child can enjoy the magic of storytelling, one AI-generated short story at a time.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;
