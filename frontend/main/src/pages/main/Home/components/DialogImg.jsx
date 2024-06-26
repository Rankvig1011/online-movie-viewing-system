import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
export default function ResponsiveDialog(props) {
    const { open, handleClose, setImg, isImgActor, handleSearchByImg } = props;
    const theme = useTheme();
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {'Tìm kiếm bằng hình ảnh nhân vật'}
                </DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Tải ảnh
                        <VisuallyHiddenInput
                            type="file"
                            accept="image/png, image/jpeg"
                            id="imgActor"
                            name="imgActor"
                            onChange={(e) => {
                                setImg(e.target.files[0]);
                            }}
                        />
                    </Button>
                </DialogContent>
                <DialogContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {isImgActor && isImgActor?.name}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSearchByImg}>
                        Tìm kiếm
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Hủy
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
