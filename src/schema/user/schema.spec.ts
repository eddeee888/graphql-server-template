describe("User tests", () => {
  it.each`
    text
    'a'
    'b'
  `(`should be truthy`, (text: string) => {
    expect(text).toBeTruthy();
  });

  test.each`
    text
    'a'
    'b'
  `(`should be truthy`, (text: string) => {
    expect(text).toBeTruthy();
  });
});
