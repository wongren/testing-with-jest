const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Skapar ett nytt test(gjorts under labb 5 med christopher, mesam och johans hjälp)
test('pop on stck with two or more elements that is being removed', () => {
    //sätter en konstant som vi ska ta bort
    const actual = "hej"
    //Lägger till konstanten
    stack.push(actual)
    //Kollar så att översta elementet är konstanten
    expect(stack.peek()).toBe(actual)
    //Kollar så att konstanten tas bort från stacken
    expect(stack.pop()).toBe(actual)
    //Kollar att det som retureneras inte är konstanten
    expect(stack.peek()).not.toBe(actual)
});