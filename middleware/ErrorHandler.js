let ErrorHandler = function (err,req,res,next){
    console.log("went into the errorhandler")
    let errstatus = err.statusCode || 500;
    let message = err.message || "something went wrong";
    res.status(errstatus).json({
        success : false,
        status : errstatus,
        message : message
    })
    next();
}

module.exports = ErrorHandler;