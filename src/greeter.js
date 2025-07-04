/**
 * Greeter class for generating time-based greetings.
 * @class
 */
class Greeter {
  /**
   * Creates a Greeter instance.
   * @param {function} [getHour] - Optional function to get the current hour (for testing/mocking).
   */
  constructor(getHour = null) {
    /**
     * Function to get the current hour.
     * @type {function}
     */
    this.getHour = getHour || (() => new Date().getHours());
  }

  /**
   * Generates a greeting based on the provided name and current time.
   * @param {string} name - The name to greet.
   * @returns {string} The greeting message.
   * @throws {Error} If name is empty or not a string.
   */
  greet(name) {
    if (typeof name !== "string" || !name.trim()) {
      throw new Error("Name cannot be empty and should be a string");
    }
    const trimmedName = name.trim();
    const capitalizedName =
      trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
    const hour = this.getHour();
    let greetingPrefix;
    if (hour >= 6 && hour < 12) {
      greetingPrefix = "Good morning";
    } else if (hour >= 18 && hour < 22) {
      greetingPrefix = "Good evening";
    } else if (hour >= 22 || hour < 6) {
      greetingPrefix = "Good night";
    } else {
      greetingPrefix = "Hello";
    }
    const finalGreeting = `${greetingPrefix}, ${capitalizedName}!`;
    console.log(finalGreeting);
    return finalGreeting;
  }
}
/**
 * Export the Express app for testing purposes.
 */
module.exports = Greeter;
