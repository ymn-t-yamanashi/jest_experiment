test('算術演算子', () => {

    expected = 5
    result = 2 + 3
    expect(result).toEqual(expected)

    expected = 1
    result = 3 - 2
    expect(result).toEqual(expected)

    expected = 6
    result = 3 * 2
    expect(result).toEqual(expected)

    expected = 1.5
    result = 3 / 2
    expect(result).toEqual(expected)

    expected = 1
    result = 3 % 2
    expect(result).toEqual(expected)

    expected = 9
    result = 3 ** 2
    expect(result).toEqual(expected)

    expected = "1234"
    result = "123" + 4
    expect(result).toEqual(expected)

    x = 1
    expected = 2
    result = ++x
    expect(result).toEqual(expected)

    x = 1
    expected = 1
    result = x++
    expect(result).toEqual(expected)

    x = 1
    expected = 0
    result = --x
    expect(result).toEqual(expected)

    x = 1
    expected = 1
    result = x--
    expect(result).toEqual(expected)

});
