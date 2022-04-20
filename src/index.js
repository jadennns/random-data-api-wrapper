const { default: axios } = require("axios");

const getApi = async (endpoint) => {
  const { data } = await axios.get(
    `https://random-data-api.com/api/${endpoint}`
  );
  return data;
};

/**
 *
 * @returns {Promise<import("../typings").Address>}
 */
async function getRandomAddress() {
  return await getApi("/address/random_address");
}

/**
 *
 * @returns {Promise<import("../typings").Appliance>}
 */
async function getRandomAppliance() {
  return await getApi(`/appliance/random_appliance`);
}

/**
 *
 * @returns {Promise<import("../typings").App>}
 */
async function getRandomApp() {
  return await getApi(`/app/random_app`);
}

/**
 *
 * @returns {Promise<import("../typings").Bank>}
 */
async function getRandomBank() {
  return await getApi(`/bank/random_bank`);
}

/**
 *
 * @returns {Promise<import("../typings").Beer>}
 */
async function getRandomBeer() {
  return await getApi(`/beer/random_beer`);
}

/**
 *
 * @returns {Promise<import("../typings").Blood>}
 */
async function getRandomBlood() {
  return await getApi(`/blood/random_blood`);
}

/**
 *
 * @returns {Promise<import("../typings").BusinessCard>}
 */
async function getRandomBusinessCreditCard() {
  return await getApi(`/business_credit_card/random_card`);
}

/**
 *
 * @returns {Promise<import("../typings").Cannabis>}
 */
async function getRandomCannabis() {
  return await getApi(`/cannabis/random_cannabis`);
}

/**
 *
 * @returns {Promise<import("../typings").Code>}
 */
async function getRandomCode() {
  return await getApi(`/code/random_code`);
}

/**
 *
 * @returns {Promise<import("../typings").Coffee>}
 */
async function getRandomCoffee() {
  return await getApi(`/coffee/random_coffee`);
}

/**
 *
 * @returns {Promise<import("../typings").Commerce>}
 */
async function getRandomCommerce() {
  return await getApi(`/commerce/random_commerce`);
}

/**
 *
 * @returns {Promise<import("../typings").Company>}
 */
async function getRandomCompany() {
  return await getApi(`/company/random_company`);
}

/**
 *
 * @returns {Promise<import("../typings").Computer>}
 */
async function getRandomComputer() {
  return await getApi(`/computer/random_computer`);
}

/**
 *
 * @returns {Promise<import("../typings").Crypto>}
 */
async function getRandomCrypto() {
  return await getApi(`/crypto/random_crypto`);
}

/**
 *
 * @returns {Promise<import("../typings").CryptoCoin>}
 */
async function getRandomCryptoCoin() {
  return await getApi(`/crypto_coin/random_crypto_coin`);
}

/**
 *
 * @returns {Promise<import("../typings").Color>}
 */
async function getRandomColor() {
  return await getApi(`/color/random_color`);
}

/**
 *
 * @returns {Promise<import("../typings").Dessert>}
 */
async function getRandomDessert() {
  return await getApi(`/dessert/random_dessert`);
}

/**
 *
 * @returns {Promise<import("../typings").Device>}
 */
async function getRandomDevice() {
  return await getApi(`/device/random_device`);
}

/**
 *
 * @returns {Promise<import("../typings").Food>}
 */
async function getRandomFood() {
  return await getApi(`/food/random_food`);
}

/**
 *
 * @returns {Promise<import("../typings").Name>}
 */
async function getRandomName() {
  return await getApi(`/name/random_name`);
}

/**
 *
 * @returns {Promise<import("../typings").HipsterStuff>}
 */
async function getRandomHipsterStuff() {
  return await getApi(`/hipster/random_hipster_stuff`);
}

/**
 *
 * @returns {Promise<import("../typings").Invoice>}
 */
async function getRandomInvoice() {
  return await getApi(`/invoice/random_invoice`);
}

/**
 *
 * @returns {Promise<import("../typings").>}
 */
async function getRandomUser() {
  return await getApi(`/users/random_user`);
}

/**
 *
 * @returns {Promise<import("../typings").Stripe>}
 */
async function getRandomStripe() {
  return await getApi(`/stripe/random_stripe`);
}

/**
 *
 * @returns {Promise<import("../typings").Subscription>}
 */
async function getRandomSubscription() {
  return await getApi(`/subscription/random_subscription`);
}

/**
 *
 * @returns {Promise<import("../typings").Vehicle>}
 */
async function getRandomVehicle() {
  return await getApi(`/vehicle/random_vehicle`);
}

/**
 *
 * @returns {Promise<import("../typings").IdNumber>}
 */
async function getRandomIdNumber() {
  return await getApi(`/id_number/random_id_number`);
}

/**
 *
 * @returns {Promise<import("../typings").InternetStuff>}
 */
async function getRandomInternetStuff() {
  return await getApi(`/internet_stuff/random_internet_stuff`);
}

/**
 *
 * @returns {Promise<import("../typings").LoremIpsum>}
 */
async function getRandomLoremIpsum() {
  return await getApi(`/lorem_ipsum/random_lorem_ipsum`);
}

/**
 *
 * @returns {Promise<import("../typings").LoremFlickr>}
 */
async function getRandomLoremFlickr() {
  return await getApi(`/lorem_flickr/random_lorem_flickr`);
}

/**
 *
 * @returns {Promise<import("../typings").LoremPixel>}
 */
async function getRandomLoremPixel() {
  return await getApi(`/lorem_pixel/random_lorem_pixel`);
}

/**
 *
 * @returns {Promise<import("../typings").Nation>}
 */
async function getRandomNation() {
  return await getApi(`/nation/random_nation`);
}

/**
 *
 * @returns {Promise<import("../typings").DataNumber>}
 */
async function getRandomNumber() {
  return await getApi(`/number/random_number`);
}

/**
 *
 * @returns {Promise<import("../typings").PhoneNumber>}
 */
async function getRandomPhoneNumber() {
  return await getApi(`/phone_number/random_phone_number`);
}

/**
 *
 * @returns {Promise<import("../typings").Placeholdit>}
 */
async function getRandomPlaceholdit() {
  return await getApi(`/placeholdit/random_placeholdit`);
}

/**
 *
 * @returns {Promise<import("../typings").Restaurant>}
 */
async function getRandomRestaurant() {
  return await getApi(`/restaurant/random_restaurant`);
}

module.exports = {
  getRandomAddress,
  getRandomAppliance,
  getRandomApp,
  getRandomBank,
  getRandomBeer,
  getRandomBlood,
  getRandomBusinessCreditCard,
  getRandomCannabis,
  getRandomCode,
  getRandomCoffee,
  getRandomCommerce,
  getRandomCompany,
  getRandomComputer,
  getRandomCrypto,
  getRandomCryptoCoin,
  getRandomColor,
  getRandomDessert,
  getRandomDevice,
  getRandomFood,
  getRandomName,
  getRandomHipsterStuff,
  getRandomInvoice,
  getRandomUser,
  getRandomStripe,
  getRandomSubscription,
  getRandomVehicle,
  getRandomIdNumber,
  getRandomInternetStuff,
  getRandomLoremIpsum,
  getRandomLoremFlickr,
  getRandomLoremPixel,
  getRandomNation,
  getRandomNumber,
  getRandomPhoneNumber,
  getRandomPlaceholdit,
  getRandomRestaurant,
};
