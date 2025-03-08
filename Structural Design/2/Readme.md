## 2️⃣ Standardize Date Formats using an Adapter
    You receive dates in multiple formats (e.g., "2025-03-06", "06/03/2025", "March 6, 2025"). Your app expects dates in ISO format (YYYY-MM-DD).

### 👉 Task: Create an adapter to normalize dates.

```javascript
class DateFormatter {
  format(dateStr) {
    // Your implementation here (convert different formats to "YYYY-MM-DD")
  }
}

// Test cases
console.log(new DateFormatter().format("2025-03-06")); // Should return "2025-03-06"
console.log(new DateFormatter().format("06/03/2025")); // Should return "2025-03-06"
console.log(new DateFormatter().format("March 6, 2025")); // Should return "2025-03-06"
```