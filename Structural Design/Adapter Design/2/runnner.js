class DateFormatter {
    format(dateStr) {
      const praseDate =  new Date(dateStr) 

      if(isNaN(praseDate))  {
        throw new Error("invalid date format")
      }

      return praseDate.toISOString().split("T")[0];
    }
  }
  
  // Test cases
  console.log(new DateFormatter().format("2025-03-06")); // Should return "2025-03-06"
  console.log(new DateFormatter().format("06/03/2025")); // Should return "2025-03-06"
  console.log(new DateFormatter().format("March 6, 2025")); // Should return "2025-03-06"