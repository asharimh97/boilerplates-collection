// create numeraljs locale config for indonesian currency
const locale = {
  delimiters: {
    thousands: ".",
    decimal: ",",
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t",
  },
  ordinal: function (number: number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "Rp",
  },
};

export default locale;
