class Greeter {
 
 greet(name) {
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error("Name cannot be empty and should be a string");
    }
    const trimmedName = name.trim();
    return `Hello, ${trimmedName}!`;
  }
}
module.exports = Greeter;
