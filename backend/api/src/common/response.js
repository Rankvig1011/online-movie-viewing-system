class ResponseClass {
    success(res, status, data, pagination) {
        return res.status(status).json({
            message: 'Success!',
            statusCode: status,
            success: true,
            results: data,
            pagination: pagination,
        });
    }

    ok(res, data, pagination) {
        return this.success(res, 200, data, pagination);
    }
    created(res, data) {
        return this.success(res, 201, data);
    }
    failed(res, error, status) {
        return res.status(status || error?.status || 500).json({
            message: error.message,
            statusCode: status || error.status,
            success: false,
        });
    }
    done(res) {
        return res.status(200).end();
    }
}
export const ResponseApp = new ResponseClass();
