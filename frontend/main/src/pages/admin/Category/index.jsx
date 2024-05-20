import { Container } from '@/components/layout';
import { ModalCustom } from '@/components/ModalCustom';
import { useCategory } from '@/hooks/category';
import { CategoryForm, ListOfCategory } from '@/section/admin/category';
import { Button } from '@mui/material';
import React from 'react';
import tw from 'twin.macro';

export const CategoryAdminPage = () => {
    const { categories } = useCategory();
    const [isOpenAddNewCategory, setIsOpenAddNewCategory] = React.useState(false);
    const [editCategoryInfo, setEditCategoryInfo] = React.useState();
    const handleOpenAddNewCategory = () => setIsOpenAddNewCategory(true);
    const handleCloseAddNewCategory = () => setIsOpenAddNewCategory(false);

    return (
        <>
            <Container tw="flex-col p-4 gap-2">
                <Container>
                    <Button variant="contained" onClick={handleOpenAddNewCategory}>
                        New Category
                    </Button>
                </Container>
                <Container tw="gap-2 flex-col xl:flex-row">
                    <Container tw="w-full xl:w-1/2" css={[!editCategoryInfo && tw`!w-full`]}>
                        <ListOfCategory
                            categories={categories}
                            setCategoryInfo={setEditCategoryInfo}
                        />
                    </Container>
                    {editCategoryInfo && (
                        <Container tw="border w-full xl:w-1/2 p-2">
                            <CategoryForm actorInfo={editCategoryInfo} />
                        </Container>
                    )}
                </Container>
            </Container>
            <ModalCustom
                title="Add New Actor"
                opened={isOpenAddNewCategory}
                onClose={handleCloseAddNewCategory}
            >
                <Container tw="w-[1000px]">
                    <CategoryForm onClose={handleCloseAddNewCategory} />
                </Container>
            </ModalCustom>
        </>
    );
};
