class Greeter {
    constructor(getHour = null){
    this.getHour = getHour || (() => new Date().getHours());
  }
 
 greet(name) {
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error("Name cannot be empty and should be a string");
    }
    const trimmedName = name.trim();
    const capitalizedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
     const hour = this.getHour();
    let greetingPrefix;
    if(hour >= 6 && hour < 12) {
      greetingPrefix = "Good morning";
    }
    else if(hour >= 18 && hour < 22) {
        greetingPrefix = "Good evening";
        }
    else if(hour >= 22 || hour < 6) {
        greetingPrefix = "Good night";
    }
    else {
        greetingPrefix = "Hello";
    }
    const finalGreeting = `${greetingPrefix}, ${capitalizedName}!`;
    console.log(finalGreeting);
    return finalGreeting;
  }
}

  
module.exports = Greeter;
