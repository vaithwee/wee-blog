module.exports = 
{
    checkLogin: function(req, res, next)
    {
        if (!req.session.user)
        {
            req.flash('error', 'not login');
            res.redirect('/login');
            return;
        }
        next();
    },

    checkNotLogin: function(req, res, next)
    {
        if (req.session.user)
        {
            req.flash('error', 'has login');
            res.redirect('back');
            return;
        }
        next();
    }
}