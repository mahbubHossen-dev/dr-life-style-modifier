import Link from 'next/link';
import React from 'react';

const LifeStyle = () => {
    return (
        <div className='w-full px-5 lg:px8 xl:px-[11%] mt-24 mb-24 '>
            <h1 className='text-3xl font-bold text-center mb-10'>স্বাস্থ্যকর লাইফস্টাইল</h1>
            <div className='grid md:grid-cols-12 md:gap-20'>
                <div className='col-span-5 border border-gray-300 rounded-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta unde voluptate autem architecto beatae quam non blanditiis odio dolores, sit quidem repellendus eius obcaecati consequuntur repellat veritatis vitae. Quisquam dolores similique earum minima consequatur obcaecati accusamus tempore fugit commodi sit cupiditate, fugiat odit nisi unde possimus molestiae ab accusantium. Temporibus dolores laudantium voluptatem praesentium ipsum itaque quas alias assumenda totam.</div>

                <div className='col-span-7 border border-gray-300 rounded-md p-10 space-y-3 '>
                    <h1 className='text-3xl font-bold'>স্বাস্থ্যকর লাইফস্টাইল</h1>
                    <p className='font-bold'>কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)</p>
                    <ul>
                        <li>১) আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</li>
                        <li>২) আমরা রোযা রাখতে বলি।</li>
                        <li>৩) আমরা ভালো ঘুমাতে বলি।</li>
                        <li>৪) আমরা দৈনিক ব্যায়াম করতে বলি।</li>
                        <li>৫) আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</li>

                    </ul>
                    <h4 className='font-extrabold'>‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’</h4>
                    <p>জেনে রাখবেন</p>
                    <h4 className='font-extrabold'>“দুর্বল মুমিনের চেয়ে শক্তিশালী মুমিন উত্তম”</h4>
                    <h4 className='font-extrabold'>“মানুষ বড়ই আশ্চর্যজনক ও বোকা”</h4>
                    <p>সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।</p>
                    <p>তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।</p>
                    <p>নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।</p>
                    <p>“স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস” আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার <Link href={'https://www.facebook.com/mdabdulkaiyumpeacelibrary/'} target='_blank' className=' '><span className='text-blue-500'>আব্দুল কাইয়ুম পীস লাইব্রেরী</span></Link> এর কাছে।</p>
                </div>
            </div>
        </div>
    );
};

export default LifeStyle;