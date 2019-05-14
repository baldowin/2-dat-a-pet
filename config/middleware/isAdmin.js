module.exports = function (req, res, next) {
  console.log("isAdmin hit")
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    db.User.findOne({
      where: {
        email: req.user.email
      }
    }).then(function (view) {
      console.log("isAdmin view");
      console.log(view);
      if (view.dataValues.isAdmin) {
        return next();
      } else {
        console.log("You are not authorized as Admin");
        return res.redirect("/");
      }
    });

  } else {
    console.log('should redirect to login from admin');
    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/login");

  }

};