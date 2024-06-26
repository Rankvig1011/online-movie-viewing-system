import { DialogForm } from '@/components/DialogForm';
import { ModalCustom } from '@/components/ModalCustom';
import { Text } from '@/components/Typhograpy';
import { UnstyledButton } from '@/components/interaction';
import { Container, Grid } from '@/components/layout';
import { useDeleteCategory } from '@/hooks/category';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Pagination } from '@mui/material';
import React from 'react';
import tw from 'twin.macro';

const TextCustom = tw.span`text-black text-sm font-medium truncate`;

export const ListOfCategory = ({ categories, setCategoryInfo }) => {
    const [categoryId, setCategoryId] = React.useState();
    const { deleteCategory } = useDeleteCategory();
    const handleDeleteCategory = () => {
        deleteCategory(categoryId);
    };

    const itemInPage = React.useRef(10);
    const categorySplitByPage = React.useMemo(() => {
        if (categories.length > 0) {
            return categories.reduce((acc, _, index) => {
                const pageIndex = Math.floor(index / itemInPage.current);
                if (!acc[pageIndex]) {
                    acc[pageIndex] = [];
                }
                acc[pageIndex].push(_);
                return acc;
            }, []);
        }
        return [];
    }, [categories]);

    const [categoryData, setCategoryData] = React.useState(categorySplitByPage[0]);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        setCategoryData(categorySplitByPage[value - 1]);
    };

    React.useEffect(() => {
        setCategoryData(categorySplitByPage[0]);
    }, [categorySplitByPage]);

    const listColumns = {
        index: tw`col-span-1 text-center`,
        name: tw`col-span-2`,
        description: tw`col-span-5`,
        actions: tw`col-span-3 text-center`,
    };
    const label = {
        index: 'STT',
        name: 'Tên',
        description: 'Mô tả',
        actions: 'Hành động     ',
    };
    return (
        <Container tw="flex-col border">
            <Grid tw="w-full py-4 px-4 border-b">
                {Object.keys(listColumns).map((item, index) => (
                    <Grid.Col key={index} css={listColumns[item]}>
                        <Text tw="font-semibold">{label[item].toUpperCase()}</Text>
                    </Grid.Col>
                ))}
            </Grid>
            {categoryData &&
                categoryData.map((category, index) => (
                    <Grid
                        key={index}
                        tw="w-full p-2 px-4 my-1 bg-white rounded-md duration-200 cursor-pointer border-b hover:(-translate-y-1 shadow-md)"
                    >
                        <Grid.Col tw="col-span-1 flex items-center justify-center">
                            <TextCustom>{(page - 1) * 10 + (index + 1)}</TextCustom>
                        </Grid.Col>
                        <Grid.Col tw="col-span-2 flex items-center">
                            <TextCustom>{category.name}</TextCustom>
                        </Grid.Col>
                        <Grid.Col tw="col-span-5 flex ">
                            <TextCustom>{category.description}</TextCustom>
                        </Grid.Col>
                        <Grid.Col tw="col-span-3 flex items-center">
                            <Container tw="border-l-2 border-gray-100 flex items-center justify-center gap-2 px-2">
                                <UnstyledButton onClick={() => setCategoryInfo(category)}>
                                    <div>
                                        <EditIcon size={24} tw="text-primary" />
                                    </div>
                                    <TextCustom tw="text-xs hidden md:block">Sửa</TextCustom>
                                </UnstyledButton>
                                <UnstyledButton onClick={() => setCategoryId(category._id)}>
                                    <div>
                                        <DeleteIcon size={20} tw="text-danger" />
                                    </div>
                                    <TextCustom tw="!text-danger text-xs hidden md:block">
                                        Xoá
                                    </TextCustom>
                                </UnstyledButton>
                            </Container>
                        </Grid.Col>
                    </Grid>
                ))}
            {categories.length > itemInPage.current && (
                <Container tw="justify-end py-2">
                    <Pagination
                        count={Math.ceil(categories.length / itemInPage.current)}
                        page={page}
                        onChange={handleChange}
                    />
                </Container>
            )}
            <ModalCustom opened={Boolean(categoryId)} onClose={() => setCategoryId()}>
                <Container tw="w-[500px]">
                    <DialogForm onCancel={() => setCategoryId()} onConfirm={handleDeleteCategory} />
                </Container>
            </ModalCustom>
        </Container>
    );
};
