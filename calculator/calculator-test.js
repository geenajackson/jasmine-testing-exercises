
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 1000, years: 2, rate: 0.03, })).toEqual("42.98");
  expect(calculateMonthlyPayment({ amount: 10000, years: 2, rate: 0.02, })).toEqual("425.40");
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 4, rate: 0.03125, })).toEqual("221.90");
  expect(calculateMonthlyPayment({ amount: 15600, years: 2, rate: 0.0425, })).toEqual("679.17");
});
