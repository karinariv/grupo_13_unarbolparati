const usersMiddleware = function (req, res, next) {
    if (req.session.usuarioLogueado) {
        res.redirect('/users/welcome');
    } else {
        next();
    }
}

module.exports= usersMiddleware;