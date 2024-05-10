var users = ["ali", "abid", "adil", "fahad", "admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin , would you like to use astatus report ?");
    }
    else {
        console.log("Hello ".concat(user, " , thank you for loging again."));
    }
}
