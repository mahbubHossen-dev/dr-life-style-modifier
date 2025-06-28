import React from 'react';

const YoutubeSection = () => {
    return (
        <div className=''>
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-center mb-6">রোগীদের বাস্তব অভিজ্ঞতা</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={'https://www.youtube.com/embed/vMc7euF67lg?si=5JhQb3OaJZK-3NRZ'}
                            
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={'https://www.youtube.com/embed/pj_bVgANAxg?si=XL8ykCzFA_5KkGxw'}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={'https://www.youtube.com/embed/VW97dpklud4?si=48T0oUY5KCTaPcZ1'}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={'https://www.youtube.com/embed/J6lpzQyEeSA?si=yKYe9KB1w1Bv5DRJ'}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={'https://www.youtube.com/embed/EF7MDeZbS84?si=mmpFrfhyS9pKsw3d'}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={'https://www.youtube.com/embed/hOcppdlW6DM?si=LFxk7VBNoB4kv6eO'}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YoutubeSection;