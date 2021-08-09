/**
 * Create an application with following roles:
 *  1. admin    : gets full access
 *  2. subadmin : gets access to create/delete courses
 *  3. testprep : gets access to create/delete tests
 *  4. user     : gets access to consume content
 */

var user = "visitor";
switch (user) {
    case "admin":
        console.log('gets full access');
        break;
    case "subadmin":
        console.log('gets access to create/delete courses');
        break;
    case "testprep":
        console.log('gets access to create/delete tests');
        break;
    case "user":
        console.log('gets access to consume content');
        break;
    default:
        console.log('trial user');
        break;
}