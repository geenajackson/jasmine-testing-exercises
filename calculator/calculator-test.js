
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 1000, years: 2, rate: 0.03, })).toEqual("42.98");
});


// it("should return a result with 2 decimal places", function () {
//   // ..
// });

/// etc
