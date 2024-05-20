// regex for email
export const emailValidators = (value) => {
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
        return 'Địa chỉ email không hợp lệ';
    return false;
};
// regex for name
export const nameValidator = (value) => {
    if (value.length < 3) return 'Tên đăng nhập phải từ 3 ký tự trở lên';
    if (value.length > 20) return 'Tên đăng nhập phải từ 20 ký tự trở xuống';
    if (!/^[a-zA-Z ]+$/.test(value)) return 'Tên chỉ được chứa các chữ cái và dấu cách';
    return false;
};
