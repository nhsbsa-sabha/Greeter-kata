class Greeter {
 
 greet(name) {
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error("Name cannot be empty and should be a string");
    }
    const trimmedName = name.trim();
    const capitalizedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
    return `Hello, ${capitalizedName}!`;
  }
}
module.exports = Greeter;
