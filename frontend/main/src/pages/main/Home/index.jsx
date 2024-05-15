import React from 'react';
import MainFeaturedPost from './components/MainFeaturedPost';
import Navbar from './components/Navbar';
import Results from './components/Results';

export const Home = () => {
    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: 'main image description',
        linkText: 'Continue reading…',
    };
    const sections = [
        { title: 'Xu hướng', url: '#' },
        { title: 'Hàng đầu', url: '#' },
        { title: 'Hành động', url: '#' },
        { title: 'Hài kịch', url: '#' },
        { title: 'Kinh dị', url: '#' },
        { title: 'Lãng mạn', url: '#' },
        { title: 'Bí ẩn', url: '#' },
        { title: 'khoa học viễn tưởng', url: '#' },
        { title: 'miền Tây', url: '#' },
        { title: 'Hoạt hình', url: '#' },
    ];
    return (
        <>
            <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Navbar title="Chọn lọc" sections={sections} />
                <Results />
            </main>
        </>
    );
};
