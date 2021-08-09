
/* Example 1: */

// var sellingPrice = 199;
// var listingPrice = 799;
// var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
// var displayDiscountPercentage = Math.round(discountPercent);
// console.log(`Listing Price : ${listingPrice}`);
// console.log(`Selling Price: ${sellingPrice}`);
// console.log(`Discount Percentage: ${discountPercent}%`);
// console.log(`Discount Percentage (Rounded) : ${displayDiscountPercentage}%`);

// ----------------------------------------------------- //

/* Example 2: */

/**
 * A user is only allowed to make a purchase when he is logged in.
 * Email Verified
 * CardInfo Verified
 * If Not, then stop purchase.
 */

// var isLoggedIn = true;
// var isEmailVerified = false;
// var cardInfo = true;
// if (isLoggedIn) {
//     console.log('LoggedIn Successfully.')
//     if (isEmailVerified) {
//         console.log('Email Verified.');
//         if (cardInfo) {
//             console.log('You can make a purchase.');
//         } else {
//             console.log('Your purchase is aborted.');
//         }
//     } else {
//         console.log('Your purchase is aborted.');
//     }
// } else {
//     console.log('Your purchase is aborted.');
// }

// Alternatively,

// if (isLoggedIn && isEmailVerified && cardInfo) {
//     console.log('You can make a purchase.');
// } else {
//     console.log('Your purchase is aborted.');
// }

// ----------------------------------------------------- //

/* Example 3:  */

/**
 * Allow A user to access courses if he is:
 *  - LoggedIn from Email
 *  - LoggedIn from Google
 *  - LoggedIn from Facebook
 */

var email = true;
var facebook = true;
var google = true;

if (email || facebook || google) {
    console.log('You can access courses.');
} else {
    console.log('You cant access courses.');
}


