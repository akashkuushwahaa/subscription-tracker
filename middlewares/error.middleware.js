const errorMiddleware = (err, req, res, next) => {
    try {
        let errors = { ...err };

        error.message = err.message;

        console.log(err);

        // Mongoose bad ObjectID
        if(err.name === 'CastError'){
            const message = 'Resource not found';
            error = new Error(message);
            error.statusCode = 404;
        }

        // Mpngoose duplicate Key
        if(err.code === 11000){
            const message = 'Duplicate field value entered';
            error new Error(message);
            error.statusCode = 400;
        }

        // Mongoose validate error
        if(err.name === 'ValidationError'){
            const message = Object.keys(err,errors).map(val => val.message);
            error = new Error(message.join(','));
            error.statusCode = 400;
        }

        res.status(err.statusCode || 500).json({ sucess: false, error: error.message || 'Server Error' });
    } catch (error){
        next(error);
    }
};

export default errorMiddleware;