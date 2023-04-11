describe("User tests", () => {
  it.each(["a", "b"])("should be truthy", (text) => {
    expect(text).toBeTruthy();
  });

  test.each(["a", "b"])("should be truthy", (text) => {
    expect(text).toBeTruthy();
  });
});
