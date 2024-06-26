import React from 'react';
import MainFeaturedPost from './components/MainFeaturedPost';
// import Navbar from './components/Navbar';
import Results from './components/Results';
// import { useCategory } from '@/hooks/category';

export const Home = () => {
    // const { categories } = useCategory();
    // const [category, setCategory] = useState('');
    const mainFeaturedPost = {
        title: 'Trải nghiệm giải trí đỉnh cao tại nhà',
        description:
            'Trình duyệt xem phim hiện nay không chỉ đơn thuần là công cụ giải trí mà còn mang lại trải nghiệm điện ảnh cao cấp ngay tại nhà. Với chất lượng hình ảnh và âm thanh vượt trội, thư viện nội dung đa dạng cùng các tính năng tiện ích, việc xem phim trở nên thú vị và dễ dàng hơn bao giờ hết.',
        imageText: 'main image description',
    };
    // const handleChangeCategory = (id) => {
    //     setCategory(id);
    // };
    return (
        <>
            <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                {/* <Navbar
                    title="Chọn lọc"
                    sections={categories}
                    handleChangeCategory={handleChangeCategory}
                /> */}
                <Results
                //  category={category ?? ''}
                />
            </main>
        </>
    );
};
