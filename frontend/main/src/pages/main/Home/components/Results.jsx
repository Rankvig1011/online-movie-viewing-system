import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import VideoCard from './VideoCard';
const Results = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const FAKE_DATA = [
            {
                _id: '6636fd391dc6ff44fcbf8316',
                name: 'Liệt Diễm Chi Vũ Canh Kỷ - Burning Flames',
                description:
                    'Liệt Diễm Chi Vũ Canh Kỷ - Burning Flames kể về Vũ Canh là con trai của Trụ Vương và Đát Kỷ. Từ khi sinh ra Vũ Canh bất hạnh đã bị phán là điềm “không lành” trái với mệnh của Thần Tộc, cũng từ việc này mà Thần Tộc dẫn đầu là Vũ Vương đã quyết định “phạt Trụ”. Sau đó là chuỗi sự việc đau thương xảy ra: Trụ Vương phải bỏ mạng trên sa trường còn mẹ của Vũ Canh – Đát Kỷ ôm hài tử tự tận nơi lầu cao Trích Tinh. Vũ Canh sau đó may mắn sống lại trong thân xác của một nô lệ có tên A Cẩu. Số phận A Cẩu này cũng bất hạnh khi bị đưa vào hầm mỏ khai thác khoáng thạch. Kiếp sống nô lệ của một vị hoàng tử cũng bắt đầu từ đây. Vũ Canh nằm gai nếm mật, trải qua nhiều trắc trở, cùng thiếu nữ Bạch Thái quen biết, hai người kết giao với nhiều bằng hữu chung chí hướng, dần trưởng thành và trở thành người có tính cách thông minh xảo quyệt, trọng nghĩa khí và không khuất phục trước ai. Hắn quyết đấu tranh đến cùng để tìm lại những thứ vốn dĩ thuộc về hắn.',
                slug: 'liet-diem-chi-vu-canh-ky-burning-flames',
                image: 'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879799/movie/liet-diem-chi-vu-canh-ky-burning-flames/klhikac8by85q82j9zow.jpg',
                imageH: 'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879800/movie/liet-diem-chi-vu-canh-ky-burning-flames/ndkxgwghwtjsic2w9iaq.jpg',
                trailer:
                    'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879799/movie/liet-diem-chi-vu-canh-ky-burning-flames/klhikac8by85q82j9zow.jpg',
                category: '662cbc7135f0d0e3dc6f4223',
                totalVote: 220,
                totalView: 63655,
                duration: 40,
                durationStr: '40/40 tập',
                actors: [
                    {
                        _id: '6640f55b257e6418ca4def7b',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 35],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7c',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 36],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7d',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 37],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7e',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 38],
                        },
                    },
                ],
                status: true,
                isVip: false,
                deleted: false,
                createdAt: '2024-05-05T03:30:01.644Z',
                updatedAt: '2024-05-05T03:30:01.644Z',
                __v: 0,
            },
            {
                _id: '6636fd391dc6ff44fcbf8316',
                name: 'Liệt Diễm Chi Vũ Canh Kỷ - Burning Flames',
                description:
                    'Liệt Diễm Chi Vũ Canh Kỷ - Burning Flames kể về Vũ Canh là con trai của Trụ Vương và Đát Kỷ. Từ khi sinh ra Vũ Canh bất hạnh đã bị phán là điềm “không lành” trái với mệnh của Thần Tộc, cũng từ việc này mà Thần Tộc dẫn đầu là Vũ Vương đã quyết định “phạt Trụ”. Sau đó là chuỗi sự việc đau thương xảy ra: Trụ Vương phải bỏ mạng trên sa trường còn mẹ của Vũ Canh – Đát Kỷ ôm hài tử tự tận nơi lầu cao Trích Tinh. Vũ Canh sau đó may mắn sống lại trong thân xác của một nô lệ có tên A Cẩu. Số phận A Cẩu này cũng bất hạnh khi bị đưa vào hầm mỏ khai thác khoáng thạch. Kiếp sống nô lệ của một vị hoàng tử cũng bắt đầu từ đây. Vũ Canh nằm gai nếm mật, trải qua nhiều trắc trở, cùng thiếu nữ Bạch Thái quen biết, hai người kết giao với nhiều bằng hữu chung chí hướng, dần trưởng thành và trở thành người có tính cách thông minh xảo quyệt, trọng nghĩa khí và không khuất phục trước ai. Hắn quyết đấu tranh đến cùng để tìm lại những thứ vốn dĩ thuộc về hắn.',
                slug: 'liet-diem-chi-vu-canh-ky-burning-flames',
                image: 'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879799/movie/liet-diem-chi-vu-canh-ky-burning-flames/klhikac8by85q82j9zow.jpg',
                imageH: 'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879800/movie/liet-diem-chi-vu-canh-ky-burning-flames/ndkxgwghwtjsic2w9iaq.jpg',
                trailer:
                    'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879799/movie/liet-diem-chi-vu-canh-ky-burning-flames/klhikac8by85q82j9zow.jpg',
                category: '662cbc7135f0d0e3dc6f4223',
                totalVote: 220,
                totalView: 63655,
                duration: 40,
                durationStr: '40/40 tập',
                actors: [
                    {
                        _id: '6640f55b257e6418ca4def7b',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 35],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7c',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 36],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7d',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 37],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7e',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 38],
                        },
                    },
                ],
                status: true,
                isVip: false,
                deleted: false,
                createdAt: '2024-05-05T03:30:01.644Z',
                updatedAt: '2024-05-05T03:30:01.644Z',
                __v: 0,
            },
            {
                _id: '6636fd391dc6ff44fcbf8316',
                name: 'Liệt Diễm Chi Vũ Canh Kỷ - Burning Flames',
                description:
                    'Liệt Diễm Chi Vũ Canh Kỷ - Burning Flames kể về Vũ Canh là con trai của Trụ Vương và Đát Kỷ. Từ khi sinh ra Vũ Canh bất hạnh đã bị phán là điềm “không lành” trái với mệnh của Thần Tộc, cũng từ việc này mà Thần Tộc dẫn đầu là Vũ Vương đã quyết định “phạt Trụ”. Sau đó là chuỗi sự việc đau thương xảy ra: Trụ Vương phải bỏ mạng trên sa trường còn mẹ của Vũ Canh – Đát Kỷ ôm hài tử tự tận nơi lầu cao Trích Tinh. Vũ Canh sau đó may mắn sống lại trong thân xác của một nô lệ có tên A Cẩu. Số phận A Cẩu này cũng bất hạnh khi bị đưa vào hầm mỏ khai thác khoáng thạch. Kiếp sống nô lệ của một vị hoàng tử cũng bắt đầu từ đây. Vũ Canh nằm gai nếm mật, trải qua nhiều trắc trở, cùng thiếu nữ Bạch Thái quen biết, hai người kết giao với nhiều bằng hữu chung chí hướng, dần trưởng thành và trở thành người có tính cách thông minh xảo quyệt, trọng nghĩa khí và không khuất phục trước ai. Hắn quyết đấu tranh đến cùng để tìm lại những thứ vốn dĩ thuộc về hắn.',
                slug: 'liet-diem-chi-vu-canh-ky-burning-flames',
                image: 'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879799/movie/liet-diem-chi-vu-canh-ky-burning-flames/klhikac8by85q82j9zow.jpg',
                imageH: 'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879800/movie/liet-diem-chi-vu-canh-ky-burning-flames/ndkxgwghwtjsic2w9iaq.jpg',
                trailer:
                    'https://res.cloudinary.com/ducw36fi3/image/upload/v1714879799/movie/liet-diem-chi-vu-canh-ky-burning-flames/klhikac8by85q82j9zow.jpg',
                category: '662cbc7135f0d0e3dc6f4223',
                totalVote: 220,
                totalView: 63655,
                duration: 40,
                durationStr: '40/40 tập',
                actors: [
                    {
                        _id: '6640f55b257e6418ca4def7b',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 35],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7c',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 36],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7d',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 37],
                        },
                    },
                    {
                        _id: '6640f55b257e6418ca4def7e',
                        buffer: {
                            type: 'Buffer',
                            data: [102, 44, 183, 240, 201, 94, 161, 49, 66, 5, 159, 38],
                        },
                    },
                ],
                status: true,
                isVip: false,
                deleted: false,
                createdAt: '2024-05-05T03:30:01.644Z',
                updatedAt: '2024-05-05T03:30:01.644Z',
                __v: 0,
            },
        ];
        setMovies(FAKE_DATA);
    }, []);
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {movies.map((movie) => (
                <VideoCard key={movie._id} movie={movie} />
            ))}
        </Container>
    );
};

export default Results;
